package br.com.diaristas.diaristas.web.controller;

import br.com.diaristas.diaristas.core.exceptions.EmailExistException;
import br.com.diaristas.diaristas.core.exceptions.PasswordNotConferException;
import br.com.diaristas.diaristas.core.exceptions.ValidationException;
import br.com.diaristas.diaristas.web.dtos.NewPasswordForm;
import br.com.diaristas.diaristas.web.dtos.UserEditForm;
import br.com.diaristas.diaristas.web.dtos.UserSignupForm;
import br.com.diaristas.diaristas.web.services.WebUserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.security.Principal;


@Controller
@RequestMapping("/admin/users")
public class UserController {

    @Autowired
    private WebUserService service;

    @GetMapping("/")
    public ModelAndView getAll(){
        ModelAndView modelAndView = new ModelAndView("admin/users/list");

        modelAndView.addObject("users", service.getAll());

        return modelAndView;
    }

    @GetMapping("/signup")
    public ModelAndView signup(){
        ModelAndView modelAndView = new ModelAndView("admin/users/signup-form");

        modelAndView.addObject("signupForm", new UserSignupForm());

        return modelAndView;
    }

    @PostMapping("/signup")
    public String signup(@Valid @ModelAttribute("signupForm") UserSignupForm form,
                         BindingResult result,
                         RedirectAttributes attributes){
        if(result.hasErrors()){
            attributes.addFlashAttribute("alert","Erro ao cadastradar !");
            return "/admin/users/signup-form";
        }

        try {
            service.signup(form);
            attributes.addFlashAttribute("alert","usuarios cadastrado com sucesso!");
        }catch (PasswordNotConferException | EmailExistException error){
            result.addError(error.getFieldError());

            return "/admin/users/signup-form";
        }

        return "redirect:/admin/users/";
    }

    @GetMapping("/{id}/edit")
    public ModelAndView edit(@PathVariable Long id){
        ModelAndView modelAndView = new ModelAndView("admin/users/edit-form");

        modelAndView.addObject("editForm", service.getUserById(id));

        return modelAndView;
    }

    @PostMapping("/{id}/edit")
    public String edit(@PathVariable Long id, @Valid @ModelAttribute("editForm") UserEditForm form, BindingResult result, RedirectAttributes attrs){
        if(result.hasErrors()){
            return "admin/users/edit-form";

        }

        try {
            service.edit(id, form);
            attrs.addFlashAttribute("alert", "Usuario editado com sucesso!");
        }catch (ValidationException error){
            result.addError(error.getFieldError());
            return "admin/users/edit-form";
        }

        return "redirect:/admin/users/";
    }

    @GetMapping("/{id}/delete")
    public String deleteUser(@PathVariable Long id, RedirectAttributes attrs){
        service.delete(id);

        attrs.addFlashAttribute("alert", "User deleted with success!");

        return "redirect:/admin/users/";
    }

    @GetMapping("/new-password")
    public ModelAndView newPassword(){
        ModelAndView modelAndView = new ModelAndView("admin/users/newPassword-form");

        modelAndView.addObject("newPassword", new NewPasswordForm());

        return modelAndView;
    }

    @PostMapping("/new-password")
    public String newPassword(@Valid @ModelAttribute("newPassword") NewPasswordForm form,
                              BindingResult result, RedirectAttributes atts, Principal principal){
        if (result.hasErrors()){
            return "admin/users/newPassword-form";
        }

        try {
            service.newPassword(form, principal.getName());

            var message = String.format("senha do Usuarios com email %s alterada com sucesso", principal.getName());
            atts.addFlashAttribute("alert", message);
        }catch (ValidationException e){
            result.addError(e.getFieldError());
            return "admin/users/newPassword-form";
        }

        return "redirect:/admin/users/";
    }
}

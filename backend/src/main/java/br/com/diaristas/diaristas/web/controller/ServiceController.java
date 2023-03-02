package br.com.diaristas.diaristas.web.controller;

import br.com.diaristas.diaristas.core.enums.Icon;
import br.com.diaristas.diaristas.web.dtos.ServiceForm;
import br.com.diaristas.diaristas.web.services.WebService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/admin/services")
public class ServiceController {

    @Autowired
    private WebService service;

    @GetMapping("/")
    public ModelAndView getAll(){
        ModelAndView modelAndView = new ModelAndView("admin/service/list");
        modelAndView.addObject("services", service.getAll());

        return modelAndView;
    }

    @GetMapping("/signup")
    public ModelAndView signup(){
        ModelAndView modelAndView = new ModelAndView("admin/service/form");
        modelAndView.addObject("form", new ServiceForm());

        return modelAndView;
    }

    @PostMapping("/signup")
    public String signup(@Valid @ModelAttribute("form") ServiceForm serviceForm, BindingResult result){
        if (result.hasErrors()){
            return "admin/service/form";
        }

        service.signup(serviceForm);

        return "redirect:/admin/services/";
    }

    @GetMapping("/{id}/edit")
    public ModelAndView edit(@PathVariable Long id){
        ModelAndView modelAndView = new ModelAndView("admin/service/form");

        modelAndView.addObject("form", service.getModel(id));

        return modelAndView;
    }

    @PostMapping("/{id}/edit")
    public String edit(@PathVariable Long id, @Valid @ModelAttribute("form") ServiceForm serviceForm, BindingResult result){
        if (result.hasErrors()){
            return "admin/service/form";
        }

        service.edit(serviceForm, id);
        return "redirect:/admin/services/";
    }

    @GetMapping("/{id}/delete")
    public String delete(@PathVariable Long id){
        service.delete(id);

        return "redirect:/admin/services/";
    }

    @ModelAttribute("icons")
    public Icon[] getIcons(){
        return Icon.values();
    }
}

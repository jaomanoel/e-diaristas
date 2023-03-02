package br.com.diaristas.diaristas.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/admin")
public class AuthController {


    @GetMapping("/login")
    public String login(){
        return "admin/auth/login";
    }
}

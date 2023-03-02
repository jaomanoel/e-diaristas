package br.com.diaristas.diaristas.api.controllers;

import br.com.diaristas.diaristas.api.dtos.responses.ApiServiceResponse;
import br.com.diaristas.diaristas.api.services.ApiServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceRestController {

    @Autowired
    private ApiServicesService service;

    @GetMapping
    public List<ApiServiceResponse> getAllServices(){
        return service.getAll();
    }
}

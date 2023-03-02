package br.com.diaristas.diaristas.api.controllers;

import br.com.diaristas.diaristas.api.dtos.responses.ApiDiaristaLocalityPagedResponse;
import br.com.diaristas.diaristas.api.dtos.responses.ApiDiasristaAvailabilityResponse;
import br.com.diaristas.diaristas.api.services.ApiDiaristaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/diaristas")
public class DiaristaRestController {

    @Autowired
    private ApiDiaristaService service;

    @GetMapping("/locality")
    public ApiDiaristaLocalityPagedResponse findDiaristaByCep(@RequestParam(required = false) String cep){
        return service.findDiaristaByCep(cep);
    }

    @GetMapping("/availability")
    public ApiDiasristaAvailabilityResponse existCep(@RequestParam(required = false) String cep){
        return service.availabilityVerificationByCep(cep);
    }

}

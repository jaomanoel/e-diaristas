package br.com.diaristas.diaristas.api.controllers;

import br.com.diaristas.diaristas.core.services.addressconsultation.adapters.ServiceAddress;
import br.com.diaristas.diaristas.core.services.addressconsultation.dtos.ResponseAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/address")
public class AddressRestController {

    @Autowired
    private ServiceAddress service;

    @GetMapping
    public ResponseAddress getAddressByCep(@RequestParam(required = false) String cep){
        return service.findByCep(cep);
    }
}

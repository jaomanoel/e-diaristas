package br.com.diaristas.diaristas.api.controllers;

import br.com.diaristas.diaristas.api.dtos.responses.ApiHateoasResponse;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/api")
public class HomeRestController {

    @GetMapping
    public ApiHateoasResponse home(){
        var getServicesLink = linkTo(methodOn(ServiceRestController.class).getAllServices())
                .withRel("listar_serviços")
                .withType("GET");

        var getAddressCepLink = linkTo(methodOn(AddressRestController.class).getAddressByCep(null))
                .withRel("buscar_endereço_por_cep")
                .expand()
                .withType("GET");

        var getDiaristaLocalityCep = linkTo(methodOn(DiaristaRestController.class).findDiaristaByCep(null))
                .withRel("buscar_diarista_por_cep")
                .expand()
                .withType("GET");

        var getDiaristaAvailability = linkTo(methodOn(DiaristaRestController.class).existCep(null))
                .withRel("verificar_diarista_por_cep")
                .expand()
                .withType("GET");

        var response = new ApiHateoasResponse();
        response.addLinks(
                getAddressCepLink,
                getDiaristaAvailability,
                getAddressCepLink,
                getDiaristaLocalityCep,
                getServicesLink
        );

        return response;
    }
}

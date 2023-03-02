package br.com.diaristas.diaristas.api.dtos.responses;

import lombok.Data;
import org.springframework.hateoas.Link;

import java.util.ArrayList;
import java.util.List;

@Data
public class ApiHateoasResponse {

    private List<ApiHateoasLinksResponse> links;

    public ApiHateoasResponse() {
        links = new ArrayList<>();
    }

    public void addLinks(Link... links){
        for (Link link : links){
            var linkResponse = new ApiHateoasLinksResponse();
            linkResponse.setUri(link.getHref());
            linkResponse.setType(link.getType());
            linkResponse.setRel(link.getRel().value());

            this.links.add(linkResponse);
        }
    }
}

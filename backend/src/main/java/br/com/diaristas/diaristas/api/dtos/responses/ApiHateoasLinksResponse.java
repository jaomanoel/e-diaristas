package br.com.diaristas.diaristas.api.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiHateoasLinksResponse {

    private String type;

    private String rel;

    private String uri;
}

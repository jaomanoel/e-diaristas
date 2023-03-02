package br.com.diaristas.diaristas.api.dtos.responses;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;

import java.util.List;

@Data
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ApiDiaristaLocalityPagedResponse {

    private List<ApiDiaristaLocalityResponse> diaristas;

    private Long diaristasAmount;

    public ApiDiaristaLocalityPagedResponse(List<ApiDiaristaLocalityResponse> diaristas,
                                            Integer pageLength, Long elementsTotal) {
        this.diaristas = diaristas;
        this.diaristasAmount = elementsTotal > pageLength ? elementsTotal - pageLength : 0;
    }
}


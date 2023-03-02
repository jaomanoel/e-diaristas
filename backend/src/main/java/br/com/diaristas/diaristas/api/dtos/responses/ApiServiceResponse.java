package br.com.diaristas.diaristas.api.dtos.responses;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ApiServiceResponse {

    private Long id;
    private String name;
    private BigDecimal minValue;
    private Integer qttHours;
    private BigDecimal commissionPercentage;
    private Integer roomHours;
    private BigDecimal roomValue;
    private Integer backyardHours;
    private BigDecimal backyardValue;
    private Integer kitchenHours;
    private BigDecimal kitchenValue;
    private Integer bathroomHours;
    private BigDecimal bathroomValue;
    private Integer livingRoomHours;
    private BigDecimal livingRoomValue;
    private Integer otherHours;
    private BigDecimal otherValue;
    private String icon;
    private Integer position;
}

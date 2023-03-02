package br.com.diaristas.diaristas.web.dtos;

import br.com.diaristas.diaristas.core.enums.Icon;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.NumberFormat;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ServiceForm {

    @NotNull
    @Size(min = 3, max = 50)
    private String name;
    @NotNull
    @PositiveOrZero
    @NumberFormat(style = NumberFormat.Style.CURRENCY, pattern = "#,##0.00")
    private BigDecimal minValue;

    @NotNull
    @PositiveOrZero
    private Integer qttHours;

    @NotNull
    @PositiveOrZero
    @Max(100)
    @NumberFormat(style = NumberFormat.Style.PERCENT, pattern = "##0.00%")
    private BigDecimal commissionPercentage;

    @NotNull
    @PositiveOrZero
    private Integer roomHours;
    @NotNull
    @PositiveOrZero
    @NumberFormat(style = NumberFormat.Style.CURRENCY, pattern = "#,##0.00")
    private BigDecimal roomValue;

    @NotNull
    @PositiveOrZero
    private Integer backyardHours;
    @NotNull
    @PositiveOrZero
    @NumberFormat(style = NumberFormat.Style.CURRENCY, pattern = "#,##0.00")
    private BigDecimal backyardValue;

    @NotNull
    @PositiveOrZero
    private Integer kitchenHours;
    @NotNull
    @PositiveOrZero
    @NumberFormat(style = NumberFormat.Style.CURRENCY, pattern = "#,##0.00")
    private BigDecimal kitchenValue;

    @NotNull
    @PositiveOrZero
    private Integer bathroomHours;

    @NotNull
    @PositiveOrZero
    @NumberFormat(style = NumberFormat.Style.CURRENCY, pattern = "#,##0.00")
    private BigDecimal bathroomValue;

    @NotNull
    @PositiveOrZero
    private Integer livingRoomHours;
    @NotNull
    @PositiveOrZero
    @NumberFormat(style = NumberFormat.Style.CURRENCY, pattern = "#,##0.00")
    private BigDecimal livingRoomValue;

    @NotNull
    @PositiveOrZero
    private Integer otherHours;
    @NotNull
    @PositiveOrZero
    @NumberFormat(style = NumberFormat.Style.CURRENCY, pattern = "#,##0.00")
    private BigDecimal otherValue;

    @NotNull
    private Icon icon;

    @NotNull
    @Positive
    private Integer position;
}

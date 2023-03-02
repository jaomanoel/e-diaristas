package br.com.diaristas.diaristas.core.models;

import br.com.diaristas.diaristas.core.enums.Icon;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = false)
public class ServiceModel {

    @Id
    @EqualsAndHashCode.Include
    @ToString.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, name = "min_value")
    private BigDecimal minValue;

    @Column(nullable = false, name = "qtt_hours")
    private Integer qttHours;

    @Column(nullable = false, name = "commission_percentage")
    private BigDecimal commissionPercentage;

    @Column(nullable = false, name = "room_hours")
    private Integer roomHours;
    @Column(nullable = false, name = "room_value")
    private BigDecimal roomValue;

    @Column(nullable = false, name = "backyard_hours")
    private Integer backyardHours;
    @Column(nullable = false, name = "backyard_value")
    private BigDecimal backyardValue;

    @Column(nullable = false, name = "kitchen_hours")
    private Integer kitchenHours;
    @Column(nullable = false, name = "kitchen_value")
    private BigDecimal kitchenValue;

    @Column(nullable = false, name = "bathroom_hours")
    private Integer bathroomHours;

    @Column(nullable = false, name = "bathroom_value")
    private BigDecimal bathroomValue;

    @Column(nullable = false, name = "livingroom_hours")
    private Integer livingRoomHours;
    @Column(nullable = false, name = "livingroom_value")
    private BigDecimal livingRoomValue;

    @Column(nullable = false, name = "other_hours")
    private Integer otherHours;
    @Column(nullable = false, name = "other_value")
    private BigDecimal otherValue;

    @Column(nullable = false, length = 14)
    @Enumerated(EnumType.STRING)
    private Icon icon;

    @Column(nullable = false)
    private Integer position;
}

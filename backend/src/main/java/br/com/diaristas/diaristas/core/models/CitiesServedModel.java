package br.com.diaristas.diaristas.core.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = true)
@Table(name = "cities_served")
public class CitiesServedModel {

    @Id
    @EqualsAndHashCode.Include
    @ToString.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ibge_code", nullable = false)
    private String ibgeCode;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String state;

    @ManyToMany(mappedBy = "citiesServed")
    private List<UserModel> users;
}


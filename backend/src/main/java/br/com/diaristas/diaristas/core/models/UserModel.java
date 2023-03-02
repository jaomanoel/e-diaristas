package br.com.diaristas.diaristas.core.models;

import br.com.diaristas.diaristas.core.enums.UserType;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = false)
public class UserModel {

    @Id
    @EqualsAndHashCode.Include
    @ToString.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, length = 8)
    private UserType type;

    @Column(nullable = false)
    private String cpf;

    @Column(nullable = false)
    private LocalDate birth;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = true)
    private Double reputation;

    @Column(name = "key_pix", nullable = true, unique = true)
    private String keyPix;

    @OneToOne(fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "user_photo", nullable = true)
    private PhotoModel userPhoto;

    @OneToOne(fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "document_photo", nullable = true)
    private PhotoModel documentPhoto;

    @ManyToMany
    @JoinTable(
            name = "cities_served_users",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "city_served_id")
    )
    private List<CitiesServedModel> citiesServed;
}

package br.com.diaristas.diaristas.core.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = false)
public class PhotoModel {

    @Id
    @EqualsAndHashCode.Include
    @ToString.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String filename;

    @Column(nullable = false)
    private Long contentLength;

    @Column(nullable = false)
    private String contentType;

    @Column(nullable = false)
    private String url;
}

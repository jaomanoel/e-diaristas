package br.com.diaristas.diaristas.core.repository;

import br.com.diaristas.diaristas.core.models.ServiceModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<ServiceModel, Long> {
}

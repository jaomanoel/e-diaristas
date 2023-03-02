package br.com.diaristas.diaristas.core.repository;

import br.com.diaristas.diaristas.core.models.UserModel;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findByEmail(String email);

    Page<UserModel> findByCitiesServedIbgeCode(String IbgeCode, Pageable pageable);

    Boolean existsByCitiesServedIbgeCode(String ibgeCode);

    @Query("SELECT count(*) > 0 FROM UserModel u WHERE u.email = :email and (:id is null or u.id != :id)")
    Boolean isEmailSignup(String email, Long id);
}

package br.com.diaristas.diaristas.web.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserEditForm {

    @NotNull
    @Size(min = 3, max = 255)
    private String name;

    @NotNull
    @Email
    @Size(min = 3, max = 255)
    private String email;
}

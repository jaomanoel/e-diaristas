package br.com.diaristas.diaristas.web.dtos;

import br.com.diaristas.diaristas.core.enums.UserType;
import br.com.diaristas.diaristas.web.interfaces.IPasswordConfirm;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSignupForm implements IPasswordConfirm {

    @NotNull
    @Size(min = 3, max = 255)
    private String name;

    @NotNull
    @Size(min = 3, max = 255)
    @Email
    private String email;

    @NotNull
    @NotEmpty
    private String password;

    @NotNull
    @NotEmpty
    private String confirmPassword;
}

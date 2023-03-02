package br.com.diaristas.diaristas.web.dtos;

import br.com.diaristas.diaristas.web.interfaces.IPasswordConfirm;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewPasswordForm implements IPasswordConfirm {

    @NotNull
    @NotEmpty
    private String oldPassword;

    @NotNull
    @NotEmpty
    private String password;

    @NotNull
    @NotEmpty
    private String confirmPassword;
}

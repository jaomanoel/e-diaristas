package br.com.diaristas.diaristas.web.mappers;

import br.com.diaristas.diaristas.core.models.UserModel;
import br.com.diaristas.diaristas.web.dtos.NewPasswordForm;
import br.com.diaristas.diaristas.web.dtos.UserEditForm;
import br.com.diaristas.diaristas.web.dtos.UserSignupForm;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface WebUserMapper {

    WebUserMapper INSTANCE = Mappers.getMapper(WebUserMapper.class);

    UserModel toModel(UserSignupForm form);
    UserModel toModel(UserEditForm form);
    UserModel toModel(NewPasswordForm form);
    UserEditForm toForm(UserModel model);
}

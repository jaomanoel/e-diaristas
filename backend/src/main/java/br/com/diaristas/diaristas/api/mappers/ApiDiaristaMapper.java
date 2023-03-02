package br.com.diaristas.diaristas.api.mappers;

import br.com.diaristas.diaristas.api.dtos.responses.ApiDiaristaLocalityResponse;
import br.com.diaristas.diaristas.core.models.UserModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ApiDiaristaMapper {

    ApiDiaristaLocalityResponse INSTANCE = Mappers.getMapper(ApiDiaristaLocalityResponse.class);

    @Mapping(target = "userPhoto", source = "userPhoto.url")
    ApiDiaristaLocalityResponse toDiaristaDto(UserModel model);

}
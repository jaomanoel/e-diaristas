package br.com.diaristas.diaristas.api.mappers;

import br.com.diaristas.diaristas.api.dtos.responses.ApiServiceResponse;
import br.com.diaristas.diaristas.core.models.ServiceModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ApiServiceMapper {

    ApiServiceMapper INSTANCE = Mappers.getMapper(ApiServiceMapper.class);

    @Mapping(target = "icon", source = "icon.name")
    ApiServiceResponse toResponse(ServiceModel model);
}

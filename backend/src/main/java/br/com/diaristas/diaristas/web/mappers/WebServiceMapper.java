package br.com.diaristas.diaristas.web.mappers;

import br.com.diaristas.diaristas.core.models.ServiceModel;
import br.com.diaristas.diaristas.web.dtos.ServiceForm;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
public interface WebServiceMapper {

    WebServiceMapper INSTANCE = Mappers.getMapper(WebServiceMapper.class);

    ServiceModel toModel(ServiceForm serviceForm);

     ServiceForm toForm(ServiceModel serviceModel);
}

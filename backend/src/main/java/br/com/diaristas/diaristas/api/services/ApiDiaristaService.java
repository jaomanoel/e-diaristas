package br.com.diaristas.diaristas.api.services;

import br.com.diaristas.diaristas.api.dtos.responses.ApiDiaristaLocalityPagedResponse;
import br.com.diaristas.diaristas.api.dtos.responses.ApiDiasristaAvailabilityResponse;
import br.com.diaristas.diaristas.api.mappers.ApiDiaristaMapper;
import br.com.diaristas.diaristas.core.models.UserModel;
import br.com.diaristas.diaristas.core.repository.UserRepository;
import br.com.diaristas.diaristas.core.services.addressconsultation.adapters.ServiceAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ApiDiaristaService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private ApiDiaristaMapper mapper;

    @Autowired
    private ServiceAddress serviceAddress;

    public ApiDiaristaLocalityPagedResponse findDiaristaByCep(String cep){
        var ibgeCode = getIbgeCode(cep);

        var userSort = Sort.sort(UserModel.class);
        var sort = userSort.by(UserModel::getReputation).descending();

        var pageable = PageRequest.of(0, 6, sort); // 0 = Number of Page && 6 = page size

        var result = repository.findByCitiesServedIbgeCode(ibgeCode, pageable);
        System.out.println(result);
        var diaristas = result.getContent()
                .stream()
                .map(mapper::toDiaristaDto).toList();

        return new ApiDiaristaLocalityPagedResponse(diaristas, 6, result.getTotalElements());
    }

    public ApiDiasristaAvailabilityResponse availabilityVerificationByCep(String cep){
        var ibgeCode = getIbgeCode(cep);

        var availability = repository.existsByCitiesServedIbgeCode(ibgeCode);

        return new ApiDiasristaAvailabilityResponse(availability);
    }

    private String getIbgeCode(String cep){
        return serviceAddress.findByCep(cep).getIbge();
    }
}

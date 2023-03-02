package br.com.diaristas.diaristas.api.services;

import br.com.diaristas.diaristas.api.dtos.responses.ApiServiceResponse;
import br.com.diaristas.diaristas.api.mappers.ApiServiceMapper;
import br.com.diaristas.diaristas.core.models.ServiceModel;
import br.com.diaristas.diaristas.core.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApiServicesService {

    @Autowired
    ServiceRepository repository;

    @Autowired
    ApiServiceMapper mapper;

    public List<ApiServiceResponse> getAll(){
        var serviceSort = Sort.sort(ServiceModel.class);
        var order = serviceSort.by(ServiceModel::getPosition).ascending();

        return  repository.findAll(order)
                .stream()
                .map(mapper::toResponse)
                .toList();
    }
}

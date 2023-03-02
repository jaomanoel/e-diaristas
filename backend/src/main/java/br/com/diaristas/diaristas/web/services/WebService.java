package br.com.diaristas.diaristas.web.services;

import br.com.diaristas.diaristas.core.models.ServiceModel;
import br.com.diaristas.diaristas.core.repository.ServiceRepository;
import br.com.diaristas.diaristas.web.dtos.ServiceForm;
import br.com.diaristas.diaristas.web.mappers.WebServiceMapper;
import br.com.diaristas.diaristas.core.exceptions.ServiceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebService {

    @Autowired
    private ServiceRepository repository;

    @Autowired
    private WebServiceMapper mapper;

    public List<ServiceModel> getAll(){
        return repository.findAll();
    }

    public ServiceModel signup(ServiceForm form){
        var model = mapper.toModel(form);

        return repository.save(model);
    }

    public  ServiceModel getModel(Long id){
        var model = repository.findById(id);

        if (!model.isPresent()){ throw new ServiceNotFoundException("Servico nao encontrado"); }

        return model.get();
    }

    public ServiceModel edit(ServiceForm form, Long id){
        var service = getModel(id);

        var model = mapper.toModel(form);

        model.setId(service.getId());

        return repository.save(model);
    }

    public void delete(Long id){
        var model = getModel(id);

        repository.delete(model);
    }
}

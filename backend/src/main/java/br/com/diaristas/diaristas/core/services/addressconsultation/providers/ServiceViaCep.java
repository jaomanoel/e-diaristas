package br.com.diaristas.diaristas.core.services.addressconsultation.providers;

import br.com.diaristas.diaristas.core.services.addressconsultation.adapters.ServiceAddress;
import br.com.diaristas.diaristas.core.services.addressconsultation.dtos.ResponseAddress;
import br.com.diaristas.diaristas.core.services.addressconsultation.exceptions.ServiceAddressException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class ServiceViaCep implements ServiceAddress {

    private static final String URL_TEMPLATE = "https://viacep.com.br/ws/{cep}/json/";
    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public ResponseAddress findByCep(String cep) throws ServiceAddressException {
        var url = UriComponentsBuilder.fromUriString(URL_TEMPLATE).buildAndExpand(cep).toString();

        ResponseEntity<ResponseAddress> response;

        try {
            response = restTemplate.getForEntity(url, ResponseAddress.class);

        }catch (HttpClientErrorException.BadRequest e){
            throw new ServiceAddressException("O CEP informado e invalido!");
        }

        if(response.getBody().getCep() == null) { throw new ServiceAddressException("CEP nao encontrado!"); }

        return response.getBody();
    }
}

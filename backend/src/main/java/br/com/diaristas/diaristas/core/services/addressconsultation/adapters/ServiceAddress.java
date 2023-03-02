package br.com.diaristas.diaristas.core.services.addressconsultation.adapters;

import br.com.diaristas.diaristas.core.services.addressconsultation.dtos.ResponseAddress;
import br.com.diaristas.diaristas.core.services.addressconsultation.exceptions.ServiceAddressException;

public interface ServiceAddress {

    ResponseAddress findByCep(String cep) throws ServiceAddressException;
}

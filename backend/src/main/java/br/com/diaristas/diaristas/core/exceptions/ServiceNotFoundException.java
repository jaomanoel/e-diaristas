package br.com.diaristas.diaristas.core.exceptions;

import jakarta.persistence.EntityNotFoundException;

public class ServiceNotFoundException extends EntityNotFoundException {

    public ServiceNotFoundException(String message){
        super(message);
    }
}

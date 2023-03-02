package br.com.diaristas.diaristas.core.exceptions;

import jakarta.persistence.EntityNotFoundException;

public class UserNotFoundException extends EntityNotFoundException {
    public UserNotFoundException(String msg) {
        super(msg);
    }
}

package br.com.diaristas.diaristas.core.exceptions;

import org.springframework.validation.FieldError;

public class InvalidPassword extends ValidationException{

    public InvalidPassword(String message, FieldError fieldError) {
        super(message, fieldError);
    }
}

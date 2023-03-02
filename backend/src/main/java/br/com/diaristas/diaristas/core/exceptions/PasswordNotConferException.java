package br.com.diaristas.diaristas.core.exceptions;

import org.springframework.validation.FieldError;

public class PasswordNotConferException extends ValidationException{

    public PasswordNotConferException(String message, FieldError fieldError) {
        super(message, fieldError);
    }
}

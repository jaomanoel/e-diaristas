package br.com.diaristas.diaristas.core.exceptions;

import jakarta.persistence.EntityExistsException;
import org.springframework.validation.FieldError;

public class EmailExistException extends ValidationException {

    public EmailExistException(String message, FieldError fieldError) {
        super(message, fieldError);
    }
}

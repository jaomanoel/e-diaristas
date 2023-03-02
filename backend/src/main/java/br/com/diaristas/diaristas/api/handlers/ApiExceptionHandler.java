package br.com.diaristas.diaristas.api.handlers;

import br.com.diaristas.diaristas.api.dtos.responses.ErrorResponse;
import br.com.diaristas.diaristas.core.services.addressconsultation.exceptions.ServiceAddressException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@RestControllerAdvice(annotations = RestController.class)
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(ServiceAddressException.class)
    public ResponseEntity<Object> handleServiceAddressException(ServiceAddressException exception,
                                                                HttpServletRequest request){
        var errorResponse = ErrorResponse.builder()
                .status(400)
                .timestamp(LocalDateTime.now())
                .message(exception.getMessage())
                .path(request.getRequestURI())
                .build();

        return ResponseEntity.badRequest().body(errorResponse);
    }
}

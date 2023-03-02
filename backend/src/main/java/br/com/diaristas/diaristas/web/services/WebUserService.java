package br.com.diaristas.diaristas.web.services;

import br.com.diaristas.diaristas.core.enums.UserType;
import br.com.diaristas.diaristas.core.exceptions.EmailExistException;
import br.com.diaristas.diaristas.core.exceptions.InvalidPassword;
import br.com.diaristas.diaristas.core.exceptions.PasswordNotConferException;
import br.com.diaristas.diaristas.core.exceptions.UserNotFoundException;
import br.com.diaristas.diaristas.core.models.UserModel;
import br.com.diaristas.diaristas.core.repository.UserRepository;
import br.com.diaristas.diaristas.web.dtos.NewPasswordForm;
import br.com.diaristas.diaristas.web.dtos.UserEditForm;
import br.com.diaristas.diaristas.web.dtos.UserSignupForm;
import br.com.diaristas.diaristas.web.interfaces.IPasswordConfirm;
import br.com.diaristas.diaristas.web.mappers.WebUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.FieldError;

import java.util.List;

@Service
public class WebUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WebUserMapper mapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserModel> getAll(){
        return userRepository.findAll();
    }

    public UserModel getUserById(Long id){
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not Found!"));
    }

    public UserModel getUserByEmail(String email){
        return userRepository.findByEmail(email).orElseThrow(() -> new UserNotFoundException("User not Found!"));
    }

    public void signup(UserSignupForm form){
        var model = mapper.toModel(form);

        validEmail(model);

        validPassConfirm(form);

        var pass = passwordEncoder.encode(model.getPassword());

        model.setPassword(pass);
        model.setType(UserType.ADMIN);

        userRepository.save(model);
    }

    public void edit(Long id, UserEditForm form){
        var user = getUserById(id);
        var userEdited = mapper.toModel(form);

        user.setName(userEdited.getName());
        user.setEmail(userEdited.getEmail());

        validEmail(user);

        userRepository.save(user);
    }

    public void delete(Long id){
        var user = getUserById(id);

        userRepository.delete(user);
    }

    public void newPassword(NewPasswordForm form, String email){
        var user = getUserByEmail(email);

        if (!passwordEncoder.matches(form.getOldPassword(), user.getPassword())){
            throw new InvalidPassword("Invalid Password!",
                    new FieldError(form.getClass().getName(),
                            "oldPassword", form.getOldPassword(),
                            false,
                            null,
                            null,
                            "Invalid Password!"));
        }

        validPassConfirm(form);

        user.setPassword(passwordEncoder.encode(form.getPassword()));

        userRepository.save(user);
    }

    private void validPassConfirm(IPasswordConfirm obj){
        if (!obj.getPassword().equals(obj.getConfirmPassword())) {
            throw new PasswordNotConferException("Password do not confer!", new FieldError(obj.getClass().getName(),
                    "confirmPassword",
                    obj.getConfirmPassword(), false, null, null, "Password do not confer!"
            ));
        }
    }

    private void validEmail(UserModel user){
        if (userRepository.isEmailSignup(user.getEmail(), user.getId())){
            throw new EmailExistException("Invalid email!", new FieldError(user.getClass().getName(),
                    "email", user.getEmail(), false, null, null, "Invalid email!"
            ));
        }
    }
}

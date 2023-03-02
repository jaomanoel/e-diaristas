package br.com.diaristas.diaristas.auth.services;

import br.com.diaristas.diaristas.auth.models.AuthenticatedUser;
import br.com.diaristas.diaristas.core.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticatedService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return  userRepository.findByEmail(email)
                .map(AuthenticatedUser::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
    }
}

package br.com.diaristas.diaristas.config;

import br.com.diaristas.diaristas.core.enums.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig{

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
        auth.userDetailsService(userDetailsService)
            .passwordEncoder(passwordEncoder);
    }

    @Value("${br.com.diaristas.rememberMe.key}")
    private String rememberMeKey;
    @Value("${br.com.diaristas.rememberMe.validitySeconds}")
    private int rememberMeValiditySeconds;

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(requests -> requests
                .requestMatchers(HttpMethod.GET, "/admin/**").hasAuthority(UserType.ADMIN.toString())
                .requestMatchers(HttpMethod.POST, "/admin/**").hasAuthority(UserType.ADMIN.toString())
                .requestMatchers(HttpMethod.GET, "/ajax.googleapis.com/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/cdn.jsdelivr.net/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/webjars/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/img/**").permitAll()
                .anyRequest().permitAll());

        http.formLogin()
            .loginPage("/admin/login")
            .usernameParameter("email")
            .defaultSuccessUrl("/admin/users/")
            .permitAll();

        http.logout()
            .logoutRequestMatcher(new AntPathRequestMatcher("/admin/logout", "GET"))
            .logoutSuccessUrl("/admin/login");

        http.rememberMe()
            .tokenValiditySeconds(rememberMeValiditySeconds)
            .key(rememberMeKey);

        http.cors();

        return http.build();
    }
}

package com.abhishek.parking.server.config;

import com.abhishek.parking.server.service.auth.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService(){
//        UserDetails admin = User.withUsername("admin").password("{noop}admin").roles("ADMIN").build();
//        UserDetails user = User.withUsername("user").password("{noop}user").roles("USER").build();
//
//        return new InMemoryUserDetailsManager(admin, user);

        return  new CustomUserDetailsService();
    }



    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().disable()  // Disable CSRF protection
                .authorizeHttpRequests()
                .requestMatchers("/api/auth/register").permitAll()  // Allow access to /all/lists without authentication
                .anyRequest().authenticated()  // All other requests must be authenticated
                .and()
                .httpBasic()  // Enable form login for authentication
                .and().build();  // Return the SecurityFilterChain object
    }

//@Bean
//public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//    return http
//            .authorizeHttpRequests(authorize -> authorize
////                    .requestMatchers("/api/auth/admin").hasRole("ADMIN")
//                    .requestMatchers("/api/auth/user").hasRole("USER")
//                    .anyRequest().authenticated()
//            )
//            .httpBasic()  // Form login configuration
//            .and().build();
//}

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

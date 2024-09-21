package com.abhishek.parking.server.service.auth;


import com.abhishek.parking.server.dto.UserDetailDTO;
import com.abhishek.parking.server.entity.User;
import com.abhishek.parking.server.repository.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       Optional<User> user = userRepository.findByUsername(username);
        return user.map(UserDetailDTO::new).orElseThrow(()->new UsernameNotFoundException("user not found" + username));
    }
}

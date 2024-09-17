package com.abhishek.parking.server.service.auth;

import com.abhishek.parking.server.dto.UserDTO;
import com.abhishek.parking.server.entity.User;
import com.abhishek.parking.server.repository.auth.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;



    public User registerUser(UserDTO userDTO) {
        User user = new User(userDTO.getName(), userDTO.getUsername(), userDTO.getEmail(), userDTO.getPassword(), userDTO.getRoles());
        return registerRepository.save(user);
    }

    public List<User> findAll() {
        return (List<User>) registerRepository.findAll();
    }
}

package com.abhishek.parking.server.service;


import com.abhishek.parking.server.dto.UserDTO;
import com.abhishek.parking.server.entity.UserEntity;
import com.abhishek.parking.server.mapper.UserMapper;
import com.abhishek.parking.server.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper = UserMapper.INSTANCE;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO authenticateUser(String username, String password) {
        UserEntity user = userRepository.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return userMapper.userToUserDTO(user);
        }
        return null; // Authentication failed
    }

    public void registerUser(UserDTO userDTO, String password) {
        UserEntity user = userMapper.userDTOToUser(userDTO);
        user.setPassword(passwordEncoder.encode(password));
        user.setEnabled(true); // Default to enabled
        userRepository.save(user);
    }
}

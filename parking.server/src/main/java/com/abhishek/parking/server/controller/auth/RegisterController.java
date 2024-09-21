package com.abhishek.parking.server.controller.auth;

import com.abhishek.parking.server.dto.UserDTO;
import com.abhishek.parking.server.entity.User;
import com.abhishek.parking.server.response.Response;
import com.abhishek.parking.server.service.auth.RegisterService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class RegisterController {
    @Autowired
    private RegisterService registerService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    private static final Logger logger = LoggerFactory.getLogger(RegisterController.class);

    @PostMapping("/register")
    public ResponseEntity<Response> registerUser(@RequestParam String name,
                                                 @RequestParam String username,
                                                 @RequestParam String email,
                                                 @RequestParam String password,
                                                 @RequestParam String roles
    ){
        UserDTO userDTO = new UserDTO(name, username, email, password, roles);
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        Response response = new Response("User registered successfully", "200");
        User newUser = registerService.registerUser(userDTO);
        System.out.println(newUser);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = registerService.findAll();
        logger.debug("Users: {}", users);
        return ResponseEntity.ok(users);
    }

    @GetMapping("/user")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<List<User>> getAllUser1() {
        List<User> users = registerService.findAll();
        return ResponseEntity.ok(users);
    }
}

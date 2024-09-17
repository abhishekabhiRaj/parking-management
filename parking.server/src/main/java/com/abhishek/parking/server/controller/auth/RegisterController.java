package com.abhishek.parking.server.controller.auth;

import com.abhishek.parking.server.dto.UserDTO;
import com.abhishek.parking.server.entity.User;
import com.abhishek.parking.server.response.Response;
import com.abhishek.parking.server.service.auth.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class RegisterController {
    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<Response> registerUser(@RequestParam String name,
                                                 @RequestParam String username,
                                                 @RequestParam String email,
                                                 @RequestParam String password,
                                                 @RequestParam String roles
    ){
        UserDTO userDTO = new UserDTO(name, username, email, password, roles);
        Response response = new Response("User registered successfully", "200");
        User newUser = registerService.registerUser(userDTO);
        System.out.println(newUser);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = registerService.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/all_1")
    public ResponseEntity<List<User>> getAllUser1() {
        List<User> users = registerService.findAll();
        return ResponseEntity.ok(users);
    }
}

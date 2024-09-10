package com.abhishek.parking.server;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/test")
public class Controller {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/add")
    public @ResponseBody User addNewUser(@RequestParam String name , @RequestParam String email){
        User springUser = new User();
        springUser.setName(name);
        springUser.setEmail(email);
        userRepository.save(springUser);
        return springUser;
    }

    @GetMapping("/all")
    public @ResponseBody Iterable<User> getAllUser(){
        return userRepository.findAll();
    }
}

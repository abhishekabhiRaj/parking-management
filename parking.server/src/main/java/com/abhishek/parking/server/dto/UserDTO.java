package com.abhishek.parking.server.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserDTO {
    private String name;
    private String username;
    private String email;
    private String password;
    private String roles;

    public UserDTO(String name, String username, String email, String password, String roles) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }

}

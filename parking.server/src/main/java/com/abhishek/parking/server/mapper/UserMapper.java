package com.abhishek.parking.server.mapper;


import com.abhishek.parking.server.dto.UserDTO;
import com.abhishek.parking.server.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDTO userToUserDTO(UserEntity user);

    UserEntity userDTOToUser(UserDTO userDTO);
}

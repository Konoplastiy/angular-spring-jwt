package com.konoplastiy.jwt.backend.mappers;

import com.konoplastiy.jwt.backend.dtos.SignUpDto;
import com.konoplastiy.jwt.backend.dtos.UserDto;
import com.konoplastiy.jwt.backend.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}

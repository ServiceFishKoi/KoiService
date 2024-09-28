package com.example.profile_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.profile_api.model.User;
import com.example.profile_api.repository.UserRepository;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserById(int id);
    User updateUser(int id, User userDetails);
}


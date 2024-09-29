package com.example.profile_api.service;

import com.example.profile_api.controller.model.User;

import java.util.Optional;

public interface IUserService {
    Optional<User> getUserById(int id);
    User updateUser(int id, User userDetails);
    User registerUser( User userDetails);
    public void saveUser(User user);
    public User getUserByEmailAndPassword(String name, String password) ;
}


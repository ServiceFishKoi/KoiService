package com.example.profile_api.controller;

import com.example.profile_api.config.JwtGeneratorInterface;
import com.example.profile_api.controller.model.User;
import com.example.profile_api.service.IUserService;
import com.example.profile_api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Map;
import java.util.Optional;
@RestController
@RequestMapping("/api/users")
public class UserController {

    private JwtGeneratorInterface jwtGenerator;
    private IUserService userService;

    @Autowired
    public UserController(UserService userService, JwtGeneratorInterface jwtGenerator){
        this.userService=userService;
        this.jwtGenerator=jwtGenerator;
    }
    // Xem hồ sơ
    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUserProfile(@PathVariable int  id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Cập nhật hồ sơ
    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUserProfile(@PathVariable int id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) throws Exception {
        try {
            if(user.getEmail() == null || user.getPassword() == null) {
                throw new Exception("UserName or Password is Empty");
            }
            User userData = userService.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
            if(userData == null){
                throw new Exception("UserName or Password is Invalid");
            }
            Map<String,String> token = jwtGenerator.generateToken(user);
            return new ResponseEntity<>(token, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

}

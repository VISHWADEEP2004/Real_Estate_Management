package com.realestate.back_end.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.realestate.back_end.model.Register;
import com.realestate.back_end.service.RegisterService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("http://localhost:5173")
public class RegisterController {
    @Autowired
    private RegisterService registerService;

    @GetMapping("/all")
    public List<Register> Getusers() {
        return registerService.getUsers();
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Register register) {
        if(registerService.emailExists(register.getEmail())){
            return new ResponseEntity<>("Email already exists",HttpStatus.BAD_REQUEST);
        }
        registerService.saveUser(register);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/all/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        registerService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

package com.realestate.back_end.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.realestate.back_end.model.Register;
import com.realestate.back_end.repos.RegisterRepo;

@Service
public class RegisterService {
    @Autowired
    private RegisterRepo registerRepo;

    public List<Register> getUsers(){
        return registerRepo.findAll();
    }
    public Register saveUser(Register register) {
        return registerRepo.save(register);
    }
    public void deleteUser(Long id){
         registerRepo.deleteById(id);
    }
    public boolean emailExists(String email) {
        return registerRepo.findByEmail(email) != null;
    }
}

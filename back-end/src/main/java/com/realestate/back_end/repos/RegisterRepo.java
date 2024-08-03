package com.realestate.back_end.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.realestate.back_end.model.Register;

public interface RegisterRepo extends JpaRepository<Register,Long> {
    Register findByEmail(String email);
}
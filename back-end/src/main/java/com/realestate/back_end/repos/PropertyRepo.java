package com.realestate.back_end.repos;
import org.springframework.data.jpa.repository.JpaRepository;

import com.realestate.back_end.model.Property;

import java.util.List;

public interface PropertyRepo extends JpaRepository<Property, Long> {
    List<Property> findByLocation(String location);
}
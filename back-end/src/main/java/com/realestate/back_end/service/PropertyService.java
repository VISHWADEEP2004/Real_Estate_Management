package com.realestate.back_end.service;


import com.realestate.back_end.repos.PropertyRepo;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PropertyService {
    private final PropertyRepo propertyRepo;

    public PropertyService(PropertyRepo propertyRepo) {
        this.propertyRepo = propertyRepo;
    }

    public List<com.realestate.back_end.model.Property> getPropertiesByLocation(String location) {
        return propertyRepo.findByLocation(location);
    }
}

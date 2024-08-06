package com.realestate.back_end.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.realestate.back_end.model.Property;
import com.realestate.back_end.service.PropertyService;

import java.util.List;

@RestController
public class PropertyController {
    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping("/properties/{location}")
    public List<Property> getPropertiesByLocation(@PathVariable String location) {
        return propertyService.getPropertiesByLocation(location);
    }
}
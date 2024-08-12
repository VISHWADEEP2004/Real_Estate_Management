package com.max.quizspring.controller;

import com.max.quizspring.auth.PropertyDto;
import com.max.quizspring.model.Agent;
import com.max.quizspring.model.Property;
import com.max.quizspring.service.AgentService;
import com.max.quizspring.service.PropertyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    private final PropertyService propertyService;
    private final AgentService agentService;

    public PropertyController(PropertyService propertyService, AgentService agentService) {
        this.propertyService = propertyService;
        this.agentService = agentService;
    }

    @PostMapping
    public ResponseEntity<String> addProperty(@RequestBody PropertyDto propertyRequest) {
        try {
            if (propertyRequest.getAgentId() == null) {
                return new ResponseEntity<>("Agent ID is required", HttpStatus.BAD_REQUEST);
            }

            Optional<Agent> optionalAgent = agentService.getAgentById(propertyRequest.getAgentId());
            if (optionalAgent.isPresent()) {
                String base64Image = propertyRequest.getImage();
                if (base64Image == null || base64Image.isEmpty()) {
                    return new ResponseEntity<>("Image is required", HttpStatus.BAD_REQUEST);
                }
                if (!isValidBase64Image(base64Image)) {
                    return new ResponseEntity<>("Invalid Base64 image format", HttpStatus.BAD_REQUEST);
                }

                Property property = new Property();
                property.setBhk(propertyRequest.getBhk());
                property.setContactName(propertyRequest.getContactName());
                property.setLocation(propertyRequest.getLocation());
                try {
                    property.setPrice(Double.parseDouble(propertyRequest.getPrice()));
                } catch (NumberFormatException e) {
                    return new ResponseEntity<>("Invalid price format", HttpStatus.BAD_REQUEST);
                }
                property.setType(propertyRequest.getType());
                property.setImg(base64Image);
                property.setAgent(optionalAgent.get());

                propertyService.addProperty(property);
                return new ResponseEntity<>("Property added successfully", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Agent not found", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred while adding the property",
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private boolean isValidBase64Image(String base64Image) {
        try {
            byte[] decodedBytes = Base64.getDecoder().decode(base64Image);
            int maxSizeInBytes = 5 * 1024 * 1024;
            return decodedBytes.length <= maxSizeInBytes;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProperty(@PathVariable Long id) {
        try {
            boolean isDeleted = propertyService.deleteProperty(id);
            if (isDeleted) {
                return new ResponseEntity<>("Property deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Property not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("An error occurred while deleting the property",
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Property>> getAllProperties() {
        try {
            List<Property> properties = propertyService.getAllProperties();
            return new ResponseEntity<>(properties, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{location}")
    public ResponseEntity<List<PropertyDto>> getPropertiesByLocation(@PathVariable String location) {
        try {
            List<Property> properties = propertyService.getPropertiesByLocation(location);
            if (properties.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            List<PropertyDto> propertyDtos = properties.stream().map(property -> {
                PropertyDto dto = new PropertyDto();
                dto.setId(property.getId());
                dto.setBhk(property.getBhk());
                dto.setContactName(property.getContactName());
                dto.setLocation(property.getLocation());
                dto.setPrice(property.getPrice().toString());
                dto.setType(property.getType());
                dto.setAgentId(property.getAgent().getId());
                dto.setImage(property.getImg());
                return dto;
            }).collect(Collectors.toList());

            return new ResponseEntity<>(propertyDtos, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/agent/{agentId}")
    public ResponseEntity<List<PropertyDto>> getPropertiesByAgent(@PathVariable Long agentId) {
        try {
            List<Property> properties = propertyService.getPropertiesByAgentId(agentId);
            if (properties.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            List<PropertyDto> propertyDtos = properties.stream().map(property -> {
                PropertyDto dto = new PropertyDto();
                dto.setId(property.getId());
                dto.setBhk(property.getBhk());
                dto.setContactName(property.getContactName());
                dto.setLocation(property.getLocation());
                dto.setPrice(property.getPrice().toString());
                dto.setType(property.getType());
                dto.setAgentId(property.getAgent().getId());
                dto.setImage(property.getImg());
                return dto;
            }).collect(Collectors.toList());

            return new ResponseEntity<>(propertyDtos, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<PropertyDto> getPropertyById(@PathVariable Long id) {
        try {
            Optional<Property> optionalProperty = propertyService.getPropertyById(id);
            if (optionalProperty.isPresent()) {
                Property property = optionalProperty.get();
                PropertyDto dto = new PropertyDto();
                dto.setId(property.getId());
                dto.setBhk(property.getBhk());
                dto.setContactName(property.getContactName());
                dto.setLocation(property.getLocation());
                dto.setPrice(property.getPrice().toString());
                dto.setType(property.getType());
                dto.setAgentId(property.getAgent().getId());
                dto.setImage(property.getImg());

                // You can include additional fields like agentName, agentPhone, etc.
                dto.setAgentName(property.getAgent().getName());
                dto.setAgentPhone(property.getAgent().getPhone());
                dto.setAgentEmail(property.getAgent().getEmail());

                return new ResponseEntity<>(dto, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

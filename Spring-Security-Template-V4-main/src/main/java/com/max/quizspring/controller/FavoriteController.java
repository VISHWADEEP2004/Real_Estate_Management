package com.max.quizspring.controller;

import com.max.quizspring.model.Favorite;
import com.max.quizspring.model.Property;
import com.max.quizspring.model.User;
import com.max.quizspring.service.AuthService;
import com.max.quizspring.service.FavoriteService;
import com.max.quizspring.service.PropertyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;
    private final AuthService authService;
    private final PropertyService propertyService;

    public FavoriteController(FavoriteService favoriteService, AuthService authService, PropertyService propertyService) {
        this.favoriteService = favoriteService;
        this.authService = authService;
        this.propertyService = propertyService;
    }

    @PostMapping
    public ResponseEntity<String> addFavorite(@RequestParam Long userId, @RequestParam Long propertyId) {
        Optional<User> optionalUser = authService.getAllUsers().stream()
            .filter(user -> user.getUid().equals(userId))
            .findFirst();
        Optional<Property> optionalProperty = propertyService.getPropertyById(propertyId);
        
        if (optionalUser.isPresent() && optionalProperty.isPresent()) {
            Favorite favorite = favoriteService.addFavorite(optionalUser.get(), optionalProperty.get());
            if (favorite != null) {
                return new ResponseEntity<>("Property added to favorites", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Property already in favorites", HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>("User or Property not found", HttpStatus.NOT_FOUND);
        }
    }

@GetMapping("/{userId}")
public ResponseEntity<List<Long>> getFavoritePropertyIdsByUser(@PathVariable Long userId) {
    Optional<User> optionalUser = authService.getAllUsers().stream()
        .filter(user -> user.getUid().equals(userId))
        .findFirst();
    if (optionalUser.isPresent()) {
        List<Long> favoritePropertyIds = favoriteService.getFavoritesByUser(optionalUser.get()).stream()
            .map(favorite -> favorite.getProperty().getId())
            .collect(Collectors.toList());
        return new ResponseEntity<>(favoritePropertyIds, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
    @DeleteMapping
    public ResponseEntity<String> removeFavorite(@RequestParam Long userId, @RequestParam Long propertyId) {
        Optional<User> optionalUser = authService.getAllUsers().stream()
            .filter(user -> user.getUid().equals(userId))
            .findFirst();
        Optional<Property> optionalProperty = propertyService.getPropertyById(propertyId);
        
        if (optionalUser.isPresent() && optionalProperty.isPresent()) {
            boolean removed = favoriteService.removeFavorite(optionalUser.get(), optionalProperty.get());
            if (removed) {
                return new ResponseEntity<>("Property removed from favorites", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Property not found in favorites", HttpStatus.NOT_FOUND);
            }
        } else {
            return new ResponseEntity<>("User or Property not found", HttpStatus.NOT_FOUND);
        }
    }
}


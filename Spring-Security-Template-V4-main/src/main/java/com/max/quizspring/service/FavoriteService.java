package com.max.quizspring.service;

import com.max.quizspring.model.Favorite;
import com.max.quizspring.model.Property;
import com.max.quizspring.model.User;
import com.max.quizspring.repo.FavoriteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {
    private final FavoriteRepository favoriteRepository;

    public FavoriteService(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    public List<Favorite> getFavoritesByUser(User user) {
        return favoriteRepository.findByUser(user);
    }

    public Favorite addFavorite(User user, Property property) {
        if (favoriteRepository.existsByUserAndProperty(user, property)) {
            return null; 
        }
        Favorite favorite = new Favorite();
        favorite.setUser(user);
        favorite.setProperty(property);
        return favoriteRepository.save(favorite);
    }

    public boolean removeFavorite(User user, Property property) {
        Favorite favorite = favoriteRepository.findByUser(user).stream()
                .filter(f -> f.getProperty().equals(property))
                .findFirst()
                .orElse(null);
        if (favorite != null) {
            favoriteRepository.delete(favorite);
            return true;
        }
        return false;
    }
}

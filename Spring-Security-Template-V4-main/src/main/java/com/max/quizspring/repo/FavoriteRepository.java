package com.max.quizspring.repo;

import com.max.quizspring.model.Favorite;
import com.max.quizspring.model.Property;
import com.max.quizspring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    List<Favorite> findByUser(User user);
    boolean existsByUserAndProperty(User user, Property property);
}

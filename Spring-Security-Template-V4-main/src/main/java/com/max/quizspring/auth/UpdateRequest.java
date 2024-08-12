package com.max.quizspring.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UpdateRequest {
    private String name;
    private String username; 
    private String email;
}

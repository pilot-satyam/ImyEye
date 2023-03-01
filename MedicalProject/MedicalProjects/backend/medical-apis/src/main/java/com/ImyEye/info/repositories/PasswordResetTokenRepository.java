package com.ImyEye.info.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ImyEye.info.entities.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String token);
}


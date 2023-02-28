package com.ImyEye.info.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ImyEye.info.entities.PasswordResetToken;
import com.ImyEye.info.entities.User;
import com.ImyEye.info.payloads.UserDto;
import com.ImyEye.info.repositories.PasswordResetTokenRepository;
import com.ImyEye.info.services.impl.UserServiceImpl;

@Service
public class PasswordResetTokenService {
    @Autowired
    UserServiceImpl userService;
    private static final int EXPIRATION_MINUTES = 30;

    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    public PasswordResetToken createPasswordResetTokenForEmail(String email, String token) {
        PasswordResetToken passwordResetToken = new PasswordResetToken();
        passwordResetToken.setToken(token);
        passwordResetToken.setExpiryDate(LocalDateTime.now().plusMinutes(EXPIRATION_MINUTES));
        UserDto userDto = userService.getUserByEmail(email);
        User user = userService.dtoToUser(userDto);
        passwordResetToken.setUser(user);
        return passwordResetTokenRepository.save(passwordResetToken);
    }

    public PasswordResetToken getPasswordResetToken(String token) {
        return passwordResetTokenRepository.findByToken(token);
    }

    public void deletePasswordResetToken(PasswordResetToken passwordResetToken) {
        passwordResetTokenRepository.delete(passwordResetToken);
    }
}

package com.ImyEye.info.controllers;

import java.util.UUID;

// import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ImyEye.info.entities.PasswordResetToken;
import com.ImyEye.info.entities.User;
import com.ImyEye.info.services.PasswordResetTokenService;
import com.ImyEye.info.services.UserService;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class PasswordReset {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    PasswordResetTokenService passwordResetTokenService;
    
    @Autowired
    UserService userService;

    @GetMapping("/forgot-password")
    public String showForgotPasswordForm() {
        return "forgot-password-form";
    }

    @PostMapping("/forgot-password")
    public String processForgotPasswordForm(@RequestParam("email") String email, HttpServletRequest request) {
        // Generate a random token
        String token = UUID.randomUUID().toString();

        // Store the token and the associated user in a cache or database
        passwordResetTokenService.createPasswordResetTokenForEmail(email, token);

        // Send an email to the user with a link that includes the token
        String resetLink = "http://" + request.getServerName() + ":" + request.getServerPort() +
                           request.getContextPath() + "/reset-password?token=" + token;
        String subject = "Password Reset Request";
        String text = "To reset your password, click the link below:\n\n" + resetLink;
        mailSender.send(createEmail(email, subject, text));

        return "forgot-password-success";
    }

    @GetMapping("/reset-password")
    public String showResetPasswordForm(@RequestParam("token") String token, Model model) {
        // Verify that the token is valid and has not expired
        PasswordResetToken passwordResetToken = passwordResetTokenService.getPasswordResetToken(token);
        if (passwordResetToken == null || passwordResetToken.isExpired()) {
            return "reset-password-error";
        }

        // Add the token to the model so it can be submitted with the new password
        model.addAttribute("token", token);

        return "reset-password-form";
    }

    @PostMapping("/reset-password")
    public String processResetPasswordForm(@RequestParam("token") String token,
                                           @RequestParam("password") String password,
                                           Model model) {
        // Verify that the token is valid and has not expired
        PasswordResetToken passwordResetToken = passwordResetTokenService.getPasswordResetToken(token);
        if (passwordResetToken == null || passwordResetToken.isExpired()) {
            return "reset-password-error";
        }

        // Update the user's password in the database or cache
        User user = passwordResetToken.getUser();
        userService.updateUserPassword(user, password);

        // Delete the token
        passwordResetTokenService.deletePasswordResetToken(passwordResetToken);

        return "reset-password-success";
    }
    
    private jakarta.mail.internet.MimeMessage createEmail(String to, String subject, String text) {
        jakarta.mail.internet.MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        try {
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return message;
    }
}

package com.ImyEye.info.controllers;

import org.springframework.mail.SimpleMailMessage;

public class EmailHelper {
    private SimpleMailMessage createEmail(String to, String subject, String text) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(to);
        email.setSubject(subject);
        email.setText(text);
        return email;
    }
    
}

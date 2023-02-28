package com.ImyEye.info.services;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

// import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserMailService {
    @Autowired
    private MailService mailService;

    private final Map<String, String> otpData = new HashMap<>();

    public void generateAndSendOtp(String email) throws jakarta.mail.MessagingException, jakarta.mail.MessagingException {

        // Generate a 6-digit OTP
        String otp = String.valueOf(new Random().nextInt(899999) + 100000);

        // Save the OTP with the user's email address in a Map
        otpData.put(email, otp);

        // Send the OTP to the user's email address
        mailService.sendEmail(email, "OTP for Password Reset", "Your OTP is: " + otp);
    }

    public boolean verifyOtp(String email, String otp) {
        // Check if the OTP provided by the user matches the OTP sent to their email
        return otpData.get(email).equals(otp);
    }
}

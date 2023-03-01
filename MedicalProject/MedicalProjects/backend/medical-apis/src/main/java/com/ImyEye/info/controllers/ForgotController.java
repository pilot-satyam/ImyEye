package com.ImyEye.info.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ImyEye.info.services.UserMailService;


import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ImyEye.info.services.Email;
// import com.ImyEye.info.services.UserMailService;

import jakarta.servlet.http.HttpSession;

@Controller
public class ForgotController {
    @Autowired
    private Email emailService;

    // email id  form open handler

    @RequestMapping("/forgot")
    public String openEmailForm(){
        return "forgot";
    }

    @PostMapping("/send-otp")
    //getting the email id from Forgot.js
    public String sendOTP(@RequestParam("email") String email,HttpSession session)
    {
        System.out.println("Email is :" + email);
        //generating otp of 4 digits
        Random random = new Random(); 
        int otp =  random.nextInt(9999);
        System.out.println("OTP:"+otp);
        String subject = "OTP FROM APP";
        String message = "<h1>OTP = "+otp+" </h1>";
        String to = email;
        boolean flag = this.emailService.sendEmail(subject, message, to);
        if(flag){
            return "verify_otp";
        }
        else{
          session.setAttribute("message", "Check your email id");
          return "forgot";
        }
    }
}
// @RestController
// @RequestMapping("/api")
// public class ForgotController {

//     @Autowired
//     private UserMailService userMailService;

//     @PostMapping("/forgot-password")
//     public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {

//         // Generate and send an OTP to the user's email
//         try {
//             userMailService.generateAndSendOtp(request.getEmail());
//         } catch (Exception e) {
//             return new ResponseEntity<>("Failed to send OTP", HttpStatus.INTERNAL_SERVER_ERROR);
//         }

//         // Return a success response
//         return new ResponseEntity<>("OTP sent to your email", HttpStatus.OK);
//     }

//     @PostMapping("/verify-otp")
//     public ResponseEntity<?> verifyOtp(@RequestBody VerifyOtpRequest request) {

//         // Verify the OTP provided by the user
//         boolean isOtpValid = userMailService.verifyOtp(request.getEmail(), request.getOtp());

//         // Return a success response if the OTP is valid
//         if (isOtpValid) {
//             return new ResponseEntity<>("OTP verified", HttpStatus.OK);
//         }

//         // Return an error response if the OTP is invalid
//         return new ResponseEntity<>("Invalid OTP", HttpStatus.BAD_REQUEST);
//     }
// }


package com.ImyEye.info.controllers;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ImyEye.info.services.Email;

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
        System.out.println("Email is" + email);
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

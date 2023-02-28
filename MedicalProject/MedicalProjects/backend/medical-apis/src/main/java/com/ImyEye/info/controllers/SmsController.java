package com.ImyEye.info.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ImyEye.info.payloads.SmsPojo;



@RestController
public class SmsController {
    
    @PostMapping("/mobileNo")
    public String sendOtp(@RequestBody SmsPojo sms){
        try{
              System.out.println(sms.getPhone());
        }
        catch(Exception e){
           e.printStackTrace();
        }
        return "Successfully Otp Sent to your Mobile Number";
    }
}

package com.ImyEye.info.services;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ImyEye.info.config.TwilioConfig;
import com.ImyEye.info.payloads.OtpStatus;
import com.ImyEye.info.payloads.PasswordResetRequestDto;
import com.ImyEye.info.payloads.PasswordResetResponseDto;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import reactor.core.publisher.Mono;

@Service
public class TwilioOtpService {
    @Autowired
    private TwilioConfig twilioConfig;
    Map<String,String> otpMap = new HashMap<>(); 

    public Mono<PasswordResetResponseDto> sendOtpForPasswordReset(PasswordResetRequestDto passwordResetRequestDto)
   { 
            PasswordResetResponseDto passwordResetResponseDto = null;
            try{
                PhoneNumber to = new PhoneNumber(passwordResetRequestDto.getNumber());
                PhoneNumber from = new PhoneNumber(twilioConfig.getTrialNumber());
                String otp = generateOTP();
                String otpMessage = "Your otp is"+otp+"Use this to reset ur password";
                Message message = Message.creator(
                to,from,
                otpMessage)
            .create();
            otpMap.put(passwordResetRequestDto.getUsername(), otp);
            passwordResetResponseDto = new PasswordResetResponseDto(otpMessage,OtpStatus.DELIVERED);
            }
            catch(Exception ex){
                passwordResetResponseDto = new PasswordResetResponseDto(ex.getMessage(),OtpStatus.FAILED);
            }
            return Mono.just(passwordResetResponseDto);
   }

//validate otp


public Mono<String> validateOTP(String userInputOtp,String username){
    if(userInputOtp.equals(otpMap.get(username))){
        return Mono.just("Valid Otp, Kindly reset your password");
    }
    else{
        return Mono.error(new IllegalArgumentException("Invalid Otp"));
    }   
}



//generate otp
private String generateOTP(){
    return new DecimalFormat("0000")
    .format(new Random().nextInt(9999));
}
}

package com.ImyEye.info.payloads;

import lombok.Data;

@Data
public class PasswordResetRequestDto {
    private String number; //destination
    private String username;
    private String otp;
}

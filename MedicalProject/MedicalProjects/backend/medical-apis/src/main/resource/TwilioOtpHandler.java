package com.ImyEye.info.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.function.ServerRequest;
import org.springframework.web.servlet.function.ServerResponse;

import com.ImyEye.info.payloads.PasswordResetRequestDto;
import com.ImyEye.info.services.TwilioOtpService;

import reactor.core.publisher.Mono;

@Component
public class TwilioOtpHandler{
        @Autowired
         private TwilioOtpService service;

         public Mono<ServerResponse> sendOtp(ServerRequest serverRequest){
          return serverRequest.bodyToMono(PasswordResetRequestDto.class)
          .flatMap(dto->service.sendOTPForPasswordReset(dto))
          .flatMap(dto->ServerResponse.status(HttpStatus.OK)
          .body(BodyInserters.fromValue(dto)));

        } 
        public Mono<ServerResponse> ValidateOtp(ServerRequest serverRequest){
                return serverRequest.bodyToMono(PasswordResetRequestDto.class)
                .flatMap(dto->service.validateOTP(dto.getOneTimePassword(),dto.getUserName()))
                .flatMap(dto->ServerResponse.status(HttpStatus.OK)
                .bodyValue(dto));
        }
}
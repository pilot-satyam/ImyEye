package com.ImyEye.info.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

// @Configuration
// public class MailConfig {

//     @Value("${spring.mail.host}")
//     private String host;

//     @Value("${spring.mail.port}")
//     private int port;

//     // @Value("${spring.mail.username}")
//     @Value("${spring.mail.port:587}")
//     private String username;

//     @Value("${spring.mail.password}")
//     private String password;

//     @Bean
//     public JavaMailSender javaMailSender() {
//         JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
//         mailSender.setHost(host);
//         mailSender.setPort(port);
//         mailSender.setUsername(username);
//         mailSender.setPassword(password);
//         Properties props = mailSender.getJavaMailProperties();
//         props.put("mail.transport.protocol", "smtp");
//         props.put("mail.smtp.auth", "true");
//         // props.put("mail.smtp.ssl.enable", "false"); // add this line
//         props.put("mail.smtp.starttls.enable", "true");
//         props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
//         props.put("mail.debug", "true");
//         return mailSender;
//         // props.put("mail.smtp.auth", "true");
//         // props.put("mail.smtp.starttls.enable", "true");
//         // props.put("mail.smtp.ssl.trust", "smtp.mail.yahoo.com");

//         // return mailSender;
//     }
// }

@Configuration
public class MailConfig {
 
    @Bean
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        
        mailSender.setUsername("satyamsrivastaviit@gmail.com");
        mailSender.setPassword("Airbus@a320");
        
        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
        
        return mailSender;
    }
}



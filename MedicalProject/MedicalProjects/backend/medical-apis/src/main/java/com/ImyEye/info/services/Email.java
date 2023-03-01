package com.ImyEye.info.services;

import java.util.Properties;

import org.springframework.stereotype.Service;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.Session;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

@Service
public class Email {
    public boolean sendEmail(String subject,String message,String to){
        //rest of the code

        boolean f = false;

        String from="satyam99srivastava@gmail.com";

        //variable for gmail
        String host = "smtp.gmail.com";
        //get the system properties
        Properties properties = System.getProperties();
        System.out.println("Properties"+properties);
        //setting important information to properties object

        //host set
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port","465");
        properties.put("mail.smtp.ssl.enable","true");
        properties.put("mail.smtp.auth","true");

        //Step 1: to get the session object
        Session session = Session.getInstance(properties,new Authenticator(){
            @Override
            protected jakarta.mail.PasswordAuthentication getPasswordAuthentication(){
                return new jakarta.mail.PasswordAuthentication("satyam99srivastava@gmail.com", "Satyam7890@");
            }
        });
        session.setDebug(true);

        //Step 2 : compose the message [text,multimedia]
        MimeMessage m = new MimeMessage(session);
        try{
            //from email
            m.setFrom(from);
            //adding recepent to message
            m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            //adding subject to message
            m.setSubject(subject);
            //ading text to message
            m.setText(message);

            //send

            //Step3 : send the message using Transport class
            // Transport.send(m);
            System.out.println("Sent Succeessss ....");
            f = true;

        } catch(Exception e){
            e.printStackTrace();
        }
        return f;
    }
}

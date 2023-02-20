package com.ImyEye.info.services;

import java.net.PasswordAuthentication;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

@Service
public class Email {
    public boolean sendEmail(String subject,String message,String to){
        //rest of the code

        boolean f = false;

        String from="satyamsrivastaviit@gmail.com";

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
            protected javax.mail.PasswordAuthentication getPasswordAuthentication(){
                return new javax.mail.PasswordAuthentication("satyamsrivastaviit@gmail.com", "Airbus@a320");
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
            Transport.send(m);
            System.out.println("Sent Succeessss ....");
            f = true;

        } catch(Exception e){
            e.printStackTrace();
        }
        return f;
    }
}

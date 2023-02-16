package com.ImyEye.info.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ImyEye.info.payloads.ApiResponse;
import com.ImyEye.info.payloads.AppointmentDto;
import com.ImyEye.info.services.AppointmentService;

@RestController
@RequestMapping("/api/v1/")
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;

    //create
    @PostMapping("/user/{userId}/doctor/{DoctorId}/appointment")
    public ResponseEntity<AppointmentDto> createAppointment(
        @RequestBody AppointmentDto aDto,
        @PathVariable Integer userId,
        @PathVariable Integer DoctorId
    )
    {
        AppointmentDto createAppointment = this.appointmentService.createAppointment(aDto, userId, DoctorId);
        return new ResponseEntity<AppointmentDto>(createAppointment, HttpStatus.CREATED);
    }

    //get appointment by user
    @GetMapping("/user/{userId}/appointments")
    public ResponseEntity<List<AppointmentDto>> getAppointmentByUser(
        @PathVariable Integer userId
    )
    {
       List<AppointmentDto> appointments =  this.appointmentService.getAppointmentByUser(userId);
       return new ResponseEntity<List<AppointmentDto>>(appointments,HttpStatus.OK);
    }

     //delete appointment
     @DeleteMapping("/appointments/{Id}")
     public ApiResponse deletePrescription(@PathVariable Integer Id)
     {
         this.appointmentService.deleteAppointment(Id);
         return new ApiResponse("Appointment Successfully deleted",true);
     }
 
     //update Appointment
     @PutMapping("/appointment/{Id}")
     public ResponseEntity<AppointmentDto> updateAppointment
     (
        @RequestBody AppointmentDto aDto,
        @PathVariable Integer Id
     )
     {
       AppointmentDto updatedAppointmentDto =  this.appointmentService.updateAppointment(aDto, Id);
       return new ResponseEntity<AppointmentDto>(updatedAppointmentDto,HttpStatus.OK);
     }
}

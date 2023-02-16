package com.ImyEye.info.services;

import java.util.List;

import com.ImyEye.info.payloads.AppointmentDto;

public interface AppointmentService {
    //create appointment
    AppointmentDto createAppointment(AppointmentDto aDto,Integer userId,Integer DoctorId);
    //delete appointment
    void deleteAppointment(Integer Id);
    //update appointment
    AppointmentDto updateAppointment(AppointmentDto aDto,Integer Id);
    //get single appointment
    List<AppointmentDto> getAppointmentByUser(Integer userId);
}

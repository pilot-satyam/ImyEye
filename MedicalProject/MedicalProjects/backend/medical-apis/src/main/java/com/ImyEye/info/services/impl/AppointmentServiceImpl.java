package com.ImyEye.info.services.impl;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ImyEye.info.entities.Appointment;
import com.ImyEye.info.entities.Doctor;
import com.ImyEye.info.entities.User;
import com.ImyEye.info.exceptions.ResourceNotFoundException;
import com.ImyEye.info.payloads.AppointmentDto;
import com.ImyEye.info.repositories.AppointmentRepo;
import com.ImyEye.info.repositories.DoctorRepo;
import com.ImyEye.info.repositories.UserRepo;
import com.ImyEye.info.services.AppointmentService;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepo appointmentRepo;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private DoctorRepo docRepo;

    @Override
    public AppointmentDto createAppointment(AppointmentDto aDto, Integer userId, Integer DoctorId) {
        User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "User Id",userId));
        Doctor doctor = this.docRepo.findById(DoctorId).orElseThrow(()->new ResourceNotFoundException("Doctor", "Doctor Id", DoctorId));
        Appointment appointment = this.modelMapper.map(aDto, Appointment.class);
        appointment.setAddedDate(new Date());
        appointment.setUser(user);
        appointment.setDoctor(doctor);
        Appointment newAppointment = this.appointmentRepo.save(appointment);
        return this.modelMapper.map(newAppointment,AppointmentDto.class);
    }

    @Override
    public void deleteAppointment(Integer Id) {
       Appointment appointment = this.appointmentRepo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Appointment", "Id", Id));
       this.appointmentRepo.delete(appointment);
    }

    @Override
    public AppointmentDto updateAppointment(AppointmentDto aDto, Integer Id) {
        Appointment appointment = this.appointmentRepo.findById(Id).orElseThrow(()->new ResourceNotFoundException("Appointment", "Id", Id));
        appointment.setAddedDate(aDto.getAddedDate());
        Appointment updatedAppointment = this.appointmentRepo.save(appointment);
        return this.modelMapper.map(updatedAppointment,AppointmentDto.class);
    }

    @Override
    public List<AppointmentDto> getAppointmentByUser(Integer userId) {
        User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "user Id", userId));
		List<Appointment> appointments = this.appointmentRepo.findByUser(user);
		List<AppointmentDto> appointmentDtos =  appointments.stream().map((appointment)->this.modelMapper.map(appointment,AppointmentDto.class)).collect(Collectors.toList());
		return appointmentDtos;
    }
    
}

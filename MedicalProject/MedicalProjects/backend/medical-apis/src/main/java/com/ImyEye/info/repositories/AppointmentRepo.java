package com.ImyEye.info.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ImyEye.info.entities.Appointment;
import com.ImyEye.info.entities.User;

public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {

    List<Appointment> findByUser(User user);
}

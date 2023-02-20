package com.ImyEye.info.entities;
import java.util.ArrayList;
import java.util.List;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@Entity
@Table(name="doctors")
@NoArgsConstructor
public class Doctor{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
     private int DoctorId;	

	@Column(nullable = false,length=100)
     private String name;
     @Email
     @Column(nullable = false)
     private String email;
     @Column(nullable = false)
     private String password;
     @Column(nullable = false)
     private String qualification;
     @Column(nullable = false)
     private String experience;
     @Column(nullable = false)
     private int fees;
     
     @OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
     List<Prescription> lists = new ArrayList<>();

     @OneToMany(mappedBy = "doctor",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
     List<Appointment> appointmentlists = new ArrayList<>();

}

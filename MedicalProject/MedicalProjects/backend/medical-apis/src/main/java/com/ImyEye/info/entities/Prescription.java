package com.ImyEye.info.entities;

import java.util.Date;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Prescription {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer Id;
    @Column(nullable = false)
	private String OldRemarks;
    @Column(nullable = false)
	private String NewRemarks;
	private Date AddedDate;
	private String ReportImage;
	//alcohol
	@Column(nullable = false)
	private String alcohol;
	//smoke
	@Column(nullable = false)
	private String smoke;
	//operations
	@Column(nullable = false)
	private String operations;
	@ManyToOne
	private User user;
	@JoinColumn(name="doctor_id")
    @ManyToOne
    private Doctor doctor;
}

package com.ImyEye.info.payloads;

import java.util.Date;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PrescriptionDto {
    private Integer Id;
    @NotEmpty
    private String OldRemarks;
    @NotEmpty
    private String NewRemarks;
    @NotEmpty
    private Date AddedDate;
    @NotEmpty
	private String ReportImage;
    private DoctorDto doctor;
    private UserDto user;
    @NotEmpty
    private String alcohol;
    @NotEmpty
    private String smoke;
    @NotEmpty
    private String operations;
}

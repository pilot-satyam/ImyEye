package com.ImyEye.info.payloads;

import java.util.Date;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AppointmentDto {
    private Integer id;
    @NotEmpty
    private Date addedDate;
    @NotEmpty
    private Date date;
    @NotEmpty
    private String time;
}

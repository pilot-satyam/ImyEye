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
    private Integer Id;
    @NotEmpty
    private Date addedDate;
}

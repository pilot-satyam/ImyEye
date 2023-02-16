import { myAxios } from "./helper";
import { privateAxios } from "./helper";

export const createAppointment=(appointmentData)=>{
       return privateAxios
       .post(`/user/${appointmentData.id}/doctor/${appointment.doctorId}/appointment`,appointmentData)
       .then(response=>response.data)
}

export const deleteAppointment = (Id)=>{
    return myAxios
    .delete(`appointments/${Id}`)
    .then(response=>response.data)
}

export const updateAppointment = (Id)=>{
    return privateAxios
    .put(`/appointment/${Id}`)
    .then(response=>response.data)
}
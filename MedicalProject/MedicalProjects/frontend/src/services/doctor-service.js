import { myAxios } from "./helper";

export const loadAllDoctors=()=>{
    return myAxios
    .get(`/doctors/`)
    .then(response=>{return response.data})
}

//load single post of given id
export const loadDoctor=(doctorId)=>{
    return myAxios
    // .get("/doctors/"+doctorId)
    .get(`/doctors/${doctorId}`)
    .then(response=>{return response.data})
}


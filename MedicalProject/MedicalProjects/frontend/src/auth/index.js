//isLogged IN

export const isLoggedIn=()=>{
        let data = localStorage.getItem("data") //extracting this value after the below fn is executed
         if(data != null){
            return true;
         }
         else {
            return false;
         }
};

//doLogin --> data => set to local storage

export const doLogin = (data,next) =>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
};

//doLogout --> data => remove from local storage


export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next()
};

//getCurrent User

export const getCurrentUserDetail = () =>{
    if(isLoggedIn()){

        //using parse to convert from string to object as we are using stringify to set the values
        //.user property is used so that we get only user details and not the token data
        return JSON.parse(localStorage.getItem("data")).user;
    }
    else{
        return undefined;
    }
};

export const getToken=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).token;
    }
    else{
        return null;
    }
}
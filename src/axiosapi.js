import axios from "axios"

let URL = 'http://localhost:5000/'
export const getuser = ()=>{
    return axios.get(`${URL}users/`).then(res=>res.data)
}
export const register = (firstname,lastname,mobile_no,email,password,c_password)=>{
    return axios.post(`${URL}users/signup`,{firstname,lastname,mobile_no,email,password,c_password}).then(res=>res.data)
}
export const login = (email, password)=>{
    return axios.post(`${URL}users/login`,{email,password}).then(res=>res.data)
}
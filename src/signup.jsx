import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"
import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import Header from "./header";
import Homefooter from "./componenets/homefooter";
import { getuser,register } from "./axiosapi";


function SignupForm(){
    const navigate = useNavigate()
    const [detail, setDetail] =useState({})
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)
    const [user, setUser] = useState({firstname:'', lastname:"", mobile_no:"", 
                                email:"", password:"", c_password:""})
    const handleUser = async ()=>{
        const userDetails = await getuser()
        setDetail(prev=>prev=userDetails)
    }
    const handleClose = ()=>{
        setUser({firstname:'', lastname:"", mobile_no:"", 
        email:"", password:"", c_password:""})
    }
    
    const handleSubmit =(e)=>{
        const {firstname, lastname, mobile_no, 
            email, password, c_password} = user
        register(firstname, lastname, mobile_no, 
                email, password, c_password).then(data=>{
         handleClose()
                })
        e.preventDefault()
        if(user.firstname && user.lastname && user.mobile_no &&
            user.email && user.password && user.c_password)
            {
                setValid(true)
                navigate('/home') 
            }
        setSubmitted(true)
        
    }
    useEffect(()=>{
        handleUser()
    },[])
    return <React.Fragment>
        <Header />
            <div class="overlay">
                <div class="overlay-signup-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep booking with us please login with your details</p>
                    <p id="p4">Already have account?</p>
                    <button onClick={()=> {navigate("/login")}} id="login-sp" class="btn btn-outline-light">Login</button>
                </div>
            </div>
            <div className="form-container-signup">
                <h1 id="p5">Create Account</h1>
                <form className="signup-form" action='/home' onSubmit={handleSubmit}>
                    <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button class="btn btn-outline-danger" id="google">Continue with Google</button></a>
                    <p id="p6">OR</p>
                    {submitted && valid ? <p>Successfully Registered!</p> : null} 
                    <input type="text" placeholder=" First Name" className="f-name" value={user.firstname} 
                    onChange = {(e)=>{
                        setUser((prev)=> ({...prev, firstname:e.target.value}))
                    }} />
                    {submitted && !user.firstname ? <span>Please Enter the first Name</span> : null}
                    <input type="text" placeholder=" Last Name" className="l-name" value={user.lastname} 
                    onChange = {(e)=>{
                        setUser((prev)=> ({...prev, lastname:e.target.value}))
                    }} />
                    {submitted && !user.lastname ? <span>Please Enter the last Name</span> : null}
                    <input type="number" placeholder=" Phone Number" className="phone-no" value={user.mobile_no} 
                    onChange = {(e)=>{
                        setUser((prev)=> ({...prev, mobile_no:e.target.value}))
                    }} />
                    {submitted && !user.mobile_no ? <span>Please Enter the mobile no</span> : null}
                    <input type="email" placeholder=" Email" className="email" value={user.email} 
                    onChange = {(e)=>{
                        setUser((prev)=> ({...prev, email:e.target.value}))
                    }} />
                    {submitted && !user.email ? <span>Please Enter the email</span> : null}
                    <input type="password" placeholder=" Password" className="pwd" value={user.password} 
                    onChange = {(e)=>{
                        setUser((prev)=> ({...prev, password:e.target.value}))
                    }} />
                    {submitted && !user.password ? <span>Please Enter the password</span> : null}
                    <input type="password" placeholder=" Confirm Password" className="c_pwd" value={user.c_password} 
                    onChange = {(e)=>{
                        setUser((prev)=> ({...prev, c_password:e.target.value}))
                    }} />
                    {submitted && !user.c_password ? <span>Please Enter the confirm password</span> : null}
                    <button class="btn btn-outline-danger" id="signup-btn" >Sign Up</button>
                </form>
            </div>
            <Homefooter /> 
</React.Fragment>
}
export default SignupForm;
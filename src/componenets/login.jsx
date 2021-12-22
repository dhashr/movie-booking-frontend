import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import Header from "../header";
import Homefooter from "./homefooter";
import {login} from "../axiosapi"


function LoginForm(){
    const navigate = useNavigate()
    const[user, setUser] = useState({email:'', password:''})
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)
    const handleClose = ()=>{
        setUser({email:"", password:""})
    }
    
    const handleSubmit =(e)=>{
        const { email, password} = user
        login(email, password).then(data=>{
                handleClose()
            })
        e.preventDefault()
        if(user.email && user.password)
            {
                setValid(true)
                navigate('/home')
            }
        setSubmitted(true)
    }
    return <React.Fragment>
        <Header />
        <div>
            <div className="overlay">
                <div class="overlay-login-left">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your login details and start booking with us</p>
                    <p id="p1">Doesn't have account?</p>
                    <button onClick={()=> {navigate("/")}} id="signup-lp" class="btn btn-outline-light">Sign Up</button>
                </div>
            </div>
            <div class="form-container-login">
                <h1 id="p2">Sign In</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button class="btn btn-outline-danger" id="google">Continue with Google</button></a>
                    <p id="p3">OR</p>
                    {submitted && valid ? <p>Successfully Registered!</p> : null} 
                    <input type="email" placeholder="Email" className="email" value={user.email} 
                    onChange = {(e)=>{
                        setUser((prev)=> ({...prev, email:e.target.value}))
                    }} />
                    {submitted && !user.email ? <span>Please Enter the email</span> : null}
                    <input type="password" placeholder="Password" className="pwd" value={user.password} 
                    onChange = {(e)=>{
                        setUser((prev)=> ({...prev, password:e.target.value}))
                    }} />
                    {submitted && !user.password ? <span>Please Enter the password</span> : null}
                    <button id="login-btn" class="btn btn-outline-danger">Login</button>
                </form>
            </div>
            <Homefooter />
            </div>    
</React.Fragment>
}
export default LoginForm;
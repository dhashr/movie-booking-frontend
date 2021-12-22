import React from "react";
import  logo from "../src/componenets/Logo/cine3.png"
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from 'react-router-dom'

function Header(){
    const navigate = useNavigate();
    return <React.Fragment>
    <nav class="navbar navbar-dark bg-dark">
        <h1 id="h1_name" class="navbar-brand">cineBooking</h1>
        <form>
            <input id="search"  type="search" placeholder="  Search the movies" value="" /> 
            <button id="search_btn" class="btn btn-outline-info" type="submit">Search</button>
            <select id="choice" title="Location">
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Bangaluru">Bangaluru</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Pune">Pune</option>
                <option value="Kochi">Kochi</option>
                <option value="Ahemadabad">Ahemadabad</option>
                <option value="Noida">Noida</option>
            </select>
        </form>
    </nav>
    <nav class="alert alert-secondary">
        <img id="logo" src={logo} alt="Logo" />
            {/* <button onClick={()=> {navigate("/home")}} id="home" class="btn btn-outline-success">Home</button> */}
            <button onClick={()=> {navigate("/login")}} id="login" class="btn btn-outline-success">Login</button>
            <button onClick={()=> {navigate("/")}} id="signup" class="btn btn-outline-success">Sign Up</button>
    </nav>
</React.Fragment>
}
export default Header;
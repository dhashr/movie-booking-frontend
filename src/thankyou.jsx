import React from "react";
import {useState, useEffect} from "react"
// import Header from "./header";
import  logo from "../src/componenets/Logo/cine3.png"
import { useNavigate } from 'react-router-dom'
import Homefooter from "./componenets/homefooter";

function Greeting(){
    const navigate = useNavigate();

    let params = {}
    let url = window.location.href
        new URL(url).searchParams.forEach(function(value, key){
            if(params[key] !== undefined){
                params[key] = [params[key]]
                params[key].push(value)
            }
            else{
                params[key] = value
            }
            return params;
        })
        console.log(JSON.stringify(params));

    const [movies, setMovies] = useState({})
    const api_key = "04c35731a5ee918f014970082a0088b1"
    const movieURL = `https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${api_key}&language=en-US`
    useEffect(()=>{
        fetch(movieURL)
        .then(res=>res.json())
        .then((data)=>{
            setMovies(data)
            console.log(data)
        })
    },[])
    return <React.Fragment>
        <nav class="navbar navbar-dark bg-dark">
        <h1 id="h1_name-tq" class="navbar-brand">cineBooking</h1>
        <img id="logo-tq" src={logo} alt="Logo" />
            <button onClick={()=> {navigate("/home")}} id="home-tq" class="btn btn-outline-success">Home</button>
        <form>
            <input id="search-tq"  type="search" placeholder="  Search the movies" value="" /> 
            <button id="search_btn-tq" class="btn btn-outline-info">Search</button>
            <select id="choice-tq" title="Location">
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
        <button onClick={()=> {navigate("/")}} id="logout-tq" class="btn btn-outline-success">Log out</button>
    </nav>
        <div className="order-overlay">
                <div class="order-overlay-left">
                    <div className="order-details">
                        <h3>ORDER SUMMARY</h3>
                        <br /><br />        
                        <h5>Movie :  {movies.title}</h5>
                        <h5>Cinemas :  {params.movie_cinemas}</h5>
                        <h5>Show Time :  {params.movie_time}</h5>
                        <h5>Date:  {params.movie_date}/{params.month}</h5>
                        <h5>Ticket :  {params.ticket}</h5>
                        <br /><br />
                        <p id="p7">THANK YOU FOR BOOKING</p> 
                        <p id="p8">YOUR SEATS ARE BOOKED, CHECK YOUR MAIL-ID </p>
                    </div>
                </div>
                <img id="popcorn" src="https://cdn4.iconfinder.com/data/icons/planner-color/64/popcorn-movie-time-512.png" alt="Popcorn" />               
            </div>
            <Homefooter />
</React.Fragment>
}
export default Greeting
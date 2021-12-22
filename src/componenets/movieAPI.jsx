import React from "react";
import {useState, useEffect} from "react"
import { useNavigate } from "react-router";
import  logo from "../componenets/Logo/cine3.png"
import Footer from "./footer";

function MovieAPI(){
    const navigate = useNavigate()
    const [movies, SetMovies] = useState([])
    // const [search, setSearch] = useState({})

    const api_key = "04c35731a5ee918f014970082a0088b1"
    const movieURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    // const searchURL = ""
    useEffect(()=>{
        fetch(movieURL)
        .then(res=>res.json())
        .then((data)=> {
            SetMovies(data.results)
            console.log(data);
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
    <div className="movies">
            {movies.length > 0 && movies.map((movie)=>
            <div className="movies-container" key = {movie.id} {...movie} >
                <div onClick={()=>{navigate(`/theater?movie_id=${movie.id}`)}} className="movies-individual">
                <img className="movies-img" src={IMGPATH + movie.poster_path} alt={movie.title}  />
                <div className="movies-info">
                <h3>{movie.title}</h3>
                <span>Voting Average : {movie.vote_average}</span>
                </div>
            </div>
        </div>
            )}
        </div>
        <Footer/>
    </React.Fragment>
}
export default MovieAPI;

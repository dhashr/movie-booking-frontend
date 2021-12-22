import React from "react";
import {useState, useEffect} from "react"
import { useNavigate } from "react-router";
import cinemaDetail from "../componenets/json/theatre.json"
import  logo from "../componenets/Logo/cine3.png"
import Footer from "./footer";

function Cinemas(){
    let navigate=useNavigate()
    const date = new Date();
    const tmr = date.getDate() + 1;
    const dayAfter = tmr + 1;
    const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    const mon = month[date.getMonth()]
    

    const getMovieId = () => {
        const url = new URL(window.location.href);
        let movieId = url.searchParams.get("movie_id");
        // let timing = url.searchParams.get("timing");
        return movieId ? parseInt(movieId) : null;
        // return movieId & timing ? {movieId: movieId, timing: timing} : null;
    }
    const id = getMovieId();

    const [movies, setMovies] = useState({})
    const api_key = "04c35731a5ee918f014970082a0088b1"
    const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    useEffect(()=>{
        fetch(movieURL)
        .then(res=>res.json())
        .then((data)=>{
            setMovies(data)
        })
    },[])
    console.log(movies);

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
        <div class="movie-detail" >
            <div></div>
            <img src={IMGPATH + movies.poster_path} class="movie-img" alt={movies.title}/>
            <h2 class="movie-name">{movies.title}</h2>
        </div>   
        <div className="">
            <nav className="show">
                <p class="btn btn-danger" id="timing">Show Timing</p>
                <button class="btn btn-outline-danger" id="date1" >Date: {tmr}/{mon}</button>
                <button class="btn btn-outline-danger" id="date2" >Date: {dayAfter}/{mon}</button>
            </nav>
        </div>
        <div className="cinemas">
            <p>INOX cinemas</p>
            <div className="inox-cinema">
                {cinemaDetail.inox.map((ele)=>
                    <div key={ele.id} >
                        <button className="btn" onClick={()=>{navigate(`/seats?movie_id=${movies.id}&movie_time=${ele.time}&movie_cinemas=${ele.cinema}&movie_date=${tmr}&month=${mon}`)}}>{ele.time}</button>
                    </div>
                )}
            </div>
            <p>PVR cinemas</p>
            <div className="pvr-cinema">  
                {cinemaDetail.pvr.map((ele)=>
                    <div key={ele.id} >
                        <button className="btn" onClick={()=>{navigate(`/seats?movie_id=${movies.id}&movie_time=${ele.time}&movie_cinemas=${ele.cinema}&movie_date=${tmr}&month=${mon}`)}}>{ele.time}</button>
                    </div>
                )}
            </div>
            <p>SPI-The cinemas</p>
            <div className="spi-cinema">
                {cinemaDetail.spi.map((ele)=>
                    <div key={ele.id} >
                        <button className="btn" onClick={()=>{navigate(`/seats?movie_id=${movies.id}&movie_time=${ele.time}&movie_cinemas=${ele.cinema}&movie_date=${tmr}&month=${mon}`)}}>{ele.time}</button>
                    </div>
                )}
            </div>
            <p>Sathyam cinemas</p>
            <div className="sathyam-cinema">
                {cinemaDetail.sathyam.map((ele)=>
                    <div key={ele.id} >
                        <button className="btn" onClick={()=>{navigate(`/seats?movie_id=${movies.id}&movie_time=${ele.time}&movie_cinemas=${ele.cinema}&movie_date=${tmr}&month=${mon}`)}}>{ele.time}</button>
                    </div>
                )}                
            </div>
            <p>FUN cinemas</p>
            <div className="fun-cinema">               
                {cinemaDetail.fun.map((ele)=>
                    <div key={ele.id} >
                        <button className="btn" onClick={()=>{navigate(`/seats?movie_id=${movies.id}&movie_time=${ele.time}&movie_cinemas=${ele.cinema}&movie_date=${tmr}&month=${mon}`)}}>{ele.time}</button>
                    </div>
                )}
            </div>
            <p>AGS cinemas</p>
            <div className="ags-cinema">
                {cinemaDetail.ags.map((ele)=>
                    <div key={ele.id}>
                        <button className="btn" onClick={()=>{navigate(`/seats?movie_id=${movies.id}&movie_time=${ele.time}&movie_cinemas=${ele.cinema}&movie_date=${tmr}&month=${mon}`)}}>{ele.time}</button>
                    </div>
                )}
            </div>
            <p>BIG cinemas</p> 
            <div className="big-cinema"> 
                {cinemaDetail.big.map((ele)=>
                    <div key={ele.id}>
                        <button className="btn" onClick={()=>{navigate(`/seats?movie_id=${movies.id}&movie_time=${ele.time}&movie_cinemas=${ele.cinema}&movie_date=${tmr}&month=${mon}`)}}>{ele.time}</button>
                    </div>
                )}                            
            </div>
        </div>
        <Footer/>
    </React.Fragment>
}
export default Cinemas;
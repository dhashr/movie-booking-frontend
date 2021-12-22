import React from "react";
import {useState, useEffect} from "react"
import { useNavigate } from "react-router"
import  logo from "../componenets/Logo/cine3.png"
import seats from "../componenets/json/seats.json"

function BookingPage(){
    let navigate = useNavigate()
    const [movies, setMovies] = useState({})
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    // const [color, setColor] = useState('white')
    // get the all params
        let params = {};
        let url = window.location.href
            new URL(url).searchParams.forEach(function (val, key) {
                if (params[key] !== undefined) {
                    params[key] = [params[key]];
                    params[key].push(val);
                } else {
                    params[key] = val;
                }
                return params;  
            });   
    // console.log(JSON.stringify(params));

    const api_key = "04c35731a5ee918f014970082a0088b1"
    const movieURL = `https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${api_key}&language=en-US`
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    useEffect(()=>{
        fetch(movieURL)
        .then(res=>res.json())
        .then((data)=>{
            setMovies(data)
            // console.log(data)
        })
    },[])
    
     const seletedSeats = []
     const getTicket = ()=>{
        var numberOfChecked = document.querySelectorAll('input[type="checkbox"]:checked').length;
        var totalCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
        var numberNotChecked = totalCheckboxes - numberOfChecked;
        setCount(numberOfChecked)
        console.log(numberNotChecked);
        console.log(numberOfChecked)
     }
     console.log(count);
//     const getTicket=(e)=>{
//     if(seletedSeats == ''){
//         setCount(count=e.target.count+1)
//         setColor('rgb(62, 190, 62)')
//     }
// }
//     const removeTicket=(e)=>{
//         if(seletedSeats > 1){  
//         setCount(count=e.target.count-1)
//         setColor('white')
//         }
//     }
  
    useEffect(()=>{
        setTotal(count * 125)
    },[count])
    console.log(count);

    const paybtn =()=>{
        if(count>0){
            navigate(`/payment?movie_id=${params.movie_id}&movie_time=${params.movie_time}&movie_cinemas=${params.movie_cinemas}
            &movie_date=${params.movie_date}&month=${params.month}&ticket=${count}&total=${total}`)
        }
        else{
            alert('Please select the Ticket, The ticket was empty')
        }
    }
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
        <div className="booking-container">
            <div class="movie_detail">
                <img src={IMGPATH + movies.poster_path} alt={movies.title} class="movie_img" />
                <h2 class="movie_name">{movies.title}</h2>
            </div>
            <h5 class="movie_time">{params.movie_cinemas} {params.movie_time}</h5>
            <h3 id="booking_ticket">{count}Tickets</h3>
            <button class="btn btn-outline-danger" id="booking_payment" onClick={paybtn}>Payment {total}</button>
        </div>
        <div class="booking-seat">
            <div className="seat-key">
                <div class="seat available"></div>
                <h2>Available</h2>
            </div>   
            <div className="seat-key">
                <div class="seat selected"></div>
                <h2>Selected</h2>
            </div>   
            <div className="seat-key">
                <div class="seat booked"></div>
                <h2>Booked</h2>
            </div>     
        </div>
        <div className="whole-container">
            {seats.length > 0 && seats.map(ele=>
            <div className="seat-container" key={ele.id} {...ele}>
                <div className="row">
                <input type='checkbox' className="seat" value={ele.seat} onClick={getTicket}   style={{border:'1px solid rgb(62, 190, 62)',}} />
                </div>
                </div>
            )}
        </div>
        <div id="screen"></div>
        </React.Fragment>
}
export default BookingPage
import React from "react";
import  logo from "../componenets/Logo/cine3.png"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router";
import Homefooter from "./homefooter";

function Payment(){
    let navigate = useNavigate()
    const [movies, setMovies] = useState({})
    
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

    const api_key = "04c35731a5ee918f014970082a0088b1";
    const movieURL = `https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${api_key}&language=en-US`;
    useEffect(()=>{
        fetch(movieURL)
        .then(res=>res.json())
        .then((data)=>{
            setMovies(data)
            console.log(data)
        })
    },[])

    const loadScripts =(src)=>{
        return new Promise((resolve)=>{
            const script = document.createElement('script');
            script.src = src;

            script.onload=()=>{
                resolve(true)
            }
            script.onerror=()=>{
                resolve(false)
            }
           document.body.appendChild(script) 
        })
    }
    const displayRazorpay = async(amount)=>{
        const res = await loadScripts('https://checkout.razorpay.com/v1/checkout.js')
        if(!res){
            alert('you are offline... please check your network for Razorpay payment')
            return
        }

        const options = {
            key: 'rzp_test_TaNL2L4ip2ZIcF',
            currency:"INR",
            amount: amount * 100, 
            name: 'cineBooking',
            description: 'Thank You Booking Enjoy With Your Movie',
            image: logo,
            handler: function(response) {
                alert(response.razorpay_payment_id);
                alert(`Payment Successfull`)
            },
            prefill: {
                name: 'Gaurav',
                contact: '',
                email: ''
            },
            theme: {
                color: 'blue',
            }
        }
        const paymentObj = new window.Razorpay(options);
            paymentObj.open();
    }
    return <React.Fragment>
            <div className="ticket-overlay">
                <div class="ticket-overlay-left">
                    <div className="ticket-details">
                        <h3>BOOKING SUMMARY</h3>
                        <h5>Movie : {movies.title}</h5>
                        <h5>Cinemas : {params.movie_cinemas}</h5>
                        <h5>Show Time : {params.movie_time}</h5>
                        <h5>Date: {params.movie_date}/{params.month}</h5>
                        <h5>Ticket : {params.ticket}</h5>
                        <br /><br />
                        <h4>Total Amount : {params.total}</h4>
                    </div>
                </div>
            </div>
            <div class="payment-form-container">
                <h1 id="payment-h1">Payment Option</h1>
                <div className="payment-form">
                    <button class="btn btn-outline-danger" onClick={()=>{navigate(`/welcome?movie_id=${params.movie_id}&movie_time=${params.movie_time}&movie_cinemas=${params.movie_cinemas}
                    &movie_date=${params.movie_date}&month=${params.month}&ticket=${params.ticket}&total=${params.total}&${displayRazorpay(params.total)}`)}}>Click to Payment</button>
                </div>
            </div>
            <Homefooter />
    </React.Fragment>
}
export default Payment;
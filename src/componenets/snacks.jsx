import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router";
import foods from "../componenets/json/foods.json"
import Footer from "./footer";


function Snacks(){
    let navigate = useNavigate()
    const [price, setPrice] = useState(0)
    const [snackCount, setSnackCount] = useState(0)
    const [popcornCount, setPopcornCount] = useState(0)
    const [drinkCount, setDrinkCount] = useState(0)

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
    console.log(foods);

    const addSnackCount=()=>{
        setSnackCount(prev=>prev+1) 
        foods.snacks.forEach(ele=> ele.id)
        
    }
    const subSnackCount=()=>{
        setSnackCount(prev=>prev-1)
    }
    const addPopcornCount=()=>{
        setPopcornCount(prev=>prev+1)
    }
    const subPopcornCount=()=>{
        setPopcornCount(prev=>prev-1)
    }
    const addDrinkCount=()=>{
        setDrinkCount(prev=>prev+1)
    }
    const subDrinkCount=()=>{
        setDrinkCount(prev=>prev-1)
    }
    

    return <>
    <div>
        <div>
            <h1 id="foods">Snacks & Beverages</h1>
            <div className="food-details">
                <h3 id="grab">G r a b  &nbsp;&nbsp; a &nbsp;&nbsp; b i t e!</h3>
                <h3 id="food-total">Total:{params.total}</h3>
            </div>
            <div className="food-details1">
                <h4 id="prebook">Prebook your snacks and beverages</h4>
                <button  id="food-pay" onClick={()=>navigate(`/payment?movie_id=${params.movie_id}&movie_time=${params.movie_time}&movie_cinemas=${params.movie_cinemas}
                &movie_date=${params.movie_date}&month=${params.month}&ticket=${params.ticket}&total=${params.total}`)}>Payment</button>
            </div>
        </div>
        <div>
            <div className="snacks-items">
                <h2>Snacks</h2>
                <div className="snacks">
                    {foods.snacks.map(snack=>
                    <div className="snacks-container" key={snack.id}>
                        <img className="snack-img" src={snack.img} alt={snack.name}/>
                        <h5>{snack.name} - <FaRupeeSign style={{fontSize:"16px"}}/>{snack.price}</h5>
                        <button class="btn btn-dark btn-sm" style={{margin:"15px 20px"}} onClick={addSnackCount}>+</button>{snackCount}<button class="btn btn-dark btn-sm" style={{margin:"15px 15px"}} onClick={subSnackCount}>-</button>
                    </div>
                    )}
                </div>
            </div>
            <div className="popcorn-items">
                <h2>Popcorn</h2>
                <div className="popcorn">
                {foods.popcorns.map(popcorn=>
                    <div className="popcorn-container" key={popcorn.id}>
                        <img className="snack-img" src={popcorn.img} alt={popcorn.name}/>
                        <h5>{popcorn.name} - <FaRupeeSign style={{fontSize:"16px"}}/>{popcorn.price}</h5>
                        <button class="btn btn-dark btn-sm" style={{margin:"15px 20px"}} onClick={addPopcornCount}>+</button>{popcornCount}<button class="btn btn-dark btn-sm" style={{margin:"15px 15px"}} onClick={subPopcornCount}>-</button>
                    </div>
                    )}
                </div> 
            </div>
            <div className="beverages-items">
                <h2>Beverages</h2>
                <div className="beverages">
                {foods.bevearages.map(beverage=>
                    <div className="beverages-container" key={beverage.id}>
                        <img className="snack-img" src={beverage.img} alt={beverage.name}/>
                        <h5>{beverage.name} - <FaRupeeSign style={{fontSize:"16px"}}/>{beverage.price}</h5>
                        <button class="btn btn-dark btn-sm" style={{margin:"15px 20px"}} onClick={addDrinkCount}>+</button>{drinkCount}<button class="btn btn-dark btn-sm" style={{margin:"15px 15px"}} onClick={subDrinkCount}>-</button>
                    </div>
                    )}                       
                </div>
            </div>
        </div>
    </div> 
    <Footer/>
    </>
}
export default Snacks;
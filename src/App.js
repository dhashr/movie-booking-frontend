import React from "react";
import {BrowserRouter as Router, useRoutes} from "react-router-dom"
import SignupForm from "./signup";
import MovieAPI from "./componenets/movieAPI"
import LoginForm from "./componenets/login"
import Cinemas from "./componenets/theatre";
import BookingPage from "./componenets/bookingpage";
// import Snacks from "./componenets/snacks";
import Payment from "./componenets/payment";
import Greeting from "./thankyou";

const Routing = ()=>{
  const routes = useRoutes([
    {path: "/", element: <SignupForm/>},
    {path: "/login", element: <LoginForm/>},
    {path: "/home", element:<MovieAPI />},
    {path: "/theater", element: <Cinemas/>},
    {path: "/seats", element: <BookingPage/>},
    // {path: "/foods", element: <Snacks/>},
    {path: "/payment", element: <Payment/>},
    {path: "/welcome", element: <Greeting/>}
  ]);
    return routes
}
  const App = () => {
    return (
      <Router>
        <Routing />
      </Router>
    );
  };
export default App;

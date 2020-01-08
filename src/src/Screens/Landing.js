import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  
  
import "../Styles/Landing"
import Login from "../Components/Login"
import Register from "../Components/Register"
function Landing () {

    useEffect(() => {

    });
    
    return (
      <>
      <div  key = "Landing_massage "id= "Landing_massage"> hello user plece log in or register </div>
     <Link to  = "/Register"> <div className = "Laningbatton"> </div>    </Link> 
    <Router>
        <Route path="/Login" exact render={() => <Login/>} />
        <Route path="/Register" exact render={() => <Register/>} />
    </Router>
   </>
    );
  }
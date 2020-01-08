import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Landing from "./src/Screens/Landing"  ; 

//import { ButtonToolbar, Button } from "react-bootstrap";
//file:///C:/Users/Daniel/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/17/Attachments/React%20Native%20Test[658].pdf
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";



function App() {
  useEffect(() => {
  });
  
  return (
    <>
    <Router>
      <div className="App">
        <Route path="/" exact render={() => <Landing/>} />
        <Route path="/login" exact render={() => </>} />
      </div>
      
    </Router>
    </>
  );
}
export default App;


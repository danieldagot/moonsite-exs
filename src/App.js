import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
//import { ButtonToolbar, Button } from "react-bootstrap";
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
        hell
        {/* <Route path="/" exact render={() => <Diet />} /> */}
      </div>
      
    </Router>
    </>
  );
}
export default App;


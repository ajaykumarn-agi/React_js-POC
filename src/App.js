import React from "react";
import Dashboard from "./containers/dashboard/dashboard";
import "./App.css";
import Login from "./containers/login/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies();
  const queryParameters = new URLSearchParams(window.location.search)
  const apikey = queryParameters.get("apikey")
  
setCookie("apiKey",apikey)
  console.log(cookies)


  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
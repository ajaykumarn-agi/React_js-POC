import React from "react";
import Dashboard from "./containers/dashboard/dashboard";
import "./App.css";
import Login from "./containers/login/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
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
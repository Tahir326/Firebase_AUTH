import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Home2 from "./Components/Home/Home2";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Forgotpassword from "./Components/ForgotPassword/Forgotpassword";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {}
          <Route path="/signup" element={<Signup />} />
          <Route path="/Reset" element={<Forgotpassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

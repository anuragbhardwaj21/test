import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "../components/Homepage";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;

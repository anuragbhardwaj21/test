import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { useSelector } from "react-redux";

const AllRoutes = () => {
  const isAuthenticated = useSelector(
    (store) => store.userReducer.isAuthenticated
  );

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/dashboard" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;

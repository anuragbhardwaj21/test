import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import  AddEmployee  from "../Components/AddEmployee";
import { useSelector } from "react-redux";
import EditEmployee from "../Components/EditEmployee";

const AllRoutes = () => {
  const isAuthenticated = useSelector(
    (store) => store.userReducer.isAuthenticated
  );

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        {isAuthenticated ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/dashboard" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/editemployee" element={<EditEmployee />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;

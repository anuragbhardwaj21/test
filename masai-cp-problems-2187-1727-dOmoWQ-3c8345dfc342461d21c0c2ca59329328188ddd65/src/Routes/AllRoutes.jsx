import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import RestaurantPage from "../Pages/RestaurantPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />
    </Routes>
  );
};

export default AllRoutes;

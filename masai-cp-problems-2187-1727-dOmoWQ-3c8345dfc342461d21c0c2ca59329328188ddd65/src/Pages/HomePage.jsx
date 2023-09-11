import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../Redux/action";
import RestaurantCard from "../Components/RestaurantCard";
import Pagination from "../Components/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();
  const { restaurants, isLoading, isError, totalPages } = useSelector(
    (state) => state
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getRestaurants(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {isLoading ? (
        <h1 className="loading_indicator">Loading...</h1>
      ) : isError ? (
        <h1 className="loading_indicator">Error fetching data</h1>
      ) : (
        <div className="restaurants_wrapper">
          {restaurants.data?.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;

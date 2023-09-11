import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSingleRestaurant } from "../Redux/action";

const RestaurantPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state);
  const [isBooked, setBooked] = useState(false);


  useEffect(() => {
    dispatch(getSingleRestaurant(id));
  }, [dispatch, id]);

  const handleBookNow = () => {
    console.log("clicked");
    setBooked(true);
  };

  return (
    <div className="restaurant_single_wrapper">
      {isBooked ? (
        <h1 className="success_msg">Restaurant Booked Successfully !!</h1>
      ) : (
        <div className="restaurant_single_card">
          <img src={restaurant.data.image} alt={restaurant.data.name} className="image" />
          <h3 className="name">Name: {restaurant.data.name}</h3>
          <h4 className="type">Type: {restaurant.data.type}</h4>
          <p className="votes">Votes: {restaurant.data.number_of_votes}</p>
          <p className="price">Price: {restaurant.data.price_starts_from}</p>
          <p className="rating">Rating: {restaurant.data.rating}</p>
          <button className="book_now_btn" onClick={handleBookNow}>
            Book Now!
          </button>
        </div>
      )}
      {isBooked && (
        <Link to="/" className="go_back">
          Go To Home
        </Link>
      )}
    </div>
  );
};

export default RestaurantPage;

import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  console.log(restaurant);
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="restaurant_card_link">
      <div className="restaurant_card">
        <img src={restaurant.image} alt={restaurant.name} className="image" />
        <h3 className="name">Name: {restaurant.name}</h3>
        <h4 className="type">Type: {restaurant.type}</h4>
        <p className="votes">Votes: {restaurant.number_of_votes}</p>
        <p className="price">Price: {restaurant.price_starts_from}</p>
        <p className="rating">Rating: {restaurant.rating}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;

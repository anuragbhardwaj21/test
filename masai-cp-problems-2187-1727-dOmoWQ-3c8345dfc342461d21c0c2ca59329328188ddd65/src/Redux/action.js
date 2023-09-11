import Axios from "axios";
import {
  GET_RESTAURANTS_REQUEST,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
  GET_SINGLE_RESTAURANT_REQUEST,
  GET_SINGLE_RESTAURANT_SUCCESS,
  GET_SINGLE_RESTAURANT_FAILURE,
} from "./actionTypes";

export const getRestaurants = (page=1) => {
  return (dispatch) => {
    dispatch({ type: GET_RESTAURANTS_REQUEST });

    Axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=9`
    )
      .then((response) => {
        dispatch({
          type: GET_RESTAURANTS_SUCCESS,
          payload: {
            restaurants: response.data,
            totalPages: response.data.totalPages,
          },
        });
      })
      .catch((error) => {
        dispatch({ type: GET_RESTAURANTS_FAILURE });
      });
  };
};

export const getSingleRestaurant = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_RESTAURANT_REQUEST });

    Axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
    )
      .then((response) => {
        dispatch({
          type: GET_SINGLE_RESTAURANT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: GET_SINGLE_RESTAURANT_FAILURE });
      });
  };
};

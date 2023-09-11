import {
    GET_RESTAURANTS_REQUEST,
    GET_RESTAURANTS_SUCCESS,
    GET_RESTAURANTS_FAILURE,
    GET_SINGLE_RESTAURANT_REQUEST,
    GET_SINGLE_RESTAURANT_SUCCESS,
    GET_SINGLE_RESTAURANT_FAILURE,
  } from "./actionTypes";
  
  const initialState = {
    isLoading: false,
    isError: false,
    restaurants: [],
    totalPages: 0,
    restaurant: {},
    currentPage: 1,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RESTAURANTS_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case GET_RESTAURANTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          restaurants: action.payload.restaurants,
          totalPages: action.payload.totalPages,
        };
      case GET_RESTAURANTS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case GET_SINGLE_RESTAURANT_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case GET_SINGLE_RESTAURANT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          restaurant: action.payload,
        };
      case GET_SINGLE_RESTAURANT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  
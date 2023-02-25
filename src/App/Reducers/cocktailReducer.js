/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_FAVORITE_COCKTAILS_REQUEST,
  GET_COCKTAILS_FAILED,
  GET_COCKTAILS_REQUEST,
  GET_COCKTAILS_SUCCESS,
  REMOVE_FAVORITE_COCKTAILS_REQUEST,
  SEARCH_COCKTAILS_FAILED,
  SEARCH_COCKTAILS_REQUEST,
  SEARCH_COCKTAILS_SUCCESS,
} from "../Types";

const initialState = {
  list: [],
  favorite: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_COCKTAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    }
    case GET_COCKTAILS_FAILED: {
      return {
        ...state,
        loading: false,
        list: [],
      };
    }
    case SEARCH_COCKTAILS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case SEARCH_COCKTAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    }
    case SEARCH_COCKTAILS_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_FAVORITE_COCKTAILS_REQUEST: {
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    }
    case REMOVE_FAVORITE_COCKTAILS_REQUEST: {
      return {
        ...state,
        favorite: state.favorite.filter((x) => x.idDrink !== action.payload),
      };
    }
    default:
      return state;
  }
};

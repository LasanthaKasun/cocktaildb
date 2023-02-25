import { toast } from "react-toastify";
import { getRendomItems } from "../Helper";
import { instance } from "../Rest";
import { get_all_cocktail } from "../Rest/apis";
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

export const getCocktailsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COCKTAILS_REQUEST });
    await instance({
      url: `${get_all_cocktail}`,
      method: "GET",
    }).then((res) => {
      if (res.status === 200) {
        const data = res.data.drinks;
        const randomItems = getRendomItems(data, 5);
        dispatch({ type: GET_COCKTAILS_SUCCESS, payload: randomItems });
      } else {
        dispatch({ type: GET_COCKTAILS_FAILED });
        toast.error("Something went wrong please try again leter");
      }
    });
  } catch (e) {
    toast.error("Something went wrong please try again leter");
    dispatch({ type: GET_COCKTAILS_FAILED });
  }
};

export const searchCocktailsAction = (payload) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_COCKTAILS_REQUEST });
    await instance({
      url: `${get_all_cocktail + payload.value}`,
      method: "GET",
    }).then((res) => {
      if (res.status === 200 && res.data.drinks) {
        const data = res.data.drinks;
        dispatch({ type: SEARCH_COCKTAILS_SUCCESS, payload: data });
      } else {
        dispatch({ type: SEARCH_COCKTAILS_FAILED });
        toast.error("Not found any cocktail under " + payload.value);
      }
    });
  } catch (e) {
    toast.error("Something went wrong please try again leter");
    dispatch({ type: SEARCH_COCKTAILS_FAILED });
  }
};

export const addFavoriteItemAction = (payload) => async (dispatch) => {
  dispatch({ type: ADD_FAVORITE_COCKTAILS_REQUEST, payload });
  toast.success("Item added successfully");
};

export const removeFavoriteItemAction = (payload) => async (dispatch) => {
  dispatch({ type: REMOVE_FAVORITE_COCKTAILS_REQUEST, payload });
  toast.warn("Item deleted successfully");
};

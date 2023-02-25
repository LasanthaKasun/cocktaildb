import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cocktailReducer from "./cocktailReducer";

export const rootReducr = combineReducers({
  cocktailData: cocktailReducer,
});

const store = createStore(rootReducr, applyMiddleware(thunk));

export default store;

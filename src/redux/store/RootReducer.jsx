import { combineReducers } from "@reduxjs/toolkit";
import { login } from "./slice/auth/auth.slice";


const combinedReducer = combineReducers({
  session: login,

});

export const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

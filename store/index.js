import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { loginReducer } from "./reducers/login";
import { customerReducer } from "./reducers/customer";

const reducer = combineReducers({
  login: loginReducer,
  customer: customerReducer,
});

const makeStore = () =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "./features/cocktailSlice";

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
  },
});

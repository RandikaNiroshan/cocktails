import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./features/cocktailsSlice";
import randomReducer from "./features/randomSlice";
import detailsReducer from "./features/detailsSlice";

export default configureStore({
  reducer: {
    randomDrink: randomReducer,
    cocktails: cocktailsReducer,
    details: detailsReducer,
  },
});

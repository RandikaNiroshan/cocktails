import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./features/cocktailsSlice";
import randomReducer from "./features/randomSlice";
import detailsReducer from "./features/detailsSlice";
import initialReducer from "./features/initialSlice";
import youtubeReducer from "./features/youtubeSlice";
import alcoholicReducer from "./features/alcoholicSlice";
import categoryReducer from "./features/categorySlice";
import glassReducer from "./features/glassSlice";

export default configureStore({
  reducer: {
    initial: initialReducer,
    random: randomReducer,
    cocktails: cocktailsReducer,
    details: detailsReducer,
    alcoholic: alcoholicReducer,
    category: categoryReducer,
    glass: glassReducer,
    youtube: youtubeReducer,
  },
});
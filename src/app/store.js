import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "./features/cocktailsSlice";
import randomReducer from "./features/randomSlice";
import detailsReducer from "./features/detailsSlice";
import initialReducer from "./features/initialSlice";
import youtubeReducer from "./features/youtubeSlice";

export default configureStore({
  reducer: {
    initial: initialReducer,
    random: randomReducer,
    cocktails: cocktailsReducer,
    details: detailsReducer,
    youtube: youtubeReducer,
  },
});

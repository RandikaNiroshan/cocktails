import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import cocktailsReducer from "./features/cocktailsSlice";
import randomReducer from "./features/randomSlice";
import detailsReducer from "./features/detailsSlice";
import initialReducer from "./features/initialSlice";
import youtubeReducer from "./features/youtubeSlice";
import alcoholicReducer from "./features/alcoholicSlice";
import categoryReducer from "./features/categorySlice";
import glassReducer from "./features/glassSlice";
import favoriteReducer from "./features/favoriteSlice";

const persistConfig = {
  key: 'favorites',
  storage
};

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);


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
    favorite: persistedFavoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
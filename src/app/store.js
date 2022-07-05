import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import cocktailsReducer from "./features/cocktailsSlice";
import randomReducer from "./features/randomSlice";
import detailsReducer from "./features/detailsSlice";
import youtubeReducer from "./features/youtubeSlice";
import alcoholicReducer from "./features/alcoholicSlice";
import categoryReducer from "./features/categorySlice";
import glassReducer from "./features/glassSlice";
import favoriteReducer from "./features/favoriteSlice";
import ingredientReducer from "./features/ingredientSlice";
import aboutIngredientReducer from "./features/aboutIngredientSlice";
import fetchByIngredientReducer from "./features/fetchByIngredientSlice";
import modalReducer from "./features/modalSlice";
import searchReducer from "./features/searchSlice";

const persistConfig = {
  key: 'favorites',
  storage
};

const persistedFavoriteReducer = persistReducer(persistConfig, favoriteReducer);

export default configureStore({
  reducer: {
    random: randomReducer,
    cocktails: cocktailsReducer,
    details: detailsReducer,
    alcoholic: alcoholicReducer,
    category: categoryReducer,
    glass: glassReducer,
    youtube: youtubeReducer,
    ingredient: ingredientReducer,
    aboutIngredient: aboutIngredientReducer,
    fetchByIngredient: fetchByIngredientReducer,
    modal: modalReducer,
    search: searchReducer,
    favorite: persistedFavoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
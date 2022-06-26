import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorite.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;

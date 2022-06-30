import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showIngredientModal: false,
  showSearchModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    showIngredientModal: (state) => {
      state.showIngredientModal = true;
    },
    hideIngredientModal: (state) => {
      state.showIngredientModal = false;
    },
    showSearchModal: (state) => {
      state.showSearchModal = true;
    },
    hideSearchModal: (state) => {
      state.showSearchModal = false;
    },
  },
});

export const {
  showIngredientModal,
  hideIngredientModal,
  showSearchModal,
  hideSearchModal,
} = modalSlice.actions;

export default modalSlice.reducer;

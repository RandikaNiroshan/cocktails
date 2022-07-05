import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showIngredientModal: false,
  showSearchModal: false,
  showMobileMenu: false,
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
    showMobileMenu: (state) => {
      state.showMobileMenu = true;
    },
    hideMobileMenu: (state) => {
      state.showMobileMenu = false;
    },
  },
});

export const {
  showIngredientModal,
  hideIngredientModal,
  showSearchModal,
  hideSearchModal,
  showMobileMenu,
  hideMobileMenu,
} = modalSlice.actions;

export default modalSlice.reducer;

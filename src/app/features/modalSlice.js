import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showIngredientModal: false,
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
    }
  }
});

export const {showIngredientModal, hideIngredientModal} = modalSlice.actions;
export default modalSlice.reducer;

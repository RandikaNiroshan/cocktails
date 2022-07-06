import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeIngredient } from "../utils/helpers";

export const fetchIngredientDetails = createAsyncThunk(
  "aboutIngredient/fetchIngredientDetails",
  async (ingredient, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await axios.get(
      `${API_BASE_URL}/search.php?i=${ingredient}`,
      {
        cancelToken: source.token,
      }
    );
    return organizeIngredient(response.data.ingredients[0]);
  }
);

const initialState = {
  ingredient: {},
  loading: null,
  error: null,
};

export const aboutIngredientSlice = createSlice({
  name: "aboutIngredient",
  initialState: initialState,
  extraReducers: {
    [fetchIngredientDetails.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchIngredientDetails.fulfilled]: (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.ingredient = payload;
    },
    [fetchIngredientDetails.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default aboutIngredientSlice.reducer;

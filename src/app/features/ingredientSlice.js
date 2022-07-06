import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeIngredients } from "../utils/helpers";

export const fetchIngredients = createAsyncThunk(
  "ingredient/fetchIngredients",
  async (_data, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await axios.get(`${API_BASE_URL}/list.php?i=list`, {
      cancelToken: source.token,
    });
    return organizeIngredients(response.data.drinks);
  }
);

const initialState = {
  ingredients: [],
  loading: null,
  error: null,
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState: initialState,
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.ingredients = action.payload;
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default ingredientSlice.reducer;

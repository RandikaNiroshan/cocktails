import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeCocktail } from "../utils/helpers";

export const fetchCocktailDetails = createAsyncThunk(
  "details/fetchCocktailDetails",
  async (id, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`, {
      cancelToken: source.token,
    });
    return organizeCocktail(response.data.drinks[0]);
  }
);

const initialState = {
  cocktail: {},
  loading: null,
  error: null,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState: initialState,
  extraReducers: {
    [fetchCocktailDetails.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchCocktailDetails.fulfilled]: (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.cocktail = payload;
    },
    [fetchCocktailDetails.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default detailsSlice.reducer;

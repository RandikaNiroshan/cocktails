import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeCocktailList } from "../utils/helpers";

export const searchCocktails = createAsyncThunk(
  "search/searchCocktails",
  async (search, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await axios.get(`${API_BASE_URL}/search.php?s=${search}`, {
      cancelToken: source.token,
    });
    return organizeCocktailList(response.data.drinks, 16);
  }
);

const initialState = {
  cocktails: [],
  loading: null,
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  extraReducers: {
    [searchCocktails.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [searchCocktails.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.cocktails = action.payload;
    },
    [searchCocktails.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default searchSlice.reducer;

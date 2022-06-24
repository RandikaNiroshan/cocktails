import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeCocktailList } from "../utils/helpers";

export const fetchByCategory = createAsyncThunk(
  "category/fetchByCategory",
  async (type) => {
    const response = await axios.get(`${API_BASE_URL}/filter.php?c=${type}`);
    return organizeCocktailList(response.data.drinks);
  }
);

const initialState = {
  cocktails: [],
  loading: null,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  extraReducers: {
    [fetchByCategory.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchByCategory.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.cocktails = action.payload;
    },
    [fetchByCategory.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default categorySlice.reducer;

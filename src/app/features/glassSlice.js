import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeCocktailList } from "../utils/helpers";

export const fetchByGlass = createAsyncThunk(
  "glass/fetchByGlass",
  async (type) => {
    const response = await axios.get(`${API_BASE_URL}/filter.php?g=${type}`);
    return organizeCocktailList(response.data.drinks);
  }
);

const initialState = {
  cocktails:[],
  loading: null,
  error: null,
};

export const glassSlice = createSlice({
  name: "glass",
  initialState: initialState,
  extraReducers: {
    [fetchByGlass.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchByGlass.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.cocktails = action.payload;
    },
    [fetchByGlass.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default glassSlice.reducer;
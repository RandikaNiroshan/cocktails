import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeCocktail } from "../utils/helpers";

export const fetchRandomDrink = createAsyncThunk(
  "random/fetchRandomDrink",
  async (_data, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await axios.get(`${API_BASE_URL}/random.php`, {
      cancelToken: source.token,
    });
    return organizeCocktail(response.data.drinks[0]);
  }
);

const initialState = {
  randomCocktail: {},
  loading: null,
  error: null,
};

export const randomSlice = createSlice({
  name: "random",
  initialState: initialState,
  extraReducers: {
    [fetchRandomDrink.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchRandomDrink.fulfilled]: (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.randomCocktail = payload;
    },
    [fetchRandomDrink.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default randomSlice.reducer;

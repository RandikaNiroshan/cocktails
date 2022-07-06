import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeCocktailList } from "../utils/helpers";

export const fetchByIngredient = createAsyncThunk(
  "fetchByIngredient/fetchByIngredient",
  async (id, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await axios.get(
      `${API_BASE_URL}/filter.php?i=${id}`, {
          cancelToken: source.token,
        }
    );
    return organizeCocktailList(response.data.drinks);
  }
);

const initialState = {
  cocktails: [],
  loading: null,
  error: null,
};

export const fetchByIngredientSlice = createSlice({
  name: "fetchByIngredient",
  initialState: initialState,
  extraReducers: {
    [fetchByIngredient.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchByIngredient.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.cocktails = action.payload;
    },
    [fetchByIngredient.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default fetchByIngredientSlice.reducer;

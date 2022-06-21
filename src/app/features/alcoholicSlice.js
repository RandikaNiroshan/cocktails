import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeCocktailList } from "../utils/helpers";

export const fetchByAlcoholic = createAsyncThunk(
  "alcoholic/fetchByAlcoholic",
  async (type) => {
    const response = await axios.get(`${API_BASE_URL}/filter.php?a=${type}`);
    return organizeCocktailList(response.data.drinks);
  }
);

const initialState = {
  alcoholic: [],
  selected: "Alcoholic",
  loading: null,
  error: null,
};

export const alcoholicSlice = createSlice({
  name: "alcoholic",
  initialState: initialState,
  reducers: {
    selectAlcoholic: (state, {payload}) =>{
        state.selected = payload;
    }
  },
  extraReducers: {
    [fetchByAlcoholic.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchByAlcoholic.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.cocktails = action.payload;
    },
    [fetchByAlcoholic.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default alcoholicSlice.reducer;

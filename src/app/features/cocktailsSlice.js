import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";
import { organizeCocktailList } from "../utils/helpers";

export const initialFetch = createAsyncThunk(
  "cocktails/initialFetch",
  async (_data, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await axios.get(`${API_BASE_URL}/search.php?s=`, {
      cancelToken: source.token,
    });
    return organizeCocktailList(response.data.drinks, 24);
  }
);

export const fetchByFirstLetter = createAsyncThunk(
  "cocktails/fetchByFirstLetter",
  async (letter, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const response = await axios.get(`${API_BASE_URL}/search.php?f=${letter}`, {
      cancelToken: source.token,
    });
    return organizeCocktailList(response.data.drinks, 24);
  }
);

const initialState = {
  cocktails: [],
  selectedLetter: "",
  loading: null,
  error: null,
};

export const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState: initialState,
  reducers: {
    onLetterClick: (state, { payload }) => {
      state.selectedLetter = payload;
    },
  },
  extraReducers: {
    [initialFetch.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [initialFetch.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.cocktails = action.payload;
    },
    [initialFetch.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
    [fetchByFirstLetter.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchByFirstLetter.fulfilled]: (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.cocktails = payload;
    },
    [fetchByFirstLetter.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export const { onLetterClick } = cocktailsSlice.actions;

export default cocktailsSlice.reducer;

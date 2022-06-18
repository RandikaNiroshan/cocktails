import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { organizeCocktail, organizeCocktailList } from "../../utils/helpers";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const initialFetch = createAsyncThunk(
  "cocktail/initialFetch",
  async () => {
    const response = await axios.get(`${BASE_URL}/search.php?s=`);
    return organizeCocktailList(response.data.drinks);
  }
);

export const randomDrink = createAsyncThunk(
  "cocktail/randomDrink",
  async () => {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return organizeCocktail(response.data.drinks[0]);
  }
);

export const fetchByFirstLetter = createAsyncThunk(
  "cocktail/fetchByFirstLetter",
  async (letter) => {
    const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
    return organizeCocktailList(response.data.drinks);
  }
);

const initialState = {
  randomCocktail: {},
  cocktails: [],
  ingredients: [],
  categories: [],
  glasses: [],
  favorite: [],
  selectedLetter: "",
  loading: true,
  loadingRandom: true,
  error: null,
};

export const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: initialState,
  reducers: {
    onLetterClick: (state, { payload }) => {
      state.selectedLetter = payload;
    },
  },
  extraReducers: {
    [initialFetch.pending]: (state) => {
      state.loading = true;
    },
    [initialFetch.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cocktails = payload;
    },
    [initialFetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [randomDrink.pending]: (state) => {
      state.loadingRandom = true;
    },
    [randomDrink.fulfilled]: (state, { payload }) => {
      state.loadingRandom = false;
      state.randomCocktail = payload;
    },
    [randomDrink.rejected]: (state, action) => {
      state.loadingRandom = false;
      state.error = action.error.message;
    },
    [fetchByFirstLetter.pending]: (state) => {
      state.loading = true;
    },
    [fetchByFirstLetter.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cocktails = payload;
    },
    [fetchByFirstLetter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { onLetterClick } = cocktailSlice.actions;

export default cocktailSlice.reducer;

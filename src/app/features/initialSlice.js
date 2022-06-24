import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL, HTTP_STATUS } from "../utils/constants";

export const fetchCategories = createAsyncThunk(
  "initial/fetchCategories",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/list.php?c=list`);
    return response.data.drinks;
  }
);

export const fetchGlasses = createAsyncThunk(
  "initial/fetchGlasses",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/list.php?g=list`);
    return response.data.drinks;
  }
);

export const fetchAlcoholic = createAsyncThunk(
  "initial/fetchAlcoholic",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/list.php?a=list`);
    return response.data.drinks;
  }
);

const initialState = {
  categoriesList: [],
  alcoholicList: [],
  glassesList: [],
  selectedCategory: 0,
  selectedAlcoholic: 0,
  selectedGlass: 0,
  loading: null,
  error: null,
};

export const initialSlice = createSlice({
  name: "initial",
  initialState: initialState,
  reducers: {
    updateCategory: (state, {payload}) =>{
      state.selectedCategory = payload;
    },
    updateAlcoholic: (state, {payload}) =>{
      state.selectedAlcoholic = payload;
    },
    updateGlass: (state, {payload}) =>{
      state.selectedGlass = payload;
    }
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.categoriesList = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
    [fetchGlasses.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchGlasses.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.glassesList = action.payload;
    },
    [fetchGlasses.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
    [fetchAlcoholic.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchAlcoholic.fulfilled]: (state, action) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.alcoholicList = action.payload;
    },
    [fetchAlcoholic.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default initialSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HTTP_STATUS, YOUTUBE_API_BASE_URL } from "../utils/constants";
import { youtubeResponseToVideos } from "../utils/helpers";

export const fetchVideoList = createAsyncThunk(
  "youtube/fetchVideoList",
  async (title, { signal }) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => {
      source.cancel();
    });
    const searchQuery = `How to make ${title} cocktail`;
    const response = await axios.get(`${YOUTUBE_API_BASE_URL}/search`, {
      params: {
        maxResults: 6,
        safeSearch: "strict",
        q: searchQuery,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
      cancelToken: source.token,
    });
    return youtubeResponseToVideos(response.data["items"]);
  }
);

const initialState = {
  videos: [],
  loading: null,
  error: null,
};

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState: initialState,
  extraReducers: {
    [fetchVideoList.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchVideoList.fulfilled]: (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.videos = payload;
    },
    [fetchVideoList.rejected]: (state, action) => {
      state.loading = HTTP_STATUS.REJECTED;
      state.error = action.error.message;
    },
  },
});

export default youtubeSlice.reducer;

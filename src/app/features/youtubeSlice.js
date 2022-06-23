import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HTTP_STATUS, YOUTUBE_API_BASE_URL } from "../utils/constants";
import { youtubeResponseToVideos } from "../utils/helpers";

export const fetchVideoList = createAsyncThunk(
  "youtube/fetchVideoList",
  async (title) => {
    const searchQuery = `How to make ${title} cocktail`;
    const replaceSpaces = searchQuery.replaceAll(" ", "%20");
    const response = await axios.get(
      `${YOUTUBE_API_BASE_URL}/search?part=snippet&maxResults=10&q=${replaceSpaces}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    return youtubeResponseToVideos(response.data["items"]);
  }
);

const initialState = {
  videos: [],
  currentVideoIndex: 0,
  loading: null,
  error: null,
};

export const youtubeSlice = createSlice({
  name: "youtube",
  initialState: initialState,
  reducer: {
    skipVideo: (state) => {
      state.currentVideoIndex =
        state.currentVideoIndex === 9 ? 0 : state.currentVideoIndex + 1;
    },
  },
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

export const { skipVideo } = youtubeSlice.actions;

export default youtubeSlice.reducer;

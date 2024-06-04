import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../utils/apiurl";
console.log("Hello Heloo");

// initial state
const initialState = {
  posts: [],
  loading: false,
  error: "",
};

// Create Async Thunk
export const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const res = await axios.get(API);
  return res.data;
});

// Slice
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handle lifecycle - pending - success - rejected

    // pending
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });

    // fulfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });

    // rejected
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// generate reducer
const postReducer = postSlice.reducer;

export default postReducer;

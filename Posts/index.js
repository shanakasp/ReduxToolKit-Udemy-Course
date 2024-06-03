const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

console.log("Hello Heloo");

const API = "https://jsonplaceholder.typicode.com/posts";

//initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

//Create Async Thunk
const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const data = await axios.get;
  return data;
});

//Slice
createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    //handle lifecycle - pending - success - rejected
    //pending
  },
});

//Phaces of Create Async Thunk
// Pending , FulFilled, rejected

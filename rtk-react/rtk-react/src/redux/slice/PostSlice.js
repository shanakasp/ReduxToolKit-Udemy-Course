const {
  createAsyncThunk,
  createSlice,
  configureStore,
} = require("@reduxjs/toolkit");
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
  const res = await axios.get(API);
  return res.data;
});

//Slice
const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    //handle lifecycle - pending - success - rejected

    //pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });

    //fulfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });

    //rejected
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

//generate reducer
const postReducer = postSlice.reducer;

export default postReducer;

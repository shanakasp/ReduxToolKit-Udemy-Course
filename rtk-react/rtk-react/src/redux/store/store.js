import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slice/PostSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;

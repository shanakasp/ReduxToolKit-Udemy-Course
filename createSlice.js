//initial state

const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialState = {
  counter: 0,
};

//Create slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    reset: (state) => {
      state.counter = 0;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload.amount;
    },
  },
});

//Generate Actions
const { decrement, increment, incrementByAmount } = counterSlice.actions;

//Generate reducer
const counterReducer = counterSlice.reducer;

const store = configureStore({
  reducer: counterReducer,
});

//dispatch action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrment());
store.dispatch(incrementBy(200));
console.log(store.getState());

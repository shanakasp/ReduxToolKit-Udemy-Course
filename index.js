const { createAction, nanoid, createReducer } = require("@reduxjs/toolkit");

console.log("Welcome to site 123");

//Initial State

const initialState = {
  counter: 0,
};

//Action Creator

const increment = createAction("INCREMENT");
const decrment = createAction("DECREMENT");
const resetCounter = createAction("RESET");
const incrementBy = createAction("INCREMENT_BY", (amount, user) => {
  return {
    payload: {
      amount,
      user,
      id: nanoid(),
    },
  };
});
console.log(incrementBy(20, "Ema"));

//Create reducer

//Builder Callback function Create reducer
const counterSlice2 = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.counter += 1;
  });

  builder.addCase(decrment, (state) => {
    state.counter -= 1;
  });

  builder.addCase(resetCounter, (state) => {
    state.counter = 0;
  });
  builder.addCase(incrementBy, (state, action) => {
    state.counter += action.payload.amount;
  });
});

//Map object notation Create reducer
// const counterSlice = createAction(initialState, {
//   [increment]: (state) => {
//     state.counter += 1;
//   },
//   [decrment]: (state) => {
//     state.counter -= 1;
//   },
//   [resetCounter]: (state) => {
//     state.counter = 0;
//   },
//   [incrementBy]: (state, action) => {
//     state.counter += action.payload.amount;
//   },
// });

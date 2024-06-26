const {
  createAction,
  nanoid,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");
const { default: logger } = require("redux-logger");

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

//store

const store = configureStore({
  reducer: counterSlice2,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//dispatch action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrment());
store.dispatch(incrementBy(200));
console.log(store.getState());

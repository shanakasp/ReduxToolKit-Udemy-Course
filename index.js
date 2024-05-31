const { createAction, nanoid } = require("@reduxjs/toolkit");

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

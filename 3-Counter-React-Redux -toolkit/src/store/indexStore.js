import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterVal: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState, 
  reducers: {

    increment: (state) => {
      state.counterVal += 1;
    },
    decrement: (state) => {
      state.counterVal -= 1;
    },
    counterInput: (state, action) => {
      console.log('====================================');
      console.log('inpput : ' +  action.payload);
      console.log('====================================');
      state.counterVal += Number(action.payload);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { increment, decrement, counterInput } = counterSlice.actions;

export default counterStore;

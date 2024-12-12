import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {  
        value: 0,
        mario: 0,
        link: 0,
        donkeykong: 0
  },
  reducers: {
    increment: (state) => {
        state.value += 1; 
      },
      incrementmario: (state) => {
        state.mario += 1;
      },
      incrementlink: (state) => {
        state.link += 1;
      },
      incrementdonkeykong: (state) => {
        state.donkeykong += 5;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      decrementmario: (state) => {
        state.mario -= 1;
      },
      decrementlink: (state) => {
        state.link -= 1;
      },
      decrementdonkeykong: (state) => {
        state.donkeykong -= 5;
      },
    }
    
  });
  
  export const { increment, decrement, incrementmario, decrementmario, incrementlink, decrementlink, incrementdonkeykong, decrementdonkeykong } = counterSlice.actions;
  
  export default counterSlice.reducer;
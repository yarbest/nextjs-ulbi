import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter = action.payload;
    },
  },
});

export const selectCounter = (state: RootState) => state.counter.counter;

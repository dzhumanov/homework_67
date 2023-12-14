import { createSlice } from "@reduxjs/toolkit";

interface calculatorState {
    value: string;
    result: string | null;
}

const initialState: calculatorState = {
    value: '',
    result: null,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    one: (state) => {
      state.value += "1";
    },
    two: (state) => {
      state.value += "2";
    },
    three: (state) => {
      state.value += "3";
    },
    four: (state) => {
      state.value += "4";
    },
    five: (state) => {
      state.value += "5";
    },
    six: (state) => {
      state.value += "6";
    },
    seven: (state) => {
      state.value += "7";
    },
    eight: (state) => {
      state.value += "8";
    },
    nine: (state) => {
      state.value += "9";
    },
    zero: (state) => {
      state.value += "0";
    },
    plus: (state) => {
      state.value += "+";
    },
    minus: (state) => {
      state.value += "-";
    },
    multiplication: (state) => {
      state.value += "*";
    },
    division: (state) => {
      state.value += "/";
    },
    slice: (state) => {
      if (state.value.length > 0) {
        state.value = state.value.slice(0, -1);
      }
    },
    onResult: (state) => {
        state.result = eval(state.value);
        state.value = '';
    }
  },
});

export const calculatorReducer = calculatorSlice.reducer;

export const {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  slice,
  plus,
  minus,
  multiplication,
  division,
  onResult,
} = calculatorSlice.actions;
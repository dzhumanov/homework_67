import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface codeState {
  value: string;
  styleValue: string;
  buttonValue: boolean;
  text: string;
  checked: boolean;
}

const initialState: codeState = {
  value: "",
  styleValue: "",
  buttonValue: false,
  text: '',
  checked: false,
};

export const doorSlice = createSlice({
  name: "door",
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
    text: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    changeColor: (state, action: PayloadAction<string>) => {
      state.styleValue = action.payload;
    },
    disableButtons: (state, action: PayloadAction<boolean>) => {
      state.buttonValue = action.payload;
    },
    slice: (state) => {
      if (state.value.length > 0) {
        state.value = state.value.slice(0, -1);
      }
    },
    check: (state) => {
        state.checked = true;
    }
  },
});

export const doorReducer = doorSlice.reducer;

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
  text,
  changeColor,
  disableButtons,
  slice,
  check,
} = doorSlice.actions;

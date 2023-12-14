import { configureStore } from "@reduxjs/toolkit";
import { doorReducer } from "../components/Door/doorSlice";
import { calculatorReducer } from "../components/Calculator/calculatorSlice";

export const store = configureStore({
  reducer: {
    door: doorReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

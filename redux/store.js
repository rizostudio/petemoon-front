import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "@/redux/base";

export const store = configureStore({
  reducer: {
    base: baseReducer,
  },
});

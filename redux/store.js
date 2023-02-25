import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "@/redux/base";
import dashboardReducer from "@/redux/dashboard";

export const store = configureStore({
  reducer: {
    base: baseReducer,
    dashboard: dashboardReducer,
  },
});

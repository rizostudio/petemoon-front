import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
  refreshToken: "",
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { setRefreshToken } = baseSlice.actions;

export const selectRefreshToken = (state) => state.base.refreshToken;

export default baseSlice.reducer;

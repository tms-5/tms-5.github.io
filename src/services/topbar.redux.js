import { createSlice } from "@reduxjs/toolkit";

export const topBarRedux = createSlice({
  name: "0",
  initialState: {
    language: "EN",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = topBarRedux.actions;

export default topBarRedux.reducer;

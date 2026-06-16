import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state) {
      state.status = true;
    },

    signOut(state) {
      state.status = false;
    },
  },
});

export const { logIn, signOut } = authSlice.actions;
export default authSlice.reducer;

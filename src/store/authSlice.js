import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,

  users: JSON.parse(localStorage.getItem("users")) || [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    log(state) {
      state.status = !state.status;
    },

    addNewUser(state, action) {
      const newUser = action.payload;
      state.users.push(newUser);
    },
  },
});

export const { log, addNewUser } = authSlice.actions;
export default authSlice.reducer;

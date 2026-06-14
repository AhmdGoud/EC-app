import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    temp: (state = {}) => state,
  },
});

export default store;

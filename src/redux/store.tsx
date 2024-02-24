import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // modalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
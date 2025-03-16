import { configureStore } from "@reduxjs/toolkit";
import playerReduser from "../slice/index";

export const store = configureStore({
  reducer: {
    player: playerReduser,
  },
  devTools: process.env.NODE_ENV !== "production",
});

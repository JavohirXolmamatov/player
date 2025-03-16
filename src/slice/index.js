import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  players: [],
  filter: [],
  error: null,
};
export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    playerStart: (state) => {
      state.isLoading = true;
    },
    playerSuccess: (state, actions) => {
      state.isLoading = false;
      state.players = actions.payload;
    },
    playerFailure: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const { playerStart, playerSuccess, playerFailure } =
  playerSlice.actions;
export default playerSlice.reducer;

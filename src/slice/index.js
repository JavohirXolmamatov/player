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
    playerCreated: (state, action) => {
      state.isLoading = false;
      console.log("created indexda");
      state.players = [...state.players, action.payload];
    },
  },
});

export const { playerStart, playerSuccess, playerFailure, playerCreated } =
  playerSlice.actions;
export default playerSlice.reducer;

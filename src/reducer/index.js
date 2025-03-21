const initialState = {
  players: [],
  playersLoadingStatus: "success",
  filters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYERS_FETCHING":
      return {
        ...state,
        playersLoadingStatus: "loading",
      };

    case "PLAYERS_FETCHED":
      return {
        ...state,
        players: action.payload,
        playersLoadingStatus: "success",
      };

    case "PLAYERS_FETCHING_ERROR":
      return {
        ...state,
        playersLoadingStatus: "error",
      };

    default:
      return state;
  }
};

export default reducer;

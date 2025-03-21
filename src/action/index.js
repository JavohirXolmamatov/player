export const playersFetching = () => {
  return {
    type: "PLAYERS_FETCHING",
  };
};

export const playersFetched = (players) => {
  return {
    type: "PLAYERS_FETCHED",
    payload: players,
  };
};

export const playersFetchedError = () => {
  return {
    type: "PLAYERS_FETCHING_ERROR",
  };
};

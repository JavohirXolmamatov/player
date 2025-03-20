import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playersFetched,
  playersFetchedError,
  playersFetching,
} from "../action/index";
import { useHttp } from "../hooks/use-http";
import { Spinners, Error, Empty, PlayersListItem } from "./index";

function PlayerList() {
  const dispatch = useDispatch();
  const { players, playersLoadingStatus } = useSelector((state) => state);
  const { request } = useHttp();

  useEffect(() => {
    dispatch(playersFetching());
    request("http://localhost:8000/players")
      .then((data) => dispatch(playersFetched(data)))
      .catch(() => dispatch(playersFetchedError()));
  }, []);

  if (playersLoadingStatus === "loading") {
    return (
      <div className="h-full">
        <Spinners clasnames={"block w-full mx-auto text-white h-5 w-5"} />
      </div>
    );
  } else if (playersLoadingStatus === "error") {
    return (
      <div>
        <Error />
      </div>
    );
  }

  const renderPlayers = () => {
    if (!players.length) {
      return <Empty />;
    }

    return (
      <div className="max-h-fit px-2 py-3 md:max-w-9/10 space-y-3 relative">
        {players &&
          players.map((player) => (
            <PlayersListItem player={player} key={player.id} />
          ))}
      </div>
    );
  };

  return <div>{renderPlayers()}</div>;
}

export default PlayerList;

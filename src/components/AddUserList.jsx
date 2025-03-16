import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";
import { playerFailure, playerStart, playerSuccess } from "../slice";
import { useEffect, useState } from "react";
import PlayerService from "../service/playerService";

function AddUserList() {
  const dispatch = useDispatch();
  const { players } = useSelector((state) => state.player);

  const Players = async () => {
    dispatch(playerStart());
    try {
      const res = await PlayerService.getPlayer();
      dispatch(playerSuccess(res));
    } catch (error) {
      dispatch(playerFailure());
      console.log(error);
    }
  };

  useEffect(() => {
    Players();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 3;

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-col space-y-3 min-h-2/3">
        {currentPlayers &&
          currentPlayers.map((player) => (
            <UserList player={player} key={player.id} />
          ))}
      </div>

      <div className="flex flex-row space-x-3 justify-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gradient-to-l from-gray-500 to-blue-900 px-3 py-1 rounded-md shadow-2xl text-white font-medium hover:scale-110 transition-transform"
          role="button"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastPlayer >= players.length}
          className="bg-gradient-to-l from-gray-500 to-blue-900 px-3 py-1 rounded-md shadow-2xl text-white font-medium hover:scale-110 transition-transform"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AddUserList;

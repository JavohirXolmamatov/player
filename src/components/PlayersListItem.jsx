import { IoMdFootball } from "react-icons/io";
import { LuFlag } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import playerImg from "../assets/player.png";
function PlayersListItem({ player }) {
  let bgClasses;

  switch (player.continent) {
    case "Europe":
      bgClasses = "bg-gradient-to-r from-blue-500 to-red-500";
      break;
    case "Asia":
      bgClasses = "bg-gradient-to-r from-green-500 to-red-500";
      break;
    case "Africa":
      bgClasses = "bg-gradient-to-r from-yellow-500 to-red-500";
      break;
    case "America":
      bgClasses = "bg-gradient-to-r from-cyan-500 to-red-500";
      break;

    default:
      break;
  }
  return (
    <div
      className={`flex flex-row items-center rounded-md py-3 px-4 relative bg-white ${bgClasses}`}
    >
      <div className="flex flex-col my-auto gap-3">
        <div className="flex flex-row items-center gap-2">
          <IoMdFootball className="h-5 w-5 font-medium" />
          <p className="text-xl font-medium">{player.name}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <LuFlag className="h-5 w-5 font-medium" />
          <p className="text-xl font-medium">{player.country}</p>
        </div>
      </div>
      <img src={playerImg} alt={playerImg} className="h-20 w-20 ml-auto" />
      <div className="absolute -top-2 -right-2 text-white rounded-2xl">
        <IoClose className="w-5 h-5  bg-gray-950 rounded-2xl" />
      </div>
    </div>
  );
}

export default PlayersListItem;

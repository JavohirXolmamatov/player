import { IoFootballSharp } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import playerImg from "../assets/player.png";
import { useEffect, useState } from "react";

function UserList(player) {
  const [addClass, setAddClass] = useState("");

  useEffect(() => {
    switch (player?.player?.continent) {
      case "Europe":
        setAddClass("bg-gradient-to-l from-yellow-900 to-red-300");
        break;
      case "Asia":
        setAddClass("bg-gradient-to-l from-blue-900 to-red-300");
        break;
      case "Africa":
        setAddClass("bg-gradient-to-l from-green-900 to-red-300");
        break;
      case "South America":
        setAddClass("bg-gradient-to-l from-white-900 to-red-300");
        break;
      case "North America":
        setAddClass("bg-gradient-to-l from-black-900 to-red-300");
        break;
      default:
        setAddClass("bg-gray-300");
        break;
    }
  }, [player?.continent]); // ✅ Faqat player?.continent o'zgarganda ishlaydi

  return (
    <div className="">
      <div
        className={`bg-white p-4 rounded-md grid grid-cols-2 items-center relative shadow-lg ${addClass} `}
      >
        <div className="flex flex-col space-y-2 ">
          <div className="flex items-center gap-2 ">
            <IoFootballSharp className="w-5 h-5" />
            <p className="text-xl font-medium ">{player?.player?.name}</p>
          </div>
          <div className="flex items-center gap-2 ">
            <FaFontAwesomeFlag className="w-5 h-5" />
            <p className="text-xl font-medium ">{player?.player?.countries}</p>
          </div>
        </div>
        <img src={playerImg} alt={playerImg} className="h-24 ml-auto" />
        <span
          className="absolute -top-2 -right-2 bg-gray-400 rounded-2xl hover:bg-slate-400 transition-all"
          role="button"
        >
          <IoClose className="text-black h-5 w-5" />
        </span>
      </div>
    </div>
  );
}

export default UserList;

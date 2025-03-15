import { IoFootballSharp } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import player from "../assets/player.png";

function AddUserList() {
  return (
    <div className="">
      <div className="bg-white p-4 rounded-md grid grid-cols-2 items-center relative shadow-lg">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2 ">
            <IoFootballSharp className="w-5 h-5" />
            <p className="text-xl font-medium ">Mohammad Solah</p>
          </div>
          <div className="flex items-center gap-2 ">
            <FaFontAwesomeFlag className="w-5 h-5" />
            <p className="text-xl font-medium ">Eygpt</p>
          </div>
        </div>
        <img src={player} alt={player} className="h-24 ml-auto" />
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

export default AddUserList;

import React from "react";

function UserFilter() {
  return (
    <div className="bg-white/10 px-4 py-6 shadow-lg rounded-md bg-gradient-to-b from-cyan-500 to-transparent backdrop-opacity-60">
      <h2 className="pb-4 text-xl font-medium">Filter players by continent</h2>
      <form className="">
        <button
          type="submit"
          className="bg-white/30 text-white font-normal text-sm px-5 py-2 rounded-tl-md rounded-bl-md bg-gradient-to-l from-gray-950 to-transparent"
        >
          All
        </button>
        <button
          type="submit"
          className="bg-white/30 text-white font-normal text-sm px-5 py-2 bg-gradient-to-l from-blue-900 to-transparent"
        >
          Europe
        </button>
        <button
          type="submit"
          className="bg-white/30 text-white font-normal text-sm px-5 py-2 bg-gradient-to-l from-green-900 to-transparent"
        >
          Asia
        </button>
        <button
          type="submit"
          className="bg-white/30 text-white font-normal text-sm px-5 py-2 bg-gradient-to-l from-yellow-900 to-transparent"
        >
          Africa
        </button>
        <button
          type="submit"
          className="bg-white/30 rounded-tr-md rounded-br-md text-white font-normal text-sm px-5 py-2 bg-gradient-to-l from-blue-500 to-transparent"
        >
          America
        </button>
      </form>
    </div>
  );
}

export default UserFilter;

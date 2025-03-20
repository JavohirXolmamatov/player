function PlayerFilter() {
  return (
    <div className="bg-white/5 rounded-md px-5 py-5 bg-gradient-to-tl from-blue-300 to-75% backdrop-invert-25 backdrop-opacity-5 w-9/10 mx-auto">
      <span className="block text-md font-bold mb-1">
        Filter players by continent
      </span>
      <div className="">
        <button className="text-sm font-medium px-3 py-1.5 bg-gradient-to-l from-gray-600 to-gray-950 rounded-s-md text-gray-300">
          All
        </button>
        <button className="text-sm font-medium px-3 py-1.5 bg-gradient-to-l from-blue-500 to-blue-900  text-gray-300">
          Europe
        </button>
        <button className="text-sm font-medium px-3 py-1.5 bg-gradient-to-l from-green-500 to-green-900  text-gray-300">
          Asia
        </button>
        <button className="text-sm font-medium px-3 py-1.5 bg-gradient-to-l from-yellow-500 to-yellow-900  text-gray-300">
          Africa
        </button>
        <button className="text-sm font-medium px-3 py-1.5 bg-gradient-to-l from-blue-400 to-blue-800 rounded-e-md  text-gray-300">
          America
        </button>
      </div>
    </div>
  );
}

export default PlayerFilter;

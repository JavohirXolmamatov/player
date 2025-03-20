function PlayerCreate() {
  return (
    <div className="bg-white/5 rounded-md px-5 py-5 bg-gradient-to-tl from-blue-300 to-75% backdrop-invert-25 backdrop-opacity-5 w-9/10 mx-auto">
      <form className="">
        <div className="flex flex-col space-y-4">
          <label htmlFor="name">
            <span className="mr-3 text-xl font-medium block mb-1">
              New football player:
            </span>
            <input
              type="text"
              name="name"
              className="px-2 py-1 bg-white rounded-md w-full"
              required
            />
          </label>
          <label htmlFor="name">
            <span className="mr-3 text-xl font-medium block mb-1">
              Country:
            </span>
            <input
              type="text"
              name="country"
              className="px-2 py-1 bg-white rounded-md w-full"
              required
            />
          </label>
          <label htmlFor="continent">
            <span className="mr-3 text-xl font-medium block mb-1">
              Continent:
            </span>
            <select
              type="text"
              id="continent"
              name="continent"
              className="px-2 py-1 bg-white rounded-md w-full"
              required
            >
              <option value="">Select player continent</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Europe">Europe</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="block bg-white/30 text-gray-300 px-3 py-1 ml-auto rounded-md mt-3 text-md font-medium bg-gradient-to-l from-blue-500 to-blue-900 hover:scale-105 transition-transform"
        >
          Add player
        </button>
      </form>
    </div>
  );
}

export default PlayerCreate;

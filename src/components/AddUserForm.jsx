import React from "react";

function AddUserForm() {
  return (
    <div className="bg-white/10 px-4 py-6 shadow-lg rounded-md bg-gradient-to-t from-cyan-500 to-transparent backdrop-opacity-60">
      <form className="flex flex-col gap-4">
        <div>
          <label>
            <span className="block pb-2 text-xl font-medium text-gray-900">
              New football player
            </span>
            <input
              type="text"
              placeholder="Mohammad Solah"
              className="px-2 py-2 w-full bg-white rounded-md text-gray-900 text-md placeholder:text-gray-500"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span className="block pb-2 text-xl font-medium text-gray-900">
              Country
            </span>
            <input
              type="text"
              placeholder="Eygpt"
              className="px-2 py-2 w-full bg-white rounded-md text-gray-900 text-md placeholder:text-gray-500"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span className="block pb-2 text-xl font-medium text-gray-900">
              Select player continent
            </span>
            <select
              className="px-2 py-2 w-full bg-white rounded-md text-gray-900 text-md placeholder:text-gray-500"
              required
            >
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="Africa">America</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="bg-white/50 w-fit px-3 py-2 rounded-md ml-auto bg-gradient-to-l from-blue-500 to-blue-700 text-white text-sm font-medium hover:scale-110 transition-transform"
        >
          Add Player
        </button>
      </form>
    </div>
  );
}
export default AddUserForm;

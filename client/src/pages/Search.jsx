import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <input
              type="text"
              placeholder="Search..."
              id="searchTerm"
              className="border rounded-lg p-3 w-full bg-slate-200"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-semibold">Type: </label>
            <div className="flex gap-1">
              <input type="checkbox" id="all" className="w-5" />
              <span className="whitespace-nowrap">Rent & Sell</span>
            </div>
            <div className="flex gap-2 p-5">
              <input type="checkbox" id="rent" className="w-5" />
              <span className="whitespace-nowrap">Rent</span>
            </div>
            <div className="flex gap-2 p-5">
              <input type="checkbox" id="sale" className="w-5" />
              <span className="whitespace-nowrap">Sell</span>
            </div>
            <div className="flex gap-2 p-5">
              <input type="checkbox" id="offer" className="w-5" />
              <span className="whitespace-nowrap">Offer</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <label className="font-semibold">Amenities: </label>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span className="whitespace-nowrap">Parking spot</span>
            </div>
            <div className="flex gap-2 p-5">
              <input type="checkbox" id="furnished" className="w-5" />
              <span className="whitespace-nowrap">Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select
              id="sort_order"
              className="border rounded-lg p-3 bg-slate-200"
            >
              <option>Price high to low</option>
              <option>Price low to high</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="bg-green-500 uppercase text-white p-3 rounded-lg w-full my-4 font-semibold hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="p-7">
        <h1 className="text-3xl font-semibold border-b p-3 test-slate-700 mt-5">
          Listing Items:
        </h1>
      </div>
    </div>
  );
};

export default Search;

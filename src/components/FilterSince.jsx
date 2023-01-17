import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSince } from "../actions";

const FilterSince = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");
  function handleInput(e) {
    e.preventDefault();
    setNumber(e.target.value);
    setCurrentPage(1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!number.trim()) {
      console.log("Error");
    } else {
      dispatch(getUserSince(number));
      setNumber("");
    }
  }
  const allUsers = useSelector((state) => state.userSince);
  // const repos = useSelector((state) => state.userRepo);

  return (
    <div class="flex justify-center">
      {allUsers ? (
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search since"
              aria-label="Search"
              aria-describedby="button-addon3"
              value={number}
              type="search"
              onChange={(e) => handleInput(e)}
            />
            <button
              className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="button"
              id="button-addon3"
              onClick={(e) => handleSubmit(e)}
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSince;

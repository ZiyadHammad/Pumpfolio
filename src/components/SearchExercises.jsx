import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const handleSearch = () => {};

  return (
    <section className="flex flex-col mt-10">
      <h1>Search Exercises By Category</h1>
      <div className="">
        <input
          type="search"
          placeholder="Search for Exercises..."
          className="bg-white h-[30px] w-[280px] rounded-lg"
          onChange={() => {}}
        />
        <button className="rounded bg-pink-600" onClick={() => {}}>
          Search
        </button>
      </div>
      <div className=""></div>
    </section>
  );
};

export default SearchExercises;

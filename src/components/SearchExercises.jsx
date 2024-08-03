import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = ({setExercises}) => {
  const [search, setSearch] = useState('')

  const handleSearch = () => {};

  // useEffect(() => {

  // }, [])

  return (
    <section className="flex flex-col">
      <h1 className="text-xl ">Search Exercises By Category</h1>
      <div className="flex gap-1">
        <input
          type="search"
          placeholder="Search for Exercises..."
          className="bg-white h-[30px] w-[280px] rounded-lg pl-2"
          onChange={() => {}}
        />
        <button
          className="rounded-lg bg-pink-600 cursor-pointer p-1 text-md "
          onClick={() => {}}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchExercises;

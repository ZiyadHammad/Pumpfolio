import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const fetchExerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
        exerciseOptions
      );

      const searchedExercises = fetchExerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchBodyParts = async () => {
      const response = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...response]);
    };

    fetchBodyParts();
  }, []);

  return (
    <section className="flex flex-col justify-center px-4 py-12 space-y-8 border">
      <h1 className="text-[26px] font-bold">Explore Exercises</h1>

      <div className="flex items-center gap-4">
        <input
          type="search"
          value={search}
          placeholder="Search for Exercises..."
          className="w-[300px] px-4 py-2 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className=" px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

     
        <HorizontalScrollbar
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          bodyParts={bodyParts}
        />
    
    </section>
  );
};

export default SearchExercises;

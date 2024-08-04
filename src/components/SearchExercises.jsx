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

      // window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch("https://exercisedb.p.rapidapi.com/exercises");
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
    <section className="flex flex-col">
      <h1 className="text-xl ">Search Exercises By Category</h1>
      <div className="flex gap-1">
        <input
          type="search"
          value={search}
          placeholder="Search for Exercises..."
          className="bg-white h-[30px] w-[280px] rounded-lg pl-2 text-black"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="rounded-lg bg-pink-600 cursor-pointer p-1 text-md "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="relative w-[100%] p-10">
        <HorizontalScrollbar
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          bodyParts={bodyParts}
        />
      </div>
    </section>
  );
};

export default SearchExercises;

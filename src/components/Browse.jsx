import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import BodyPart from "./BodyPart";

const Browse = ({ bodyPart, setBodyPart, setExercises }) => {
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
    <div className="flex flex-col items-center w-full max-w-md mx-auto px-4 py-8">
      <input
        type="search"
        value={search}
        placeholder="Search exercises..."
        className="w-full px-4 py-2 mb-6 text-black bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />

<div className="grid grid-cols-2 gap-4">
  {bodyParts.slice(1).map((item) => (
    <BodyPart
      key={item}
      item={item}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
    />
  ))}
</div>
    </div>
  );
};

export default Browse;
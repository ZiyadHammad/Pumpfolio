import { useEffect, useState } from "react";

import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState();
  const [exercisePages] = useState(6);
  return (
    <div id="exercises" className="">
      <h1>Showing Results</h1>
      <div className="flex flex-wrap justify-center">
        {exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            exercise={exercise}
          />
          ))}
      </div>
    </div>
  );
};

export default Exercises;

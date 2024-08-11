import { useState } from "react";
import ExerciseCard from './ExerciseCard';
import Pagination from './Pagination';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6

  // Calculate the number of pages needed
  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  // Calculate the index range for the current page
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="exercises" className="">
      <h1 className="text-2xl font-bold mb-6">Showing Results</h1>
      <div className="flex flex-wrap justify-center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            exercise={exercise}
          />
        ))}
      </div>
      
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        paginate={paginate} 
      />
    </div>
  );
};

export default Exercises;

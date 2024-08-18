import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";

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

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = []

      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100', exerciseOptions)
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exerciseData)
    }
    fetchExerciseData()
  }, [bodyPart])

  return (
    <div id="exercises" className="flex flex-col px-4 py-8 gap-4">
      <h1 className="text-[26px] font-bold">Showing Results</h1>
      <div className="flex flex-wrap justify-center space-y-6">
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

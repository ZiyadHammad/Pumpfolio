import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from './ExerciseCard';
import Pagination from './Pagination';
import Loader from './Loader'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  const totalPages = Math.ceil(exercises.length / exercisesPerPage);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise).sort(() => Math.random() - 0.5)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchExerciseData = async () => {
      setLoading(true)
      let exerciseData = [];
      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0', exerciseOptions);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=0`, exerciseOptions);
      }
      setExercises(exerciseData);
      setLoading(false)
    };
    fetchExerciseData();
  }, [bodyPart, setExercises]);



  if(loading) return <Loader />

  return (
    <div id="exercises" className="px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Showing Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
      </div>
    </div>
  );
};

export default Exercises;
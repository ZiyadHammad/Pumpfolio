import { useEffect, useState } from "react";

import Browse from '../components/Browse'
import Exercises from "../components/Exercises";
import Loader from "../components/Loader";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false);
    }, 500)
  }, [])

  if(loading) return <Loader />
  return (
    <>
      <Browse
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      /> 
    </>
  );
};

export default Home;

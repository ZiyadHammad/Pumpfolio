import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodypart, setBodyPart] = useState("all");
  
  return (
    <>
      <Hero />
      <SearchExercises />
      <Exercises />
    </>
  );
};

export default Home;

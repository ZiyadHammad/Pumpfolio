import { useEffect, useState } from "react";

import Hero from '../components/Hero'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <>
      <Hero />
      <SearchExercises />
      <Exercises />
    </>
  )
}

export default Home
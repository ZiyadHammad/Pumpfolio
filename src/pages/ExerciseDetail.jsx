import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, youtubeOptions, fetchData } from "../utils/fetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const { id } = useParams()
  const [exerciseDetails, setExerciseDetails] = useState({})
  const [youtubeVideos, setYoutubeVideos] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const searchYoutubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData( `${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
      const searchYoutubeData = await fetchData(`${searchYoutubeUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      // const similarTargetMuscleExercises = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}?limit=10`)
      // const similarEquipmentExercises = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}?limit=10`)
      // console.log(similarTargetMuscleExercises, similarEquipmentExercises)
      setYoutubeVideos(searchYoutubeData)
      setExerciseDetails(exerciseDetailData)
    };
    // fetchExercisesData()
  }, [id]);


  return (
    <>
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideos youtubeVideos={youtubeVideos} name={exerciseDetails.name} />
      <SimilarExercises />
    </>
  );
};

export default ExerciseDetail;

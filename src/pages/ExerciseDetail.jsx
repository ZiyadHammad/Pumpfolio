import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { exerciseOptions, youtubeOptions, fetchData } from "../utils/fetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Loader from "../components/Loader";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
      const searchYoutubeUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDBUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      const searchYoutubeData = await fetchData(
        `${searchYoutubeUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      const similarTargetMuscleExercises = await fetchData(
        `${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      const similarEquipmentExercises = await fetchData(
        `${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setYoutubeVideos(searchYoutubeData.contents);
      setExerciseDetails(exerciseDetailData);
      setTargetMuscleExercises(similarTargetMuscleExercises);
      setEquipmentExercises(similarEquipmentExercises);
    };
    fetchExercisesData();
  }, [id]);

  if(!exerciseDetails) return <Loader />

  return (
    <>
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        youtubeVideos={youtubeVideos}
        name={exerciseDetails.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </>
  );
};

export default ExerciseDetail;

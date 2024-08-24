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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchExercisesData = async () => {
      setLoading(true)
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
      setLoading(false)
    };
    fetchExercisesData();
  }, [id]);

  const handleExerciseClick = () => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setLoading(false);
    }, 500)
  };


  if(loading) return <Loader />

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
        onItemClick={handleExerciseClick}
      />
    </>
  );
};

export default ExerciseDetail;

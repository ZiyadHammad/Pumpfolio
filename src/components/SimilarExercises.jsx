import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises, onItemClick }) => {

  targetMuscleExercises.sort(() => Math.random() - 0.5)
  equipmentExercises.sort(() => Math.random() - 0.5)
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Similar <span className="text-red-600">Target Muscle</span> Exercises
        </h1>
        <div className="overflow-x-auto pb-4">
          <HorizontalScrollbar data={targetMuscleExercises} onItemClick={onItemClick}  />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-8 text-center">
          Similar <span className="text-red-600">Equipment</span> Exercises
        </h1>
        <HorizontalScrollbar data={equipmentExercises} onItemClick={onItemClick}  />
      </div>
    </div>
  );
};

export default SimilarExercises;
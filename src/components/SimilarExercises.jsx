import HorizontalScrollbar from './HorizontalScrollbar'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {

  return (
    <div className="bg-gray-100 py-8 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Similar <span className="text-red-600">Target Muscle</span> Exercises
      </h1>
      <div className="overflow-x-auto pb-4">
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <h1 className="text-xl font-semibold text-gray-800 text-center">Error</h1>
        )}
      </div>
      
      <h1 className="text-2xl font-bold text-gray-800 mb-6 mt-8 text-center">
        Similar <span className="text-red-600">Equipment</span> Exercises
      </h1>
      <div className="overflow-x-auto pb-4">
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <h1 className="text-xl font-semibold text-gray-800 text-center">Error</h1>
        )}
      </div>
    </div>
  </div>
  )
}

export default SimilarExercises
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link 
      to={`/exercises/${exercise.id}`} 
      className="w-full max-w-[320px] bg-white shadow-md rounded-lg overflow-hidden mb-4 transform transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative pb-[75%]">
        <img 
          src={exercise.gifUrl} 
          alt={exercise.name} 
          loading="lazy" 
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-nowrap gap-2 mb-2">
          <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap">
            {exercise.bodyPart}
          </span>
          <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full whitespace-nowrap">
            {exercise.target}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 capitalize truncate">
          {exercise.name}
        </h2>
      </div>
    </Link>
  );
};

export default ExerciseCard;
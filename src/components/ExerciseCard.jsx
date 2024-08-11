import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`exercises/${exercise.id}`}
      className="w-[350px] h-[400px] bg-white border-t-4 border-[#FF2625] rounded-bl-[20px] no-underline flex flex-col justify-evenly pb-[10px] transform scale-100 transition-all duration-300 ease-in-out"
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="h-[280px] w-[350px]"
      />
      <div className="flex ml-4 space-x-4">
        <button className="text-white bg-[#FCC757] p-1 text-sm rounded-md capitalize">
          {exercise.bodyPart}
        </button>
        <button className="text-white bg-[#FCC757] p-1 text-sm rounded-md capitalize">
          {exercise.target}
        </button>
      </div>
      <h2 className="ml-4 text-xl text-black capitalize">{exercise.name}</h2>
    </Link>
  );
};

export default ExerciseCard;
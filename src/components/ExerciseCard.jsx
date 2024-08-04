import { Link } from "react-router-dom"

const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`exercises/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    </Link>
  )
}

export default ExerciseCard
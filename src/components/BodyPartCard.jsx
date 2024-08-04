import Icon from '../assets/icons/gym.png'

const BodyPartCard = ({item, bodyPart, setBodyPart}) => {
  return (
    <div className='bg-white border-t-4 border-[#FF2625] border-bl-[20px] flex flex-col justify-center items-center transform scale-100 transition duration-300 ease-in-out'>
      <img src={Icon} alt="dumbbell" className='h-10 w-10' />
      <h2 className='font-semibold text-2xl text-black'>{item}</h2>
    </div>
  )
}

export default BodyPartCard
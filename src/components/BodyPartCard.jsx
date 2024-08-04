import Icon from "../assets/icons/gym.png";

const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div 
      className={`${bodyPart === item ? 'border-[#ff2625]' : ''} bg-white w-[120px] h-[150px] border-t-4 flex flex-col justify-center items-center transform scale-100 transition duration-300 ease-in-out cursor-pointer`}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
    >
      <img src={Icon} alt="dumbbell" className="h-16 w-16 mb-2" />
      <h2 className="font-semibold text-xl text-black text-center">{item}</h2>
    </div>
  );
};

export default BodyPartCard;
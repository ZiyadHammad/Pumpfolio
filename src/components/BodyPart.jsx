import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div 
      className={`flex items-center p-3 rounded-lg cursor-pointer ${
        bodyPart === item ? 'bg-green-100' : 'bg-gray-100'
      }`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
      }}
    >
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
        <img src={Icon} alt={item} className="w-6 h-6 object-contain" />
      </div>
      <div>
        <h3 className="font-semibold capitalize text-sm">{item}</h3>
        <p className="text-xs text-gray-600">Strength</p>
      </div>
    </div>
  );
};

export default BodyPart;
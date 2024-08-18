import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {

  return (
    <div 
      className="flex items-center space-x-4 cursor-pointer"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
      }}
    >
      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
        <img src={Icon} alt={item} className="w-full h-10 object-cover" />
      </div>
      <div>
        <h3 className="font-semibold capitalize">{item}</h3>
        <p className="text-sm text-gray-600"></p>
      </div>
    </div>
  );
};

export default BodyPart;
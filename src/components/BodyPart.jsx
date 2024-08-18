import React from 'react';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const iconMap = {
    back: 'back.jpeg',
    cardio: 'running.jpg',
    chest: 'chest.jpg',
    'lower arms': 'lower-arms.jpeg',
    'lower legs': 'lower-legs.jpeg',
    neck: 'neck.jpeg',
    shoulders: 'shoulder.jpeg',
    'upper arms': 'bicep.webp',
    'upper legs': 'upper-legs.webp',
    waist: 'abs.jpeg'
  };

  const descriptionMap = {
    back: 'Posture',
    cardio: 'Endurance',
    chest: 'Power',
    'lower arms': 'Grip',
    'lower legs': 'Strength',
    neck: 'Stability',
    shoulders: 'Mobility',
    'upper arms': 'Strength',
    'upper legs': 'Power',
    waist: 'Core'
  };  
  
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
    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-3 overflow-hidden">
      <img 
        src={iconMap[item]} 
        alt={item} 
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 className="font-semibold capitalize text-sm">{item}</h3>
      <p className="text-xs text-gray-600">{descriptionMap[item]}</p>
    </div>
  </div>

  );
};

export default BodyPart;
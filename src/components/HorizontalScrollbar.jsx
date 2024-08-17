import React, { useState, useRef, useEffect } from "react";
import BodyPartCard from "./BodyPartCard";
import ExerciseCard from './ExerciseCard'
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ bodyPart, setBodyPart, data, bodyParts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.offsetWidth;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * currentIndex;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        onClick={() => scroll("left")}
        disabled={currentIndex === 0}
      >
        <img src={LeftArrowIcon} alt="left-arrow" className="w-6 h-6" />
      </button>

      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-hidden scroll-smooth" 
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {data.map((item, index) => (
          <div 
            key={item.id || item} 
            className="flex-shrink-0 w-full flex justify-center items-center"
            style={{ scrollSnapAlign: 'start' }}
          >
            {bodyParts ? 
              <BodyPartCard item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : 
              <ExerciseCard exercise={item} />
            }
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        onClick={() => scroll("right")}
        disabled={currentIndex === data.length - 1}
      >
        <img src={RightArrowIcon} alt="right-arrow" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HorizontalScrollbar;
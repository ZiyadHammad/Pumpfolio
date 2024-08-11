import React, { useState, useRef } from "react";
import BodyPartCard from "./BodyPartCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ bodyPart, setBodyPart, bodyParts }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  return (
    <div className="relative w-full">
      <button 
        className="absolute left-5 -bottom-20 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        onClick={() => scroll('left')}
        disabled={scrollPosition <= 0}
      >
        <img src={LeftArrowIcon} alt="left-arrow" className="w-6 h-6" />
      </button>
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-hidden scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {bodyParts.map((item) => (
          <div key={item.id || item} className="flex-shrink-0 mx-[5px]">
            <BodyPartCard
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        ))}
      </div>
      <button 
        className="absolute right-5 -bottom-20 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        onClick={() => scroll('right')}
        disabled={scrollPosition >= scrollContainerRef.current?.scrollWidth - scrollContainerRef.current?.clientWidth}
      >
        <img src={RightArrowIcon} alt="right-arrow" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HorizontalScrollbar;
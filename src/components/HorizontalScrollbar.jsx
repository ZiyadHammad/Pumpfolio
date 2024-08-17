import React, { useState, useRef } from "react";
import BodyPartCard from "./BodyPartCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ bodyPart, setBodyPart, bodyParts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, bodyParts.length - 1)
      );
    }
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        onClick={() => scroll("left")}
        disabled={currentIndex === 0}
      >
        <img src={LeftArrowIcon} alt="left-arrow" className="w-6 h-6" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex justify-center items-center"
      >
        <BodyPartCard
          item={bodyParts[currentIndex]}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>

      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        onClick={() => scroll("right")}
        disabled={currentIndex === bodyParts.length - 1}
      >
        <img src={RightArrowIcon} alt="right-arrow" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HorizontalScrollbar;

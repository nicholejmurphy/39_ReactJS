import { useState } from "react";

const useFlip = (initialState) => {
  const [isFlipped, setIsFlipped] = useState(initialState);
  const toggleIsFlipped = () => {
    setIsFlipped((flipped) => !flipped);
  };
  return [isFlipped, toggleIsFlipped];
};

export default useFlip;

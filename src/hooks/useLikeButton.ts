import { useState } from 'react';

const useLikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked((prev) => !prev);
  };

  return {
    liked,
    toggleLiked,
  };
};

export default useLikeButton;

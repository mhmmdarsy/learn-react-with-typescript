import { Heart } from 'lucide-react';
import useLikeButton from '../hooks/useLikeButton';

const LikeButton = () => {
  const { liked, toggleLiked } = useLikeButton();

  return (
    <div className="button">
      <button
        onClick={toggleLiked}
        title="like button"
        className={`flex px-4 gap-2 rounded-md cursor-pointer py-2 transition-colors
            ${liked ? 'bg-blue-500 text-white' : 'bg-white text-black'}
        `}
      >
        <Heart
          className="transition-colors"
          fill={liked ? 'red' : 'none'}
          stroke={liked ? 'red' : 'red'}
        />
        <p>Like</p>
      </button>
    </div>
  );
};

export default LikeButton;

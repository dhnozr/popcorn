import { useState } from 'react';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starContainerStyle = {
  display: 'flex',
};

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  className?: string;
  defaultRating?: number;
  size?: number;
  onSetRating?: (i: number) => void;
}

export default function StarRating({
  maxRating = 5,
  color = '#fcc419',
  size = 28,
  defaultRating = 0,
  onSetRating,
}: StarRatingProps) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(i: number) {
    const newRating = rating === i + 1 ? 0 : i + 1;
    setRating(newRating);
    if (onSetRating) onSetRating(newRating);
  }

  function handleHoverIn(i: number) {
    setTempRating(i + 1);
  }

  function handleHoverOut() {
    setTempRating(0);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            color={color}
            size={size}
            onRate={handleRating}
            full={(tempRating || rating) >= i + 1}
            onHoverIn={handleHoverIn}
            onHoverOut={handleHoverOut}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

interface StarProps {
  color: string;
  size: number;
  full: boolean;
  index: number;
  onRate: (i: number) => void;
  onHoverIn: (i: number) => void;
  onHoverOut: () => void;
}

function Star({ color, size, onRate, onHoverIn, onHoverOut, full, index }: StarProps) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: 'block',
    cursor: 'pointer',
  };

  return (
    <span
      role='button'
      style={starStyle}
      onClick={() => onRate(index)}
      onMouseEnter={() => onHoverIn(index)}
      onMouseLeave={onHoverOut}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill={full ? color : 'none'} stroke={color}>
        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
      </svg>
    </span>
  );
}

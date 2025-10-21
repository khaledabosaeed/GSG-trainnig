import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  reviews?: number;
  size?: number;
  showReviews?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  reviews,
  size = 16,
  showReviews = true,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={size}
            className={
              i < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
      {showReviews && reviews !== undefined && (
        <span className="text-gray-500 text-sm">({reviews} reviews)</span>
      )}
    </div>
  );
};

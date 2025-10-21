import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopButtonProps {
  onClick?: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-[#F5F5F5] p-3 rounded-full shadow-lg hover:bg-gray-300"
    >
      <ArrowUp size={24} />
    </button>
  );
};

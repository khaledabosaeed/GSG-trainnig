import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onPrevious}
        className="p-2 bg-[#F5F5F5] rounded-full hover:bg-gray-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={onNext}
        className="p-2 bg-[#F5F5F5] rounded-full hover:bg-gray-300"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

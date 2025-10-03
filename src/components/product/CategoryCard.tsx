import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon: Icon,
  isActive = false,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`border-2 ${
        isActive
          ? 'border-[#DB4444] bg-[#DB4444] text-white'
          : 'border-gray-300 hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white'
      } rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-all`}
    >
      <Icon size={48} className="mb-4" />
      <p className="font-medium">{name}</p>
    </div>
  );
};

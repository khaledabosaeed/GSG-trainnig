import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  showNavigation?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  rightContent?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  rightContent
}) => {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-5 h-10 bg-[#DB4444] rounded"></div>
        <h3 className="text-[#DB4444] font-semibold">{label}</h3>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-semibold">{title}</h2>
        {rightContent}
      </div>
    </div>
  );
};

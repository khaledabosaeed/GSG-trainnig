import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'discount' | 'new';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'discount',
  className = ''
}) => {
  const variantStyles = {
    discount: 'bg-[#DB4444]',
    new: 'bg-[#00FF66]'
  };

  return (
    <div className={`${variantStyles[variant]} text-white px-3 py-1 rounded text-xs font-medium ${className}`}>
      {children}
    </div>
  );
};

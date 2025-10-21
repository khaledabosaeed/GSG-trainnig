import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = 'px-10 py-3 rounded transition-colors';

  const variantStyles = {
    primary: 'bg-[#DB4444] text-white hover:bg-red-600',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border-2 border-white text-white pb-1 hover:opacity-80'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

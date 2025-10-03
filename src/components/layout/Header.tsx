import React from 'react';
import { Search, Heart, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onSearchChange?: (query: string) => void;
  cartItemsCount?: number;
  wishlistItemsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchChange,
  cartItemsCount = 0,
  wishlistItemsCount = 0
}) => {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-18 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Exclusive</h1>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:underline">
              Home
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              Contact
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              About
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              Sign Up
            </a>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none text-sm w-64"
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
              <Search size={20} className="text-gray-600" />
            </div>

            <div className="relative">
              <Heart size={24} className="cursor-pointer hover:text-red-500" />
              {wishlistItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItemsCount}
                </span>
              )}
            </div>

            <div className="relative">
              <ShoppingCart size={24} className="cursor-pointer hover:text-red-500" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

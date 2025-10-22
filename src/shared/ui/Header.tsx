import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../features/cart';

interface HeaderProps {
  onSearchChange?: (query: string) => void;
  wishlistItemsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchChange,
  wishlistItemsCount = 0
}) => {
  const { itemCount } = useCart();
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-18 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">Exclusive</Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-black hover:underline">
              Home
            </Link>
            <Link to="/products" className="text-black hover:text-gray-600">
              Products
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-600">
              Contact
            </Link>
            <Link to="/about" className="text-black hover:text-gray-600">
              About
            </Link>
            <Link to="/login" className="text-black hover:text-gray-600">
              Login
            </Link>
            <Link to="/signup" className="text-black hover:text-gray-600">
              Sign Up
            </Link>
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

            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="cursor-pointer hover:text-red-500" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

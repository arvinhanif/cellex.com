import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onSearchChange: (query: string) => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onSearchChange, onLoginClick, onSignupClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const categories = [
    'Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Beauty', 'Toys', 'Automotive'
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-3 w-3 mr-1" />
                <span>Deliver to: Lahore</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-3 w-3 mr-1" />
                <span>Hotline: 111-123-456</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Save More on App</span>
              <span className="text-gray-600">Sell on Daraz</span>
              <span className="text-gray-600">Customer Care</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-600">Daraz</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search in Daraz"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Account</span>
            </button>
            
            <button className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6 py-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className="whitespace-nowrap text-sm text-gray-700 hover:text-orange-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={onLoginClick}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Login
            </button>
            <button
              onClick={onSignupClick}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
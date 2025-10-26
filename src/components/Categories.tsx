import React from 'react';
import { Smartphone, Shirt, Home, Gamepad2, Book, Sparkles, Baby, Car } from 'lucide-react';

const Categories: React.FC = () => {
  const categories = [
    { name: 'Electronics', icon: Smartphone, color: 'bg-blue-500' },
    { name: 'Fashion', icon: Shirt, color: 'bg-pink-500' },
    { name: 'Home & Garden', icon: Home, color: 'bg-green-500' },
    { name: 'Sports', icon: Gamepad2, color: 'bg-orange-500' },
    { name: 'Books', icon: Book, color: 'bg-purple-500' },
    { name: 'Beauty', icon: Sparkles, color: 'bg-red-500' },
    { name: 'Toys', icon: Baby, color: 'bg-yellow-500' },
    { name: 'Automotive', icon: Car, color: 'bg-gray-500' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className={`${category.color} p-3 rounded-full mb-2 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-900">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  freeShipping?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-sm font-semibold">
            -{discountPercentage}%
          </div>
        )}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart
            className={`h-4 w-4 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>
        {product.freeShipping && (
          <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Free Shipping
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-orange-600">
              Rs. {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
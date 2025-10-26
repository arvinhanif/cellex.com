export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  freeShipping?: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra 5G Smartphone",
    price: 189999,
    originalPrice: 219999,
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.5,
    reviews: 1234,
    freeShipping: true,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max",
    price: 349999,
    originalPrice: 379999,
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.8,
    reviews: 2156,
    freeShipping: true,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Nike Air Max 270 Running Shoes",
    price: 12999,
    originalPrice: 15999,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.3,
    reviews: 876,
    freeShipping: true,
    category: "Fashion"
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 24999,
    originalPrice: 29999,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.7,
    reviews: 1543,
    freeShipping: true,
    category: "Electronics"
  },
  {
    id: 5,
    name: "Adidas Ultraboost 22 Running Shoes",
    price: 18999,
    originalPrice: 21999,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.4,
    reviews: 654,
    freeShipping: true,
    category: "Fashion"
  },
  {
    id: 6,
    name: "Dell XPS 13 Laptop",
    price: 89999,
    originalPrice: 99999,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.6,
    reviews: 432,
    freeShipping: true,
    category: "Electronics"
  },
  {
    id: 7,
    name: "Levi's 501 Original Jeans",
    price: 4999,
    originalPrice: 6999,
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.2,
    reviews: 789,
    freeShipping: false,
    category: "Fashion"
  },
  {
    id: 8,
    name: "Kitchen Stand Mixer",
    price: 15999,
    originalPrice: 19999,
    image: "https://images.pexels.com/photos/7238641/pexels-photo-7238641.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.5,
    reviews: 321,
    freeShipping: true,
    category: "Home & Garden"
  },
  {
    id: 9,
    name: "Yoga Mat Premium Quality",
    price: 2999,
    originalPrice: 3999,
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.1,
    reviews: 245,
    freeShipping: false,
    category: "Sports"
  },
  {
    id: 10,
    name: "Wireless Bluetooth Speaker",
    price: 7999,
    originalPrice: 9999,
    image: "https://images.pexels.com/photos/6945018/pexels-photo-6945018.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.3,
    reviews: 567,
    freeShipping: true,
    category: "Electronics"
  },
  {
    id: 11,
    name: "Cotton Casual T-Shirt",
    price: 1999,
    originalPrice: 2999,
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.0,
    reviews: 432,
    freeShipping: false,
    category: "Fashion"
  },
  {
    id: 12,
    name: "Smart Watch Fitness Tracker",
    price: 8999,
    originalPrice: 11999,
    image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.4,
    reviews: 678,
    freeShipping: true,
    category: "Electronics"
  },
  {
    id: 13,
    name: "Designer Handbag",
    price: 12999,
    originalPrice: 16999,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.6,
    reviews: 234,
    freeShipping: true,
    category: "Fashion"
  },
  {
    id: 14,
    name: "Gaming Mechanical Keyboard",
    price: 6999,
    originalPrice: 8999,
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.5,
    reviews: 543,
    freeShipping: true,
    category: "Electronics"
  },
  {
    id: 15,
    name: "Indoor Plant Decorative Pot",
    price: 3999,
    originalPrice: 4999,
    image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.2,
    reviews: 187,
    freeShipping: false,
    category: "Home & Garden"
  },
  {
    id: 16,
    name: "Professional Hair Dryer",
    price: 5999,
    originalPrice: 7999,
    image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.3,
    reviews: 356,
    freeShipping: true,
    category: "Beauty"
  }
];
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { products, Product } from './data/products';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: 'login' | 'signup';
  }>({
    isOpen: false,
    mode: 'login'
  });

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const switchAuthMode = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartItems.length}
        onSearchChange={handleSearchChange}
        onLoginClick={() => openAuthModal('login')}
        onSignupClick={() => openAuthModal('signup')}
      />
      
      <Hero />
      
      <Categories />
      
      <ProductGrid
        products={products}
        onAddToCart={handleAddToCart}
        searchQuery={searchQuery}
      />
      
      <Footer />
      
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        onSwitchMode={switchAuthMode}
      />
    </div>
  );
}

export default App;
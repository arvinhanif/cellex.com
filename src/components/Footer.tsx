import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Daraz</h3>
            <p className="text-gray-400 mb-4">
              Your trusted online marketplace for all your shopping needs. Quality products, great prices, and excellent service.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                <Youtube className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Daraz</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell on Daraz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span>123 Commerce Street, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <span>+92 (0) 111-123-456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <span>support@daraz.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-4 py-2 bg-orange-600 text-white rounded-r-lg hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Daraz. All rights reserved. | Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
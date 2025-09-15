import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/krishisahay-logo.png" alt="KrishiSahay" className="h-8 w-8 rounded-full object-contain" />
              <span className="text-xl font-bold">KrishiSahay</span>
            </div>
            <p className="text-gray-300">
              Empowering farmers with AI-driven solutions for sustainable agriculture and improved crop yield.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/features" className="block text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link to="/dashboard-preview" className="block text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link to="/ai-assistant" className="block text-gray-300 hover:text-white transition-colors">
                AI Assistant
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">support@agrismartai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-300">
            <p>&copy; 2025 KrishiSahay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
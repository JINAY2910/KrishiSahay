import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/dashboard-preview', label: 'Dashboard' },
    { path: '/features', label: 'Features' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/krishisahay-logo.png" alt="KrishiSahay" className="h-8 w-8 rounded-full object-contain" />
              <span className="text-xl font-bold text-green-700">KrishiSahay</span>
            </Link>
          </div>

          {/* Center: AI Assistant Button (desktop) */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
            <Link
              to="/ai-assistant"
              className="px-4 py-2 rounded-full bg-green-600 text-white font-medium shadow hover:bg-green-700 transition-colors pointer-events-auto"
            >
              AI Assistant
            </Link>
          </div>

          {/* Right: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(path)
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-green-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/ai-assistant"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mb-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
              >
                AI Assistant
              </Link>
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(path)
                      ? 'text-green-700 bg-green-50'
                      : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
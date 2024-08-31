import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = ({ username, onThemeChange, onLayoutChange }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [themesOpen, setThemesOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleDropdown = (setter) => () => setter(prev => !prev);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          <button 
            className="mr-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={() => onLayoutChange('sidebar_toggle')}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Options Dropdown */}
          <div className="relative">
            <button 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={toggleDropdown(setOptionsOpen)}
            >
              <i className="fas fa-wrench"></i>
            </button>
            {optionsOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onLayoutChange('header_fixed_toggle')}>Fixed Mode</button>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onLayoutChange('header_style_classic')}>Classic Style</button>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onLayoutChange('content_layout_toggle')}>Toggle Layout</button>
                </div>
              </div>
            )}
          </div>

          {/* Themes Dropdown */}
          <div className="relative ml-4">
            <button 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              onClick={toggleDropdown(setThemesOpen)}
            >
              <i className="fas fa-paint-brush"></i>
            </button>
            {themesOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onThemeChange('default')}>Default</button>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onThemeChange('elegance')}>Elegance</button>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onThemeChange('pulse')}>Pulse</button>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onThemeChange('flat')}>Flat</button>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onThemeChange('corporate')}>Corporate</button>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={() => onThemeChange('earth')}>Earth</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <button 
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full"
            onClick={toggleDropdown(setUserDropdownOpen)}
          >
            <span>{username}</span>
            <i className="fas fa-angle-down"></i>
          </button>
          {userDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Link to="/change-password" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <i className="fas fa-wrench mr-2"></i>
                  Settings
                </Link>
                <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  Sign Out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
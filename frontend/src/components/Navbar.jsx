import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // This function will determine the classes for the NavLink
  const getNavLinkClass = ({ isActive }) => {
    // We use a template literal to build the class string
    return `
      pb-1  // Add some padding at the bottom
      ${isActive 
        ? 'text-black border-b-2 border-blue-600' // Classes for the ACTIVE link
        : 'text-gray-500 border-b-2 border-transparent' // Classes for INACTIVE links
      }
    `;
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="" />

      {/* Corrected UL structure */}
      <ul className="flex sm:justify-center space-x-6">
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/doctors" className={getNavLinkClass}>
            ALL DOCTORS
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={getNavLinkClass}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={getNavLinkClass}>
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
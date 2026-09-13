import React from 'react';
import logoText from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center h-24 p-4 bg-white shadow-sm text-gray-700 px-25">
        <img src={logoText} alt="Logo" className="h-10" />

        <div className="w-140 justify-between flex items-center">
          <span className="cursor-pointer hover:text-pink-600">Home</span>
          <span className="cursor-pointer hover:text-pink-600">Technologies</span>
          <span className="cursor-pointer hover:text-pink-600">Projects</span>
          <span className="cursor-pointer hover:text-pink-600">About</span>
          <span className="cursor-pointer hover:text-pink-600">Contact</span>
        </div>

        <div className="flex gap-5 items-center">
          <span className="cursor-pointer">Sign In</span>
          <span className="cursor-pointer text-white bg-pink-500 h-9 w-22 flex items-center justify-center rounded-4xl">Sign Up</span>
        </div>
      </nav>
    </div>
  );
}
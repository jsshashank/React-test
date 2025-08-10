import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 border-b border-gray-300">
      <h1 className="text-3xl font-bold text-black">Portfolio.</h1>
      <nav className="space-x-6 text-gray-700 font-medium">
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#projects" className="hover:text-indigo-600">Projects</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
      </nav>
    </header>
  );
}

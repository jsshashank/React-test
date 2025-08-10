import React from 'react';

export default function Header() {
  return (
    <header
  className="w-full fixed top-0 left-0 z-51"
  style={{
    background: 'rgba(0,0,0,0.7)',
    WebkitBackdropFilter: 'blur(8px)',
    backdropFilter: 'blur(5px)',
  }}
>
  <div className="max-w-5xl mx-auto px-6 flex justify-between items-center py-2 rounded-lg text-white">
    <h1 className="text-3xl font-bold  m-0">Portfolio.</h1>
    <nav className="space-x-6 text-white font-medium ">
      <a href="#about" className="hover:underline">About</a>
      <a href="#projects" className="hover:underline">Projects</a>
      <a href="#contact" className="hover:underline">Contact</a>
    </nav>
  </div>
</header>

  );
}

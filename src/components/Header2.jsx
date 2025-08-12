import React from 'react';
import { useState } from 'react';
import { Brain, Cpu, Code2, Wrench, Network } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className=" w-full fixed top-0  left-0 z-50 border-b border-gray-200"
      style={{
        background: 'rgba(255,255,255,0.6)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center py-2 rounded-lg text-black">
        <h1 className="text-[20px] font-Playfair Display font-medium m-0">Portfolio.</h1>

        {/* Desktop view */}
        <nav className="hidden md:flex space-x-6 text-black font-sm">
          <Brain /><a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative group"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {/* Top line */}
          <span
            className={`block h-0.5 w-6 bg-black rounded-sm transform transition duration-300 ease-in-out origin-center ${open ? 'rotate-45 translate-y-1.5' : ''
              }`}
          ></span>

          {/* Middle line */}
          <span
            className={`block h-0.5 w-6 bg-black rounded-sm my-1 transition-opacity duration-300 ease-in-out ${open ? 'opacity-0' : 'opacity-100'
              }`}
          ></span>

          {/* Bottom line */}
          <span
            className={`block h-0.5 w-6 bg-black rounded-sm transform transition duration-300 ease-in-out origin-center ${open ? '-rotate-45 -translate-y-1.5' : ''
              }`}
          ></span>
        </button>
      </div>

      {/*dropdown menu */}
      <nav
        className={`md:hidden bg-white bg-opacity-50 backdrop-blur-md overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${open ? 'max-h-40 opacity-30' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col space-y-3 px-6 py-4 max-w-xs mx-auto">
          <a
            href="#about"
            className="text-black font-semibold hover:underline block text-center w-full"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-black font-semibold hover:underline block text-center w-full"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-black font-semibold hover:underline block text-center w-full"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}



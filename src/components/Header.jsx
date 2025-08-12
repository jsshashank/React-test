import React from 'react';
import { Brain, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header
      className="w-full fixed top-0 left-0 z-50 border-b border-gray-200"
      style={{
        background: 'rgba(255,255,255,0.6)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(5px)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center py-2 rounded-lg text-black">
        {/* header logo */}
        <h1 className="text-[20px] font-Playfair Display font-medium m-0">
          Portfolio.
        </h1>



        {/* right header icons */}
        <div className="flex items-center space-x-4 gap-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 hover:text-blue-600 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>
    </header>
  );
}

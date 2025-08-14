import React, { useState } from 'react';
import { Share, Moon, Sun } from 'lucide-react';

export default function GlassUI() {
  const [darkMode, setDarkMode] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out my site!',
          text: 'Here is my portfolio website.',
          url: window.location.href,
        })
        .catch((err) => console.error('Share failed:', err));
    } else {
      alert('Sharing not supported on this browser.');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div
      className="
        glass-ui 
        fixed left-1/2 -translate-x-1/2 
        px-3 py-2 
        border border-gray-300  
        items-center 
        text-gray-800 text-lg 
        flex justify-center gap-5
        w-full rounded-none
        md:w-auto md:rounded-full md:bottom-8
        bottom-0 z-50
      "
      style={{
        background: 'rgba(255,255,255,0.5)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div className="flex items-center gap-4 px-4">
        {/* Home Image */}
        <a
          href="#hero"
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg"
        >
          <img
            src="https://i.pinimg.com/736x/28/48/fa/2848fa2ea29db6c28cf5252fc3eea0a6.jpg"
            alt="Home"
            className="w-full h-full object-cover"
          />
        </a>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-lg"
        >
          <Share />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="bg-white/10 hover:bg-white/20 p-2 rounded-lg"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}

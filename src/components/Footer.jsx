import React from 'react';

export default function Footer() {
  return (
    <footer className="
      mt-2 py-6 pb-14 
      max-w-5xl mx-auto px-6 
      border-t border-gray-300 
      text-gray-600 text-sm
      flex justify-between items-center
    ">
      <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
      <span className="text-gray-500">Last revised, August-2025</span>
    </footer>
  );
}

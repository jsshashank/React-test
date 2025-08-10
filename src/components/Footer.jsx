import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 py-6 pb-14 max-w-5xl mx-auto px-6 border-t border-gray-300 text-gray-600 text-sm">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
}

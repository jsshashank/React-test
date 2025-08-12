import React from 'react';
import { University, Mail, Lightbulb, Palette, House } from 'lucide-react';

export default function GlassUI() {
  const links = [
    { href: '#top', icon: <House />, label: 'Home' },
    { href: '#projects', icon: <Palette />, label: 'Projects' },
    { href: '#skills', icon: <Lightbulb />, label: 'Skills' },
    { href: '#education', icon: <University />, label: 'Education' },
    { href: '#contact', icon: <Mail />, label: 'Contact' },
  ];

  return (
    <div
      className="
        glass-ui 
        fixed left-1/2 -translate-x-1/2 
        px-3 py-2 
        border-t-gray-300 border-opacity-70 
        items-center 
        text-black text-lg 
        flex justify-center gap-5
        w-full rounded-none
        md:w-auto md:rounded-full md:bottom-8
        bottom-0
        border border-gray-300
      "
      style={{
        background: 'rgba(255,255,255,0.5)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div className="flex items-center gap-2 px-4">
        {links.map(({ href, icon, label }) => (
          <div key={label} className="relative group">
            <a
              href={href}
              className="bg-white/6 hover:bg-white/10 px-3 py-1 rounded-lg flex items-center justify-center"
            >
              {icon}
            </a>
            {/* Tooltip */}
            <span className="
              absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
              text-xs bg-black/80 text-white px-2 py-1 rounded 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-200 pointer-events-none
            ">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


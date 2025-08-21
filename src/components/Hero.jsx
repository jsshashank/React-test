import React from 'react';
import { User, ArrowRight, TrendingUpDown, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import { useTiltEffect } from "./hooks/useTiltEffect";
import { gsap } from "gsap";


export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  const imgRef = useRef(null);
  useTiltEffect(imgRef, 30);




  return (
    <section id="hero" className="mt-8 py-[120px]">
      <div data-aos="fade-up" className="max-w-5xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-8 flex flex-col md:flex-row items-center gap-8">
        {/* pfp */}
        <div className="flex-shrink-0">
          <div ref={imgRef} className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 shadow-sm cursor-pointer">
            <img
              src="https://i.pinimg.com/736x/28/48/fa/2848fa2ea29db6c28cf5252fc3eea0a6.jpg" // Replace with your image path
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/*name */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl flex gap-3 font-Playfair font-bold mb-3 text-gray-600">
            Hi, I'm <span className="text-blue-800">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('J Shashank')
                    .callFunction(() => {
                      const cursor = document.querySelector('.Typewriter__cursor');
                      if (cursor) cursor.style.display = 'none';
                    })
                    .start();
                }}
              />
            </span>
          </h1>
          <p className="text-gray-700 mb-6">
            Enthusiastic Computer Science student with a strong foundation in {' '}
            <strong>AI, Machine Learning, and Web Development</strong>. Passionate about leveraging data-driven insights to solve real-world problems. Seeking an
            internship/full-time role to apply my skills in data analysis, machine learning, and software development.
          </p>

          {/* buttons*/}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-5 py-2 flex gap-2 bg-blue-800 text-white rounded-full hover:[#303030] transition-colors"
            >
              <Download /> Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2 flex gap-1 border border-[#303036] text-[#303036] rounded-full hover:bg-indigo-50 transition-colors"
            >
              Contact Me<span><ArrowRight /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

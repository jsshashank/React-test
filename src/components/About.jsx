import React from 'react';
import { User } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 shadow-sm">
            <img
              src="https://i.pinimg.com/736x/28/48/fa/2848fa2ea29db6c28cf5252fc3eea0a6.jpg" // Replace with your image path
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-Playfair font-bold mb-3">
            Hi, I'm <span className="text-indigo-600">Your Name</span>
          </h1>
          <p className="text-gray-700 mb-6">
            I'm a passionate software engineer specializing in{' '}
            <strong>AI, Machine Learning, and Web Development</strong>. I love
            turning data into insights and building elegant, efficient digital
            solutions.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

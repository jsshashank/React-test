import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="prose max-w-none">
      <h2 className="text-2xl font-Playfair font-semibold mb-4">Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via email or LinkedIn.</p>
      <ul className="list-disc list-inside mt-3 text-indigo-600 font-medium">
        <li>
          Email:{' '}
          <a
            href="mailto:your.email@example.com"
            className="hover:underline"
          >
            your.email@example.com
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </li>
      </ul>

      {/* Social Icons Row */}
      <div className="flex gap-6 mt-6">
        {/* GitHub */}
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="transform transition-transform duration-200 hover:scale-110"
        >
          <Github className="w-6 h-6 text-gray-700" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="transform transition-transform duration-200 hover:scale-110"
        >
          <Linkedin className="w-6 h-6 text-blue-700" />
        </a>

        {/* Email */}
        <a
          href="mailto:your.email@example.com"
          title="Email"
          className="transform transition-transform duration-200 hover:scale-110"
        >
          <Mail className="w-6 h-6 text-red-600" />
        </a>

        {/* LeetCode (Custom SVG) */}
        <a
          href="https://leetcode.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
          className="transform transition-transform duration-200 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className="w-6 h-6 text-yellow-500"
          >
            <path d="M..." /> {/* Replace with actual LeetCode SVG path */}
          </svg>
        </a>

        {/* Kaggle (Custom SVG) */}
        <a
          href="https://kaggle.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          title="Kaggle"
          className="transform transition-transform duration-200 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="currentColor"
            className="w-6 h-6 text-sky-500"
          >
            <path d="M..." /> {/* Replace with actual Kaggle SVG path */}
          </svg>
        </a>
      </div>
    </section>
  );
}

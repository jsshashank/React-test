import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Contact() {
  return (
    <section data-aos="fade-up" id="contact" className="py-12 ">
      <h2 className="text-2xl font-Playfair font-bold mb-6 flex items-center gap-2">
        <Mail />  Contact Me
      </h2>

      <div className="max-w-5xl mx-auto bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
        {/* Contact*/}
        <ul className="list-disc list-inside text-gray-700 space-y-3 font-medium max-w-md ">
          <li>
            Email:{' '}
            <a
              href="mailto:your.email@example.com"
              className="text-indigo-600 hover:underline"
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
              className="text-indigo-600 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </li>
        </ul>

        {/* icons,links */}
        <div className="flex justify-center gap-10 mt-8">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="transform transition-transform duration-200 hover:scale-110"
          >
            <Github className="w-6 h-6 text-gray-700" />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="transform transition-transform duration-200 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-blue-700" />
          </a>

          <a
            href="mailto:your.email@example.com"
            title="Email"
            className="transform transition-transform duration-200 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-red-600" />
          </a>
        </div>
      </div>
    </section>
  );
}

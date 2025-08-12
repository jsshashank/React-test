import React from "react";
import { ArrowRight, Palette } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const projects = [
  {
    title: "Brand Identity Design",
    description:
      "A comprehensive brand identity design for a luxury skincare brand, including logo, packaging, and digital presence.",
    tags: ["Branding", "Design", "Identity"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "#",
  },
  {
    title: "E-commerce Website Redesign",
    description:
      "Complete UX/UI redesign for an e-commerce platform, focusing on improving user experience and conversion rates.",
    tags: ["UI/UX", "Web Design", "E-commerce"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section data-aos="fade-up"  className="py-16 bg-gray-5">
      <h2 id="projects" className="font-Playfair text-2xl font-bold mb-6 flex items-center gap-2"><Palette />Projects</h2>
      <div className="space-y-16 ">
        {projects.map((project, index) => (
          <div data-aos="fade-up"
            key={project.title}
            className={`grid grid-cols-1 md:grid-cols-2 bg-white rounded-md  border border-gray-300 ${index % 2 !== 0 ? "md:direction-rtl" : ""
              }`}
          >
            {/* images */}
            <div 
              className={`w-full h-full border-4 border-white ${index % 2 !== 0 ? "md:order-2" : ""
                }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* text */}
            <div className="flex flex-col justify-center p-6">
              <h3 className="text-2xl font-semibold mb-4 font-Playfair">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/*tags*/}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* link */}
              <a
                href={project.link}
                className="inline-flex items-center text-[#303036] font-medium hover:underline"
              >
                View Project <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

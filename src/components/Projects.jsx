import React from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Brand Identity Design",
    description:
      "A comprehensive brand identity design for a luxury skincare brand, including logo, packaging, and digital presence.",
    tags: ["Branding", "Design", "Identity"],
    image: "https://media.istockphoto.com/id/1957022961/photo/digital-brain-hologram-hud-artificial-intelligence-ai-machine-deep-learning-business.jpg?s=612x612&w=0&k=20&c=8Hq19O6HD2-J5aAsJnq7qumBG_4nntZfMSMqSrmYuCY=",
    link: "#",
  },
  {
    title: "E-commerce Website Redesign",
    description:
      "Complete UX/UI redesign for an e-commerce platform, focusing on improving user experience and conversion rates.",
    tags: ["UI/UX", "Web Design", "E-commerce"],
    image: "https://media.istockphoto.com/id/1957022961/photo/digital-brain-hologram-hud-artificial-intelligence-ai-machine-deep-learning-business.jpg?s=612x612&w=0&k=20&c=8Hq19O6HD2-J5aAsJnq7qumBG_4nntZfMSMqSrmYuCY=",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="font-Playfair text-3xl font-bold mb-12">Projects</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`grid grid-cols-1 md:grid-cols-2 ${
              index % 2 !== 0 ? "md:direction-rtl" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`w-full h-full ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center p-6">
              <h3 className="text-2xl font-semibold mb-4 font-Playfair">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tags */}
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

              {/* Link */}
              <a
                href={project.link}
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
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

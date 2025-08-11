import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One with technologies used.',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'Details about Project Two, its purpose, and stack.',
    link: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-Playfair font-semibold mb-6">Projects</h2>
      <div className="space-y-4">
        {projects.map(({ title, description, link }) => (
          <div
            key={title}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow 
                   bg-gradient-to-r from-black/50 via-gray-800/30 to-black/40 backdrop-blur-md"
          >
            <h3 className="text-xl font-Playfair font-md text-white mb-2">{title}</h3>
            <p className="text-gray-50 mb-3">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              View on GitHub↗
            </a>
          </div>
        ))}
      </div>
    </section>

  );
}

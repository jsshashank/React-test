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
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="space-y- bg-black/30 backdrop-blur-md" >
        {projects.map(({ title, description, link }) => (
          <div key={title} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">{title}</h3>
            <p className="mb-3">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

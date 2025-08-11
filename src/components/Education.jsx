import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'; // lucide icons

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    date: 'May 2023 – Aug 2023',
    points: [
      'Developed and optimized backend services for Google Maps using Java and Python',
      'Improved API performance by 35%',
      'Participated in code reviews and contributed to documentation',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'MIT AI Lab',
    location: 'Cambridge, MA',
    date: 'Jan 2022 – Dec 2022',
    points: [
      'Developed ML models for natural language processing',
      'Published research on improved neural network architectures',
      'Built visualization tools for research findings',
    ],
  },
];

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'MIT',
    location: 'Cambridge, MA',
    date: '2018 – 2022',
    points: [
      'Graduated with Honors',
      'Specialized in AI & Machine Learning',
      'Relevant Coursework: Data Structures, Algorithms, AI, ML',
    ],
  },
];

export default function EduExp() {
  return (
    <section className="py-12 space-y-12">
      {/* Experience */}
      <div>
        <h2 className="text-2xl font-Playfair font-bold flex items-center gap-2 mb-6">
          <Briefcase className="w-6 h-6" /> Experience & Internships
        </h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-medium">
                      {exp.company}
                    </span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" /> {exp.date}
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-Playfair font-bold flex items-center gap-2 mb-6">
          <GraduationCap className="w-6 h-6" /> Education
        </h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-medium">
                      {edu.school}
                    </span>
                    <span>{edu.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" /> {edu.date}
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {edu.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Brain, Cpu, Code2, Wrench, Network ,Lightbulb} from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: 'Data Science',
    items: [
      'Python (NumPy, Pandas, Matplotlib, Seaborn)',
      'Data Cleaning & Wrangling',
      'Exploratory Data Analysis (EDA)',
      'Statistical Analysis',
    ],
  },
  {
    icon: Cpu,
    title: 'AI / Machine Learning',
    items: [
      'Scikit-learn',
      'TensorFlow & Keras',
      'Deep Learning (CNN, RNN, Transformers)',
      'Natural Language Processing',
    ],
  },
  {
    icon: Code2,
    title: 'Web Development',
    items: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'React.js, Next.js',
      'Tailwind CSS',
      'REST APIs',
    ],
  },
  {
    icon: Network,
    title: 'Other Skills',
    items: [
      'Git & GitHub',
      'Problem Solving',
      'Agile & Scrum',
      'Presentation & Communication',
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['VS Code', 'Jupyter Notebook', 'Postman', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-Playfair  font-bold mb-8 flex items-center">
        <Lightbulb />Skills
      </h2>
      <div className="space-y-4">
        {skills.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-3">
              <Icon className="w-5 h-5 mr-2 text-blue-600" />
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

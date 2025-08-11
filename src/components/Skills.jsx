import React from 'react'

export default function Skills() {
    return (
        <section id="skills" className="py-12">
            <h2 className="font-Playfair text-2xl font-bold mb-8">Skills</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">

                {/* Data Science */}
                <div className="p-6 bg-white rounded-lg  border border-gray-500 shadow-lg backdrop-blur-md  transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Data Science</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Python (NumPy, Pandas, Matplotlib, Seaborn)</li>
                        <li>Data Cleaning & Wrangling</li>
                        <li>Exploratory Data Analysis (EDA)</li>
                        <li>Statistical Analysis</li>
                    </ul>
                </div>

                {/* AI / Machine Learning */}
                <div className="p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-md border border-gray-500  transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-400">AI / Machine Learning</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Scikit-learn</li>
                        <li>TensorFlow & Keras</li>
                        <li>Deep Learning (CNN, RNN, Transformers)</li>
                        <li>Natural Language Processing</li>
                    </ul>
                </div>

                {/* Web Development */}
                <div className="p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-md border border-gray-500  transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-400">Web Development</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>HTML5, CSS3, JavaScript (ES6+)</li>
                        <li>React.js, Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>REST APIs</li>
                    </ul>
                </div>

                {/* Other Skills */}
                <div className="p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-md border border-gray-500  transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-400">Other Skills</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Git & GitHub</li>
                        <li>Problem Solving</li>
                        <li>Agile & Scrum</li>
                        <li>Presentation & Communication</li>
                    </ul>
                </div>

                {/* Tools */}
                <div className="p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-md border border-gray-500 transform transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-400">Tools</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>VS Code</li>
                        <li>Jupyter Notebook</li>
                        <li>Postman</li>
                        <li>Figma</li>
                    </ul>
                </div>

            </div>
        </section>

    );

}

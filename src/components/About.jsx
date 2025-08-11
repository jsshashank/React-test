import React from 'react';

export default function About() {
  return (
    <section id="about" className="prose max-w-none px-10 pt-10 pb-9">
      {/* <h2 className="text-2xl font-Playfair font-semibold mb-4">About Me</h2> */}
      <h3 className="font-Tpewriter italic font-semibold text-1xl pb-3">Welcome to my Portfolio 👋,</h3>
      <h1 className="font-Typewriter font-semibold text-7xl mb-3">I'm Jalli Sai Shashank</h1>
      <p className="font-Typewriter text-[1.20rem] text-gray-600 font-semibold mb-3">Data Science • Machine-Learning • DBMS</p>
      <p className="font-Typewriter text-gray-500 text-[1.05rem] ">
        Hello! I'm Your Name, an Enthusiastic Computer Science student with a strong foundation in data science, machine learning, and Database. Passionate about leveraging data-driven insights to solve real-world problems. Seeking an internship/full-time role to apply my skills in data analysis, machine learning, and software development.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-black rounded-full font-Typewriter font-medium text-center
             border border-gray-400 transition-all duration-300 
             hover:border-black group inline-flex items-center"
        >
          <i className="fa-solid fa-arrow-down pr-2 transform transition-transform duration-300 group-hover:translate-y-1"
          ></i>Resume
        </a>

        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-full font-Typewriter font-medium text-center
             border border-gray-400 transition-all duration-300 
             hover:border-black group inline-flex items-center "
        >
          Contact Me
          <i
            className="fa-solid fa-arrow-right pl-2 transform transition-transform duration-300 group-hover:translate-x-1"
          ></i>
        </a>

      </div>
    </section>
  );
}

{/*[#303036] 
 style={{
      textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)"
           }}  
  */}
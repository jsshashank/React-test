import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlassUI from './components/bar';
import Emphasis from  './components/emphasis';
import Skills from './components/Skills';
import Hero from './components/Hero';
import EduExp from './components/Education';

function App() {
  return (
    <div>
      <Header />
      <main
        className="
          space-y-20 mt-12 
          w-full max-w-full px-4 py-8 
          sm:max-w-2xl sm:px-6 
          md:max-w-4xl 
          lg:max-w-5xl 
          mx-auto
        "
      >
        <About />
        <Projects />
        <Skills />
        <EduExp />
        <Contact />
      </main>
      <Footer />
      <GlassUI />
    </div>
  );
}

export default App;

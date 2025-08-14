import React from 'react';
import Header2 from './components/Header2';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlassUI from './components/Bar';
import Skills from './components/Skills';
import Hero from './components/Hero';
import EduExp from './components/Education';
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div>
      <CustomCursor/>
      <Header2 />
      <main
        className="
          space-y-5 mt-12 
          w-full max-w-full px-4 py-8
          sm:px-6 
          md:max-w-4xl 
          lg:max-w-5xl 
          mx-auto
        "
      >
        <Hero />
        <Projects />
        <Skills />
        <EduExp />
        <Contact />
      </main>
      <Footer />
      <GlassUI/>
    </div>
  );
}

export default App;

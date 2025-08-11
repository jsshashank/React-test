import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlassUI from './components/bar';
import Emphasis from  './components/emphasis';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <div className="">
      <Header />
      <main className="space-y-20 mt-12 max-w-5xl mx-auto px-6 py-8">
        <About />
        <Emphasis/>
        <Projects />
        <Skills/>
        <Contact />
      </main>
      <Footer />
      <GlassUI></GlassUI>
    </div>
  );
}
export default App;

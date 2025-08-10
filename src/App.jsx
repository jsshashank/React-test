import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StudentPortfolio from './components/StudentPortfolio'
import GlassUI from './components/bar';

function App() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <Header />
      <main className="space-y-20 mt-12">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <GlassUI></GlassUI>
      
    </div>
  );
}

export default App;

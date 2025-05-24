import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Venkata Sai Sekhar | Cybersecurity Professional';
    
    // Add matrix animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      .hero-gradient {
        background: linear-gradient(135deg, rgba(16, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.8) 100%);
      }
      
      .matrix-code {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }
      
      .matrix-code div {
        position: absolute;
        color: #10B981;
        font-size: 1.2rem;
        line-height: 1;
        transform: translateY(-100%);
      }
      
      @keyframes matrix-fall {
        0% {
          transform: translateY(-100%);
          opacity: 1;
        }
        85% {
          opacity: 1;
        }
        100% {
          transform: translateY(1000%);
          opacity: 0;
        }
      }
      
      .animate-matrix-fall {
        animation: matrix-fall 10s linear infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
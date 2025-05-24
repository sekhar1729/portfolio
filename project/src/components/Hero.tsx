import React, { useEffect, useState } from 'react';
import { Shield, Lock, Terminal } from 'lucide-react';
import { personalInfo } from '../utils/data';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Cybersecurity Professional';
  const typingSpeed = 100;
  const typingDelay = 1000;
  const cursorBlinkSpeed = 500;
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: number;
    let cursorTimer: number;

    // Start blinking cursor
    cursorTimer = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    if (isTyping) {
      if (typedText.length < fullText.length) {
        timer = window.setTimeout(() => {
          setTypedText(fullText.substring(0, typedText.length + 1));
        }, typingSpeed);
      } else {
        timer = window.setTimeout(() => {
          setIsTyping(false);
          setTypedText('');
        }, typingDelay);
      }
    } else {
      timer = window.setTimeout(() => {
        setIsTyping(true);
      }, typingDelay);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, [typedText, isTyping]);

  // Matrix-like background effect (simplified for performance)
  const MatrixBackground = () => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <div className="matrix-code text-green-500 font-mono text-sm">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="select-none leading-none animate-matrix-fall" style={{ 
              animationDelay: `${Math.random() * 5}s`,
              left: `${Math.random() * 100}%`
            }}>
              {Array.from({ length: 15 }).map((_, j) => (
                <div key={j}>{String.fromCharCode(33 + Math.floor(Math.random() * 94))}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <MatrixBackground />
      
      <div className="hero-gradient absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 inline-flex p-2 rounded-full bg-gray-800/70 backdrop-blur-sm">
            <Shield className="h-8 w-8 text-green-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-mono">
            {personalInfo.name}
          </h1>
          
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl text-green-400 font-mono">
              {typedText}
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 mt-4">
            <div className="bg-gray-800/70 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
              <Terminal className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-gray-300">{personalInfo.location}</span>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
              <Lock className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-gray-300">B.Tech in CSE (Cybersecurity)</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#about" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Explore Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-300 border border-gray-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
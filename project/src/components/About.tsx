import React from 'react';
import { Shield, Target, User } from 'lucide-react';
import { objective, personalInfo } from '../utils/data';

const About = () => {
  const contactInfo = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, 
      label: 'Email', 
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, 
      label: 'Phone', 
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>, 
      label: 'LinkedIn', 
      value: personalInfo.linkedin,
      link: '#'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gray-700 rounded-lg mb-4">
            <User className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono mb-2">About Me</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 p-8 flex flex-col justify-center items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                <Shield className="h-12 w-12 md:h-16 md:w-16 text-green-500" />
              </div>
              
              <div className="space-y-3 mt-4">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    <span className="mr-2 text-green-400">{item.icon}</span>
                    <span>{item.value}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-4">
                <Target className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="text-xl font-mono font-semibold text-white">Career Objective</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {objective}
              </p>
              
              <div className="mt-8 flex space-x-4">
                <a
                  href="#contact"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square mr-2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Get in Touch
                </a>
                <a
                  href="#"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
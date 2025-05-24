import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../utils/data';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gray-800 rounded-lg mb-4">
            <GraduationCap className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono mb-2">Education</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-gray-700 rounded-lg mr-3 text-green-400">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white font-mono">{edu.degree}</h3>
                      </div>
                      <p className="text-green-400 flex items-center mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </p>
                    </div>
                    
                    <div className="bg-gray-700 px-4 py-2 rounded-lg">
                      <span className="text-white font-semibold">{edu.score}</span>
                    </div>
                  </div>
                  
                  {index === 0 && (
                    <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                      <p className="text-gray-300 text-sm">
                        <span className="text-green-400 font-semibold">Relevant Coursework:</span> Network Security, Ethical Hacking, Secure Coding Practices, Cryptography, Digital Forensics, Incident Response
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
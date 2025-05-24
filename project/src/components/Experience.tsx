import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../utils/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gray-700 rounded-lg mb-4">
            <Briefcase className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono mb-2">Professional Experience</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative ml-4 md:ml-0">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500/30 rounded"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div key={index} className={`mb-12 md:mb-0 relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-900 rounded-xl p-6 shadow-xl transition-transform hover:scale-[1.02] duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gray-800 rounded-lg mr-3 text-green-400">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white font-mono">{exp.title}</h3>
                    </div>
                    
                    <p className="text-green-400 mb-2 flex items-center">
                      {exp.company}
                    </p>
                    
                    <p className="text-gray-400 mb-4 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.period}
                    </p>
                    
                    <ul className="space-y-2 text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2">›</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
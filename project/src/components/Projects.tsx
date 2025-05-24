import React, { useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { projects } from '../utils/data';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${
        isExpanded ? 'ring-2 ring-green-500 scale-[1.02]' : 'hover:scale-[1.02]'
      }`}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white font-mono mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-80' : 'max-h-0'}`}>
          <ul className="space-y-2 text-gray-300 mb-4">
            {project.details.map((detail: string, i: number) => (
              <li key={i} className="flex items-start">
                <span className="text-green-400 mr-2">›</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-gray-700 text-green-400 text-xs rounded-md">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-green-400 hover:text-green-300 transition-colors duration-200"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          
          {project.link && (
            <a
              href={project.link}
              className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              <span>View Project</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gray-700 rounded-lg mb-4">
            <Code className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono mb-2">Projects</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Showcasing my cybersecurity projects and contributions to the security community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
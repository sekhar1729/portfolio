import React from 'react';
import { Code, Database, Shield, Terminal } from 'lucide-react';
import { skills } from '../utils/data';

const SkillCategory = ({ 
  title, 
  icon, 
  skills 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: { name: string; proficiency: number }[] 
}) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-xl transition-transform hover:scale-[1.02] duration-300">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-green-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white font-mono">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-green-400 text-sm">{skill.proficiency}/5</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
              <div 
                className="bg-gradient-to-r from-green-600 to-green-400 h-2 rounded-full"
                style={{ width: `${(skill.proficiency / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const categorizedSkills = {
    'Languages': skills.filter(skill => skill.category === 'Languages'),
    'Technologies': skills.filter(skill => skill.category === 'Technologies'),
    'Tools & Platforms': skills.filter(skill => skill.category === 'Tools & Platforms'),
    'Cybersecurity Skills': skills.filter(skill => skill.category === 'Cybersecurity Skills')
  };

  const categoryIcons = {
    'Languages': <Code className="h-6 w-6" />,
    'Technologies': <Database className="h-6 w-6" />,
    'Tools & Platforms': <Terminal className="h-6 w-6" />,
    'Cybersecurity Skills': <Shield className="h-6 w-6" />
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gray-800 rounded-lg mb-4">
            <Terminal className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono mb-2">Technical Skills</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Proficient in a wide range of cybersecurity tools, programming languages, and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <SkillCategory 
              key={category} 
              title={category}
              icon={categoryIcons[category as keyof typeof categoryIcons]}
              skills={skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { Award } from 'lucide-react';
import { certifications } from '../utils/data';

const CertificationCard = ({ certification }: { certification: any }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] duration-300">
      <div className="flex items-start">
        <div className="p-2 bg-gray-700 rounded-lg mr-4 text-green-400">
          <Award className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{certification.name}</h3>
          <p className="text-gray-400">
            {certification.issuer}
            {certification.date && ` • ${certification.date}`}
          </p>
          
          {certification.link && (
            <a
              href={certification.link}
              className="mt-2 inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              Verify
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gray-800 rounded-lg mb-4">
            <Award className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
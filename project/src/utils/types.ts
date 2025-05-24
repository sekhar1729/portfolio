export interface Skill {
  name: string;
  category: 'Languages' | 'Technologies' | 'Tools & Platforms' | 'Cybersecurity Skills';
  proficiency: number; // 1-5 scale
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Project {
  title: string;
  description: string;
  details: string[];
  skills: string[];
  image?: string; // Optional project screenshot
  link?: string; // Optional project link
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}
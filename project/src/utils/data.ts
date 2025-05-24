import { Skill, Experience, Education, Project, Certification, Language } from './types';

export const personalInfo = {
  name: 'Venkata Sai Sekhar Boddeti',
  title: 'Cybersecurity Professional',
  location: 'Visakhapatnam',
  email: 'b.v.sai5555@gmail.com',
  phone: '+91 6300557504',
  linkedin: 'LinkedIn',
};

export const objective = `Driven and detail-oriented cybersecurity enthusiast with a solid foundation in Python development, web application security, and threat mitigation. Eager to contribute to securing digital infrastructures and constantly building my portfolio through real-world projects, labs, and certifications. Looking to apply my skills in a Security Operations Center (SOC) or cybersecurity engineering role.`;

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', proficiency: 5 },
  { name: 'C', category: 'Languages', proficiency: 4 },
  
  // Technologies
  { name: 'SQL', category: 'Technologies', proficiency: 4 },
  { name: 'HTML', category: 'Technologies', proficiency: 4 },
  { name: 'CSS', category: 'Technologies', proficiency: 3 },
  { name: 'Excel', category: 'Technologies', proficiency: 4 },
  { name: 'GitHub', category: 'Technologies', proficiency: 4 },
  
  // Tools & Platforms
  { name: 'Linux', category: 'Tools & Platforms', proficiency: 5 },
  { name: 'Windows', category: 'Tools & Platforms', proficiency: 4 },
  { name: 'Git', category: 'Tools & Platforms', proficiency: 4 },
  { name: 'Burp Suite', category: 'Tools & Platforms', proficiency: 5 },
  { name: 'Nmap', category: 'Tools & Platforms', proficiency: 5 },
  { name: 'Wireshark', category: 'Tools & Platforms', proficiency: 4 },
  { name: 'Splunk', category: 'Tools & Platforms', proficiency: 3 },
  { name: 'LetsDefend', category: 'Tools & Platforms', proficiency: 4 },
  { name: 'TryHackMe', category: 'Tools & Platforms', proficiency: 4 },
  
  // Cybersecurity Skills
  { name: 'VAPT (Web Apps)', category: 'Cybersecurity Skills', proficiency: 5 },
  { name: 'SIEM Basics', category: 'Cybersecurity Skills', proficiency: 3 },
  { name: 'Threat Hunting', category: 'Cybersecurity Skills', proficiency: 4 },
  { name: 'Log Analysis', category: 'Cybersecurity Skills', proficiency: 4 },
  { name: 'Keylogging', category: 'Cybersecurity Skills', proficiency: 4 },
  { name: 'OSINT', category: 'Cybersecurity Skills', proficiency: 5 },
];

export const experiences: Experience[] = [
  {
    title: 'Cybersecurity Intern (Web Application Security)',
    company: 'Nullclass',
    period: 'July – August 2024',
    description: [
      'Conducted manual Vulnerability Assessment and Penetration Testing (VAPT) using OWASP Top 10:2021',
      'Documented vulnerabilities and provided remediation strategies'
    ],
    skills: ['VAPT', 'OWASP Top 10', 'Web Security', 'Documentation']
  },
  {
    title: 'Ethical Hacking Virtual Intern',
    company: 'Eduskills',
    period: 'July – September 2023',
    description: [
      'Hands-on with ethical hacking tools and learned reconnaissance, exploitation, and post-exploitation stages'
    ],
    skills: ['Ethical Hacking', 'Reconnaissance', 'Exploitation', 'Post-Exploitation']
  },
  {
    title: 'Web Development Intern',
    company: 'IIIT Hyderabad (via College)',
    period: 'May – July 2023',
    description: [
      'Developed a secure currency converter web app using Flask and Python',
      'Practiced secure coding principles and input validation'
    ],
    skills: ['Flask', 'Python', 'Web Development', 'Secure Coding', 'Input Validation']
  }
];

export const education: Education[] = [
  {
    degree: 'B.Tech in CSE (Cybersecurity)',
    institution: 'KIET, Kakinada',
    period: '2021 – 2025',
    score: 'CGPA: 7.5'
  },
  {
    degree: 'MPC',
    institution: 'Dr. Himasekhar Junior College',
    period: '2019 – 2021',
    score: '93.2%'
  },
  {
    degree: 'SSC',
    institution: 'Sri Sivayya High School',
    period: '2019',
    score: '98%'
  }
];

export const projects: Project[] = [
  {
    title: 'GETSAN – SSL/TLS Certificate Analyzer',
    description: 'Python utility to extract Subject Alternative Names (SANs) from SSL certificates',
    details: [
      'Useful for domain auditing and identifying rogue subdomains',
      'Helps security professionals during reconnaissance phase',
      'Reduces manual effort in certificate analysis'
    ],
    skills: ['Python', 'SSL/TLS', 'Certificate Analysis', 'Domain Auditing']
  },
  {
    title: 'Keylogger for Compliance Monitoring',
    description: 'Ethical keylogger built using pynput to monitor input events',
    details: [
      'Data storage options: TXT, CSV, or Database',
      'Use-case: Employee activity monitoring (educational purposes)',
      'Configurable logging options and reporting features'
    ],
    skills: ['Python', 'pynput', 'Monitoring', 'Compliance']
  },
  {
    title: 'Malicious Email Analyzer (In Progress)',
    description: 'Parses .eml headers and bodies to extract indicators like Message-ID, URLs, and attachments',
    details: [
      'Simulates a SOC workflow for phishing analysis',
      'Extracts potential IOCs from emails',
      'Helps identify phishing attempts and malicious content'
    ],
    skills: ['Python', 'Email Analysis', 'SOC', 'Phishing Detection']
  }
];

export const certifications: Certification[] = [
  {
    name: 'Ethical Hacking',
    issuer: 'Eduskills'
  },
  {
    name: 'Python Programming',
    issuer: 'Edyst'
  },
  {
    name: 'Internet of Things (IoT)',
    issuer: 'NPTEL'
  },
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'Nullclass & Cisco'
  },
  {
    name: 'Microsoft Learn Student Ambassador',
    issuer: 'KIET Workshop'
  }
];

export const languages: Language[] = [
  { name: 'English', proficiency: 'Fluent (Speaking, Reading, Writing)' },
  { name: 'Telugu', proficiency: 'Fluent (Speaking, Reading, Writing)' },
  { name: 'Hindi', proficiency: 'Fluent (Speaking, Reading, Writing)' }
];
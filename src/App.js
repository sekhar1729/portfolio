import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Code, Eye, Network, Lock, Zap, Globe, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalText, setTerminalText] = useState('');
  const [matrixRain, setMatrixRain] = useState([]);

  const fullText = "root@sekhar:~$ whoami\nVenkata Sai Sekhar Boddeti - SOC Analyst | Cybersecurity Engineer";

  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 50);
      }
    };
    typeWriter();

    // Matrix rain effect
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const rainDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 1
    }));
    setMatrixRain(rainDrops);

    const animateRain = () => {
      setMatrixRain(prev => prev.map(drop => ({
        ...drop,
        y: drop.y > 100 ? -10 : drop.y + drop.speed,
        char: Math.random() > 0.98 ? chars[Math.floor(Math.random() * chars.length)] : drop.char
      })));
    };

    const rainInterval = setInterval(animateRain, 100);
    return () => clearInterval(rainInterval);
  }, []);

  const skills = [
    { category: 'SIEM Tools', items: ['Wazuh', 'Splunk', 'ELK Stack'], icon: <Eye size={20} /> },
    { category: 'Scripting', items: ['Python', 'Bash', 'C'], icon: <Code size={20} /> },
    { category: 'Networking', items: ['TCP/IP', 'OSI Model', 'DNS', 'VPN'], icon: <Network size={20} /> },
    { category: 'Security Tools', items: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit'], icon: <Shield size={20} /> }
  ];

  const projects = [
    {
      name: 'GETSAN',
      description: 'SSL/TLS Certificate Analysis Tool',
      tech: 'Python, Cryptography',
      type: 'Security Tool'
    },
    {
      name: 'SOC Dashboard',
      description: 'Real-time Log Visualization System',
      tech: 'Python, ELK Stack',
      type: 'Monitoring'
    },
    {
      name: 'Log Analysis Tool',
      description: 'IOC Detection & Threat Hunting',
      tech: 'Python, RegEx',
      type: 'Analysis'
    },
    {
      name: 'Port Scanner',
      description: 'Network Discovery & Enumeration',
      tech: 'C, TCP Sockets',
      type: 'Network Tool'
    }
  ];

  const certifications = [
    'LetsDefend SOC Analyst Learning Path',
    'TryHackMe Blue Team Labs',
    'Ethical Hacking (Eduskills)',
    'Python Programming (Edyst)',
    'Cybersecurity (Cisco)',
    'Microsoft Learn Student Ambassador'
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#00ff41',
      fontFamily: '"Courier New", monospace',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Matrix Rain Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {matrixRain.map(drop => (
          <div
            key={drop.id}
            style={{
              position: 'absolute',
              left: `${drop.x}%`,
              top: `${drop.y}%`,
              color: '#00ff41',
              fontSize: '14px',
              opacity: 0.3,
              animation: 'pulse 2s infinite'
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          padding: '15px 0',
          zIndex: 1000,
          borderBottom: '1px solid #00ff41'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              <Shield size={24} />
              <span style={{ color: '#00ff41' }}>SEKHAR.CYBER</span>
            </div>
            <div style={{ display: 'flex', gap: '30px' }}>
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  style={{
                    background: activeSection === section ? '#00ff41' : 'transparent',
                    color: activeSection === section ? '#000' : '#00ff41',
                    border: '1px solid #00ff41',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== section) {
                      e.target.style.background = 'rgba(0, 255, 65, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== section) {
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        {activeSection === 'home' && (
          <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px'
          }}>
            <div style={{
              textAlign: 'center',
              maxWidth: '800px',
              padding: '0 20px'
            }}>
              <div style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #00ff41',
                borderRadius: '10px',
                padding: '40px',
                marginBottom: '30px',
                boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)'
              }}>
                <pre style={{
                  fontSize: '14px',
                  textAlign: 'left',
                  marginBottom: '20px',
                  minHeight: '60px'
                }}>
                  {terminalText}
                  <span style={{ animation: 'blink 1s infinite' }}>█</span>
                </pre>
              </div>
              
              <h1 style={{
                fontSize: '48px',
                marginBottom: '20px',
                textShadow: '0 0 20px #00ff41'
              }}>
                CYBERSECURITY ANALYST
              </h1>
              
              <p style={{
                fontSize: '18px',
                marginBottom: '30px',
                opacity: 0.8
              }}>
                Protecting digital assets through advanced threat detection and incident response
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(0, 255, 65, 0.1)',
                  padding: '10px 20px',
                  border: '1px solid #00ff41',
                  borderRadius: '5px'
                }}>
                  <Terminal size={20} />
                  <span>SOC Analyst</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(0, 255, 65, 0.1)',
                  padding: '10px 20px',
                  border: '1px solid #00ff41',
                  borderRadius: '5px'
                }}>
                  <Shield size={20} />
                  <span>Threat Hunter</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(0, 255, 65, 0.1)',
                  padding: '10px 20px',
                  border: '1px solid #00ff41',
                  borderRadius: '5px'
                }}>
                  <Lock size={20} />
                  <span>Security Engineer</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section style={{
            minHeight: '100vh',
            padding: '100px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '36px',
              textAlign: 'center',
              marginBottom: '50px',
              textShadow: '0 0 20px #00ff41'
            }}>
              [CLASSIFIED] ANALYST PROFILE
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              <div style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #00ff41',
                borderRadius: '10px',
                padding: '30px',
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)'
              }}>
                <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Terminal size={24} />
                  Mission Statement
                </h3>
                <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
                  Passionate cybersecurity engineering student with hands-on experience in threat detection, 
                  incident response, and security analysis. Specializing in SIEM tools, log analysis, and 
                  threat hunting through platforms like TryHackMe and LetsDefend.
                </p>
              </div>
              
              <div style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #00ff41',
                borderRadius: '10px',
                padding: '30px',
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)'
              }}>
                <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Zap size={24} />
                  Experience Log
                </h3>
                <div style={{ fontSize: '14px' }}>
                  <div style={{ marginBottom: '15px' }}>
                    <strong>Web App Security Intern</strong><br />
                    <span style={{ opacity: 0.7 }}>Nullclass | July-Aug 2024</span>
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <strong>Ethical Hacking Intern</strong><br />
                    <span style={{ opacity: 0.7 }}>Eduskills | July-Sep 2023</span>
                  </div>
                  <div>
                    <strong>Summer Intern</strong><br />
                    <span style={{ opacity: 0.7 }}>IIIT Hyderabad | May-July 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section style={{
            minHeight: '100vh',
            padding: '100px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '36px',
              textAlign: 'center',
              marginBottom: '50px',
              textShadow: '0 0 20px #00ff41'
            }}>
              [ARSENAL] TECHNICAL CAPABILITIES
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '25px',
              marginBottom: '40px'
            }}>
              {skills.map((skillGroup, index) => (
                <div key={index} style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid #00ff41',
                  borderRadius: '10px',
                  padding: '25px',
                  boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <h3 style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '15px',
                    color: '#00ff41'
                  }}>
                    {skillGroup.icon}
                    {skillGroup.category}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} style={{
                        background: 'rgba(0, 255, 65, 0.1)',
                        border: '1px solid #00ff41',
                        padding: '5px 12px',
                        borderRadius: '15px',
                        fontSize: '12px',
                        color: '#00ff41'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid #00ff41',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)'
            }}>
              <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Shield size={24} />
                Security Certifications
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '10px'
              }}>
                {certifications.map((cert, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px',
                    background: 'rgba(0, 255, 65, 0.05)',
                    borderRadius: '5px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: '#00ff41',
                      borderRadius: '50%'
                    }} />
                    <span style={{ fontSize: '14px' }}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section style={{
            minHeight: '100vh',
            padding: '100px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '36px',
              textAlign: 'center',
              marginBottom: '50px',
              textShadow: '0 0 20px #00ff41'
            }}>
              [PROJECTS] SECURITY TOOLS & SYSTEMS
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}>
              {projects.map((project, index) => (
                <div key={index} style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '1px solid #00ff41',
                  borderRadius: '10px',
                  padding: '30px',
                  boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 255, 65, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.2)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px'
                  }}>
                    <h3 style={{ fontSize: '20px', color: '#00ff41' }}>{project.name}</h3>
                    <span style={{
                      background: 'rgba(0, 255, 65, 0.2)',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '10px',
                      color: '#00ff41',
                      border: '1px solid #00ff41'
                    }}>
                      {project.type}
                    </span>
                  </div>
                  <p style={{
                    marginBottom: '15px',
                    opacity: 0.8,
                    lineHeight: '1.5'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    fontSize: '12px',
                    color: '#00ff41',
                    fontWeight: 'bold'
                  }}>
                    TECH STACK: {project.tech}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section style={{
            minHeight: '100vh',
            padding: '100px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid #00ff41',
              borderRadius: '15px',
              padding: '50px',
              boxShadow: '0 0 50px rgba(0, 255, 65, 0.3)',
              textAlign: 'center',
              maxWidth: '600px',
              width: '100%'
            }}>
              <h2 style={{
                fontSize: '36px',
                marginBottom: '30px',
                textShadow: '0 0 20px #00ff41'
              }}>
                [CONTACT] ESTABLISH CONNECTION
              </h2>
              
              <div style={{
                textAlign: 'left',
                marginBottom: '30px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px',
                  padding: '15px',
                  background: 'rgba(0, 255, 65, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 255, 65, 0.2)'
                }}>
                  <Mail size={20} />
                  <div>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>EMAIL</div>
                    <div>b.v.sai5555@gmail.com</div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px',
                  padding: '15px',
                  background: 'rgba(0, 255, 65, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 255, 65, 0.2)'
                }}>
                  <Phone size={20} />
                  <div>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>PHONE</div>
                    <div>+91 6300557504</div>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px',
                  padding: '15px',
                  background: 'rgba(0, 255, 65, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 255, 65, 0.2)'
                }}>
                  <MapPin size={20} />
                  <div>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>LOCATION</div>
                    <div>Visakhapatnam, India</div>
                  </div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap'
              }}>
                <a href="https://www.linkedin.com/in/sai-sekhar-boddeti-60a463240/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '8px',
                     padding: '12px 20px',
                     background: 'rgba(0, 255, 65, 0.1)',
                     border: '1px solid #00ff41',
                     borderRadius: '8px',
                     color: '#00ff41',
                     textDecoration: 'none',
                     transition: 'all 0.3s ease'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.background = '#00ff41';
                     e.target.style.color = '#000';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.background = 'rgba(0, 255, 65, 0.1)';
                     e.target.style.color = '#00ff41';
                   }}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                
                <a href="https://tryhackme.com/p/Sekhar1729" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '8px',
                     padding: '12px 20px',
                     background: 'rgba(0, 255, 65, 0.1)',
                     border: '1px solid #00ff41',
                     borderRadius: '8px',
                     color: '#00ff41',
                     textDecoration: 'none',
                     transition: 'all 0.3s ease'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.background = '#00ff41';
                     e.target.style.color = '#000';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.background = 'rgba(0, 255, 65, 0.1)';
                     e.target.style.color = '#00ff41';
                   }}
                >
                  <Terminal size={16} />
                  TryHackMe
                </a>
                
                <a href="https://app.letsdefend.io/user/sekhar1729" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '8px',
                     padding: '12px 20px',
                     background: 'rgba(0, 255, 65, 0.1)',
                     border: '1px solid #00ff41',
                     borderRadius: '8px',
                     color: '#00ff41',
                     textDecoration: 'none',
                     transition: 'all 0.3s ease'
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.background = '#00ff41';
                     e.target.style.color = '#000';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.background = 'rgba(0, 255, 65, 0.1)';
                     e.target.style.color = '#00ff41';
                   }}
                >
                  <Shield size={16} />
                  LetsDefend
                </a>
              </div>
            </div>
          </section>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        button:hover {
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          nav > div {
            flex-direction: column;
            gap: 20px;
          }
          
          h1 {
            font-size: 32px !important;
          }
          
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
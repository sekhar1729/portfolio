import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { personalInfo } from '../utils/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after a few seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { 
      icon: <Mail className="h-6 w-6" />, 
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    { 
      icon: <Phone className="h-6 w-6" />, 
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    { 
      icon: <MapPin className="h-6 w-6" />, 
      label: 'Location',
      value: personalInfo.location
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gray-700 rounded-lg mb-4">
            <Mail className="h-6 w-6 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or interested in collaborating? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-green-400 mr-2" />
                <h3 className="text-xl font-semibold text-white font-mono">Contact Information</h3>
              </div>
              
              <p className="text-gray-400 mb-8">
                Ready to discuss cybersecurity solutions or have questions? Reach out through any of these channels.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 p-2 bg-gray-800 rounded-lg text-green-400 mr-3">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-white hover:text-green-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="text-white font-semibold mb-3 font-mono">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-green-400 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-green-400 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-green-400 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h3 className="text-xl font-semibold text-white mb-6 font-mono">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {submitSuccess && (
                    <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                      Your message has been sent successfully. I'll get back to you soon!
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
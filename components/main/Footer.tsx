"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map form field names to state properties
    if (name === 'name') {
      setFormData(prev => ({ ...prev, firstName: value }));
    } else if (name === 'lastName') {
      setFormData(prev => ({ ...prev, lastName: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    
    // Basic validation
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const subject = formData.get('subject') as string;
    
    if (!name || !email || !message) {
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    setStatusMessage('Sending message...');

    try {
      // Initialize EmailJS with your public key
      emailjs.init('5e3JeMsZsi_fTVDr2'); // Replace with your EmailJS public key

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_gnpsauo',     // Replace with your EmailJS service ID
        'template_ftdotns',    // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          subject: subject || 'Portfolio Contact Form',
          message: message,
          to_name: 'Aditya Chandra',
          reply_to: email,
        }
      );

      console.log('EmailJS Success:', result);
      setStatusMessage('✅ Message sent successfully! I will get back to you soon.');
      
      // Reset form
      formElement.reset();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Fallback to mailto
      const mailtoSubject = encodeURIComponent(subject || 'Portfolio Contact Form');
      const mailtoBody = encodeURIComponent(
        `Hi Aditya,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'Portfolio Contact'}\n\nMessage:\n${message}\n\n---\nSent from your portfolio contact form`
      );
      
      window.location.href = `mailto:adityachandra419@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatusMessage('✅ Opening your email client... Please send the pre-filled email.');
      
      setTimeout(() => {
        formElement.reset();
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 2000);

    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:adityachandra419@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Bangalore,India', '_blank');
  };

  return (
    <div className="w-full text-gray-200 shadow-2xl p-10 mt-20 relative" id="contact">
      <div className="w-full max-w-7xl mx-auto">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 mb-6 animate-pulse">
            Get In Touch With Me
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s collaborate and create something amazing together. 
            I&apos;m always excited to work on new projects and connect with fellow developers.
          </p>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto mt-8 rounded-full animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 relative z-10">
          {/* Left Side - Personal Details */}
          <div className="space-y-8">
            <div className="hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6 group cursor-pointer hover:bg-white/10 rounded-xl p-4 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <FaUser className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Full Name</p>
                    <p className="text-white font-bold text-lg">Aditya Chandra</p>
                  </div>
                </div>

                <button 
                  onClick={handleEmailClick}
                  className="flex items-center space-x-6 group cursor-pointer hover:bg-white/10 rounded-xl p-4 transition-all duration-300 w-full text-left border-none bg-transparent outline-none"
                  type="button"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Address</p>
                    <p className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">adityachandra419@gmail.com</p>
                  </div>
                </button>

                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-6 group cursor-pointer hover:bg-white/10 rounded-xl p-4 transition-all duration-300 w-full text-left border-none bg-transparent outline-none"
                  type="button"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <FaPhone className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone Number</p>
                    <p className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">+91 9599839381</p>
                  </div>
                </button>

                <button 
                  onClick={handleLocationClick}
                  className="flex items-center space-x-6 group cursor-pointer hover:bg-white/10 rounded-xl p-4 transition-all duration-300 w-full text-left border-none bg-transparent outline-none"
                  type="button"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">Amravati, India</p>
                  </div>
                </button>
              </div>

              {/* Social Media Links */}
              <div className="mt-10">
                <h4 className="text-xl font-bold mb-6 text-transparent">Follow Me</h4>
                <div className="flex space-x-6">
                  <a 
                    href="https://github.com/adityachandra512" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-lg hover:shadow-gray-500/30"
                  >
                    <RxGithubLogo className="text-white text-2xl group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aditya-ch/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                  >
                    <RxLinkedinLogo className="text-white text-2xl group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                  <a 
                    href="https://x.com/aditya_cha9063" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-lg hover:shadow-blue-400/30"
                  >
                    <RxTwitterLogo className="text-white text-2xl group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
              Send Me a Message
            </h3>
            
            {/* Status Message */}
            {statusMessage && (
              <div className={`mb-6 p-4 rounded-lg ${statusMessage.includes('✅') ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
                <p className="text-white text-sm">{statusMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 text-sm font-semibold mb-3">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName"
                    name="name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 text-sm font-semibold mb-3">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-3">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-3">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-3">Message *</label>
                <textarea 
                  rows={5}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-700 hover:via-pink-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95 text-lg cursor-pointer outline-none ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Sending... ⏳' : 'Send Message ✨'}
              </button>
              
              <div className="text-center space-y-2">
                <p className="text-gray-400 text-sm">
                  Having trouble? You can also:
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                  <button 
                    type="button"
                    onClick={handleEmailClick}
                    className="text-purple-400 hover:text-purple-300 underline cursor-pointer bg-transparent border-none outline-none text-sm"
                  >
                    📧 Email me directly
                  </button>
                  <span className="text-gray-500 hidden sm:inline">•</span>
                  <button 
                    type="button"
                    onClick={() => {
                      const text = `Name: ${formData.firstName}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
                      navigator.clipboard.writeText(text).then(() => {
                        setStatusMessage('📋 Message copied to clipboard!');
                      });
                    }}
                    className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer bg-transparent border-none outline-none text-sm"
                  >
                    📋 Copy message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-purple-500/30 pt-8 text-center relative z-10">
          <p className="text-gray-300 text-lg">
            &copy; 2024 Aditya Chandra. All rights reserved. Made with ❤️ in India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
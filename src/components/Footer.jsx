import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      "LLMs & SLMs",
      "Multimodal AI",
      "Code Review",
      "Code Modernization",
      "Recommendations",
      "AI Training",
      "Consultation"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "News",
      "Contact"
    ],
    Resources: [
      "Documentation",
      "Blog",
      "Case Studies",
      "Whitepapers",
      "FAQs"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Security"
    ]
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Brain className="h-8 w-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-white">Alera AI</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pioneering the future of AI with cutting-edge solutions in language models, 
              multimodal systems, and intelligent code modernization.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>hello@alera.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Vancouver, BC</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI, machine learning, and code modernization 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700/50">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Alera AI. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-2 bg-slate-800/50 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 bg-slate-800/50 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 bg-slate-800/50 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


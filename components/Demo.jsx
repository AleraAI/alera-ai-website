import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Calendar, CheckCircle, Brain, Code, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Demo = ({ onBack }) => {
  const [selectedDemo, setSelectedDemo] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: '',
    preferredTime: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle demo request submission
    console.log('Demo request submitted:', { ...formData, selectedDemo });
    alert('Thank you! We will contact you within 24 hours to schedule your personalized demo.');
  };

  const demoOptions = [
    {
      id: 'llm-demo',
      title: 'Language Models Demo',
      description: 'See our custom LLMs and SLMs in action with real-world examples',
      icon: Brain,
      duration: '30 minutes',
      features: ['Custom model training', 'Domain adaptation', 'Performance benchmarks']
    },
    {
      id: 'code-review-demo',
      title: 'AI Code Review Demo',
      description: 'Experience intelligent code analysis and automated refactoring',
      icon: Code,
      duration: '45 minutes',
      features: ['Live code analysis', 'Security scanning', 'Refactoring suggestions']
    },
    {
      id: 'multimodal-demo',
      title: 'Multimodal AI Demo',
      description: 'Explore our multimodal systems processing text, image, and audio data',
      icon: Layers,
      duration: '40 minutes',
      features: ['Cross-modal understanding', 'Real-time processing', 'Custom architectures']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request a Personalized Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See Alera AI's cutting-edge solutions in action. Choose your area of interest 
            and we'll customize the demo to your specific needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selection */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Choose Your Demo</h2>
            <div className="space-y-4">
              {demoOptions.map((demo) => {
                const IconComponent = demo.icon;
                return (
                  <div
                    key={demo.id}
                    className={`p-6 rounded-xl border cursor-pointer transition-all ${
                      selectedDemo === demo.id
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-slate-700/50 bg-slate-800/50 hover:border-blue-500/30'
                    }`}
                    onClick={() => setSelectedDemo(demo.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <IconComponent className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-white">{demo.title}</h3>
                          <span className="text-sm text-gray-400">{demo.duration}</span>
                        </div>
                        <p className="text-gray-300 mb-3">{demo.description}</p>
                        <div className="space-y-1">
                          {demo.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your role"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Preferred Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (1 PM - 5 PM)</option>
                  <option value="evening">Evening (6 PM - 8 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Use Case Description
                </label>
                <textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your specific use case and requirements..."
                />
              </div>

              <Button 
                type="submit"
                disabled={!selectedDemo}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Demo
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Demo;


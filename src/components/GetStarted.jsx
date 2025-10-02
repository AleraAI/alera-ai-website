import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, Brain, Code, Layers, Heart, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const GetStarted = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    timeline: '',
    budget: '',
    teamSize: '',
    description: ''
  });

  const services = [
    { id: 'llm', name: 'Language Models', icon: Brain, description: 'Custom LLMs and SLMs' },
    { id: 'multimodal', name: 'Multimodal AI', icon: Layers, description: 'Text, image, audio integration' },
    { id: 'code-review', name: 'Code Review', icon: Code, description: 'AI-powered code analysis' },
    { id: 'recommendations', name: 'Recommendations', icon: Heart, description: 'Personalization systems' },
    { id: 'training', name: 'AI Training', icon: GraduationCap, description: 'Educational programs' },
    { id: 'consultation', name: 'Consultation', icon: Users, description: 'Strategy and planning' }
  ];

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleInputChange = (e) => {
    setProjectDetails({
      ...projectDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Project submission:', { selectedServices, projectDetails });
    
    // Create a comprehensive submission summary
    const submissionSummary = {
      services: selectedServices.map(serviceId => {
        const service = services.find(s => s.id === serviceId);
        return service?.name;
      }).join(', '),
      timeline: projectDetails.timeline,
      budget: projectDetails.budget,
      teamSize: projectDetails.teamSize,
      description: projectDetails.description,
      submissionDate: new Date().toLocaleDateString()
    };
    
    // Show detailed confirmation
    alert(`🎉 Thank you for your project submission!

📋 SUBMISSION SUMMARY:
• Services: ${submissionSummary.services}
• Timeline: ${submissionSummary.timeline || 'Not specified'}
• Budget: ${submissionSummary.budget || 'Not specified'}
• Team Size: ${submissionSummary.teamSize || 'Not specified'}

📞 NEXT STEPS:
1. Our team will review your requirements within 24 hours
2. You'll receive a detailed proposal via email within 48 hours
3. We'll schedule a strategy call to discuss your project
4. Custom pricing and timeline will be provided

📧 CONTACT: We'll reach out to discuss your specific needs and provide a customized solution.

Thank you for choosing Alera AI! 🚀`);
    
    // Reset form after submission
    setCurrentStep(1);
    setSelectedServices([]);
    setProjectDetails({
      timeline: '',
      budget: '',
      teamSize: '',
      description: ''
    });
  };

  const steps = [
    { number: 1, title: 'Select Services', description: 'Choose the AI solutions you need' },
    { number: 2, title: 'Project Details', description: 'Tell us about your requirements' },
    { number: 3, title: 'Get Quote', description: 'Receive a customized proposal' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          {/* Progress Steps */}
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  currentStep >= step.number 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-700 text-gray-400'
                }`}>
                  {currentStep > step.number ? <CheckCircle className="h-4 w-4" /> : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    currentStep > step.number ? 'bg-blue-500' : 'bg-slate-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Started with Alera AI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {steps[currentStep - 1].description}
          </p>
        </motion.div>

        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Select the services you need</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                const isSelected = selectedServices.includes(service.id);
                return (
                  <div
                    key={service.id}
                    className={`p-6 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-slate-700/50 bg-slate-700/30 hover:border-blue-500/30'
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <IconComponent className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white">{service.name}</h3>
                        <p className="text-gray-300">{service.description}</p>
                      </div>
                      {isSelected && <CheckCircle className="h-6 w-6 text-blue-400" />}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end">
              <Button 
                onClick={() => setCurrentStep(2)}
                disabled={selectedServices.length === 0}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 disabled:opacity-50"
              >
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Tell us about your project</h2>
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={projectDetails.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="12+ months">12+ months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={projectDetails.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="$10k-$50k">$10k - $50k</option>
                    <option value="$50k-$100k">$50k - $100k</option>
                    <option value="$100k-$500k">$100k - $500k</option>
                    <option value="$500k+">$500k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Team Size
                </label>
                <select
                  name="teamSize"
                  value={projectDetails.teamSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 people</option>
                  <option value="6-20">6-20 people</option>
                  <option value="21-100">21-100 people</option>
                  <option value="100+">100+ people</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  name="description"
                  value={projectDetails.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Describe your project goals, challenges, and requirements..."
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-3"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button 
                onClick={() => setCurrentStep(3)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
              >
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Final Submission */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Review Your Request</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Selected Services:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map(serviceId => {
                    const service = services.find(s => s.id === serviceId);
                    return (
                      <span key={serviceId} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {service?.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-white font-medium">Timeline</h4>
                  <p className="text-gray-300">{projectDetails.timeline || 'Not specified'}</p>
                </div>
                <div>
                  <h4 className="text-white font-medium">Budget</h4>
                  <p className="text-gray-300">{projectDetails.budget || 'Not specified'}</p>
                </div>
                <div>
                  <h4 className="text-white font-medium">Team Size</h4>
                  <p className="text-gray-300">{projectDetails.teamSize || 'Not specified'}</p>
                </div>
              </div>

              {projectDetails.description && (
                <div>
                  <h4 className="text-white font-medium mb-2">Project Description</h4>
                  <p className="text-gray-300 bg-slate-700/30 p-4 rounded-lg">{projectDetails.description}</p>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(2)}
                className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-3"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button 
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
              >
                Submit Request
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GetStarted;


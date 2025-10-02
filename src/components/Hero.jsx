import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code, Brain, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onRequestDemo, onGetStarted }) => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Cutting-Edge AI Solutions</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Accelerate Innovation with
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent block">
              Cutting-Edge AI Technology
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            From language models and multimodal AI to intelligent code modernization and personalization systems. 
            Accelerate innovation with cutting-edge AI technology and expert training.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              onClick={onRequestDemo}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg group"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              onClick={onGetStarted}
              className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg"
            >
              Get Started
            </Button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <span className="text-gray-300 font-medium">LLMs & SLMs</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                <Layers className="h-8 w-8 text-purple-400" />
              </div>
              <span className="text-gray-300 font-medium">Multimodal AI</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                <Code className="h-8 w-8 text-green-400" />
              </div>
              <span className="text-gray-300 font-medium">Code Review</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                <Sparkles className="h-8 w-8 text-orange-400" />
              </div>
              <span className="text-gray-300 font-medium">Modernization</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


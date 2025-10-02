import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Layers, Code, RefreshCw, ArrowRight, Zap, Shield, Target, GraduationCap, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = ({ onLearnMore }) => {
  const services = [
    {
      id: 'llm-slm',
      icon: Brain,
      title: "Large & Small Language Models",
      description: "Advanced LLMs and efficient SLMs tailored for your specific use cases. From enterprise-scale language processing to lightweight, domain-specific models that deliver exceptional performance.",
      features: ["Custom Model Training", "Domain Adaptation", "Performance Optimization", "Scalable Deployment"],
      color: "blue"
    },
    {
      id: 'multimodal',
      icon: Layers,
      title: "Multimodal AI Systems",
      description: "Integrate text, image, audio, and video data into unified AI systems. Create intelligent applications that understand and process multiple data types simultaneously.",
      features: ["Cross-Modal Understanding", "Data Fusion", "Real-time Processing", "Custom Architectures"],
      color: "purple"
    },
    {
      id: 'code-review',
      icon: Code,
      title: "AI-Powered Code Review",
      description: "Intelligent code analysis that goes beyond traditional static analysis. Identify complex issues, security vulnerabilities, and optimization opportunities with AI precision.",
      features: ["Deep Code Analysis", "Security Scanning", "Performance Insights", "Best Practice Enforcement"],
      color: "green"
    },
    {
      id: 'refactoring',
      icon: RefreshCw,
      title: "Code Refactoring & Modernization",
      description: "Transform legacy codebases into modern, efficient, and maintainable systems. Reduce technical debt while preserving functionality and improving performance.",
      features: ["Legacy Migration", "Architecture Modernization", "Performance Enhancement", "Technical Debt Reduction"],
      color: "orange"
    },
    {
      id: 'recommendations',
      icon: Heart,
      title: "Recommendation Systems & Personalization",
      description: "Build TikTok-level personalization engines that drive engagement, retention, and conversion. Deploy AI-powered recommendations, search, and content feeds that learn from every user interaction.",
      features: ["Personalized Feeds", "Hybrid Search", "Real-time Recommendations", "User Behavior Analytics"],
      color: "pink"
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: "AI Training & Education",
      description: "Comprehensive training programs for individuals and teams on AI, LLMs, SLMs, and machine learning. From beginner workshops to advanced technical deep-dives.",
      features: ["Custom Curriculum", "Hands-on Workshops", "Certification Programs", "Online & On-site Training"],
      color: "teal"
    },
    {
      id: 'consultation',
      icon: Users,
      title: "AI Strategy Consultation",
      description: "Expert consultation services to help companies and individuals navigate AI adoption, strategy development, and implementation roadmaps for maximum business impact.",
      features: ["AI Strategy Planning", "Technology Assessment", "Implementation Roadmaps", "ROI Analysis"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        icon: "text-blue-400",
        hover: "hover:bg-blue-500/20"
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        icon: "text-purple-400",
        hover: "hover:bg-purple-500/20"
      },
      green: {
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        icon: "text-green-400",
        hover: "hover:bg-green-500/20"
      },
      orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        icon: "text-orange-400",
        hover: "hover:bg-orange-500/20"
      },
      pink: {
        bg: "bg-pink-500/10",
        border: "border-pink-500/20",
        icon: "text-pink-400",
        hover: "hover:bg-pink-500/20"
      },
      teal: {
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        icon: "text-teal-400",
        hover: "hover:bg-teal-500/20"
      },
      indigo: {
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        icon: "text-indigo-400",
        hover: "hover:bg-indigo-500/20"
      }
    };
    return colors[color];
  };

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Comprehensive AI Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From advanced language models to intelligent code modernization, 
            we deliver cutting-edge AI solutions that transform your development workflow.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`p-8 rounded-2xl border ${colorClasses.bg} ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-xl ${colorClasses.bg} border ${colorClasses.border}`}>
                    <IconComponent className={`h-6 w-6 ${colorClasses.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${colorClasses.icon.replace('text-', 'bg-')}`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => onLearnMore && onLearnMore(service)}
                  variant="outline" 
                  className={`border-${service.color}-500/50 text-${service.color}-300 hover:bg-${service.color}-500/10 group-hover:translate-x-1 transition-all`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Development Process?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can accelerate your projects and reduce technical debt.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


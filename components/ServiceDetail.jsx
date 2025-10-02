import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceDetail = ({ service, onBack, onRequestDemo, onContact }) => {
  if (!service) return null;

  const serviceDetails = {
    'llm': {
      title: 'Large & Small Language Models',
      description: 'Advanced LLMs and efficient SLMs tailored for your specific use cases.',
      longDescription: 'Our language model solutions range from enterprise-scale large language models to efficient small language models optimized for specific domains. We provide end-to-end services from model selection and training to deployment and optimization.',
      features: [
        'Custom Model Training',
        'Domain Adaptation', 
        'Performance Optimization',
        'Scalable Deployment',
        'Fine-tuning Services',
        'Model Compression',
        'Multi-language Support',
        'Real-time Inference'
      ],
      benefits: [
        'Reduce operational costs by up to 70%',
        'Improve accuracy for domain-specific tasks',
        'Faster inference times with optimized models',
        'Seamless integration with existing systems'
      ],
      useCases: [
        'Customer Service Automation',
        'Content Generation',
        'Document Analysis',
        'Code Generation',
        'Translation Services',
        'Sentiment Analysis'
      ],
      pricing: 'Starting from $10,000/month'
    },
    'multimodal': {
      title: 'Multimodal AI Systems',
      description: 'Integrate text, image, audio, and video data into unified AI systems.',
      longDescription: 'Our multimodal AI systems can understand and process multiple types of data simultaneously, creating more intelligent and context-aware applications that mirror human-like understanding.',
      features: [
        'Cross-Modal Understanding',
        'Data Fusion',
        'Real-time Processing',
        'Custom Architectures',
        'Vision-Language Models',
        'Audio-Text Integration',
        'Video Analysis',
        'Multi-sensor Fusion'
      ],
      benefits: [
        'Enhanced user experiences with richer interactions',
        'Better decision-making through comprehensive data analysis',
        'Reduced need for separate AI systems',
        'Improved accuracy through data correlation'
      ],
      useCases: [
        'Content Moderation',
        'Medical Imaging Analysis',
        'Autonomous Vehicles',
        'Smart Surveillance',
        'Interactive Media',
        'Accessibility Tools'
      ],
      pricing: 'Starting from $15,000/month'
    },
    'code-review': {
      title: 'AI-Powered Code Review',
      description: 'Intelligent code analysis that goes beyond traditional static analysis.',
      longDescription: 'Our AI-powered code review system uses advanced machine learning to identify complex issues, security vulnerabilities, and optimization opportunities that traditional tools miss.',
      features: [
        'Deep Code Analysis',
        'Security Scanning',
        'Performance Insights',
        'Best Practice Enforcement',
        'Automated Refactoring',
        'Vulnerability Detection',
        'Code Quality Metrics',
        'Integration with CI/CD'
      ],
      benefits: [
        'Reduce security vulnerabilities by 85%',
        'Improve code quality and maintainability',
        'Accelerate development cycles',
        'Reduce technical debt accumulation'
      ],
      useCases: [
        'Enterprise Code Auditing',
        'Open Source Project Maintenance',
        'Compliance Checking',
        'Legacy Code Assessment',
        'Development Team Training',
        'Automated Code Reviews'
      ],
      pricing: 'Starting from $5,000/month'
    },
    'modernization': {
      title: 'Code Refactoring & Modernization',
      description: 'Transform legacy codebases into modern, efficient, and maintainable systems.',
      longDescription: 'Our code modernization services help organizations transform their legacy systems into modern, cloud-ready applications while preserving business logic and improving performance.',
      features: [
        'Legacy Migration',
        'Architecture Modernization',
        'Performance Enhancement',
        'Technical Debt Reduction',
        'Cloud Migration',
        'API Modernization',
        'Database Migration',
        'Security Upgrades'
      ],
      benefits: [
        'Reduce maintenance costs by up to 60%',
        'Improve system performance and scalability',
        'Enhanced security and compliance',
        'Faster feature development and deployment'
      ],
      useCases: [
        'Mainframe Modernization',
        'Monolith to Microservices',
        'Cloud Migration Projects',
        'Technology Stack Updates',
        'Performance Optimization',
        'Compliance Upgrades'
      ],
      pricing: 'Starting from $25,000/project'
    },
    'recommendations': {
      title: 'Recommendation Systems & Personalization',
      description: 'Build TikTok-level personalization engines that drive engagement and conversion.',
      longDescription: 'Our recommendation systems leverage advanced machine learning to create personalized experiences that increase user engagement, retention, and conversion rates across all digital touchpoints.',
      features: [
        'Personalized Feeds',
        'Hybrid Search',
        'Real-time Recommendations',
        'User Behavior Analytics',
        'A/B Testing Framework',
        'Multi-armed Bandits',
        'Deep Learning Models',
        'Cross-platform Integration'
      ],
      benefits: [
        'Increase user engagement by up to 300%',
        'Improve conversion rates by 150%',
        'Reduce churn and increase retention',
        'Maximize revenue per user'
      ],
      useCases: [
        'E-commerce Product Recommendations',
        'Content Feed Personalization',
        'Music and Video Streaming',
        'News and Article Curation',
        'Social Media Feeds',
        'Email Marketing Personalization'
      ],
      pricing: 'Starting from $12,000/month'
    },
    'training': {
      title: 'AI Training & Education',
      description: 'Comprehensive training programs for individuals and teams on AI and machine learning.',
      longDescription: 'Our educational programs are designed to upskill your team with the latest AI and machine learning knowledge, from foundational concepts to advanced implementation strategies.',
      features: [
        'Custom Curriculum',
        'Hands-on Workshops',
        'Certification Programs',
        'Online & On-site Training',
        'Mentorship Programs',
        'Project-based Learning',
        'Industry Case Studies',
        'Ongoing Support'
      ],
      benefits: [
        'Build internal AI capabilities',
        'Reduce dependency on external consultants',
        'Accelerate AI adoption across organization',
        'Improve team productivity and innovation'
      ],
      useCases: [
        'Executive AI Strategy Training',
        'Developer ML Bootcamps',
        'Data Science Team Upskilling',
        'AI Ethics and Governance',
        'Technical Leadership Programs',
        'Industry-specific AI Training'
      ],
      pricing: 'Starting from $2,500/person'
    },
    'consultation': {
      title: 'AI Strategy Consultation',
      description: 'Expert consultation services to help navigate AI adoption and strategy development.',
      longDescription: 'Our strategic consultation services help organizations develop comprehensive AI strategies, assess technology readiness, and create implementation roadmaps for successful AI transformation.',
      features: [
        'AI Strategy Planning',
        'Technology Assessment',
        'Implementation Roadmaps',
        'ROI Analysis',
        'Risk Assessment',
        'Vendor Evaluation',
        'Change Management',
        'Success Metrics Definition'
      ],
      benefits: [
        'Clear AI strategy aligned with business goals',
        'Reduced implementation risks and costs',
        'Faster time to value from AI investments',
        'Competitive advantage through strategic AI use'
      ],
      useCases: [
        'Digital Transformation Planning',
        'AI Readiness Assessment',
        'Technology Stack Selection',
        'Organizational Change Management',
        'Investment Planning',
        'Competitive Analysis'
      ],
      pricing: 'Starting from $15,000/engagement'
    }
  };

  const details = serviceDetails[service] || serviceDetails['llm'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {details.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {details.longDescription}
              </p>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {details.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Benefits</h2>
                <div className="space-y-4">
                  {details.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {details.useCases.map((useCase, index) => (
                    <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-8"
            >
              {/* Pricing Card */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                <div className="text-2xl font-bold text-blue-400 mb-4">{details.pricing}</div>
                <p className="text-gray-300 text-sm mb-6">
                  Custom pricing available based on your specific requirements and scale.
                </p>
                <div className="space-y-3">
                  <Button 
                    onClick={onRequestDemo}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Request Demo
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={onContact}
                    className="w-full border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Sales
                  </Button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Why Choose Alera AI?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Industry-leading expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300 text-sm">24/7 support and monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Proven ROI and results</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Scalable solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;


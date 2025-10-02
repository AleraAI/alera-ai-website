import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Users, Clock, Star, ExternalLink, CheckCircle, Award, BookOpen, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Courses = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'fundamentals', name: 'AI Fundamentals', icon: Target },
    { id: 'advanced', name: 'Advanced Engineering', icon: Zap },
    { id: 'production', name: 'Production & Deployment', icon: Award },
    { id: 'strategy', name: 'Strategy & Leadership', icon: Users }
  ];

  const courses = [
    {
      id: 'tokens-to-agents',
      title: 'Neural Narratives: From Tokens to Agents',
      subtitle: 'Build your own LLM-powered Agent - step by step, from theory to production',
      category: 'advanced',
      level: 'Advanced',
      price: '$1,000',
      originalPrice: null,
      duration: '4 weeks',
      format: 'Cohort-based',
      instructor: 'Mohamed Elrfaey',
      instructorBio: 'Ex-Amazon, Intel, HP engineering leader, AI founder, 5x patent, RecSys researcher',
      nextCohort: 'Oct 25—Nov 15, 2025',
      rating: 4.9,
      students: 150,
      description: 'This comprehensive course takes you from understanding the fundamentals of language modeling to building and deploying sophisticated AI agents. Perfect for engineers who want to go beyond using APIs and truly understand how modern AI systems work under the hood.',
      detailedDescription: 'A hands-on course for engineers, builders, and curious coders who want to go deeper than drag-and-drop AI. You\'ll build tokenizers, train neural networks, implement Transformers, and deploy efficient inference engines with your own hands. By the end, you\'ll have a deployable, customized LLM agent that can interact with real-world APIs, reason about its environment, and adapt to new tasks.',
      highlights: [
        'Build a functioning transformer model from scratch without high-level libraries',
        'Implement backpropagation and attention mechanisms from first principles',
        'Create and deploy a working API or chatbot interface powered by your trained model',
        'Design and train a custom tokenizer using Byte Pair Encoding (BPE)',
        'Apply LoRA (Low-Rank Adaptation) to fine-tune models for domain-specific tasks',
        'Optimize training and inference for production environments',
        'Design and deploy an LLM-powered agent with real-time API integration',
        'Master the complete pipeline from data preprocessing to model deployment'
      ],
      syllabus: [
        {
          week: 1,
          title: 'Foundations of Language Modeling',
          topics: ['Bigram Language Models', 'Build a Tokenizer from Scratch', 'Neural Foundations', 'Text Preprocessing'],
          projects: ['Custom BPE Tokenizer', 'Simple Language Model']
        },
        {
          week: 2,
          title: 'Neural Foundations & Transformers',
          topics: ['Backpropagation & MLPs', 'Attention Mechanisms', 'Transformer Architecture', 'Multi-head Attention'],
          projects: ['Attention Implementation', 'Mini-Transformer']
        },
        {
          week: 3,
          title: 'Open Source LLMs & Fine-tuning',
          topics: ['Open Source LLM Architecture', 'Fine-Tuning with LoRA', 'Supervised Fine-Tuning', 'Model Optimization'],
          projects: ['LoRA Fine-tuning', 'Domain Adaptation']
        },
        {
          week: 4,
          title: 'Agents & Production Deployment',
          topics: ['Agents and Real-World Tools', 'Production Deployment', 'API Integration', 'Monitoring & Scaling'],
          projects: ['Complete Agent System', 'Production Deployment']
        }
      ],
      prerequisites: [
        'Solid Python programming skills (functions, classes, libraries, debugging)',
        'Basic understanding of machine learning concepts (loss functions, gradients, training)',
        'Familiarity with NumPy and basic linear algebra operations',
        'Experience with Git and command-line tools',
        'Curiosity and willingness to build complex systems from scratch'
      ],
      outcomes: [
        'Deep understanding of transformer architecture and attention mechanisms',
        'Ability to implement and train language models from scratch',
        'Skills to fine-tune models for specific domains and use cases',
        'Knowledge of production deployment and optimization techniques',
        'Capability to build and deploy intelligent agents with tool integration',
        'Understanding of the complete ML pipeline from data to deployment'
      ],
      mavenUrl: 'https://maven.com/alera-ai/neural-narratives-from-tokens-to-agents/',
      featured: true
    },
    {
      id: 'genai-production',
      title: 'Ship It: GenAI for Developers',
      subtitle: 'Ship real GenAI apps - step by step, from prompts to production',
      category: 'production',
      level: 'Intermediate',
      price: 'Contact for pricing',
      originalPrice: null,
      duration: '4 weeks',
      format: 'Cohort-based',
      instructor: 'Mohamed Elrfaey',
      instructorBio: 'Ex-Amazon, Intel, HP engineering leader, AI founder, 5x patent, RecSys researcher',
      nextCohort: 'Oct 23—Nov 13, 2025',
      rating: 4.8,
      students: 200,
      description: 'Transform from prototype to production with this intensive course on building, deploying, and scaling GenAI applications. Learn industry best practices for prompt engineering, RAG systems, and autonomous agents.',
      detailedDescription: 'A hands-on program for developers and builders who want to go beyond demos and prototypes. In just 4 weeks, you\'ll learn to design prompts, integrate APIs, build RAG pipelines, develop autonomous agents, and deploy production-ready GenAI microservices. You\'ll work on real-world projects each week and finish with a capstone app you can showcase in your portfolio.',
      highlights: [
        'Master advanced prompt engineering techniques (few-shot, chain-of-thought, tree-of-thought)',
        'Integrate multiple LLM APIs (OpenAI, Anthropic, Gemini) with robust error handling',
        'Build production-ready RAG systems with vector databases and document pipelines',
        'Design and deploy autonomous agents using LangChain and LlamaIndex frameworks',
        'Implement comprehensive monitoring, logging, and observability for GenAI systems',
        'Deploy scalable GenAI applications using Docker, serverless, and cloud platforms',
        'Implement security guardrails against prompt injection and unsafe outputs',
        'Build a complete capstone project demonstrating all learned concepts'
      ],
      syllabus: [
        {
          week: 1,
          title: 'Foundations & Prompt Engineering',
          topics: ['GenAI Foundations', 'Advanced Prompt Engineering', 'Prompt Optimization', 'Cost Management'],
          projects: ['Prompt Engineering Playground', 'Cost Optimization Challenge']
        },
        {
          week: 2,
          title: 'LLM APIs & App Building',
          topics: ['API Integration', 'Conversational Apps', 'Streaming Responses', 'Error Handling'],
          projects: ['Multi-LLM Chatbot', 'API Cost Simulator']
        },
        {
          week: 3,
          title: 'RAG & Autonomous Agents',
          topics: ['RAG Architecture', 'Vector Databases', 'Agent Frameworks', 'Tool Integration'],
          projects: ['Document Q&A System', 'Research Agent']
        },
        {
          week: 4,
          title: 'Production Deployment & Security',
          topics: ['Production Deployment', 'Security & Guardrails', 'Monitoring & Logging', 'Scaling Strategies'],
          projects: ['Production Deployment', 'Capstone Presentation']
        }
      ],
      prerequisites: [
        'Strong Python programming experience with web frameworks',
        'Understanding of REST APIs and web development concepts',
        'Basic familiarity with cloud platforms (AWS, GCP, or Azure)',
        'Experience with Git, Docker, and CI/CD pipelines',
        'Knowledge of databases and data processing concepts'
      ],
      outcomes: [
        'Ability to build and deploy production-ready GenAI applications',
        'Mastery of prompt engineering and LLM API integration',
        'Skills to implement RAG systems and autonomous agents',
        'Knowledge of security best practices for AI applications',
        'Experience with monitoring, logging, and scaling GenAI systems',
        'Portfolio project demonstrating end-to-end GenAI development'
      ],
      mavenUrl: 'https://maven.com/alera-ai/genai-dev-from-zero-to-production',
      featured: true
    },
    {
      id: 'multimodal-mastery',
      title: 'Multimodal AI Mastery',
      subtitle: 'Build systems that understand text, images, audio, and video simultaneously',
      category: 'advanced',
      level: 'Advanced',
      price: '$1,200',
      originalPrice: '$1,500',
      duration: '5 weeks',
      format: 'Cohort-based',
      instructor: 'Dr. Sarah Chen',
      instructorBio: 'Former Google Research scientist, PhD in Computer Vision, 15+ papers in top-tier conferences',
      nextCohort: 'Coming Q1 2025',
      rating: null,
      students: null,
      description: 'Master the art of building AI systems that can understand and process multiple types of data simultaneously, creating more intelligent and context-aware applications.',
      detailedDescription: 'Dive deep into the world of multimodal AI where text, images, audio, and video converge. Learn to build systems that can understand context across different data types, enabling breakthrough applications in content moderation, medical imaging, autonomous vehicles, and interactive media.',
      highlights: [
        'Implement vision-language models from scratch',
        'Build audio-text integration systems for speech and music',
        'Create video analysis pipelines with temporal understanding',
        'Design multi-sensor fusion architectures',
        'Develop cross-modal retrieval and generation systems',
        'Optimize multimodal models for real-time inference',
        'Build applications for content moderation and accessibility',
        'Deploy multimodal systems in production environments'
      ],
      syllabus: [
        {
          week: 1,
          title: 'Foundations of Multimodal AI',
          topics: ['Multimodal Learning Theory', 'Data Fusion Techniques', 'Cross-Modal Embeddings'],
          projects: ['Image-Text Matching System']
        },
        {
          week: 2,
          title: 'Vision-Language Models',
          topics: ['CLIP Architecture', 'Visual Question Answering', 'Image Captioning'],
          projects: ['Custom VQA System']
        },
        {
          week: 3,
          title: 'Audio-Visual Integration',
          topics: ['Speech-to-Text with Visual Context', 'Audio-Visual Scene Understanding'],
          projects: ['Multimodal Content Moderator']
        },
        {
          week: 4,
          title: 'Video Understanding',
          topics: ['Temporal Modeling', 'Action Recognition', 'Video Summarization'],
          projects: ['Video Analysis Pipeline']
        },
        {
          week: 5,
          title: 'Production & Applications',
          topics: ['Real-time Processing', 'Edge Deployment', 'Scaling Strategies'],
          projects: ['Production Multimodal App']
        }
      ],
      prerequisites: [
        'Strong background in deep learning and neural networks',
        'Experience with computer vision and NLP fundamentals',
        'Proficiency in PyTorch or TensorFlow',
        'Understanding of transformer architectures',
        'Experience with data preprocessing and augmentation'
      ],
      outcomes: [
        'Build and deploy multimodal AI systems',
        'Understand cross-modal learning and fusion techniques',
        'Implement state-of-the-art vision-language models',
        'Create real-time multimodal applications',
        'Master optimization techniques for multimodal systems',
        'Develop domain-specific multimodal solutions'
      ],
      mavenUrl: null,
      featured: false
    },
    {
      id: 'recommendation-systems',
      title: 'Recommendation Systems Engineering',
      subtitle: 'Create TikTok-level personalization engines that drive engagement and conversion',
      category: 'advanced',
      level: 'Advanced',
      price: '$1,100',
      originalPrice: null,
      duration: '6 weeks',
      format: 'Cohort-based',
      instructor: 'Alex Rodriguez',
      instructorBio: 'Former Netflix ML Engineer, built recommendation systems serving 200M+ users',
      nextCohort: 'Coming Q2 2025',
      rating: null,
      students: null,
      description: 'Learn to build recommendation systems that rival those of TikTok, Netflix, and Amazon. Master the algorithms, infrastructure, and optimization techniques behind modern personalization engines.',
      detailedDescription: 'Go beyond basic collaborative filtering to build sophisticated recommendation systems that drive real business results. Learn the techniques used by top tech companies to create engaging, personalized experiences that increase user retention and conversion rates.',
      highlights: [
        'Implement collaborative filtering and matrix factorization',
        'Build deep learning recommendation models',
        'Design real-time recommendation pipelines',
        'Master A/B testing for recommendation systems',
        'Implement multi-armed bandit algorithms',
        'Build cold-start and diversity optimization systems',
        'Create recommendation systems for different domains',
        'Deploy and scale recommendation infrastructure'
      ],
      syllabus: [
        {
          week: 1,
          title: 'Recommendation Fundamentals',
          topics: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches'],
          projects: ['Basic Movie Recommender']
        },
        {
          week: 2,
          title: 'Matrix Factorization & Deep Learning',
          topics: ['SVD and NMF', 'Neural Collaborative Filtering', 'Autoencoders'],
          projects: ['Deep Learning Recommender']
        },
        {
          week: 3,
          title: 'Sequential & Session-Based',
          topics: ['RNNs for Recommendations', 'Session-Based Models', 'Attention Mechanisms'],
          projects: ['Session-Based Recommender']
        },
        {
          week: 4,
          title: 'Real-Time Systems',
          topics: ['Online Learning', 'Multi-Armed Bandits', 'Real-Time Inference'],
          projects: ['Real-Time Recommendation API']
        },
        {
          week: 5,
          title: 'Optimization & Evaluation',
          topics: ['A/B Testing', 'Diversity & Fairness', 'Cold Start Problems'],
          projects: ['A/B Testing Framework']
        },
        {
          week: 6,
          title: 'Production & Scaling',
          topics: ['Infrastructure Design', 'Monitoring & Analytics', 'Business Metrics'],
          projects: ['Production Recommendation System']
        }
      ],
      prerequisites: [
        'Strong Python and machine learning background',
        'Experience with data processing and analytics',
        'Understanding of statistics and experimental design',
        'Familiarity with distributed systems concepts',
        'Knowledge of databases and data warehousing'
      ],
      outcomes: [
        'Build production-ready recommendation systems',
        'Understand the full recommendation system lifecycle',
        'Implement advanced algorithms and optimization techniques',
        'Design A/B testing and evaluation frameworks',
        'Master real-time recommendation infrastructure',
        'Create domain-specific recommendation solutions'
      ],
      mavenUrl: null,
      featured: false
    },
    {
      id: 'ai-strategy-executives',
      title: 'AI Strategy for Executives',
      subtitle: 'Strategic AI adoption, risk assessment, and organizational transformation',
      category: 'strategy',
      level: 'Executive',
      price: '$2,500',
      originalPrice: null,
      duration: '3 weeks',
      format: 'Executive Program',
      instructor: 'Dr. Emily Watson',
      instructorBio: 'Former McKinsey Partner, AI transformation consultant for Fortune 500 companies',
      nextCohort: 'Coming Q2 2025',
      rating: null,
      students: null,
      description: 'A comprehensive program for executives and leaders to develop AI strategies that drive business value while managing risks and organizational change.',
      detailedDescription: 'Designed specifically for C-level executives, VPs, and senior leaders who need to make strategic decisions about AI adoption. Learn to assess AI opportunities, build implementation roadmaps, and lead organizational transformation in the age of artificial intelligence.',
      highlights: [
        'Develop comprehensive AI strategies aligned with business goals',
        'Assess AI readiness and identify high-impact use cases',
        'Build implementation roadmaps and investment plans',
        'Understand AI risks and governance frameworks',
        'Lead organizational change and talent development',
        'Evaluate AI vendors and technology solutions',
        'Create AI ethics and responsible AI policies',
        'Measure AI ROI and business impact'
      ],
      syllabus: [
        {
          week: 1,
          title: 'AI Strategy & Assessment',
          topics: ['AI Landscape Overview', 'Strategic Planning', 'Readiness Assessment', 'Use Case Identification'],
          projects: ['AI Strategy Canvas', 'Readiness Assessment']
        },
        {
          week: 2,
          title: 'Implementation & Governance',
          topics: ['Implementation Roadmaps', 'Risk Management', 'AI Governance', 'Vendor Evaluation'],
          projects: ['Implementation Plan', 'Governance Framework']
        },
        {
          week: 3,
          title: 'Change Management & ROI',
          topics: ['Organizational Change', 'Talent Strategy', 'ROI Measurement', 'Success Metrics'],
          projects: ['Change Management Plan', 'ROI Framework']
        }
      ],
      prerequisites: [
        'Senior leadership role (C-level, VP, or equivalent)',
        'Basic understanding of business strategy and operations',
        'Experience with technology adoption and change management',
        'No technical background required'
      ],
      outcomes: [
        'Comprehensive AI strategy for your organization',
        'Clear implementation roadmap and timeline',
        'Risk assessment and mitigation strategies',
        'AI governance and ethics framework',
        'Change management and talent development plan',
        'ROI measurement and success metrics framework'
      ],
      mavenUrl: null,
      featured: false
    },
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals for Everyone',
      subtitle: 'Essential AI knowledge for professionals in any field',
      category: 'fundamentals',
      level: 'Beginner',
      price: '$299',
      originalPrice: '$399',
      duration: '3 weeks',
      format: 'Self-paced + Live Q&A',
      instructor: 'Multiple Instructors',
      instructorBio: 'Team of AI experts and educators',
      nextCohort: 'Rolling enrollment',
      rating: 4.7,
      students: 500,
      description: 'Perfect introduction to AI for professionals who want to understand the technology without diving into technical implementation.',
      detailedDescription: 'A comprehensive yet accessible introduction to artificial intelligence designed for business professionals, managers, and anyone who wants to understand AI\'s impact on their industry. No programming experience required.',
      highlights: [
        'Understand AI, ML, and deep learning fundamentals',
        'Learn about different types of AI applications',
        'Explore AI use cases across industries',
        'Understand AI ethics and responsible AI practices',
        'Learn to evaluate AI solutions and vendors',
        'Develop AI literacy for strategic decision-making',
        'Understand the future of AI and its implications',
        'Build confidence in AI-related discussions'
      ],
      syllabus: [
        {
          week: 1,
          title: 'AI Foundations',
          topics: ['What is AI?', 'Types of AI', 'AI vs ML vs DL', 'AI Applications'],
          projects: ['AI Use Case Analysis']
        },
        {
          week: 2,
          title: 'AI in Practice',
          topics: ['Industry Applications', 'AI Tools and Platforms', 'Vendor Evaluation'],
          projects: ['Industry AI Assessment']
        },
        {
          week: 3,
          title: 'AI Strategy & Ethics',
          topics: ['AI Strategy Basics', 'Ethics and Bias', 'Future of AI'],
          projects: ['AI Strategy Outline']
        }
      ],
      prerequisites: [
        'No technical background required',
        'Basic computer literacy',
        'Curiosity about AI and its applications'
      ],
      outcomes: [
        'Solid understanding of AI fundamentals',
        'Ability to identify AI opportunities in your field',
        'Knowledge of AI ethics and best practices',
        'Confidence in AI-related business discussions',
        'Framework for evaluating AI solutions',
        'Strategic thinking about AI adoption'
      ],
      mavenUrl: null,
      featured: false
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const featuredCourses = courses.filter(course => course.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Training & Education
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Master cutting-edge AI technologies with hands-on courses taught by industry experts. 
            From foundational concepts to production deployment, we offer comprehensive training 
            for every skill level and career stage.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">850+</div>
              <div className="text-gray-300">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">4.8/5</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">95%</div>
              <div className="text-gray-300">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">6</div>
              <div className="text-gray-300">Course Offerings</div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" 
                  : "border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
                }
              >
                <IconComponent className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Featured Courses */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Courses</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {course.level}
                      </span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{course.price}</div>
                        {course.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">{course.originalPrice}</div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-blue-300 mb-4">{course.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed">{course.description}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-300 text-sm">{course.students || 'New'} students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">{course.rating || 'New'} rating</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {course.mavenUrl ? (
                      <Button 
                        onClick={() => {
                          console.log('Enrolling in course:', course.title);
                          window.open(course.mavenUrl, '_blank', 'noopener,noreferrer');
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1"
                      >
                        Enroll Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => {
                          console.log('Joining waitlist for:', course.title);
                          alert(`Thank you for your interest in ${course.title}! 

🎯 WAITLIST CONFIRMATION:
You've been added to the waitlist for this upcoming course.

📧 NEXT STEPS:
• You'll receive an email confirmation shortly
• We'll notify you when enrollment opens
• Early access and special pricing for waitlist members

📞 QUESTIONS?
Contact us at courses@aleraai.com for more information.

Thank you for choosing Alera AI! 🚀`);
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex-1"
                      >
                        Join Waitlist
                      </Button>
                    )}
                    <Button 
                      variant="outline"
                      className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {selectedCategory === 'all' ? 'All Courses' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/30 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {course.level}
                    </span>
                    {course.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-gray-300">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Format:</span>
                      <span className="text-gray-300">{course.format}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Next Cohort:</span>
                      <span className="text-gray-300">{course.nextCohort}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-green-400">{course.price}</div>
                      {course.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{course.originalPrice}</div>
                      )}
                    </div>
                    {course.rating && (
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-gray-300 text-sm">{course.rating}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    {course.mavenUrl ? (
                      <Button 
                        onClick={() => {
                          console.log('Enrolling in course:', course.title);
                          window.open(course.mavenUrl, '_blank', 'noopener,noreferrer');
                        }}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      >
                        Enroll Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => {
                          console.log('Joining waitlist for:', course.title);
                          alert(`Thank you for your interest in ${course.title}! 

🎯 WAITLIST CONFIRMATION:
You've been added to the waitlist for this upcoming course.

📧 NEXT STEPS:
• You'll receive an email confirmation shortly
• We'll notify you when enrollment opens
• Early access and special pricing for waitlist members

📞 QUESTIONS?
Contact us at courses@aleraai.com for more information.

Thank you for choosing Alera AI! 🚀`);
                        }}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      >
                        Join Waitlist
                      </Button>
                    )}
                    <Button 
                      variant="outline"
                      className="w-full border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Training CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Custom Training Programs</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
            Need a custom training program for your team? We offer tailored courses designed 
            specifically for your organization's needs, skill levels, and business objectives. 
            From executive workshops to hands-on technical bootcamps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3">
              Contact for Custom Training
            </Button>
            <Button 
              variant="outline"
              className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-3"
            >
              Download Course Catalog
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;


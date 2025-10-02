import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "50+", label: "AI Models Deployed" },
    { number: "1M+", label: "Lines of Code Modernized" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver accurate, reliable AI solutions that meet your exact requirements."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with AI technology."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with your team to ensure seamless integration and success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions and exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Users className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">About Alera AI</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Pioneering the Future of AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            At Alera AI, we're at the forefront of artificial intelligence innovation, 
            specializing in language models, multimodal systems, and intelligent code solutions.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We believe that artificial intelligence should empower developers and organizations 
              to achieve more than they ever thought possible. Our cutting-edge solutions in 
              language models, multimodal AI, and code intelligence are designed to accelerate 
              innovation while reducing complexity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              From small language models optimized for specific tasks to comprehensive 
              multimodal systems that understand diverse data types, we're building the 
              tools that will define the next generation of software development.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Our Core Values
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-purple-500/30 transition-colors mb-4 inline-block">
                    <IconComponent className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-8 border border-slate-700/50"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI innovation. 
              Join us in shaping the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3">
                View Open Positions
              </Button>
              <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-6 py-3">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


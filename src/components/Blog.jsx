import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = ({ onBack, onArticleClick }) => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Small Language Models: Efficiency Meets Performance",
      excerpt: "Exploring how SLMs are revolutionizing AI deployment with their compact size and specialized capabilities, making AI more accessible and cost-effective for businesses.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Language Models",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Multimodal AI: Breaking Down the Barriers Between Data Types",
      excerpt: "How combining text, image, audio, and video processing in unified systems is creating more intelligent and context-aware applications.",
      author: "Alex Rodriguez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Multimodal AI",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "AI-Powered Code Review: Beyond Static Analysis",
      excerpt: "Discover how machine learning is transforming code review processes, catching complex bugs and security vulnerabilities that traditional tools miss.",
      author: "Michael Zhang",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Code Analysis",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Legacy Code Modernization: A Strategic Approach",
      excerpt: "Best practices for transforming legacy systems into modern, maintainable codebases while preserving business logic and minimizing risks.",
      author: "Jennifer Liu",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Modernization",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Building Recommendation Systems That Actually Work",
      excerpt: "Learn the key principles behind successful recommendation engines and how to implement personalization that drives real business results.",
      author: "David Park",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Recommendations",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "AI Training Programs: Upskilling Your Team for the Future",
      excerpt: "How to design effective AI education programs that build real capabilities and drive organizational transformation.",
      author: "Dr. Emily Watson",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "Education",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Language Models", "Multimodal AI", "Code Analysis", "Modernization", "Recommendations", "Education"];

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
            AI Insights & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in artificial intelligence, 
            machine learning, and code modernization.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/30 transition-all cursor-pointer group"
              onClick={() => onArticleClick && onArticleClick(post)}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-blue-400 hover:text-blue-300 p-0"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest AI insights, case studies, 
            and industry updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;


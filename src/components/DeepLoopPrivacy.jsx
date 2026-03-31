import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeepLoopPrivacy = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Privacy Policy for DeepLoop
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p>
              At Alera AI, we take your privacy seriously. This Privacy Policy explains how DeepLoop ("the App") 
              collects, uses, and protects your information when you use our AI-powered development tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium text-slate-100 mb-2">1. Data You Provide</h3>
            <p>
              We collect information you provide directly, such as code snippets for analysis, project metadata, 
              and account information if applicable.
            </p>
            <h3 className="text-xl font-medium text-slate-100 mb-2">2. Usage Data</h3>
            <p>
              We collect technical data about your interaction with the App, including IP addresses, browser types, 
              and timestamps of activity to improve performance and security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain the AI analysis services.</li>
              <li>To improve our machine learning models (using anonymized and aggregated data).</li>
              <li>To provide technical support and respond to your inquiries.</li>
              <li>To ensure the security and integrity of our systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. This includes encryption 
              at rest and in transit. Your code is processed in secure environments and is not shared with 
              third parties without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal data, including 
              the right to access, correct, or delete the information we hold about you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-800">
            <p className="text-slate-400 italic">
              Last Updated: March 30, 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeepLoopPrivacy;

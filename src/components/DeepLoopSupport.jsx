import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LifeBuoy, Send, MessageSquare, Mail, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitToWeb3Forms } from '../services/formService';

const DeepLoopSupport = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const result = await submitToWeb3Forms({
            ...formData,
            formType: 'DeepLoop Support Request'
        });

        setIsSubmitting(false);
        if (result.success) {
            setSubmitStatus({ type: 'success', message: 'Thank you! Your support request has been sent successfully. Our team will get back to you shortly.' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setSubmitStatus({ type: 'error', message: result.message });
        }
    };

    const supportResources = [
        {
            title: "Getting Started Guide",
            description: "Learn the basics of setting up and using DeepLoop in your workflow.",
            icon: MessageSquare
        },
        {
            title: "Email Support",
            description: "Direct email support: support@alera.ai",
            icon: Mail
        },
        {
            title: "Known Issues",
            description: "Check the status of known bugs or ongoing enhancements.",
            icon: AlertCircle
        }
    ];

    return (
        <div className="pt-24 pb-20 px-4 min-h-screen">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
                    >
                        <LifeBuoy className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-300 text-sm font-medium">DeepLoop Help Center</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        How can we help you?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Whether you have a technical question, need billing assistance, or want to report an issue, we're here for you.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Support Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Support</h2>

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

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Brief summary of your issue"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Please provide as much detail as possible..."
                                />
                            </div>

                            {submitStatus && (
                                <div className={`p-4 rounded-lg text-sm ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                    }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending Request...' : 'Send Request'}
                                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Additional Resources Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">Quick Resources</h3>
                        {supportResources.map((resource, index) => {
                            const IconItem = resource.icon;
                            return (
                                <div key={index} className="bg-slate-800/30 border border-slate-700/30 p-6 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer group">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                            <IconItem className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{resource.title}</h4>
                                            <p className="text-sm text-gray-400">{resource.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DeepLoopSupport;

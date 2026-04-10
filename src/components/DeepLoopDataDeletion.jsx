import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Send, Smartphone, Database, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitToWeb3Forms } from '../services/formService';

const DeepLoopDataDeletion = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        requestType: 'Account Deletion',
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
            subject: `DeepLoop Data Deletion Request - ${formData.requestType}`,
            formType: 'DeepLoop Data Deletion'
        });

        setIsSubmitting(false);
        if (result.success) {
            setSubmitStatus({ type: 'success', message: 'Your deletion request has been submitted securely. We will process it within the legally required timeframe.' });
            setFormData({ name: '', email: '', requestType: 'Account Deletion', message: '' });
        } else {
            setSubmitStatus({ type: 'error', message: result.message });
        }
    };

    return (
        <div className="pt-24 pb-20 px-4 min-h-screen">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6"
                    >
                        <ShieldAlert className="h-4 w-4 text-red-400" />
                        <span className="text-red-300 text-sm font-medium">Data Deletion Policy</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Request Data Deletion
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 mx-auto"
                    >
                        Your privacy is our priority. You have the right to request deletion of your account and personal data at any time.
                    </motion.p>
                </div>

                {/* In-App Instructions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">How to Delete Data In-App</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                                    <Trash2 className="h-5 w-5 text-red-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Full Account Deletion</h3>
                            </div>
                            <ul className="text-gray-300 space-y-2 text-sm">
                                <li>1. Open the DeepLoop app on your device.</li>
                                <li>2. Navigate to <strong>Settings</strong> &gt; <strong>Account</strong>.</li>
                                <li>3. Scroll to the bottom and select <strong>Delete Account</strong>.</li>
                                <li>4. Follow the on-screen prompts to confirm deletion. All associated data will be removed.</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                    <Database className="h-5 w-5 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Specific Data Deletion</h3>
                            </div>
                            <ul className="text-gray-300 space-y-2 text-sm">
                                <li>1. Open the DeepLoop app on your device.</li>
                                <li>2. Navigate to <strong>Settings</strong> &gt; <strong>Privacy</strong>.</li>
                                <li>3. Select <strong>Manage Data</strong>.</li>
                                <li>4. Here you can clear your history, analytics, or other specific data points without deleting your account.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Fallback Form for Uninstalled Users */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-8"
                >
                    <div className="mb-8">
                        <div className="flex items-center space-x-3 mb-4">
                            <Smartphone className="h-6 w-6 text-gray-400" />
                            <h2 className="text-2xl font-bold text-white">No longer have the app?</h2>
                        </div>
                        <p className="text-gray-300">
                            If you have already uninstalled DeepLoop and cannot access the in-app deletion tools, please fill out the form below. We will verify your request and process your data deletion manually.
                        </p>
                    </div>

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
                                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Account Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Request Type
                            </label>
                            <select
                                name="requestType"
                                value={formData.requestType}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                            >
                                <option value="Account Deletion">Full Account Deletion</option>
                                <option value="Specific Data Deletion">Delete Specific Data (Keep Account)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Additional Details
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                placeholder="If requesting specific data deletion, please describe what data you want removed..."
                            />
                        </div>

                        {submitStatus && (
                            <div className={`p-4 rounded-lg text-sm ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                }`}>
                                {submitStatus.message}
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Submitting Request...' : 'Submit Deletion Request'}
                            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default DeepLoopDataDeletion;

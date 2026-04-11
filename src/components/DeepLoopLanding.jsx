import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
    BrainCircuit,
    Trophy,
    Code2,
    EyeOff,
    ChevronDown,
    ChevronUp,
    Zap,
    BookOpen,
    CheckCircle2,
    PenTool,
    RotateCw,
    Apple
} from 'lucide-react';

const APP_STORE_LINK = "https://apps.apple.com/us/app/deeploop/id6760870919";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-700/50 rounded-lg overflow-hidden mb-4 bg-slate-800/30">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-white">{question}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
            </button>
            {isOpen && (
                <div className="px-6 pb-4 text-gray-400 p-4 pt-0">
                    {answer}
                </div>
            )}
        </div>
    );
};

const DeepLoopLanding = () => {
    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8"
                    >
                        <BrainCircuit className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-300 text-sm font-medium">Available on iPhone</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight"
                    >
                        Master the art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">learning.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        Overcome the surface level. DeepLoop is the world's first high-performance learning engine that uses advanced AI to build a bespoke curriculum for literally anything you want to master.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <a href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-white hover:bg-gray-100 text-black px-8 py-6 rounded-xl text-lg font-semibold flex items-center space-x-3 transition-transform hover:scale-105">
                                <Apple className="w-6 h-6" />
                                <span>Download on App Store</span>
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Feature Bento Grid */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Everything you need to learn smarter.</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Input your goal, and DeepLoop generates a proprietary curriculum tailored specifically to your background and learning style.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature 1 (Spans 2 columns) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl lg:col-span-2 group hover:bg-slate-800/80 transition-colors"
                        >
                            <div className="bg-blue-500/20 p-4 rounded-2xl inline-block mb-6">
                                <BrainCircuit className="h-8 w-8 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Personalized AI Mentorship</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Get real-time feedback from our AI Mentor. Receive a Mastery Score, identification of growth areas, and specific next steps to solidify your knowledge.
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl group hover:bg-slate-800/80 transition-colors"
                        >
                            <div className="bg-purple-500/20 p-4 rounded-2xl inline-block mb-6">
                                <Trophy className="h-8 w-8 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Gamified Mastery</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Track your current learning streak, weekly output, and global mastery across every topic you've ever explored.
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl group hover:bg-slate-800/80 transition-colors"
                        >
                            <div className="bg-green-500/20 p-4 rounded-2xl inline-block mb-6">
                                <Code2 className="h-8 w-8 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Interactive Challenges</h3>
                            <p className="text-gray-400 leading-relaxed">
                                High-fidelity, fill-in-the-blanks logic and coding exercises that constantly adapt to your performance.
                            </p>
                        </motion.div>

                        {/* Feature 4 (Spans 2 columns) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl lg:col-span-2 group hover:bg-slate-800/80 transition-colors"
                        >
                            <div className="bg-amber-500/20 p-4 rounded-2xl inline-block mb-6">
                                <EyeOff className="h-8 w-8 text-amber-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Premium Zero-Distraction UX</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Built for deep work with fully supported Light/Dark modes, smooth haptics, and a beautiful interface that helps you maintain focus without the endless scrolling.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Workflow / 5 Stage Mastery Loop */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The 5-Stage Mastery Loop</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Every topic is fundamentally broken down into 5 hyper-focused stages to bridge the gap between "knowing about" and true mastery.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { step: "1", title: "Spark", desc: "Introduction to core concepts.", icon: Zap },
                            { step: "2", title: "Dive", desc: "Deep conceptual unrolling.", icon: BookOpen },
                            { step: "3", title: "Check", desc: "Targeted quick quizzes.", icon: CheckCircle2 },
                            { step: "4", title: "Do", desc: "Interactive practice.", icon: PenTool },
                            { step: "5", title: "Reflect", desc: "AI Mentor Metacognition.", icon: RotateCw }
                        ].map((stage, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl flex flex-col items-center text-center relative"
                            >
                                <div className="absolute -top-4 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm border-4 border-slate-950">
                                    {stage.step}
                                </div>
                                <stage.icon className="h-10 w-10 text-blue-400 mb-4 mt-2" />
                                <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                                <p className="text-gray-400 text-sm">{stage.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-2">
                        <FAQItem
                            question="Is DeepLoop free to use?"
                            answer="Yes, DeepLoop is currently free. We believe in providing premium learning experiences without barriers."
                        />
                        <FAQItem
                            question="Can I learn anything with DeepLoop?"
                            answer="Absolutely. Whether you're a software engineer learning a new framework, a professional preparing for a certification, or a hobbyist diving into astrophysics, DeepLoop builds a bespoke curriculum for you."
                        />
                        <FAQItem
                            question="What devices can I use DeepLoop on?"
                            answer="DeepLoop is primarily designed and optimized for iPhone to ensure the best interactive, distraction-free learning experience, and it can also be used on iPad. macOS is not officially verified yet."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 p-12 md:p-20 rounded-[3rem]">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for a straight path to depth?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Stop grazing on the surface of your interests. Download the app today and generate your first custom curriculum.</p>
                    <a href={APP_STORE_LINK} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-white hover:bg-gray-100 text-black px-8 py-6 rounded-xl text-lg font-semibold inline-flex items-center space-x-3 transition-transform hover:scale-105">
                            <Apple className="w-6 h-6" />
                            <span>Get DeepLoop Free</span>
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default DeepLoopLanding;

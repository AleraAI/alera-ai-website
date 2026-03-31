import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeepLoopTerms = () => {
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
                    Terms of Service for DeepLoop
                </h1>

                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using DeepLoop, you agree to be bound by these Terms of Service.
                            If you do not agree to all the terms and conditions, you may not use the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Use of License</h2>
                        <p>
                            Alera AI grants you a limited, non-exclusive, non-transferable license to use DeepLoop
                            solely for your professional or personal development needs, subject to these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Prohibited Activities</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use the App for any illegal purpose.</li>
                            <li>Attempt to reverse engineer or decompile the underlying AI models.</li>
                            <li>Upload malicious code or content that violates intellectual property rights.</li>
                            <li>Interfere with the operation of the App or its security features.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                        <p>
                            All rights, title, and interest in and to DeepLoop and its original content, features,
                            and functionality are and will remain the exclusive property of Alera AI.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
                        <p>
                            In no event shall Alera AI be liable for any indirect, incidental, special, consequential,
                            or punitive damages arising out of or in connection with your use of the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimer</h2>
                        <p>
                            DeepLoop is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that
                            the App will be uninterrupted or error-free, or that the AI results will be 100% accurate.
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

export default DeepLoopTerms;

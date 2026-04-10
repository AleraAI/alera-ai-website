import aleraLogo from '../assets/alera-ai-logo.png';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MainFooter = () => {
    const currentYear = new Date().getFullYear();

    const handleSectionScroll = (e, sectionId) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Company Info */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center" onClick={(e) => handleSectionScroll(e, 'hero')}>
                        <img src={aleraLogo} alt="Alera AI" className="h-14 w-auto" />
                    </Link>

                    <p className="text-sm leading-relaxed">
                        Accelerating innovation with cutting-edge AI technology. We provide high-end AI solutions
                        tailored for enterprise and developers.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/" onClick={(e) => handleSectionScroll(e, 'hero')} className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/" onClick={(e) => handleSectionScroll(e, 'services')} className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                        <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        <li><Link to="/" onClick={(e) => handleSectionScroll(e, 'about')} className="hover:text-white transition-colors">About Us</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Resources</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/demo" className="hover:text-white transition-colors">Request Demo</Link></li>
                        <li><Link to="/get-started" className="hover:text-white transition-colors">Get Started</Link></li>
                        <li><Link to="/products/deeploop/privacy" className="hover:text-white transition-colors">DeepLoop Privacy</Link></li>
                        <li><Link to="/products/deeploop/terms" className="hover:text-white transition-colors">DeepLoop Terms</Link></li>
                        <li><Link to="/products/deeploop/support" className="hover:text-white transition-colors">DeepLoop Support</Link></li>
                        <li><Link to="/products/deeploop/data-deletion" className="hover:text-white transition-colors">DeepLoop Data Deletion</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}


                <div>
                    <h4 className="text-white font-semibold mb-6">Contact</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start space-x-3">
                            <MapPin size={18} className="text-blue-400 mt-0.5 shrink-0" />
                            <span>Vancouver, BC, Canada</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="text-blue-400 shrink-0" />
                            <span>+1 (604) 555-0123</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="text-blue-400 shrink-0" />
                            <span>contact@alera.ai</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>&copy; {currentYear} Alera AI. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;

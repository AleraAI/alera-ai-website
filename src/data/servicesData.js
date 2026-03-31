import { Brain, Layers, Code, RefreshCw, Heart, GraduationCap, Users } from 'lucide-react';

export const services = [
    {
        id: 'llm',
        icon: Brain,
        title: "Large & Small Language Models",
        description: "Advanced LLMs and efficient SLMs tailored for your specific use cases.",
        features: ["Custom Model Training", "Domain Adaptation", "Performance Optimization", "Scalable Deployment"],
        color: "blue"
    },
    {
        id: 'multimodal',
        icon: Layers,
        title: "Multimodal AI Systems",
        description: "Integrate text, image, audio, and video data into unified AI systems.",
        features: ["Cross-Modal Understanding", "Data Fusion", "Real-time Processing", "Custom Architectures"],
        color: "purple"
    },
    {
        id: 'code-review',
        icon: Code,
        title: "AI-Powered Code Review",
        description: "Intelligent code analysis that goes beyond traditional static analysis.",
        features: ["Deep Code Analysis", "Security Scanning", "Performance Insights", "Best Practice Enforcement"],
        color: "green"
    },
    {
        id: 'modernization',
        icon: RefreshCw,
        title: "Code Refactoring & Modernization",
        description: "Transform legacy codebases into modern, efficient, and maintainable systems.",
        features: ["Legacy Migration", "Architecture Modernization", "Performance Enhancement", "Technical Debt Reduction"],
        color: "orange"
    },
    {
        id: 'recommendations',
        icon: Heart,
        title: "Recommendation Systems & Personalization",
        description: "Build TikTok-level personalization engines that drive engagement and conversion.",
        features: ["Personalized Feeds", "Hybrid Search", "Real-time Recommendations", "User Behavior Analytics"],
        color: "pink"
    },
    {
        id: 'training',
        icon: GraduationCap,
        title: "AI Training & Education",
        description: "Comprehensive training programs for individuals and teams on AI and machine learning.",
        features: ["Custom Curriculum", "Hands-on Workshops", "Certification Programs", "Online & On-site Training"],
        color: "teal"
    },
    {
        id: 'consultation',
        icon: Users,
        title: "AI Strategy Consultation",
        description: "Expert consultation services to help companies and individuals navigate AI adoption.",
        features: ["AI Strategy Planning", "Technology Assessment", "Implementation Roadmaps", "ROI Analysis"],
        color: "indigo"
    }
];

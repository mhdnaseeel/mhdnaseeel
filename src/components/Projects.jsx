import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Multi-Tenant HR & Payroll System",
            description: "Architected an enterprise-grade cloud-based SaaS platform using Spring Boot microservices with dynamic datasource routing. Integrated Azure Document Intelligence and Google AI for intelligent data processing.",
            tags: ["Spring Boot", "PostgreSQL", "Azure", "Docker", "OAuth2.0"],
            links: { github: "https://github.com/mhdnaseeel/Payroll_Automation", live: "#" }
        },
        {
            title: "PinBridge: Device Connectivity Bridge",
            description: "Engineered a secure real-time OTP synchronization system using AES-256-GCM encryption. Developed a multi-platform architecture bridging Android native (Kotlin), Chrome Extensions (MV3), and Node.js servers.",
            tags: ["Kotlin", "Node.js", "Firebase", "Chrome Extension", "WebSockets"],
            links: { github: "https://github.com/mhdnaseeel/PinBridge", live: "https://pin-bridge.vercel.app" }
        },
        {
            title: "Scalable E-Commerce Platform",
            description: "Developed a production-ready cloud-native microservices architecture on AWS. Implemented secure authentication using OAuth2.0 and JWT with Redis-based session management for horizontal scalability.",
            tags: ["Spring Boot", "AWS", "PostgreSQL", "Redis", "Docker"],
            links: { github: "https://github.com/mhdnaseeel/spring-boot-course", live: "#" }
        },
        {
            title: "Real-Time Emergency Response",
            description: "Built a mission-critical tracking system using WebSockets for real-time bidirectional communication. Integrated Google Maps API for intelligent route optimization, reducing response times by 30%.",
            tags: ["Spring Boot", "WebSockets", "PostgreSQL", "Google Maps API"],
            links: { github: "https://github.com/mhdnaseeel/ambutracker", live: "#" }
        },
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">Featured Projects</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my ability to solve complex problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="h-48 bg-slate-800 flex items-center justify-center group-hover:bg-slate-800/80 transition-colors relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                <Folder className="w-16 h-16 text-slate-600 group-hover:text-primary transition-colors relative z-10" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-slate-800 text-primary rounded-full text-xs font-medium border border-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-slate-800">
                                    <a href={project.links.github} className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                        <Github className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                    <a href={project.links.live} className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
                                        <ExternalLink className="w-4 h-4 mr-1" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

import { useState } from 'react';
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: "Multi-Tenant HR & Payroll System",
            description: "Architected an enterprise-grade cloud-based SaaS platform using Spring Boot microservices with dynamic datasource routing. Integrated Azure Document Intelligence and Google AI for intelligent data processing.",
            tags: ["Spring Boot", "PostgreSQL", "Azure", "Docker", "OAuth2.0"],
            links: { github: "https://github.com/mhdnaseeel/Payroll_Automation", live: "https://workflowautomation.vercel.app/" },
            image: "/assets/projects/payroll-dashboard.png"
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

    const visibleProjects = showAll ? projects : projects.slice(0, 2);

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-800 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="h-48 bg-slate-800 flex items-center justify-center group-hover:bg-slate-800/80 transition-colors relative overflow-hidden">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                                        <Folder className="w-16 h-16 text-slate-600 group-hover:text-primary transition-colors relative z-10" />
                                    </>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-4 line-clamp-2">
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

                {projects.length > 2 && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-full border border-slate-700 hover:border-primary/50 transition-all duration-300 group"
                        >
                            {showAll ? (
                                <>
                                    Show Less <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                </>
                            ) : (
                                <>
                                    View All Projects <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;

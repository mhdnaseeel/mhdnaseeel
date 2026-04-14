import { ExternalLink, Github, Folder, Code2, Layers, Cpu } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Multi-Tenant HR & Payroll System",
            description: "Architected an enterprise-grade cloud-based SaaS platform using Spring Boot microservices with dynamic datasource routing. Integrated Azure Document Intelligence and Google AI for intelligent data processing.",
            tags: ["Spring Boot", "PostgreSQL", "Azure", "Docker", "OAuth2.0"],
            links: { github: "https://github.com/mhdnaseeel/Payroll_Automation", live: "#" },
            icon: <Layers className="w-10 h-10 text-primary" />
        },
        {
            title: "Scalable E-Commerce Platform",
            description: "Developed a production-ready cloud-native microservices architecture on AWS. Implemented secure authentication using OAuth2.0 and JWT with Redis-based session management.",
            tags: ["Spring Boot", "AWS", "PostgreSQL", "Redis", "Docker"],
            links: { github: "https://github.com/mhdnaseeel/spring-boot-course", live: "#" },
            icon: <Cpu className="w-10 h-10 text-accent" />
        },
        {
            title: "Real-Time Emergency Response",
            description: "Built a mission-critical tracking system using WebSockets for real-time bidirectional communication. Integrated Google Maps API for intelligent route optimization.",
            tags: ["Spring Boot", "WebSockets", "PostgreSQL", "Google Maps API"],
            links: { github: "https://github.com/mhdnaseeel/ambutracker", live: "#" },
            icon: <Code2 className="w-10 h-10 text-primary-hover" />
        },
    ];

    return (
        <section id="projects" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mt-2">Featured Projects</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A selection of enterprise-grade applications focusing on microservices, cloud, and security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl overflow-hidden glass-hover group flex flex-col h-full"
                        >
                            <div className="h-52 bg-slate-800/50 flex items-center justify-center group-hover:bg-slate-800/80 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                    {project.icon}
                                </div>
                                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Folder className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-8 line-clamp-4 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-[10px] font-bold uppercase tracking-wider border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 pt-6 border-t border-slate-800/50">
                                    <a 
                                        href={project.links.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center text-xs font-bold text-slate-100 hover:text-primary transition-colors gap-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        SOURCE CODE
                                    </a>
                                    <a 
                                        href={project.links.live} 
                                        className="flex items-center text-xs font-bold text-slate-400 hover:text-white transition-colors gap-2 ml-auto"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        LIVE DEMO
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

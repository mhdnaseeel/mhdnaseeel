import { ExternalLink, Github, FolderCode, Smartphone, Cpu, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
    // Featured projects — shown as large cards
    const featured = [
        {
            id: "hr-payroll",
            icon: <Cpu className="w-5 h-5" />,
            iconColor: "text-indigo-400",
            accentBorder: "border-indigo-500/15 hover:border-indigo-500/30",
            title: "Multi-Tenant HR & Payroll System",
            badge: "SaaS",
            badgeColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
            description: "Cloud-based payroll automation with dynamic datasource routing, Azure AI integration, and role-based multi-tenancy.",
            tags: ["Spring Boot", "PostgreSQL", "Azure", "Docker", "OAuth2.0"],
            detailUrl: "/project/hr-payroll",
            links: { github: "https://github.com/mhdnaseeel/Payroll_Automation", live: "https://workflowautomation.vercel.app/" }
        },
        {
            id: "pinbridge",
            icon: <Smartphone className="w-5 h-5" />,
            iconColor: "text-cyan-400",
            accentBorder: "border-cyan-500/15 hover:border-cyan-500/30",
            title: "PinBridge",
            badge: "Open Source",
            badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
            description: "End-to-end encrypted OTP mirroring from Android to Chrome with AES-256-GCM and Socket.IO.",
            tags: ["Kotlin", "Socket.IO", "Firebase", "Manifest V3"],
            detailUrl: "/project/pinbridge",
            links: { github: "https://github.com/mhdnaseeel/PinBridge", live: "https://pin-bridge.vercel.app" }
        }
    ];

    // Other projects — shown as compact rows
    const others = [
        {
            icon: <Globe className="w-4 h-4 text-green-400" />,
            title: "NexCart: Premium E-Commerce",
            badge: "Full Stack",
            badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
            description: "High-performance storefront with Spring Boot Microservices, Stripe integration, and dynamic profile management.",
            tags: ["Spring Boot", "React", "Stripe", "PostgreSQL"],
            detailUrl: "/project/nexcart",
            links: { github: "https://github.com/mhdnaseeel/e-commerce.git", live: "https://e-commerce-olive-chi-31.vercel.app/" }
        },
        {
            icon: <Shield className="w-4 h-4 text-yellow-400" />,
            title: "Real-Time Emergency Response",
            badge: "Mission Critical",
            badgeColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
            description: "Live ambulance tracking with WebSockets and Google Maps API, reducing response times by 30%.",
            tags: ["Spring Boot", "WebSockets", "PostgreSQL", "Maps API"],
            links: { github: "https://github.com/mhdnaseeel/ambutracker" }
        }
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-12"
                >
                    <div className="flex items-center gap-3">
                        <div className="s-icon-badge">
                            <FolderCode className="w-5 h-5" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Projects</h2>
                    </div>
                    <a href="https://github.com/mhdnaseeel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white text-sm transition-colors">
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">mhdnaseeel</span>
                    </a>
                </motion.div>

                {/* Featured projects — large cards */}
                <div className="space-y-4 mb-6">
                    {featured.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`project-card ${project.accentBorder} transition-all`}
                        >
                            <div className="p-5 sm:p-6">
                                {/* Top: Icon + Title + Badge */}
                                <div className="flex items-start gap-3.5 mb-3">
                                    <div className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 ${project.iconColor}`}>
                                        {project.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2.5 flex-wrap mb-1">
                                            {project.detailUrl ? (
                                                <Link to={project.detailUrl} className="font-bold text-white hover:text-primary transition-colors text-base sm:text-lg">
                                                    {project.title}
                                                </Link>
                                            ) : (
                                                <span className="font-bold text-white text-base sm:text-lg">{project.title}</span>
                                            )}
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${project.badgeColor}`}>
                                                {project.badge}
                                            </span>
                                        </div>
                                        <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-3 ml-[3.375rem]">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[11px] text-zinc-500 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 ml-[3.375rem]">
                                    {project.links?.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors" aria-label={`View source code for ${project.title}`}>
                                            <Github className="w-3.5 h-3.5" />
                                            Source
                                        </a>
                                    )}
                                    {project.links?.live && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors" aria-label={`View live demo for ${project.title}`}>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            Live
                                        </a>
                                    )}
                                    {project.detailUrl && (
                                        <Link to={project.detailUrl} className="flex items-center gap-1.5 text-xs text-primary hover:text-indigo-300 transition-colors" aria-label={`View case study for ${project.title}`}>
                                            Case Study →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other projects — compact rows */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-3 ml-1">Also built</p>
                    {others.map((project, index) => (
                        <div key={index} className="project-row group">
                            <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
                                {project.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                                    {project.detailUrl ? (
                                        <Link to={project.detailUrl} className="font-semibold text-white hover:text-primary transition-colors text-sm">
                                            {project.title}
                                        </Link>
                                    ) : (
                                        <span className="font-semibold text-white text-sm">{project.title}</span>
                                    )}
                                    <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-px rounded border ${project.badgeColor}`}>
                                        {project.badge}
                                    </span>
                                </div>
                                <p className="text-zinc-500 text-xs leading-relaxed mb-2">{project.description}</p>
                                <div className="flex flex-wrap items-center gap-3">
                                    {project.links?.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-white transition-colors">
                                            <Github className="w-3 h-3" />
                                            Source
                                        </a>
                                    )}
                                    {project.links?.live && (
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-white transition-colors">
                                            <ExternalLink className="w-3 h-3" />
                                            Live
                                        </a>
                                    )}
                                    {project.detailUrl && (
                                        <Link to={project.detailUrl} className="flex items-center gap-1 text-[11px] text-primary hover:text-indigo-300 transition-colors">
                                            Case Study →
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

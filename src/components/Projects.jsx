import { useState } from 'react';
import { ExternalLink, Github, FolderCode, Server, Smartphone, Star, ChevronDown, ChevronUp, Shield, Cpu, Globe, Zap, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const projectGroups = [
        {
            title: "Enterprise Solutions",
            description: "Production-grade cloud systems built for scale and security.",
            tintColor: "border-blue-500/20",
            labelColor: "text-blue-400",
            icon: <Server className="w-6 h-6 text-blue-400" />,
            projects: [
                {
                    id: "hr-payroll",
                    icon: <Cpu className="w-5 h-5 text-blue-400" />,
                    title: "Multi-Tenant HR & Payroll System",
                    badge: "SaaS",
                    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
                    description: "Cloud-based payroll automation with dynamic datasource routing, Azure AI integration, and role-based multi-tenancy.",
                    tags: ["Spring Boot", "PostgreSQL", "Azure", "Docker", "OAuth2.0"],
                    detailUrl: "/project/hr-payroll",
                    links: { github: "https://github.com/mhdnaseeel/Payroll_Automation", live: "https://workflowautomation.vercel.app/" }
                },
                {
                    id: "nexcart",
                    icon: <Globe className="w-5 h-5 text-green-400" />,
                    title: "NexCart: Premium E-Commerce Solution",
                    badge: "Full Stack",
                    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
                    description: "High-performance storefront with Spring Boot Microservices, automated data seeding, dynamic profile management, and Stripe integration.",
                    tags: ["Spring Boot", "React", "Stripe", "PostgreSQL", "Redux"],
                    detailUrl: "/project/nexcart",
                    links: { 
                        github: "https://github.com/mhdnaseeel/e-commerce.git", 
                        live: "https://e-commerce-olive-chi-31.vercel.app/" 
                    }
                }
            ]
        },
        {
            title: "Real-Time Systems",
            description: "Low-latency applications with live data synchronization.",
            tintColor: "border-cyan-500/20",
            labelColor: "text-cyan-400",
            icon: <Zap className="w-6 h-6 text-cyan-400" />,
            projects: [
                {
                    id: "pinbridge",
                    icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
                    title: "PinBridge",
                    badge: "Open Source",
                    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
                    description: "End-to-end encrypted OTP mirroring from Android to Chrome with AES-256-GCM and Socket.IO.",
                    tags: ["Kotlin", "Socket.IO", "Firebase", "Manifest V3"],
                    detailUrl: "/project/pinbridge",
                    links: { github: "https://github.com/mhdnaseeel/PinBridge", live: "https://pin-bridge.vercel.app" }
                },
                {
                    icon: <Shield className="w-5 h-5 text-yellow-400" />,
                    title: "Real-Time Emergency Response",
                    badge: "Mission Critical",
                    badgeColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
                    description: "Live ambulance tracking with WebSockets and Google Maps API, reducing response times by 30%.",
                    tags: ["Spring Boot", "WebSockets", "PostgreSQL", "Maps API"],
                    links: { github: "https://github.com/mhdnaseeel/ambutracker" }
                }
            ]
        }
    ];

    const visibleGroups = showAll ? projectGroups : projectGroups.slice(0, 2);

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
                    <a href="https://github.com/mhdnaseeel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">mhdnaseeel</span>
                    </a>
                </motion.div>

                {/* Project groups - grouped card pattern */}
                <div className="space-y-8">
                    {visibleGroups.map((group, gIndex) => (
                        <motion.div
                            key={gIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gIndex * 0.12 }}
                            className={`project-card ${group.tintColor}`}
                        >
                            {/* Group header */}
                            <div className="p-6 pb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                                        {group.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{group.title}</h3>
                                        <p className="text-slate-400 text-sm">{group.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project items stacked inside the group card */}
                            <div className="px-5 pb-5 space-y-3">
                                {group.projects.map((project, pIndex) => (
                                    <div key={pIndex} className="project-row group">
                                        {/* Icon */}
                                        <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                                            {project.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                {project.detailUrl ? (
                                                    <Link to={project.detailUrl} className="font-bold text-white hover:text-primary transition-colors text-[15px]">
                                                        {project.title}
                                                    </Link>
                                                ) : (
                                                    <span className="font-bold text-white text-[15px]">{project.title}</span>
                                                )}
                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${project.badgeColor}`}>
                                                    {project.badge}
                                                </span>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-2.5">{project.description}</p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mb-2.5">
                                                {project.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="text-[11px] text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Links */}
                                            <div className="flex gap-4">
                                                {project.links?.github && (
                                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors" aria-label={`View source code for ${project.title}`}>
                                                        <Github className="w-3.5 h-3.5" />
                                                        Source
                                                    </a>
                                                )}
                                                {project.links?.live && (
                                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors" aria-label={`View live demo for ${project.title}`}>
                                                        <ExternalLink className="w-3.5 h-3.5" />
                                                        Live
                                                    </a>
                                                )}
                                                {project.detailUrl && (
                                                    <Link to={project.detailUrl} className="flex items-center gap-1.5 text-xs text-primary hover:text-blue-300 transition-colors" aria-label={`View case study for ${project.title}`}>
                                                        Case Study →
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

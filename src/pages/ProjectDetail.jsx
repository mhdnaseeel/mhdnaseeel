import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projectsData[projectId];

    // Scroll to top on load or project change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen pt-24 pb-20 bg-slate-950 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl font-bold text-slate-100 mb-6">Project Not Found</h1>
                <p className="text-slate-400 mb-8 max-w-md">The project you are looking for does not exist or has been moved.</p>
                <Link to="/" className="text-primary hover:underline flex items-center">
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation */}
                <Link 
                    to="/" 
                    className="inline-flex items-center text-slate-400 hover:text-primary transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Minimalist Header */}
                <div className="mb-16 text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-4xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Direct 3-Column High-Res Gallery Row */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-slate-100 mb-10 flex items-center">
                        <span className="w-8 h-1 bg-primary mr-3 rounded-full"></span>
                        System Interface Showcase
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {project.images.map((img, i) => (
                            <div key={i} className="group relative">
                                <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/50 aspect-[4/3] shadow-2xl transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-primary/10 flex items-center justify-center p-2">
                                    <img 
                                        src={img.src} 
                                        alt={img.title}
                                        className="max-w-full max-h-full object-contain shadow-sm"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                        <p className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {img.title}
                                        </p>
                                        <p className="text-slate-300 text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {img.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats & Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
                    {/* Features List */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center">
                            Core Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.features.map((feature, i) => (
                                <div key={i} className="flex items-start p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-slate-300 leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech & Links */}
                    <div className="space-y-12">
                        {/* Links */}
                        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                            <h3 className="text-xl font-bold text-slate-100 mb-8">Project Resources</h3>
                            <div className="space-y-4">
                                <a 
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-6 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-2xl transition-all font-semibold group"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    View Source Code
                                </a>
                                <a 
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl transition-all font-semibold shadow-lg shadow-primary/20"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Launch Live Demo
                                </a>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                            <h3 className="text-xl font-bold text-slate-100 mb-8">Technology Stack</h3>
                            <div className="space-y-6">
                                {project.techStack.map((tech, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="p-3 bg-slate-800 rounded-xl mr-4">
                                            {tech.icon}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-100">{tech.name}</p>
                                            <p className="text-sm text-slate-400">{tech.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;

import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Junior Java Developer",
            company: "TrickyDot Technologies Pvt. Ltd",
            location: "Kerala, India",
            period: "July 2024 – November 2025",
            achievements: [
                "Developed cloud-based enterprise solutions using Spring Boot microservices architecture on AWS, handling 500+ concurrent requests with 99.9% uptime and achieving 40% reduction in response time.",
                "Implemented secure authentication and authorization using OAuth2.0, OpenID Connect, and JWT with Spring Security, reducing unauthorized access incidents by 95% across 3 production applications.",
                "Architected and deployed RESTful APIs with comprehensive error handling and validation, integrating PostgreSQL and Redis for optimal data management and caching strategies.",
                "Established robust CI/CD pipelines using Jenkins and Git, automating build, test, and deployment processes, reducing deployment time from 45 minutes to 10 minutes with zero downtime.",
                "Optimized database performance with PostgreSQL query tuning, indexing strategies, and connection pooling, improving complex query execution time by 45%."
            ]
        },
        {
            role: "Junior Java Developer Intern",
            company: "TrickyDot Technologies Pvt. Ltd",
            location: "Kerala, India",
            period: "January 2024 – June 2024",
            achievements: [
                "Built 15+ RESTful API endpoints using Spring Boot with PostgreSQL backend, processing 10K+ daily requests with comprehensive error handling and validation.",
                "Developed responsive web applications using React.js and Angular with backend integration, implementing lazy loading and code splitting for enhanced performance.",
                "Enhanced test coverage from 65% to 85% using JUnit and Mockito, identifying and resolving 40+ critical bugs pre-production.",
                "Redesigned data access layer using Spring Data JPA with custom queries and specifications, reducing boilerplate code by 60%."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-slate-900/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">Journey</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mt-2">Professional Experience</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Desktop Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-800"></div>
                            
                            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Card */}
                                <div className="w-full md:w-[45%]">
                                    <div className="glass p-8 rounded-2xl glass-hover group">
                                        <div className="flex flex-col gap-1 mb-6">
                                            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mt-2">
                                                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                                                    <Briefcase className="w-4 h-4 text-primary" />
                                                    {exp.company}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="w-4 h-4" />
                                                    {exp.period}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin className="w-4 h-4" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <ul className="space-y-3">
                                            {exp.achievements.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-400 leading-relaxed text-sm">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Point */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-900 bg-primary z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                                
                                {/* Spacing for the other side on desktop */}
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

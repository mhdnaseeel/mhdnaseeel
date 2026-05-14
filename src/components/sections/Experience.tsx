import { Briefcase, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Junior Java Developer",
            company: "TrickyDot Technologies Pvt. Ltd",
            location: "Kerala, India",
            period: "July 2024 – January 2026",
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
        <section id="experience" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="s-icon-badge">
                        <Briefcase className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Work Experience</h2>
                </motion.div>

                <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-2xl"
                >
                    End-to-end ownership across <span className="text-white font-semibold">development → deployment → optimization</span>, building enterprise solutions with Spring Boot and cloud infrastructure.
                </motion.p>

                {/* Experience items - simple list items with icons */}
                <div className="space-y-4">
                    {experiences.map((exp, index) => (
                        <motion.details
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="s-card group"
                        >
                            <summary className="flex items-center gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                                <Zap className="w-5 h-5 text-primary shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                                    <p className="text-zinc-500 text-sm mt-0.5">{exp.company} · {exp.period}</p>
                                </div>
                                <svg className="w-4 h-4 text-zinc-500 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-5 pb-5 pt-1 border-t border-white/[0.04] ml-9">
                                <ul className="space-y-3 mt-4">
                                    {exp.achievements.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-zinc-500 text-sm leading-relaxed">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

import { Server, Layout, Database, Terminal, Shield, Cpu } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Core Backend",
            icon: <Server className="w-8 h-8 text-primary" />,
            skills: ["Java Spring Boot", "Python (FastAPI)", "Microservices Architecture", "RESTful APIs", "System Design"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Terminal className="w-8 h-8 text-secondary" />,
            skills: ["AWS (EC2, S3, RDS, Lambda)", "Azure (AI Integration)", "Docker & Kubernetes", "Jenkins CI/CD", "Git & Maven/Gradle"]
        },
        {
            title: "Security & Auth",
            icon: <Shield className="w-8 h-8 text-accent" />,
            skills: ["OAuth2.0 / OpenID Connect", "Spring Security", "JWT Authentication", "Role-Based Access (RBAC)", "BCrypt Encryption"]
        },
        {
            title: "Data Management",
            icon: <Database className="w-8 h-8 text-green-500" />,
            skills: ["PostgreSQL (Query Tuning)", "NoSQL (MongoDB, Redis)", "Database Schema Design", "Hibernate / Data JPA", "Connection Pooling"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mt-2">Technical Arsenal</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
                        Building robust, scalable foundations with modern technology stacks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-8 glass rounded-2xl glass-hover group"
                        >
                            <div className="mb-6 p-4 bg-slate-800/50 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 mb-6 group-hover:text-primary transition-colors">{category.title}</h3>
                            <ul className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:bg-primary transition-colors"></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

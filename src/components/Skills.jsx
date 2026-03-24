import { Server, Layout, Database, Terminal, Code } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Server className="w-8 h-8 text-primary" />,
            skills: ["Java (Spring Boot)", "Python (FastAPI)", "Microservices", "RESTful APIs", "Spring Security (OAuth2.0, JWT)"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Terminal className="w-8 h-8 text-secondary" />,
            skills: ["AWS (EC2, S3, RDS, Lambda)", "Azure", "Docker & Kubernetes", "Jenkins CI/CD", "Git & Maven/Gradle"]
        },
        {
            title: "Frontend & Web",
            icon: <Layout className="w-8 h-8 text-accent" />,
            skills: ["React.js", "Angular", "Node.js", "HTML5/CSS3", "JavaScript (ES6+)"]
        },
        {
            title: "Databases",
            icon: <Database className="w-8 h-8 text-green-600" />,
            skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis (Caching)", "Database Tuning"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">Technical Skills</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolset for building scalable and efficient software solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-6 bg-slate-900 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-slate-800 hover:border-primary/50 group"
                        >
                            <div className="mb-4 p-3 bg-slate-800 rounded-lg w-fit shadow-sm group-hover:bg-slate-700 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-primary transition-colors">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors">
                                        <Code className="w-4 h-4 mr-2 text-primary" />
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

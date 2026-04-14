import { Server, Layout, Database, Terminal, Code, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Globe className="w-8 h-8 text-blue-500" />,
            skills: [
                { name: "Java", slug: "java" },
                { name: "Python", slug: "py" },
                { name: "Kotlin", slug: "kotlin" },
                { name: "TypeScript", slug: "ts" },
                { name: "JavaScript", slug: "js" },
                { name: "HTML", slug: "html" },
                { name: "CSS", slug: "css" },
                { name: "Solidity", slug: "solidity" }
            ]
        },
        {
            title: "Frontend Development",
            icon: <Layout className="w-8 h-8 text-accent" />,
            skills: [
                { name: "React.js", slug: "react" },
                { name: "Next.js", slug: "nextjs" },
                { name: "Angular", slug: "angular" },
                { name: "Tailwind CSS", slug: "tailwind" },
                { name: "Bootstrap", slug: "bootstrap" },
                { name: "Redux", slug: "redux" },
                { name: "Material UI", slug: "materialui" }
            ]
        },
        {
            title: "Backend Development",
            icon: <Server className="w-8 h-8 text-primary" />,
            skills: [
                { name: "Spring Boot", slug: "spring" },
                { name: "FastAPI", slug: "fastapi" },
                { name: "Express", slug: "express" },
                { name: "Node.js", slug: "nodejs" },
                { name: "Hibernate", slug: "hibernate" }
            ]
        },
        {
            title: "DevOps & Cloud",
            icon: <Terminal className="w-8 h-8 text-yellow-500" />,
            skills: [
                { name: "Docker", slug: "docker" },
                { name: "Terraform", slug: "terraform" },
                { name: "AWS", slug: "aws" },
                { name: "GitHub Actions", slug: "githubactions" },
                { name: "Vercel", slug: "vercel" },
                { name: "Firebase", slug: "firebase" },
                { name: "Jenkins", slug: "jenkins" },
                { name: "Nginx", slug: "nginx" }
            ]
        },
        {
            title: "Databases",
            icon: <Database className="w-8 h-8 text-green-500" />,
            skills: [
                { name: "PostgreSQL", slug: "postgres" },
                { name: "MySQL", slug: "mysql" },
                { name: "MongoDB", slug: "mongodb" },
                { name: "Redis", slug: "redis" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-mono font-semibold tracking-wider uppercase text-sm"
                    >
                        Expertise
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-slate-100 mt-2"
                    >
                        Technical Skills
                    </motion.h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolset for building scalable and efficient software solutions.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-slate-900 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-slate-800 hover:border-primary/50 group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
                        >
                            <div className="mb-4 p-3 bg-slate-800 rounded-lg w-fit shadow-sm group-hover:bg-slate-700 transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-200 mb-6 group-hover:text-primary transition-colors">{category.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center space-x-3 p-2 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-primary/30 hover:bg-slate-800 transition-all"
                                    >
                                        <img 
                                            src={`https://skillicons.dev/icons?i=${skill.slug}`} 
                                            alt={skill.name}
                                            className="w-6 h-6 object-contain"
                                        />
                                        <span className="text-sm font-medium text-slate-300 truncate">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import { Code, Globe, Cloud, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Enterprise Software Dev",
            description: "Building scalable, cloud-native enterprise solutions using Spring Boot microservices and robust architecture.",
            icon: <Code className="w-5 h-5" />
        },
        {
            title: "Full-Stack Web Apps",
            description: "Modern, responsive web applications built with React or Angular, integrated with secure backend APIs.",
            icon: <Globe className="w-5 h-5" />
        },
        {
            title: "Cloud Infrastructure",
            description: "Architecting and deploying applications on AWS and Azure with containerization (Docker, Kubernetes) and CI/CD.",
            icon: <Cloud className="w-5 h-5" />
        }
    ];

    return (
        <section id="services" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-12"
                >
                    <div className="s-icon-badge">
                        <Wrench className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">What I Offer</h2>
                </motion.div>

                <div className="space-y-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="s-card p-6 flex items-start gap-5 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

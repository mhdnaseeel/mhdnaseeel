import { Code, Globe, Database, Smartphone, Cloud, Settings } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Enterprise Software Dev",
            description: "Building scalable, cloud-native enterprise solutions using Spring Boot microservices and robust architecture.",
            icon: <Code className="w-10 h-10 text-primary" />
        },
        {
            title: "Full-Stack Web Apps",
            description: "Modern, responsive web applications built with React or Angular, integrated with secure backend APIs.",
            icon: <Globe className="w-10 h-10 text-accent" />
        },
        {
            title: "Cloud Infrastructure",
            description: "Architecting and deploying applications on AWS and Azure with containerization (Docker, Kubernetes) and CI/CD.",
            icon: <Cloud className="w-10 h-10 text-secondary" />
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">What I Offer</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        High-quality software development services to help bring your ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 bg-slate-900 rounded-xl border border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="mb-6 bg-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

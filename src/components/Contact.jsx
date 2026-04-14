import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mt-2">Let's Connect</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Interested in collaboration or have a technical role in mind? I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass p-8 rounded-2xl space-y-8">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6">Contact Information</h3>
                            
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-slate-800 rounded-xl group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email</p>
                                    <a href="mailto:mhdnaseel521@gmail.com" className="text-lg font-medium text-slate-200 hover:text-primary transition-colors">
                                        mhdnaseel521@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-slate-800 rounded-xl group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Phone</p>
                                    <p className="text-lg font-medium text-slate-200">+91 9072131343</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-slate-800 rounded-xl group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Location</p>
                                    <p className="text-lg font-medium text-slate-200">Bengaluru, Karnataka, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/mhdnaseel" target="_blank" rel="noopener noreferrer" className="flex-1 glass p-4 rounded-xl flex items-center justify-center gap-3 hover:text-primary transition-colors group">
                                <Linkedin className="w-5 h-5" />
                                <span className="font-bold text-sm">LINKEDIN</span>
                            </a>
                            <a href="https://github.com/mhdnaseeel" target="_blank" rel="noopener noreferrer" className="flex-1 glass p-4 rounded-xl flex items-center justify-center gap-3 hover:text-primary transition-colors group">
                                <Github className="w-5 h-5" />
                                <span className="font-bold text-sm">GITHUB</span>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="glass p-8 rounded-2xl space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-400 uppercase tracking-widest ml-1">Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                            <input 
                                type="text" 
                                placeholder="Opportunity: Java Developer"
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-slate-400 uppercase tracking-widest ml-1">Message</label>
                            <textarea 
                                rows="4" 
                                placeholder="Tell me about your project or role..."
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                        >
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

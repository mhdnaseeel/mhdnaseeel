import { Mail, Linkedin, Send, Phone, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-12"
                >
                    <div className="s-icon-badge">
                        <Mail className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Contact</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left card: Let's Talk */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="s-card p-8 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Let's Talk</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                Have a project in mind or want to discuss new opportunities? I'd love to hear from you. Let's build something great together.
                            </p>
                        </div>

                        {/* Contact info rows */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-primary shrink-0 group-hover:border-primary/30 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <a href="mailto:mhdnaseel521@gmail.com" className="text-sm text-slate-300 hover:text-white transition-colors">mhdnaseel521@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-accent shrink-0 group-hover:border-accent/30 transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <a href="tel:+919072131343" className="text-sm text-slate-300 hover:text-white transition-colors">+91 9072131343</a>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-primary shrink-0 group-hover:border-primary/30 transition-colors">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="text-sm text-slate-300">Bangalore, India</span>
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a 
                                href="mailto:mhdnaseel521@gmail.com"
                                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-blue-600 transition-all"
                            >
                                <Mail className="w-4 h-4" />
                                Contact
                            </a>
                            <a 
                                href="https://linkedin.com/in/mhdnaseel" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.1] bg-white/[0.02] text-white font-semibold text-sm hover:bg-white/[0.05] hover:border-white/[0.2] transition-all"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right card: Send a Message */}
                    <motion.form 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdxVpUCFJxZHFhAMtWMUlwHOVO-yqSi21deLyhJ_zV-gWFwRQ/formResponse"
                        method="POST"
                        target="_blank"
                        className="s-card p-8"
                    >
                        <div className="flex items-center gap-2.5 mb-6">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-bold text-white">Send a Message</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="entry.860195011"
                                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/40 outline-none transition-all placeholder:text-slate-600 text-sm"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="entry.1623330191"
                                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/40 outline-none transition-all placeholder:text-slate-600 text-sm"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-slate-400 mb-1.5 font-medium">Message</label>
                                <textarea
                                    name="entry.1722992847"
                                    rows="4"
                                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/40 outline-none transition-all resize-none placeholder:text-slate-600 text-sm"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

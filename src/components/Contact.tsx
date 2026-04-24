import { useState, useRef } from 'react';
import { Mail, Linkedin, Send, Phone, MapPin, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS Error: Missing configuration. Check your .env.local file or Vercel environment variables.');
            setStatus('error');
            return;
        }

        setIsSubmitting(true);
        setStatus('idle');

        try {
            const result = await emailjs.sendForm(
                serviceId, 
                templateId, 
                formRef.current, 
                { publicKey: publicKey }
            );
            
            console.log('EmailJS Success:', result.text);
            setStatus('success');
            formRef.current.reset();
        } catch (error: any) {
            console.error('EmailJS Error Detail:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

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

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3">
                            <a 
                                href="mailto:mhdnaseel521@gmail.com"
                                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-blue-600 transition-all"
                            >
                                <Mail className="w-4 h-4" />
                                Email Me
                            </a>
                            <a 
                                href="https://linkedin.com/in/mhdnaseel" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.1] bg-white/[0.02] text-white font-semibold text-sm hover:bg-white/[0.05] hover:border-white/[0.2] transition-all"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* Right card: Send a Message */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="s-card p-8 relative overflow-hidden"
                    >
                        <div className="flex items-center gap-2.5 mb-6">
                            <MessageSquare className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-bold text-white">Send a Message</h3>
                        </div>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-xs text-slate-400 mb-1.5 font-medium">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/40 outline-none transition-all placeholder:text-slate-600 text-sm"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs text-slate-400 mb-1.5 font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/40 outline-none transition-all placeholder:text-slate-600 text-sm"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs text-slate-400 mb-1.5 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/40 outline-none transition-all resize-none placeholder:text-slate-600 text-sm"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                                    status === 'success' 
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                    : 'bg-primary text-white hover:bg-blue-600'
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>

                            <AnimatePresence>
                                {status === 'error' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 text-red-400 text-xs mt-2 justify-center"
                                    >
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>

                        {/* Overlay success message (optional aesthetic touch) */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center z-10"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30"
                                    >
                                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                                    </motion.div>
                                    <h4 className="text-white font-bold text-lg mb-1">Message Received!</h4>
                                    <p className="text-slate-300 text-sm">I'll get back to you as soon as possible.</p>
                                    <button 
                                        onClick={() => setStatus('idle')}
                                        className="mt-4 text-xs text-primary hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

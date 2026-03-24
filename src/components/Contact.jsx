import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! This is a demo form.");
    };

    return (
        <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-mono font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-2">Contact Me</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss new opportunities? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold text-slate-200">Contact Information</h3>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/10 text-primary border border-slate-800">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-200">Email</p>
                                <a href="mailto:mhdnaseel521@gmail.com" className="text-slate-400 hover:text-primary transition-colors">mhdnaseel521@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/10 text-primary border border-slate-800">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-200">Phone</p>
                                <a href="tel:+919072131343" className="text-slate-400 hover:text-primary transition-colors">+91 9072131343</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/10 text-primary border border-slate-800">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-slate-200">Location</p>
                                <p className="text-slate-400">Bangalore, India</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-800">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 text-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 text-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 text-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

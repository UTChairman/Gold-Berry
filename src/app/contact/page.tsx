"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-[80vh] bg-brand-offwhite py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-serif text-brand-midnight mb-6">Get in Touch</h1>
                    <p className="text-xl text-brand-midnight/70 font-medium">
                        Have a question about our honey or a recent order? We're here to help you naturally.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Details */}
                    <div className="space-y-12">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-brand-midnight/5">
                            <h2 className="text-2xl font-serif text-brand-midnight mb-8">Reach Out Directly</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-pollen/20 rounded-full flex items-center justify-center text-brand-amber mt-1">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-brand-midnight">Phone Line</h3>
                                        <p className="text-brand-midnight/70 mb-1">0325 9861 146</p>
                                        <p className="text-sm text-brand-amber">Available Mon-Fri, 9am - 5pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-pollen/20 rounded-full flex items-center justify-center text-brand-amber mt-1">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-brand-midnight">Email Address</h3>
                                        <a href="mailto:thezainsehgal@gmail.com" className="text-brand-midnight/70 hover:text-brand-amber transition-colors">
                                            thezainsehgal@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-pollen/20 rounded-full flex items-center justify-center text-brand-amber mt-1">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-brand-midnight">Headquarters</h3>
                                        <p className="text-brand-midnight/70">
                                            123 Wildflower Lane<br />
                                            Suite 400<br />
                                            Apiary District, NY 10001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-midnight text-brand-white p-10 rounded-3xl shadow-xl">
                            <h2 className="text-2xl font-serif mb-4">Wholesale Inquiries</h2>
                            <p className="text-white/80 mb-6">
                                Interested in stocking Gold Berry in your cafe or retail store? Let's spread the sweetness together.
                            </p>
                            <button className="bg-brand-pollen text-brand-midnight px-6 py-3 rounded-full font-bold hover:bg-brand-amber transition-colors">
                                Partner with us
                            </button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 md:p-12 rounded-3xl shadow-lg border-t border-brand-midnight/5">
                        <h2 className="text-3xl font-serif text-brand-midnight mb-8">Send a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-brand-midnight/70 mb-2">First Name</label>
                                    <input type="text" className="w-full px-5 py-4 bg-brand-offwhite rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-pollen transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-midnight/70 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-5 py-4 bg-brand-offwhite rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-pollen transition-all" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-midnight/70 mb-2">Email Address</label>
                                <input type="email" className="w-full px-5 py-4 bg-brand-offwhite rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-pollen transition-all" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-midnight/70 mb-2">Message</label>
                                <textarea rows={5} className="w-full px-5 py-4 bg-brand-offwhite rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-pollen transition-all resize-none" required></textarea>
                            </div>

                            <button type="submit" className="w-full bg-brand-midnight text-brand-white font-bold py-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 hover:-translate-y-1 hover:bg-brand-amber">
                                <Send className="w-5 h-5" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

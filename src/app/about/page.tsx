"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    const fadeInUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="flex flex-col w-full overflow-hidden bg-brand-offwhite">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center pt-20">
                <div className="absolute inset-0 bg-brand-midnight">
                    <Image
                        src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2000"
                        alt="Forest canopy"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                </div>
                <div className="container relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif text-brand-white mb-6">Our Story</h1>
                        <p className="text-xl text-brand-offwhite max-w-2xl mx-auto font-medium">
                            Bringing nature's golden gift to every table, without compromise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Journey */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/beekeeper checking hive.jpg"
                                alt="Beekeeper checking hive"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-sm font-bold tracking-widest text-brand-amber uppercase mb-3">The Beginning</h2>
                            <h3 className="text-4xl md:text-5xl font-serif text-brand-midnight mb-8">Where Wildflowers Bloom</h3>
                            <div className="space-y-6 text-brand-midnight/70 text-lg leading-relaxed">
                                <p>
                                    Gold Berry was born out of a simple observation: the primary barrier to healthy living is often financial. While health-conscious consumers want to eliminate refined sugar, high-quality natural honey is frequently positioned as a luxury "gourmet" item with a prohibitive price tag.
                                </p>
                                <p>
                                    We set out to disrupt the sweetener industry. Our mission is to replace the "sugar bowl" in every household with a Gold Berry jar. We provide a premium, natural alternative that bridges the gap between luxury quality and everyday affordability.
                                </p>
                                <div className="p-6 bg-brand-white rounded-2xl border-l-4 border-brand-pollen shadow-sm italic mt-8 font-medium">
                                    "Health should not be a luxury. It is a fundamental right, and nature gave us the perfect sweetener."
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-brand-midnight text-brand-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-brand-pollen uppercase mb-3">Our Philosophy</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-brand-white mb-6">Built on Integrity</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Heart, title: "Accessibility", desc: "We believe pure honey should be available to everyone. We optimize our supply chain to keep prices fair without ever compromising on quality." },
                            { icon: ShieldCheck, title: "Purity", desc: "Sourced directly from nature with zero additives. Our honey is always raw and cold-pressed to preserve essential enzymes." },
                            { icon: Sparkles, title: "Vitality", desc: "Empowering people to live better through natural energy. A smart swap that fuels your day organically." }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-16 h-16 bg-brand-pollen/20 rounded-2xl flex items-center justify-center text-brand-pollen mb-8">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-serif text-brand-pollen mb-4">{value.title}</h4>
                                <p className="text-white/70 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sourcing */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
                    <Leaf className="w-12 h-12 text-brand-meadow mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-midnight mb-8">Ethical Apiary Partners</h2>
                    <p className="text-xl text-brand-midnight/70 leading-relaxed mb-12">
                        We partner exclusively with ethical apiaries that prioritize bee health over mass production, ensuring every drop is as sustainable as it is sublime. No artificial feeding, no harmful chemicals—just happy bees and thriving ecosystems.
                    </p>
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 bg-brand-pollen text-brand-midnight font-bold py-4 px-10 rounded-full hover:bg-brand-amber transition-all shadow-[0_0_20px_rgba(253,204,32,0.3)] hover:shadow-[0_0_30px_rgba(245,140,28,0.4)]"
                    >
                        Taste the Difference <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

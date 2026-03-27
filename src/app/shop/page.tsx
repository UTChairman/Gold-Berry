"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { useCart } from "@/components/cart-provider";
import { ArrowRight, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Shop() {
    const { addToCart } = useCart();

    return (
        <div className="flex flex-col w-full min-h-screen bg-brand-offwhite pb-24">
            {/* Header */}
            <section className="bg-brand-midnight text-brand-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-midnight">
                    <Image
                        src="https://images.unsplash.com/photo-1587049352851-8d4e89134a02?auto=format&fit=crop&q=80&w=2000"
                        alt="Honey backdrop"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>
                <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-serif text-brand-pollen mb-4">Shop The Harvest</h1>
                    <p className="text-brand-offwhite/80 text-lg">
                        Discover our collection of 100% pure, raw, cold-pressed honey.
                        From the hive directly to your kitchen.
                    </p>
                </div>
            </section>

            {/* Product List */}
            <section className="container mx-auto px-4 md:px-8 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-brand-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full"
                        >
                            <Link href={`/product/${product.id}`} className="relative h-80 w-full block overflow-hidden bg-brand-offwhite">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-brand-midnight text-brand-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-md bg-opacity-80">
                                    {product.weight}
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <Link href={`/product/${product.id}`}>
                                        <h2 className="text-2xl font-serif text-brand-midnight font-medium group-hover:text-brand-amber transition-colors">{product.name}</h2>
                                    </Link>
                                    <span className="text-xl font-bold text-brand-midnight">${product.price.toFixed(2)}</span>
                                </div>

                                <p className="text-brand-midnight/60 text-sm mb-6 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {product.features.map(feature => (
                                        <span key={feature} className="bg-brand-offwhite text-brand-midnight text-xs font-medium px-2.5 py-1 rounded border border-brand-midnight/10">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex flex-col gap-3">
                                    <button
                                        onClick={() => addToCart(product, 1)}
                                        className="w-full bg-brand-midnight text-brand-white py-3.5 rounded-xl font-bold hover:bg-brand-amber transition-colors shadow-md flex items-center justify-center gap-2 group-hover:bg-brand-pollen group-hover:text-brand-midnight"
                                    >
                                        Add to Cart
                                    </button>
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="w-full text-center py-3.5 rounded-xl font-medium text-brand-midnight hover:bg-brand-midnight/5 transition-colors flex items-center justify-center gap-2 border border-transparent hover:border-brand-midnight/10"
                                    >
                                        <Info className="w-4 h-4" /> View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="container mx-auto px-4 md:px-8 mt-32 max-w-4xl text-center">
                <div className="bg-brand-pollen/20 rounded-3xl p-12 md:p-16 border border-brand-pollen/30">
                    <h3 className="text-3xl font-serif text-brand-midnight mb-4">Not sure which to choose?</h3>
                    <p className="text-brand-midnight/70 mb-8 max-w-2xl mx-auto">
                        Our Raw Wildflower Honey is the perfect starting point—versatile, naturally sweet, and an everyday staple. Still have questions?
                    </p>
                    <Link href="/contact" className="inline-flex py-3 px-8 bg-brand-white text-brand-midnight font-bold rounded-full shadow-sm hover:shadow-md transition-shadow">
                        Get in touch
                    </Link>
                </div>
            </section>
        </div>
    );
}

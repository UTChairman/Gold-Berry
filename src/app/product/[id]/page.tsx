"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/data";
import { useCart } from "@/components/cart-provider";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Minus, Plus, Shield, Package, Leaf } from "lucide-react";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const product = getProduct(id);
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        notFound();
    }

    const handleAdd = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="bg-brand-offwhite min-h-screen py-10 md:py-20">
            <div className="container mx-auto px-4 md:px-8">

                {/* Back Link */}
                <Link href="/shop" className="inline-flex items-center gap-2 text-brand-midnight/60 hover:text-brand-amber font-medium transition-colors mb-8 md:mb-12">
                    <ArrowLeft className="w-5 h-5" /> Back to Shop
                </Link>

                {/* Product Layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl bg-white group">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute top-6 left-6 bg-brand-midnight text-brand-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                                {product.weight}
                            </div>
                        </div>

                        {/* Value Props under image */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm text-center">
                                <Shield className="w-6 h-6 text-brand-amber mb-2" />
                                <span className="text-xs font-semibold text-brand-midnight">100% Pure</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm text-center">
                                <Leaf className="w-6 h-6 text-brand-meadow mb-2" />
                                <span className="text-xs font-semibold text-brand-midnight">Raw Form</span>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm text-center">
                                <Package className="w-6 h-6 text-brand-pollen mb-2 text-[#C09B18]" />
                                <span className="text-xs font-semibold text-brand-midnight">Ethical</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-1/2 flex flex-col justify-center"
                    >
                        <span className="inline-block px-3 py-1 bg-brand-amber/10 text-brand-amber rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-4">
                            Premium Honey
                        </span>

                        <h1 className="text-4xl md:text-5xl font-serif text-brand-midnight mb-4">
                            {product.name}
                        </h1>

                        <h2 className="text-3xl font-bold text-brand-midnight mb-8">
                            ${product.price.toFixed(2)}
                        </h2>

                        <div className="space-y-6 text-brand-midnight/70 mb-10 text-lg leading-relaxed">
                            <p>{product.description}</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-midnight/5 mb-10">
                            <h3 className="text-lg font-serif text-brand-midnight font-bold mb-4">Key Benefits</h3>
                            <ul className="space-y-3">
                                {product.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-midnight/80">
                                        <div className="bg-brand-pollen/30 p-1 rounded-full flex-shrink-0">
                                            <Check className="w-4 h-4 text-brand-amber" />
                                        </div>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex items-center justify-between border-2 border-brand-midnight/10 rounded-full bg-white h-14 px-6 w-full sm:w-40">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-brand-midnight/50 hover:text-brand-midnight transition-colors"
                                >
                                    <Minus className="w-5 h-5" />
                                </button>
                                <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-brand-midnight/50 hover:text-brand-midnight transition-colors"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>

                            <button
                                onClick={handleAdd}
                                className="w-full h-14 bg-brand-midnight hover:bg-brand-amber text-brand-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-brand-midnight/10 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                            >
                                Add {quantity} to Cart — ${(product.price * quantity).toFixed(2)}
                            </button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}

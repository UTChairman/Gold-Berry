"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from "lucide-react";

export default function Cart() {
    const { items, updateQuantity, removeFromCart, cartTotal, itemCount } = useCart();

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
                <div className="bg-brand-pollen/10 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-brand-amber" />
                </div>
                <h1 className="text-3xl font-serif text-brand-midnight mb-4">Your cart is empty</h1>
                <p className="text-brand-midnight/60 mb-8 max-w-sm text-center">
                    Looks like you haven't added any of our golden sweetness to your cart yet.
                </p>
                <Link
                    href="/shop"
                    className="bg-brand-midnight text-brand-white px-8 py-4 rounded-full font-bold hover:translate-y-[-2px] hover:shadow-lg transition-all"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-8 py-16 min-h-[75vh]">
            <h1 className="text-4xl font-serif text-brand-midnight mb-10 flex items-center gap-4">
                Your Cart <span className="text-sm bg-brand-midnight text-white px-3 py-1 rounded-full">{itemCount} items</span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Cart Items */}
                <div className="lg:w-2/3 flex flex-col gap-6">
                    {items.map((item) => (
                        <div key={item.product.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-brand-midnight/5">
                            <Link href={`/product/${item.product.id}`} className="relative w-32 h-32 flex-shrink-0 bg-brand-offwhite rounded-2xl overflow-hidden group">
                                <Image
                                    src={item.product.imageUrl}
                                    alt={item.product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform"
                                />
                            </Link>

                            <div className="flex-grow flex flex-col sm:flex-row justify-between w-full h-full py-2">
                                <div className="flex flex-col justify-between mb-4 sm:mb-0">
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-brand-midnight mb-1">{item.product.name}</h3>
                                        <p className="text-brand-midnight/50 text-sm mb-4">{item.product.weight}</p>
                                    </div>
                                    <span className="font-bold text-lg text-brand-midnight">${item.product.price.toFixed(2)}</span>
                                </div>

                                <div className="flex items-center gap-6 self-start sm:self-center">
                                    <div className="flex items-center border border-brand-midnight/20 rounded-full bg-brand-offwhite px-4 py-2 h-12 w-32 justify-between">
                                        <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                            className="text-brand-midnight/50 hover:text-brand-midnight transition-colors"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="font-bold w-6 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                            className="text-brand-midnight/50 hover:text-brand-midnight transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.product.id)}
                                        className="p-3 text-red-500/70 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-brand-midnight text-brand-white p-8 rounded-3xl sticky top-32 shadow-2xl">
                        <h2 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4 text-brand-pollen">Order Summary</h2>

                        <div className="flex justify-between mb-4 text-white/80">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-4 text-white/80">
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>

                        <div className="border-t border-white/20 mt-6 pt-6 mb-8 flex justify-between items-center">
                            <span className="text-xl font-medium">Total</span>
                            <span className="text-3xl font-bold text-brand-pollen">${cartTotal.toFixed(2)}</span>
                        </div>

                        <Link
                            href="/checkout"
                            className="w-full bg-brand-pollen hover:bg-brand-amber text-brand-midnight font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors group"
                        >
                            Proceed to Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="mt-6 flex items-center justify-center gap-2 text-white/50 text-sm">
                            <span>Secure, encrypted checkout.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

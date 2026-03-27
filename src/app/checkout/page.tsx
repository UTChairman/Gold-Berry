"use client";

import { useCart } from "@/components/cart-provider";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Lock, Package, ArrowLeft } from "lucide-react";

export default function Checkout() {
    const { cartTotal, items, clearCart } = useCart();
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
    });
    const [errors, setErrors] = useState<Partial<typeof formData>>({});

    const validate = () => {
        const newErrors: Partial<typeof formData> = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSuccess(true);
            clearCart();
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 bg-brand-offwhite">
                <div className="bg-white p-12 rounded-[2rem] shadow-2xl max-w-lg text-center border-t-8 border-brand-meadow">
                    <div className="w-24 h-24 bg-brand-meadow/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <CheckCircle className="w-12 h-12 text-brand-meadow" />
                    </div>
                    <h1 className="text-4xl font-serif text-brand-midnight mb-4">Order Confirmed!</h1>
                    <p className="text-brand-midnight/70 mb-8 text-lg">
                        Thank you for choosing Gold Berry. Your order for 100% pure, raw honey is being processed.
                        We've sent a confirmation email to <strong>{formData.email}</strong>.
                    </p>
                    <div className="bg-brand-offwhite p-6 rounded-2xl mb-8 flex justify-between items-center">
                        <span className="font-bold text-brand-midnight">Order Number:</span>
                        <span className="font-mono text-brand-amber font-bold">#GB-{Math.floor(Math.random() * 100000)}</span>
                    </div>
                    <Link href="/" className="inline-flex py-4 px-10 bg-brand-midnight text-brand-white rounded-full font-bold hover:bg-brand-amber transition-all shadow-md">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-8 py-16 min-h-screen">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Checkout Form */}
                <div className="lg:w-3/5">
                    <Link href="/cart" className="inline-flex items-center gap-2 text-brand-midnight/60 hover:text-brand-amber font-medium transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5" /> Back to Cart
                    </Link>

                    <h1 className="text-4xl font-serif text-brand-midnight mb-8">Checkout</h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-midnight/5">
                            <h2 className="text-xl font-bold font-serif mb-6 text-brand-midnight">Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-brand-midnight/70 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className={`w-full px-4 py-3 bg-brand-offwhite rounded-xl border ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-transparent'} focus:border-brand-pollen outline-none transition-colors`}
                                    />
                                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-midnight/70 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        className={`w-full px-4 py-3 bg-brand-offwhite rounded-xl border ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-transparent'} focus:border-brand-pollen outline-none transition-colors`}
                                    />
                                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-brand-midnight/70 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={`w-full px-4 py-3 bg-brand-offwhite rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-transparent'} focus:border-brand-pollen outline-none transition-colors`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-brand-midnight/70 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className={`w-full px-4 py-3 bg-brand-offwhite rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-transparent'} focus:border-brand-pollen outline-none transition-colors`}
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-midnight/5">
                            <h2 className="text-xl font-bold font-serif mb-6 text-brand-midnight">Shipping Address</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-brand-midnight/70 mb-2">Street Address</label>
                                    <input
                                        type="text"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className={`w-full px-4 py-3 bg-brand-offwhite rounded-xl border ${errors.address ? 'border-red-500 bg-red-50' : 'border-transparent'} focus:border-brand-pollen outline-none transition-colors`}
                                    />
                                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-brand-midnight/70 mb-2">City</label>
                                        <input
                                            type="text"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            className={`w-full px-4 py-3 bg-brand-offwhite rounded-xl border ${errors.city ? 'border-red-500 bg-red-50' : 'border-transparent'} focus:border-brand-pollen outline-none transition-colors`}
                                        />
                                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-midnight/70 mb-2">Zip Code</label>
                                        <input
                                            type="text"
                                            value={formData.zipCode}
                                            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                                            className={`w-full px-4 py-3 bg-brand-offwhite rounded-xl border ${errors.zipCode ? 'border-red-500 bg-red-50' : 'border-transparent'} focus:border-brand-pollen outline-none transition-colors`}
                                        />
                                        {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-brand-midnight hover:bg-brand-amber text-brand-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 text-lg transform hover:-translate-y-1">
                            <Lock className="w-5 h-5" /> Place Order
                        </button>
                    </form>
                </div>

                {/* Order Details */}
                <div className="lg:w-2/5">
                    <div className="bg-brand-midnight text-brand-white p-8 md:p-10 rounded-[2.5rem] sticky top-32 shadow-2xl">
                        <h2 className="text-3xl font-serif mb-8 border-b border-brand-white/10 pb-6 flex items-center justify-between text-brand-pollen">
                            Order Summary <Package className="w-8 h-8 text-brand-pollen" />
                        </h2>

                        <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                            {items.map((item) => (
                                <div key={item.product.id} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-brand-white rounded-lg flex items-center justify-center text-brand-midnight font-bold">
                                            {item.quantity}x
                                        </div>
                                        <div>
                                            <p className="font-bold text-brand-pollen">{item.product.name}</p>
                                            <p className="text-sm text-white/50">{item.product.weight}</p>
                                        </div>
                                    </div>
                                    <span className="font-bold">${(item.quantity * item.product.price).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-6 text-white/80 border-t border-brand-white/10">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="text-brand-meadow font-semibold">Free</span>
                            </div>
                        </div>

                        <div className="border-t border-brand-white/20 mt-6 pt-6 flex justify-between items-center text-2xl font-bold">
                            <span>Total</span>
                            <span className="text-brand-pollen">${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

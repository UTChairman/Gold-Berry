"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "./cart-provider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { itemCount } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-offwhite/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/goldberry logo.png"
                        alt="Gold Berry Logo"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                    />
                    <span className="font-serif text-2xl font-bold text-brand-midnight">Gold Berry</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm tracking-wide transition-colors ${pathname === link.href ? "text-brand-amber font-semibold" : "text-brand-midnight hover:text-brand-amber"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link href="/cart" className="relative group p-2">
                        <ShoppingCart className="w-6 h-6 text-brand-midnight group-hover:text-brand-amber transition-colors" />
                        {mounted && itemCount > 0 && (
                            <span className="absolute top-0 right-0 bg-brand-amber text-brand-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in shadow-sm">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <Link href="/cart" className="relative group p-2">
                        <ShoppingCart className="w-6 h-6 text-brand-midnight" />
                        {mounted && itemCount > 0 && (
                            <span className="absolute top-0 right-0 bg-brand-amber text-brand-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-sm">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-brand-midnight">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-offwhite border-b border-brand-midnight/10 overflow-hidden"
                    >
                        <div className="flex flex-col px-4 py-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium ${pathname === link.href ? "text-brand-amber" : "text-brand-midnight"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

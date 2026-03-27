import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-midnight text-brand-white pt-16 pb-8 border-t border-brand-midnight/10 mt-auto">
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-6 group">
                        <Image
                            src="/goldberry logo.png"
                            alt="Gold Berry Logo"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                        />
                        <span className="font-serif text-2xl font-bold text-white tracking-wide">Gold Berry</span>
                    </Link>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                        Nature's ultimate gift. Pure, raw, cold-pressed honey bridging the gap between luxury quality and everyday affordability.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-amber hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-amber hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-amber hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-serif text-lg text-white mb-6">Explore</h4>
                    <ul className="space-y-3">
                        <li><Link href="/shop" className="text-white/80 hover:text-brand-pollen transition-colors text-sm">Shop All Honey</Link></li>
                        <li><Link href="/about" className="text-white/80 hover:text-brand-pollen transition-colors text-sm">Our Story</Link></li>
                        <li><Link href="/contact" className="text-white/80 hover:text-brand-pollen transition-colors text-sm">Contact Us</Link></li>
                        <li><Link href="/faq" className="text-white/80 hover:text-brand-pollen transition-colors text-sm">FAQs</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg text-white mb-6">Policies</h4>
                    <ul className="space-y-3">
                        <li><Link href="#" className="text-white/80 hover:text-brand-pollen transition-colors text-sm">Shipping Policy</Link></li>
                        <li><Link href="#" className="text-white/80 hover:text-brand-pollen transition-colors text-sm">Refund Policy</Link></li>
                        <li><Link href="#" className="text-white/80 hover:text-brand-pollen transition-colors text-sm">Privacy Policy</Link></li>
                        <li><Link href="#" className="text-white/80 hover:text-brand-pollen transition-colors text-sm">Terms of Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg text-white mb-6">Newsletter</h4>
                    <p className="text-white/80 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-brand-pollen text-white placeholder-white/50 text-sm"
                        />
                        <button className="bg-brand-pollen hover:bg-brand-amber text-brand-midnight text-sm font-semibold py-3 px-4 rounded-md transition-colors shadow-sm">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between text-white/50 text-xs">
                <p>© {new Date().getFullYear()} Gold Berry. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Designed according to Gold Berry Identity 2026</p>
            </div>
        </footer>
    );
}

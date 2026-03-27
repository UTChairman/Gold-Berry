"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Sun, Star } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/components/cart-provider";
import { motion } from "framer-motion";

export default function Home() {
  const { addToCart } = useCart();

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center pt-10">
        <div className="absolute inset-0 z-0 bg-brand-midnight">
          <Image
            src="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&q=80&w=2000"
            alt="Golden Honey Dripping"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-pollen/20 text-brand-pollen text-sm font-semibold tracking-wider mb-6 border border-brand-pollen/30">
              100% PURE RAW HONEY
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-white mb-6 leading-tight">
              Nature's Ultimate <br className="hidden md:block" /> <span className="text-brand-pollen italic">Sweetness</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-offwhite/90 mb-10 font-sans max-w-2xl mx-auto leading-relaxed">
              Bridging the gap between luxury quality and everyday affordability.
              Elevate your daily rituals with pure, cold-pressed honey straight from the hive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="bg-brand-pollen hover:bg-brand-amber text-brand-midnight font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(253,204,32,0.3)] flex items-center justify-center gap-2"
              >
                Shop The Harvest <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="bg-brand-white/10 hover:bg-brand-white/20 text-brand-white border border-brand-white/30 font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-brand-offwhite relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pollen rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/beekeeper-image.jpeg"
                alt="Beekeeper holding honeycomb"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-amber/10 mix-blend-multiply"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-amber uppercase mb-3">The Bee's Signature</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-midnight mb-6 leading-tight">Patient Gift from the Hive</h3>
              <div className="space-y-6 text-brand-midnight/70 text-lg leading-relaxed">
                <p>
                  Our journey begins where the wildflowers bloom, far from the reach of the city's hum. At Gold Berry, we believe that the finest sweetness is never forced—it is a patient gift from the hive.
                </p>
                <p>
                  Each jar is a seasonal capsule of a specific terrain, preserving the unique floral profile, enzymes, and antioxidants that only raw, cold-pressed honey can provide.
                </p>
                <p className="font-semibold text-brand-midnight border-l-4 border-brand-pollen pl-4 italic">
                  Experience a purity that redefines the nectar of the gods.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-brand-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-amber uppercase mb-3">Core Values</h2>
            <h3 className="text-4xl font-serif text-brand-midnight mb-4">Nature's Gold, Accessible to All</h3>
            <p className="text-brand-midnight/70 text-lg">We bridge the gap between unattainable luxury and mass-market syrups, delivering the pure vitality you deserve.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: ShieldCheck, title: "Pure Quality", desc: "100% unadulterated, cold-pressed honey retaining all natural enzymes and antioxidants." },
              { icon: Leaf, title: "Ethically Sourced", desc: "Partnering exclusively with apical that prioritize bee health over mass production." },
              { icon: Sun, title: "Daily Vitality", desc: "A smart, accessible swap for refined sugar, empowering your holistic health journey." }
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-brand-offwhite p-10 rounded-3xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 border border-transparent hover:border-brand-pollen/20 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-pollen/20 text-brand-amber flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-serif text-brand-midnight mb-3 font-semibold">{benefit.title}</h4>
                <p className="text-brand-midnight/70 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-amber uppercase mb-3">Our Harvest</h2>
              <h3 className="text-4xl font-serif text-brand-midnight">Featured Sweetness</h3>
            </div>
            <Link href="/shop" className="text-brand-amber font-semibold hover:text-brand-midnight flex items-center gap-2 mt-4 md:mt-0 transition-colors">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeInUp} className="bg-brand-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
                <Link href={`/product/${product.id}`} className="relative h-72 w-full block overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-midnight text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {product.weight}
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Link href={`/product/${product.id}`}>
                      <h4 className="text-2xl font-serif text-brand-midnight font-medium group-hover:text-brand-amber transition-colors">{product.name}</h4>
                    </Link>
                    <span className="text-xl font-bold text-brand-midnight">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-brand-midnight/60 text-sm mb-6 line-clamp-2">{product.description}</p>

                  <div className="mt-auto pt-4 border-t border-brand-midnight/5 flex gap-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product, 1);
                      }}
                      className="flex-1 bg-brand-midnight text-brand-white py-3 rounded-xl font-semibold hover:bg-brand-amber transition-colors shadow-md"
                    >
                      Add to Cart
                    </button>
                    <Link href={`/product/${product.id}`} className="px-4 py-3 bg-brand-offwhite text-brand-midnight rounded-xl font-medium hover:bg-brand-pollen/30 transition-colors border border-brand-midnight/10 flex items-center justify-center">
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-midnight text-brand-white relative overflow-hidden">
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-brand-pollen/20 rounded-full blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-amber/20 rounded-full blur-[80px]"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-pollen">What Our Community Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Wellness Enthusiast", text: "Gold Berry is the smart swap I've been looking for. The Raw Wildflower has completely replaced sugar in my morning routine without breaking my budget." },
              { name: "Michael T.", role: "Home Baker", text: "The Dark Forest honey adds such a profound depth to my baking. It's rare to find this quality at such an accessible price point." },
              { name: "Elena R.", role: "Mother of two", text: "My kids absolutely love the Pure Clover honey over their fruit and yogurt. Knowing it's 100% pure gives me so much peace of mind." }
            ].map((review, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex gap-1 mb-6 text-brand-pollen">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-white/90 text-lg mb-8 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-amber/20 rounded-full flex items-center justify-center text-brand-pollen font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-white">{review.name}</h5>
                    <p className="text-white/60 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-24 bg-brand-pollen relative">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-midnight mb-6">Ready for your ultimate drizzle?</h2>
            <p className="text-xl text-brand-midnight/80 mb-10 font-medium">
              Join thousands who have made the switch to Gold Berry.
              Pure vitality, direct from the hive to your kitchen table.
            </p>
            <Link
              href="/shop"
              className="inline-flex py-4 px-10 bg-brand-midnight text-brand-white rounded-full font-bold text-lg hover:bg-brand-white hover:text-brand-midnight hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Shop The Selection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

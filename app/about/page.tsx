"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import EnhancedNavbar from "@/components/EnhancedNavbar";
import NavbarSpacer from "@/components/NavbarSpacer";
import EnhancedFooter from "@/components/EnhancedFooter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navigation */}
      <EnhancedNavbar />
      <NavbarSpacer />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#022f1c] to-[#011f18]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Mission at <span className="text-[#a3ff00]">Herbal Aura</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Rooted in Nature. Backed by Wellness.
            </p>
            
            <motion.div
              className="relative h-[2px] w-48 mx-auto mt-4 mb-8 overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2a7d3f] to-transparent" />
              <motion.div
                className="absolute inset-0 -top-1 h-[4px] bg-gradient-to-r from-transparent via-[#a3ff00] to-transparent"
                animate={{
                  x: ["0%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icononly_transparent_nobuffer-tcycHkH0lmegLHp79WMmhqvOXwUxga.png"
                alt="Herbal Aura Logo"
                width={500}
                height={500}
                className="w-full max-w-lg opacity-20"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Who We Are Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 inline-block relative">
              Who We <span className="text-[#a3ff00]">Are</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#a3ff00]/80 to-transparent"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-white/90 text-lg mb-6">
                  At Herbal Aura, we're a modern wellness brand dedicated to crafting premium organic, vegan supplements that enhance your daily wellness routine.
                </p>
                <p className="text-white/80 text-lg mb-6">
                  Founded on the principle that nature provides everything we need for optimal health, we carefully source the highest quality herbs and botanical ingredients from sustainable farms worldwide.
                </p>
                <p className="text-white/80 text-lg mb-6">
                  Our team of herbalists, nutritionists, and wellness experts work together to create formulations that honor traditional herbal wisdom while being backed by modern scientific research.
                </p>
                <p className="text-white/90 text-lg">
                  Every product in our collection is crafted with intention, transparency, and a deep respect for the planet.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#a3ff00]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2a7d3f]/10 rounded-full blur-3xl"></div>
                
                <div className="relative border-2 border-[#a3ff00]/30 rounded-lg p-2 bg-black/30 backdrop-blur-sm transform rotate-3">
                  <div className="border-2 border-white/10 rounded-lg overflow-hidden transform -rotate-6">
                    <Image
                      src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="Organic herbs and plants"
                      width={600}
                      height={400}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Our Commitment Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#011f18] to-black"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Commitment to <span className="text-[#a3ff00]">Purity</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "100% Organic Ingredients", description: "We source only the purest organic herbs, free from pesticides and harmful chemicals." },
                { title: "Vegan & Cruelty-Free", description: "All our products are plant-based and never tested on animals." },
                { title: "No Fillers or Preservatives", description: "We never use artificial fillers, preservatives, or unnecessary additives." },
                { title: "Eco-Friendly Packaging", description: "Our packaging is sustainable, recyclable, and minimizes environmental impact." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-sm border border-[#a3ff00]/20 rounded-lg p-6 hover:border-[#a3ff00]/50 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="rounded-full bg-[#2a7d3f]/20 p-1">
                        <Check className="h-5 w-5 text-[#a3ff00]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why We Started Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 inline-block relative">
              Why We Started <span className="text-[#a3ff00]">Herbal Aura</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#a3ff00]/80 to-transparent"></div>
            </h2>
            
            <p className="text-white/90 text-lg mb-8">
              Herbal Aura was born from a passion for plant medicine and a frustration with the supplement industry's lack of transparency. Our founder, after struggling to find clean, potent herbal supplements without unnecessary additives, decided to create a company that prioritized purity, potency, and the planet.
            </p>
            
            <p className="text-white/80 text-lg mb-12">
              We believe that nature provides the most powerful tools for wellness, and our mission is to harness these botanical treasures in their most effective forms. Every formula is crafted with intention, extensively researched, and tested for purity and potency.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#022f1c]/70 p-8 rounded-lg border border-[#a3ff00]/30 shadow-[0_0_20px_rgba(163,255,0,0.1)] backdrop-blur-sm relative overflow-hidden mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <p className="italic text-xl text-white/90 relative z-10 text-center">
                "Herbal Aura was born from a belief that wellness should be clean, transparent, and accessible."
              </p>
              <div className="w-12 h-1 bg-[#a3ff00]/50 mx-auto my-6"></div>
              <p className="text-center font-medium text-[#a3ff00] relative z-10">— Founder, Herbal Aura</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/90"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center py-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join us on the path to better health.
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Experience the difference of premium, plant-based supplements crafted with intention and integrity.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/products"
                className="inline-block bg-[#2a7d3f] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:bg-[#3a8d4f] hover:shadow-[0_0_15px_rgba(163,255,0,0.5)] hover:text-[#a3ff00] hover:scale-105"
              >
                Explore Our Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <EnhancedFooter />
    </div>
  );
} 
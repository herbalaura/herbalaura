"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import EnhancedNavbar from "@/components/EnhancedNavbar"
import NavbarSpacer from "@/components/NavbarSpacer"
import EnhancedFooter from "@/components/EnhancedFooter"

export default function ProductNotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#222_0%,_#111_50%,_#000_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/90"></div>
        </div>
      </div>

      {/* Navigation */}
      <EnhancedNavbar />
      <NavbarSpacer />

      {/* Main Content */}
      <main className="relative container mx-auto px-6 py-20 flex-grow flex items-center justify-center">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Product Not Found</h1>
            <p className="text-xl text-white/70 mb-10">
              We couldn't find the product you're looking for. It may have been moved or doesn't exist.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center gap-2 bg-[#2a7d3f] hover:bg-[#a3ff00] text-white hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Browse All Products
              </Link>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center gap-2 bg-black/30 border border-white/20 hover:bg-black/50 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Return Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <EnhancedFooter />
    </div>
  )
} 
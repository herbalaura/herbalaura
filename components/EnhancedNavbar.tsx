"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, User, HelpCircle } from "lucide-react"

export default function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2a7d3f] to-[#a3ff00] z-[1001]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled ? "bg-black py-3 shadow-lg backdrop-blur-md" : "bg-black py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icononly_transparent_nobuffer-tcycHkH0lmegLHp79WMmhqvOXwUxga.png"
              alt="Herbal Aura Logo"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
            <span className="text-2xl font-extralight tracking-[0.2em]">Herbal Aura</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-white/80 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/subscription" className="text-white/80 hover:text-white transition-colors">
              Subscribe
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              animate={
                isScrolled
                  ? { scale: 1.05, boxShadow: "0 0 15px rgba(163, 255, 0, 0.5)" }
                  : { scale: 1, boxShadow: "none" }
              }
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/products"
                className={`hidden md:block bg-[#2a7d3f] hover:bg-[#3a8d4f] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ${
                  isScrolled ? "border border-[#a3ff00]/50" : ""
                }`}
              >
                Shop Now
              </Link>
            </motion.div>

            <button className="text-white/80 hover:text-white transition-colors">
              <HelpCircle className="w-6 h-6" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`h-[${isScrolled ? "72px" : "96px"}]`}></div>
    </>
  )
}


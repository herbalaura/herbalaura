"use client"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Youtube, ArrowRight, Leaf, Mail, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
  }

  const quickLinks = [
    { name: "Products", href: "/products" },
    { name: "Subscribe", href: "/subscribe" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
  ]

  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="relative mt-auto">
      {/* Separator line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#a3ff00]/30 to-transparent"></div>

      {/* Main footer content */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#011f18] to-[#000]">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle glow spots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background:
                  i % 2 === 0
                    ? "radial-gradient(circle, rgba(163, 255, 0, 0.15), transparent 70%)"
                    : "radial-gradient(circle, rgba(42, 125, 63, 0.15), transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8 + i * 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Brand section */}
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icononly_transparent_nobuffer-tcycHkH0lmegLHp79WMmhqvOXwUxga.png"
                alt="Herbal Aura Logo"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-extralight tracking-[0.2em] text-white mb-2"
            >
              Herbal Aura
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 text-center max-w-md"
            >
              Premium organic supplements crafted for a healthier you.
            </motion.p>
          </div>

          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-[#a3ff00] font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#a3ff00] transition-colors duration-300 flex items-center group"
                    >
                      <Leaf className="w-4 h-4 mr-2 text-[#a3ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-[#a3ff00] font-semibold text-lg mb-4">Join Our Wellness Community</h3>
              <p className="text-white/70 mb-4 text-center md:text-left">
                Join our wellness community & get exclusive offers!
              </p>
              <form onSubmit={handleSubmit} className="w-full max-w-xs">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border-white/10 pl-10 text-white placeholder:text-white/40 focus:border-[#a3ff00]/50 focus:ring-[#a3ff00]/20 w-full"
                  />
                </div>
                {error && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {error}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="mt-3 w-full bg-[#2a7d3f] hover:bg-[#3a8d4f] text-white transition-all duration-300"
                >
                  {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-[#a3ff00] font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-[#a3ff00]/20 border border-white/10 hover:border-[#a3ff00]/30 rounded-full w-10 h-10 flex items-center justify-center text-white/70 hover:text-[#a3ff00] transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        textShadow: "0 0 8px rgb(163, 255, 0)",
                      }}
                    >
                      {social.icon}
                    </motion.div>
                  </Link>
                ))}
              </div>
              <p className="text-white/50 text-sm mt-6 text-center md:text-left">
                Follow us for wellness tips, product updates, and special offers.
              </p>
            </motion.div>
          </div>

          {/* Bottom section with legal links and copyright */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <p className="text-white/50 text-sm">© {new Date().getFullYear()} Herbal Aura. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


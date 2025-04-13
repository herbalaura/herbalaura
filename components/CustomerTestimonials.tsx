"use client"

import { motion } from "framer-motion"
import OrbitingCarousel from "./OrbitingCarousel"
import { Button } from "@/components/ui/button"

const customerImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/It%20Starts%282%29.PNG-TeaJ93OlU08VSH58LFilGxzyC2wByj.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-s9GD10kp55hIJnx6ZPgbrB0qFVNyNb.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/It%20Starts%281%29.png-k2XptBBd2ZjigIEbonuWcN84OvHssz.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/It%20Starts.png-iMS8sRxSblPImpwMPih1hqq1Es1eIO.jpeg",
]

export default function CustomerTestimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#022f1c] to-[#011f18]"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-white hero-text-3d"
          data-text="Real Customer Experiences"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Real Customer Experiences
        </motion.h2>

        <OrbitingCarousel images={customerImages} />

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="secondary"
            size="lg"
            className="bg-[#2a7d3f] hover:bg-[#1f5c2e] text-white font-bold transition-all duration-300 shadow-lg hover:shadow-[#2a7d3f]/50"
          >
            Read More Reviews
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


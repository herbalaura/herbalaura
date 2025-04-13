"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { Leaf, Shield, Heart, Award } from "lucide-react"

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  const coreValues = [
    {
      icon: <Leaf className="h-8 w-8 text-[#a3ff00]" />,
      title: "100% Organic",
      description: "We source only the purest organic herbs, free from pesticides and harmful chemicals.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#a3ff00]" />,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing to ensure potency, purity, and effectiveness.",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#a3ff00]" />,
      title: "Customer First",
      description: "Your wellness journey is our priority. We're here to support you every step of the way.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#a3ff00]" />,
      title: "Sustainability",
      description: "Eco-friendly practices from sourcing to packaging, minimizing our environmental footprint.",
    },
  ]

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#022f1c] to-[#011f18]"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>

      {/* Decorative image frame */}
      <div className="absolute top-32 right-8 w-64 h-80 z-10 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-[#a3ff00]/30 rounded-lg transform rotate-3"></div>
          <div className="absolute inset-0 border-2 border-white/10 rounded-lg transform -rotate-2"></div>
          <div className="absolute inset-2 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-xRF0gvduMMwuzsCn5uMPQ6xnKY62DN.png"
              alt="Decorative frame"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#a3ff00]/20 blur-xl"></div>
        </div>
      </div>

      {/* Decorative image frame - moved to left side */}
      <div className="absolute top-32 left-48 w-56 h-72 z-10 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-[#a3ff00]/20 rounded-lg transform -rotate-3"></div>
          <div className="absolute inset-0 border-2 border-white/10 rounded-lg transform rotate-1"></div>
          <div className="absolute inset-2 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px]"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-LMXR33afKuB3gM9iadCjv5pNFDYsBS.jpeg"
              alt="Organic Mullein Leaf Vegan Capsules"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-[#a3ff00]/15 blur-xl"></div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-[#a3ff00]/5 blur-3xl"
        style={{ y, opacity }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-20 bottom-40 w-60 h-60 rounded-full bg-[#a3ff00]/5 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex justify-center mb-6"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-WYDgZMDO7w2E6EN2wYmgbgvwdhJM9i.png"
              alt="Our Story"
              width={600}
              height={600}
              className="w-auto h-auto max-w-[400px] brightness-90 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] relative z-10 -mt-16 ml-10"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center -mt-24">
          {/* Right Column - Text (moved up) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins leading-relaxed -mt-16"
          >
            <h3 className="text-3xl font-bold mb-6 text-white font-bebas-neue tracking-wider">
              It All Started With <span className="text-[#FFD700]">A Vision</span>
            </h3>
            <div className="space-y-4 text-white/90">
              <p className="text-base">
                Founded in 2024, Herbal Aura began with a simple yet powerful vision: to harness nature's healing
                potential through premium organic herbs that enhance everyday wellness.
              </p>
              <p className="text-base">
                Our founder, after experiencing the transformative benefits of herbal remedies firsthand, set out to
                create a brand that would make these natural solutions accessible to all, without compromising on
                quality or purity.
              </p>
              <p className="text-base">
                What started as a small operation has blossomed into a trusted name in organic wellness, guided by our
                unwavering commitment to quality, sustainability, and customer well-being.
              </p>
              <p className="font-medium text-[#FFD700] text-base">
                Today, we continue to handcraft each product with the same care and attention to detail as we did on day
                one, because we believe that true wellness starts from within.
              </p>
            </div>
          </motion.div>

          {/* Left Column - Image (moved down) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="flex justify-center items-center overflow-hidden bg-black/5 p-4 rounded-lg relative">
              {/* Shimmer and light rays effect */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Soft light rays */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`ray-${i}`}
                      className="absolute origin-bottom-right"
                      style={{
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        background: `linear-gradient(${45 * i}deg, rgba(163, 255, 0, 0.03) 0%, transparent 50%)`,
                        transform: `rotate(${i * 45}deg)`,
                        animation: `ray-pulse 8s ease-in-out infinite ${i * 0.5}s`,
                        opacity: 0.4,
                      }}
                    />
                  ))}
                </div>

                {/* Subtle shimmer particles */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={`shimmer-${i}`}
                    className="absolute rounded-full bg-white/30"
                    style={{
                      width: `${2 + Math.random() * 4}px`,
                      height: `${2 + Math.random() * 4}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `shimmer ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 5}s`,
                      opacity: 0.2,
                    }}
                  />
                ))}

                {/* Gentle glow spots */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`glow-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: `${30 + Math.random() * 50}px`,
                      height: `${30 + Math.random() * 50}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background:
                        i % 2 === 0
                          ? "radial-gradient(circle, rgba(163, 255, 0, 0.1) 0%, transparent 70%)"
                          : "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                      animation: `glow-pulse ${5 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>

              {/* Keep the existing Image component */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-bdyMh2K2fm5mVd2XITqDdhQkdDsMmm.jpeg"
                alt="Herbal Aura Product Collection and Packaging"
                width={350}
                height={350}
                className="rounded-lg mx-auto object-cover relative z-10 mt-32"
              />

              <style jsx>{`
                @keyframes ray-pulse {
                  0%, 100% { opacity: 0.2; }
                  50% { opacity: 0.5; }
                }
                
                @keyframes shimmer {
                  0%, 100% { 
                    transform: translate(0, 0) scale(1);
                    opacity: 0.1;
                  }
                  50% { 
                    transform: translate(${Math.random() > 0.5 ? "+" : "-"}${5 + Math.random() * 10}px, ${Math.random() > 0.5 ? "+" : "-"}${5 + Math.random() * 10}px) scale(1.5);
                    opacity: 0.6;
                  }
                }
                
                @keyframes glow-pulse {
                  0%, 100% { 
                    transform: scale(1);
                    opacity: 0.1;
                  }
                  50% { 
                    transform: scale(1.2);
                    opacity: 0.3;
                  }
                }
              `}</style>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-36 relative"
        >
          <h3 className="text-3xl font-bold text-center mb-12 mt-8 text-white font-poppins tracking-wide uppercase">
            Our <span className="text-[#a3ff00]">Core Values</span>
          </h3>

          <motion.div
            className="absolute -top-80 right-1/5 w-1/4 z-10"
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="bg-[#022f1c]/70 p-6 rounded-lg border border-[#a3ff00]/30 shadow-[0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
              <p className="italic text-white/90 relative z-10">
                "Our mission isn't only to educate but to provide 100% organic products that will enhance your daily
                routine!"
              </p>
              <p className="mt-4 font-medium text-[#a3ff00] relative z-10">— Founder, Herbal Aura</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm border border-[#a3ff00]/20 rounded-lg p-6 hover:border-[#a3ff00]/50 transition-all duration-300 group"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-[#a3ff00] transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div></div>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useZoomAnimation } from "@/hooks/useZoomAnimation"
import AboutUs from "@/components/AboutUs"
import SubscriptionPlans from "@/components/SubscriptionPlans"
import EnhancedNavbar from "@/components/EnhancedNavbar"
import NavbarSpacer from "@/components/NavbarSpacer"
import EnhancedFooter from "@/components/EnhancedFooter"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const imageUrls = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-ohIf3Zcrs9jBidoGIWKXLTlZvbwi8d.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/It%20Starts%282%29.PNG-qtXol0PX6RA3qTLQufHWP9UOcnuGhX.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1kmj7iD9EkDsIgOJnRJRckMYFI6u0x.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-imSxMHCLZL4NJ1u2h1TQKgXKQjz2hs.png",
  ]

  const { scope } = useZoomAnimation(imageUrls.length)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitted email:", email)
    setEmail("")
  }

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex flex-col">
      {/* Rich gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#d4b75d_0%,_#1a6d2f_50%,_#000_100%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(0,0,0,0.8)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,0,0,0.8)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/80"></div>
          <div className="absolute inset-0 backdrop-blur-[50px]"></div>
        </div>
      </div>

      {/* Navigation */}
      <EnhancedNavbar />
      <NavbarSpacer />

      {/* Hero Section */}
      <main className="relative container mx-auto px-6 pt-24 pb-32 flex-grow mt-32">
        {" "}
        {/* Updated padding */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/name%20only-akTVwFgfBBuPEuQxaA2vMwIwdXsJnP.png"
              alt="Herbal Aura Logo"
              width={800}
              height={200}
              className="mx-auto h-auto w-full max-w-[500px] md:max-w-[600px] lg:max-w-[800px] transform -rotate-90 mb-2 -mt-[40rem]"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute top-[-50px] left-[35%] -translate-x-1/2 w-full max-w-[400px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-WkCgiKeVA2Qxr4oDyQZ40aDbLofJsG.png"
              alt="It Starts Within"
              width={450}
              height={150}
              className="w-full h-auto"
              priority
            />
            <motion.p
              className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto -mt-36"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our mission isn{"'"}t only to educate but to provide 100% organic products that will enhance your daily
              routine!
            </motion.p>
            <motion.div
              className="relative h-[2px] w-48 mx-auto mt-4 overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
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
          </motion.div>
          <motion.div
            className="flex gap-4 -mt-24 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/products"
              className="bg-[#2a7d3f] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:bg-[#3a8d4f] hover:shadow-[#a3ff00]/50 hover:text-[#a3ff00] hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="bg-transparent text-[#a3ff00] font-semibold py-3 px-6 border border-[#a3ff00] rounded-full transition-all duration-300 hover:bg-[#2a7d3f]/20 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(163,255,0,0.5)] hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
        {/* Floating Bottles */}
        <div className="relative h-[600px] -mt-24">
          <motion.div
            className="absolute left-[10%] -top-[500px] w-[300px]"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="absolute inset-0 -left-16 bg-white rounded-full filter blur-3xl opacity-20 animate-pulse-slow w-3/4 h-3/4 m-auto"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mullein.PNG-Wg4Ln8vrMYPLlLGTl0IcIgTaCRLfns.png"
                alt="Mullein Leaf Capsules"
                width={300}
                height={600}
                className="transform -rotate-12 object-contain relative z-10 mt-52 -ml-16 mr-16"
                priority
              />
            </div>
          </motion.div>

          {/* Center Logo */}
          <motion.div
            className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          ></motion.div>

          <motion.div
            className="absolute right-[5%] -top-[520px] w-[300px]"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full filter blur-3xl opacity-20 animate-pulse-slow w-3/4 h-3/4 m-auto"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asw-NRxGWWsSIhTrhtW8claBkH9HO7jX9c.png"
                alt="Ashwagandha Capsules"
                width={300}
                height={600}
                className="transform rotate-12 object-contain mt-52 relative z-10 mr-6"
                priority
              />
            </div>
          </motion.div>
        </div>
        {/* Video Frame */}
        <div className="relative mx-auto mb-8 max-w-3xl -mt-48">
          <motion.div
            className="aspect-video overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm border border-[#a3ff00]/20 shadow-lg relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
            {isVideoPlaying ? (
              <video className="w-full h-full object-cover" autoPlay controls>
                <source src="/placeholder.svg?height=720&width=1280" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Herbal Aura Video Thumbnail"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 flex items-start justify-center pt-12">
                  <button
                    onClick={handleVideoPlay}
                    className="w-20 h-20 rounded-full bg-[#a3ff00]/80 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-[#a3ff00] group"
                  >
                    <Play className="w-10 h-10 text-black fill-black ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md">
                    Discover the Herbal Aura Difference
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mt-2 drop-shadow-md">
                    Learn about our organic sourcing process and commitment to quality
                  </p>
                </div>
              </div>
            )}
            <div className="absolute top-4 right-4 bg-[#a3ff00] text-black text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          </motion.div>
        </div>
        {/* Four Evenly Spaced Image Frames */}
        <div className="relative mt-16 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto bg-black/2 backdrop-blur-[1px]">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-full w-full flex items-center justify-center relative overflow-hidden group">
                  <Image
                    src={
                      index === 3
                        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-PljcxE9hHa4hzhKKM8ulqtBjPYW47z.png"
                        : index === 1
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-p1gOCJw6OkPKWI3ssLywiUBiWTN18b.png"
                          : index === 2
                            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-RIrVvFcL1W0iBkvM2Vevdne1azlf5L.png"
                            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-Vi0peoY0EEgiLC2iwCJYBUYzQfThiz.png"
                    }
                    alt={
                      index === 3
                        ? "Customer service chat with package delivery confirmation and customer response"
                        : index === 1
                          ? `Image frame ${index + 1}`
                          : index === 2
                            ? "Customer Review - 5 stars - Positive feedback about Mullein Leaf effectiveness"
                            : "Customer Review - 5 stars - Great communication and fast delivery with personal touch"
                    }
                    width={300}
                    height={300}
                    className={
                      index === 2
                        ? "w-full h-full object-contain opacity-100 transition-all duration-500 group-hover:scale-125"
                        : index === 3 || index === 0
                          ? "w-full h-full object-cover opacity-80 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
                          : "w-[95%] h-[95%] object-cover opacity-80 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
                    }
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Product Benefits Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#a38a4c_0%,_#0a4020_50%,_#000_100%)]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>

        {/* Bubbles Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Swirling bubble clusters */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`cluster-${i}`}
              className="absolute"
              style={{
                left: `${10 + i * 20}%`,
                top: `${10 + i * 15}%`,
                width: "150px",
                height: "150px",
                animation: `swirl-${i % 2 === 0 ? "clockwise" : "counter"} ${25 + i * 5}s infinite linear`,
              }}
            >
              {/* Cluster of bubbles */}
              {[...Array(6)].map((_, j) => (
                <div
                  key={`bubble-${i}-${j}`}
                  className="absolute rounded-full"
                  style={{
                    left: `${(j * 30) % 100}px`,
                    top: `${(j * 25) % 100}px`,
                    width: `${10 + j * 5}px`,
                    height: `${10 + j * 5}px`,
                    background:
                      j % 3 === 0
                        ? "radial-gradient(circle at 30% 30%, rgba(163, 255, 0, 0.15), rgba(255, 255, 255, 0.05))"
                        : j % 3 === 1
                          ? "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03))"
                          : "radial-gradient(circle at 30% 30%, rgba(42, 125, 63, 0.15), rgba(255, 255, 255, 0.05))",
                    boxShadow: "inset 0 0 5px rgba(255, 255, 255, 0.1)",
                    animation: `pulse-bubble ${3 + j}s infinite ease-in-out ${j * 0.5}s`,
                  }}
                />
              ))}
            </div>
          ))}

          {/* Floating individual bubbles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`float-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${5 + Math.random() * 15}px`,
                height: `${5 + Math.random() * 15}px`,
                background:
                  i % 4 === 0
                    ? "radial-gradient(circle at 30% 30%, rgba(163, 255, 0, 0.2), rgba(163, 255, 0, 0.05))"
                    : i % 4 === 1
                      ? "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.03))"
                      : i % 4 === 2
                        ? "radial-gradient(circle at 30% 30%, rgba(42, 125, 63, 0.15), rgba(42, 125, 63, 0.05))"
                        : "radial-gradient(circle at 30% 30%, rgba(211, 181, 91, 0.15), rgba(211, 181, 91, 0.05))",
                boxShadow: "inset 0 0 5px rgba(255, 255, 255, 0.1)",
                animation: `float-bubble ${10 + Math.random() * 20}s infinite ease-in-out ${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16 aspect-square max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-a04QIvXD9FLI0wAuuLBjXtqdtIbwKh.png"
              alt="Why Choose?"
              width={800}
              height={800}
              className="w-full h-full object-cover mx-auto mt-0"
              priority
            />
          </motion.div>
          <motion.div
            ref={scope}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-24 max-w-7xl mx-auto relative z-20"
          >
            {imageUrls.map((_, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden flex flex-col bg-transparent rounded-lg p-4 border-0"
              >
                {index === 0 && (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="w-full h-full rounded-lg overflow-hidden border-0 flex items-center justify-center bg-transparent relative">
                      <div
                        className="absolute inset-0 bg-[radial-gradient(circle,_white_0%,_transparent_70%)] opacity-60"
                        style={{ animation: "pulse-slow 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                      ></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quality%20Products-ZdpiejCgIWtS9tDCjEOVF1HvQHf9iU.png"
                        alt="Quality Products"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover relative z-10"
                      />
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="w-full h-full rounded-lg overflow-hidden border-0 flex items-center justify-center bg-transparent relative">
                      <div
                        className="absolute inset-0 bg-[radial-gradient(circle,_white_0%,_transparent_70%)] opacity-60"
                        style={{ animation: "pulse-slow 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                      ></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/created%20with%20love-FSBtVKBorav25XSMHIKpQcBftM2Zgk.png"
                        alt="Created & Packaged With Love"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover relative z-10"
                      />
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="w-full h-full rounded-lg overflow-hidden border-0 flex items-center justify-center bg-transparent relative">
                      <div
                        className="absolute inset-0 bg-[radial-gradient(circle,_white_0%,_transparent_70%)] opacity-60"
                        style={{ animation: "pulse-slow 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                      ></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fast%20shipping-hy6JWORZt71VKO2IJoIIeUVOp54ecT.png"
                        alt="Fast Shipping"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover relative z-10"
                      />
                    </div>
                  </div>
                )}
                {index === 3 && (
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="w-full h-full rounded-lg overflow-hidden border-0 flex items-center justify-center bg-transparent relative">
                      <div
                        className="absolute inset-0 bg-[radial-gradient(circle,_white_0%,_transparent_70%)] opacity-60"
                        style={{ animation: "pulse-slow 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                      ></div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ex%20Customer%20Service-dZxim2B8VxoaGM4IqYs6aYmJQ4nblA.png"
                        alt="Exceptional Customer Service"
                        width={500}
                        height={500}
                        className="w-[95%] h-[95%] object-contain transform -rotate-90 relative z-10"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 max-w-7xl mx-auto relative z-20 font-raleway"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center">
              <div className="px-4 py-2 rounded-md border border-[#a3ff00]/20 text-white text-base font-medium transition-all duration-300 hover:border-[#a3ff00]/70 hover:bg-[#a3ff00]/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105">
                Herbal Aura offers 100% organic herbs, carefully sourced for purity and potency. Experience nature's
                best with clean, natural ingredients you can trust.
              </div>
            </div>
            <div className="flex justify-center">
              <div className="px-4 py-2 rounded-md border border-[#a3ff00]/20 text-white text-base font-medium transition-all duration-300 hover:border-[#a3ff00]/70 hover:bg-[#a3ff00]/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105">
                Our products are hand-packaged with care, using only 100% organic herbs in pure vegan capsules. Every
                bottle is crafted with love to ensure quality, freshness, and purity.
              </div>
            </div>
            <div className="flex justify-center">
              <div className="px-4 py-2 rounded-md border border-[#a3ff00]/20 text-white text-base font-medium transition-all duration-300 hover:border-[#a3ff00]/70 hover:bg-[#a3ff00]/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105">
                Herbal Aura ensures fast and secure shipping, delivering your organic supplements quickly and safely. We
                prioritize both speed and care to guarantee your order arrives in perfect condition!
              </div>
            </div>
            <div className="flex justify-center">
              <div className="px-4 py-2 rounded-md border border-[#a3ff00]/20 text-white text-base font-medium transition-all duration-300 hover:border-[#a3ff00]/70 hover:bg-[#a3ff00]/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105">
                We're dedicated to providing exceptional customer service, ensuring every question is answered and every
                concern is addressed with care. Our team is here to support you every step of the way for a seamless
                shopping experience!
              </div>
            </div>
          </motion.div>
          <div className="text-center mt-16">{/* Explore Our Products button removed */}</div>
        </div>
        <style jsx>{`
          @keyframes swirl-clockwise {
            0% { transform: rotate(0deg) translateY(0) scale(1); }
            25% { transform: rotate(90deg) translateY(-50px) scale(1.2); }
            50% { transform: rotate(180deg) translateY(0) scale(1); }
            75% { transform: rotate(270deg) translateY(50px) scale(0.8); }
            100% { transform: rotate(360deg) translateY(0) scale(1); }
          }
          
          @keyframes swirl-counter {
            0% { transform: rotate(0deg) translateY(0) scale(1); }
            25% { transform: rotate(-90deg) translateY(50px) scale(0.8); }
            50% { transform: rotate(-180deg) translateY(0) scale(1); }
            75% { transform: rotate(-270deg) translateY(-50px) scale(1.2); }
            100% { transform: rotate(-360deg) translateY(0) scale(1); }
          }
          
          @keyframes pulse-bubble {
            0%, 100% { transform: scale(1); opacityopacity: 0.3; }
            50% { transform: scale(1.3); opacity: 0.7; }
          }
          
          @keyframes float-bubble {
            0% { transform: translate(0, 0); }
            25% { transform: translate(20px, 15px); }
            50% { transform: translate(0, 30px); }
            75% { transform: translate(-20px, 15px); }
            100% { transform: translate(0, 0); }
          }
        `}</style>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Featured Products Section */}
      <section className="relative py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#011f18] to-[#000]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white font-light text-lg md:text-xl max-w-2xl mx-auto -mt-20 tracking-wider font-raleway">
              Discover our premium selection of organic herbal supplements designed to enhance your wellness journey
            </p>
          </motion.div>
          <div className="relative w-2/5 mx-auto -mt-4" style={{ perspective: "1000px" }}>
            <motion.div
              className="aspect-[3/2.2] rounded-lg flex items-center justify-center overflow-hidden bg-transparent"
              animate={{
                x: [-30, 30, -30],
                y: [0, -30, 0],
                z: [0, 50, 0],
                scale: [1, 1.1, 1],
                rotateX: [0, 10, 0],
                rotateY: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-E74urT4TJ6Nr7wqSCAoFxuhmv8BfF5.png"
                alt="Featured Products Tag"
                width={600}
                height={200}
                className="w-full h-auto object-contain mt-16"
                priority
              />
            </motion.div>
            <motion.div
              className="absolute -inset-4 bg-[#a3ff00]/10 rounded-xl blur-xl"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{ zIndex: -1 }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4 mx-4 md:mx-0">
            {[
              {
                id: 1,
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mullein.PNG-Wg4Ln8vrMYPLlLGTl0IcIgTaCRLfns.png",
                title: "Mullein Leaf Capsules",
                description: "Support respiratory health with our organic Mullein Leaf supplement.",
                price: "$29.99",
                tag: "Bestseller",
              },
              {
                id: 2,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asw-NRxGWWsSIhTrhtW8claBkH9HO7jX9c.png",
                title: "Ashwagandha Capsules",
                description: "Reduce stress and boost immunity with our premium Ashwagandha.",
                price: "$34.99",
                tag: "Popular",
              },
              {
                id: 3,
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-0pkyCp9mQqajZ1IyjHKekMMoMNozvL.png",
                title: "Sea Moss Capsules",
                description: "Support your immune system with our premium Sea Moss supplement.",
                price: "$27.99",
                tag: "New",
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-green-900/30 group transition-all duration-300 hover:border-[#a3ff00]/50 hover:shadow-[0_0_20px_rgba(42,125,63,0.3)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="relative">
                  <div className="h-80 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={800}
                      className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 py-2"
                    />
                  </div>
                  {product.tag && (
                    <div className="absolute top-4 right-4 bg-[#a3ff00] text-black text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-0 group-hover:text-[#a3ff00] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-green-100 mb-2 h-14 mt-8">
                    {product.title === "Mullein Leaf Capsules"
                      ? "Supports respiratory health by soothing the lungs and promoting clearer breathing, . Traditionally used for asthma, smoking-related concerns, and seasonal allergies."
                      : product.title === "Sea Moss Capsules"
                        ? "Fuel your body with over 90 essential minerals found in sea moss, supporting immunity, digestion, and thyroid health. This nutrient-rich superfood promotes energy, gut balance, and overall vitality."
                        : "Naturally reduces cortisol levels, helping the body combat stress and fatigue. By balancing this key hormone, it supports relaxation, mental clarity, and a stronger immune system"}
                  </p>
                  <div className="flex flex-col justify-between items-start">
                    <span className="text-2xl font-bold text-white mt-16">$24.99</span>
                    <Link
                      href={`/products?id=${product.id}`}
                      className="bg-[#2a7d3f] hover:bg-[#a3ff00] text-white hover:text-black font-bold py-2 px-4 rounded-full transition-all duration-300 text-sm flex items-center gap-2 mt-4"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      View Product
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/shop"
              className="inline-block bg-transparent hover:bg-[#2a7d3f]/20 text-[#a3ff00] font-semibold py-3 px-8 border border-[#a3ff00] rounded-full transition-all duration-300 hover:text-white hover:border-white"
            >
              View More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <SubscriptionPlans />

      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}


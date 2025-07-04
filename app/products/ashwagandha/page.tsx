"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import EnhancedNavbar from "@/components/EnhancedNavbar"
import WhyChooseUs from "@/components/WhyChooseUs"
import NavbarSpacer from "@/components/NavbarSpacer"
import EnhancedFooter from "@/components/EnhancedFooter"

export default function AshwagandhaPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  // Hardcoded product data for Ashwagandha
  const product = {
    id: "ashwagandha",
    name: "Ashwagandha Capsules",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asw-NRxGWWsSIhTrhtW8claBkH9HO7jX9c.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asw-NRxGWWsSIhTrhtW8claBkH9HO7jX9c.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-yDzIoY1RRzlyKztbMSEiz2S8o3OG6L.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-hgzW24k3sqYqDaJuvr1PhnJOeCWAmB.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-FjSGz9b59d9KRHDxgXAaSHctQk4XY8.png",
    ],
    description: "Reduce stress and boost immunity with our premium Ashwagandha.",
    price: "$24.99",
    tag: "Popular",
    benefits:
      "Naturally reduces cortisol levels, helping the body combat stress and fatigue. By balancing this key hormone, it supports relaxation, mental clarity, and a stronger immune system.",
    ingredients: "100% Organic Ashwagandha Root (Withania somnifera), Vegetable Cellulose Capsule",
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex flex-col">
      {/* Black gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#222_0%,_#111_50%,_#000_100%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(0,0,0,0.9)_0%,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_rgba(0,0,0,0.9)_0%,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/90"></div>
        </div>
      </div>

      {/* Navigation */}
      <EnhancedNavbar />
      <NavbarSpacer />

      {/* Main Content */}
      <main className="relative container mx-auto px-6 pt-24 pb-32 flex-grow rounded-lg overflow-hidden">
        {/* Background effect */}
        <div
          className="absolute bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-HmbdAaIO5DqQMhgP3U5kHt6Dgps5yx.png")',
            backgroundSize: "cover",
            top: "400px",
            left: "-20%",
            right: "-20%",
            bottom: 0,
          }}
        ></div>

        {/* Content container with proper z-index */}
        <div className="relative z-10">
          {/* Product Detail View */}
          <div className="max-w-6xl mx-auto">
            <Link
              href="/products"
              className="text-[#a3ff00] mb-8 flex items-center hover:underline"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to all products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="flex">
                  {/* Vertical thumbnails */}
                  <div className="hidden md:flex flex-col gap-4 mr-6">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        className={`w-16 h-16 rounded overflow-hidden cursor-pointer transition-all duration-300 ${
                          idx === selectedImageIndex
                            ? "border-2 border-lime-500 shadow-[0_0_10px_rgba(163,255,0,0.5)]"
                            : "border border-white/20 hover:border-white/50"
                        }`}
                        onClick={() => setSelectedImageIndex(idx)}
                      >
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`${product.name} - view ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Main product image */}
                  <motion.div
                    className="relative group flex-1"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-white rounded-full filter blur-3xl opacity-5 group-hover:opacity-60 transition-opacity duration-300 w-3/4 h-3/4 m-auto"></div>
                    <Image
                      src={product.images[selectedImageIndex] || "/placeholder.svg"}
                      alt={product.name}
                      width={selectedImageIndex === 1 ? 600 : selectedImageIndex === 3 ? 500 : 800}
                      height={selectedImageIndex === 1 ? 600 : selectedImageIndex === 3 ? 500 : 800}
                      className={`object-contain relative z-10 mx-auto ${
                        selectedImageIndex === 1 ? "rounded-lg shadow-lg" : ""
                      } transition-transform duration-300`}
                      priority
                    />
                    {selectedImageIndex === 1 && (
                      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">
                        <p>Tap image to view full benefits</p>
                      </div>
                    )}
                    {selectedImageIndex === 3 && (
                      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">
                        <p>Stacked bottles showing product collection</p>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Mobile thumbnails (horizontal) */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                  {product.images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full cursor-pointer ${
                        idx === selectedImageIndex ? "bg-[#a3ff00]" : "bg-white/30"
                      }`}
                      onClick={() => setSelectedImageIndex(idx)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  {product.tag && (
                    <span className="inline-block bg-[#a3ff00] text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {product.tag}
                    </span>
                  )}
                  <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
                  <p className="text-green-100 text-lg mb-4">{product.description}</p>
                  <div className="text-3xl font-bold text-white mb-8">{product.price}</div>

                  <div className="flex flex-col gap-4 mb-8">
                    <div className="flex items-center">
                      <input type="radio" id="one-time" name="purchase-type" className="mr-2" defaultChecked />
                      <label htmlFor="one-time" className="text-white">
                        One-time purchase
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="subscription" name="purchase-type" className="mr-2" />
                      <label htmlFor="subscription" className="text-white">
                        Subscribe & save 15% - $21.24
                      </label>
                    </div>
                  </div>

                  <button className="bg-[#2a7d3f] hover:bg-[#a3ff00] text-white hover:text-black font-bold py-3 px-6 rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2 w-full md:w-auto">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">What's Inside?</h2>
                  <p className="text-green-100 mb-4">{product.benefits}</p>

                  <h3 className="text-xl font-semibold text-white mb-2">Ingredients:</h3>
                  <p className="text-green-100">{product.ingredients}</p>

                  <div className="flex gap-4 mt-6">
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-green-900/30">
                      <div className="w-10 h-10 mx-auto mb-1 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-[#a3ff00]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <span className="text-white text-xs block text-center">100% Organic</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-green-900/30">
                      <div className="w-10 h-10 mx-auto mb-1 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-[#a3ff00]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </div>
                      <span className="text-white text-xs block text-center">Vegan</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-green-900/30">
                      <div className="w-10 h-10 mx-auto mb-1 flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-[#a3ff00]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8.5 8.5l7 7" />
                          <path d="M8.5 15.5l7-7" />
                        </svg>
                      </div>
                      <span className="text-white text-xs block text-center">Non-GMO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Section */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8">Customer Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Ashwagandha-specific Reviews */}
                {[
                  { 
                    name: "Jason R.", 
                    date: "May 28, 2024", 
                    review: "I started taking Ashwagandha to improve my energy levels, and it's been a total game-changer. I feel more focused during work hours, and that mid-afternoon crash is gone. I actually look forward to getting things done now." 
                  },
                  { 
                    name: "Danielle K.", 
                    date: "May 16, 2024", 
                    review: "I was constantly stressed and overwhelmed, especially at night. Ashwagandha has helped me wind down naturally. I'm sleeping better, and I feel way more emotionally balanced throughout the day." 
                  },
                  { 
                    name: "Leo S.", 
                    date: "April 30, 2024", 
                    review: "I've been taking Ashwagandha consistently for a few months, and I noticed I haven't caught a cold or felt run-down like before. It's become part of my daily routine to help strengthen my immune system, especially during travel season." 
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-gradient-to-r from-green-800 to-black p-6 shadow-lg text-white"
                  >
                    {/* Star Rating */}
                    <div className="text-yellow-400 mb-2">
                      ★★★★★
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
                    <p className="text-sm text-gray-300 mb-4">{review.date}</p>
                    <p>{review.review}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Enhanced Footer */}
      <EnhancedFooter />
  
      {/* Add the style tag here */}
      <style jsx>{`
        .left-image-container img {
          object-fit: contain;  /* Ensures the image is fully visible */
          max-width: 100%; /* Prevents overflow */
          max-height: 100%; /* Keeps proportions */
        }
        .object-position-top {
          object-position: center top;
          margin-bottom: -40px; /* Increased from -15px to -40px for a more significant crop */
        }
      `}</style>  
    </div>
  )
} 
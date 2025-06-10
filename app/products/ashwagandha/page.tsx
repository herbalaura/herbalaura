"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, ArrowRight, Heart, Share2, Star } from "lucide-react"
import Link from "next/link"
import EnhancedNavbar from "@/components/EnhancedNavbar"
import NavbarSpacer from "@/components/NavbarSpacer"
import EnhancedFooter from "@/components/EnhancedFooter"
import AshwagandhaProductGallery from "@/components/AshwagandhaProductGallery"

export default function AshwagandhaProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [purchaseType, setPurchaseType] = useState("one-time")
  const [activeTab, setActiveTab] = useState("description")

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

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
      <main className="relative container mx-auto px-6 pt-12 pb-32 flex-grow">
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex text-sm">
              <Link href="/" className="text-gray-400 hover:text-[#a3ff00]">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/products" className="text-gray-400 hover:text-[#a3ff00]">
                Products
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-white">Ashwagandha Capsules</span>
            </nav>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <AshwagandhaProductGallery />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              {/* Product Badge */}
              <div className="mb-2">
                <span className="inline-block bg-[#a3ff00] text-black text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Ashwagandha Capsules</h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#a3ff00] fill-[#a3ff00]" />
                  ))}
                </div>
                <span className="ml-2 text-white/70">19 reviews</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$24.99</span>
                {purchaseType === "subscription" && <span className="ml-2 text-[#a3ff00] text-sm">Save 15%</span>}
              </div>

              {/* Description */}
              <p className="text-white/80 mb-6">
                Naturally reduces cortisol levels, helping the body combat stress and fatigue. By balancing this key hormone, 
                it supports relaxation, mental clarity, and a stronger immune system.
              </p>

              {/* Purchase Options */}
              <div className="mb-6">
                <div className="flex flex-col gap-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="purchase-type"
                      value="one-time"
                      checked={purchaseType === "one-time"}
                      onChange={() => setPurchaseType("one-time")}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 rounded-full border ${purchaseType === "one-time" ? "border-[#a3ff00] bg-[#a3ff00]/20" : "border-white/30"} flex items-center justify-center mr-3`}
                    >
                      {purchaseType === "one-time" && <span className="w-2.5 h-2.5 rounded-full bg-[#a3ff00]"></span>}
                    </span>
                    <span className="text-white">One-time purchase</span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="purchase-type"
                      value="subscription"
                      checked={purchaseType === "subscription"}
                      onChange={() => setPurchaseType("subscription")}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 rounded-full border ${purchaseType === "subscription" ? "border-[#a3ff00] bg-[#a3ff00]/20" : "border-white/30"} flex items-center justify-center mr-3`}
                    >
                      {purchaseType === "subscription" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[#a3ff00]"></span>
                      )}
                    </span>
                    <div>
                      <span className="text-white">Subscribe & save 15% - $21.24</span>
                      <p className="text-white/60 text-sm">Delivered every 30 days. Cancel anytime.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <p className="text-white mb-2">Quantity</p>
                <div className="flex items-center">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 bg-black/30 border border-white/20 rounded-l-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  >
                    -
                  </button>
                  <div className="w-14 h-10 bg-black/30 border-t border-b border-white/20 flex items-center justify-center text-white">
                    {quantity}
                  </div>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 bg-black/30 border border-white/20 rounded-r-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-[#2a7d3f] hover:bg-[#a3ff00] text-white hover:text-black font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="w-12 h-12 bg-black/30 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-black/30 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Product Details */}
              <div className="border-t border-white/10 pt-6">
                <div className="flex mb-4 border-b border-white/10">
                  <button
                    className={`pb-2 px-4 ${activeTab === "description" ? "border-b-2 border-[#a3ff00] text-[#a3ff00]" : "text-white/70"}`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                  <button
                    className={`pb-2 px-4 ${activeTab === "ingredients" ? "border-b-2 border-[#a3ff00] text-[#a3ff00]" : "text-white/70"}`}
                    onClick={() => setActiveTab("ingredients")}
                  >
                    Ingredients
                  </button>
                  <button
                    className={`pb-2 px-4 ${activeTab === "reviews" ? "border-b-2 border-[#a3ff00] text-[#a3ff00]" : "text-white/70"}`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </button>
                </div>

                <div className="py-4">
                  {activeTab === "description" && (
                    <div className="text-white/80">
                      <p className="mb-4">
                        Our premium Ashwagandha capsules harness the power of this ancient adaptogenic herb to help your body 
                        manage stress and promote overall wellbeing. Ashwagandha has been used for centuries in traditional 
                        Ayurvedic medicine to restore balance and vitality.
                      </p>
                      <p className="mb-4">Benefits include:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Helps reduce stress and anxiety</li>
                        <li>Supports healthy cortisol levels</li>
                        <li>Promotes mental clarity and focus</li>
                        <li>Supports immune function</li>
                        <li>May improve sleep quality</li>
                      </ul>
                      <p className="mt-4">
                        Each bottle contains 60 capsules (1300mg) of pure, organic Ashwagandha root extract, carefully processed 
                        to preserve its bioactive compounds and therapeutic properties.
                      </p>
                    </div>
                  )}

                  {activeTab === "ingredients" && (
                    <div className="text-white/80">
                      <p className="mb-4">
                        <span className="font-semibold">Ingredients:</span> 100% Organic Ashwagandha Root (Withania somnifera), 
                        Vegetable Cellulose Capsule
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">Suggested Use:</span> Take 2 capsules daily with water, 
                        preferably with food.
                      </p>
                      <div className="bg-black/20 p-4 rounded-lg mt-4">
                        <p className="text-sm">
                          * These statements have not been evaluated by the Food and Drug Administration. This product
                          is not intended to diagnose, treat, cure or prevent any disease.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div className="text-white/80">
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-[#a3ff00] fill-[#a3ff00]" />
                            ))}
                          </div>
                          <span className="ml-2 font-semibold">Stress Relief & Better Sleep</span>
                        </div>
                        <p className="text-sm">
                          I started taking Ashwagandha to help with daily stress and sleep issues. Within a week, I noticed I was falling asleep faster and waking up less groggy. It's helped me feel more balanced and less anxious throughout the day.
                        </p>
                        <p className="text-xs text-white/50 mt-1">Jason K. - November 7, 2024</p>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-[#a3ff00] fill-[#a3ff00]" />
                            ))}
                          </div>
                          <span className="ml-2 font-semibold">Better Focus & Mental Clarity</span>
                        </div>
                        <p className="text-sm">
                          Ashwagandha has completely changed how I handle busy work weeks. I no longer feel overwhelmed or mentally foggy in the afternoons. My focus and mood have both improved since starting this supplement.
                        </p>
                        <p className="text-xs text-white/50 mt-1">Melissa T. - January 22, 2025</p>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-[#a3ff00] fill-[#a3ff00]" />
                            ))}
                          </div>
                          <span className="ml-2 font-semibold">Improved Energy & Stress Response</span>
                        </div>
                        <p className="text-sm">
                          After hearing about Ashwagandha from a friend, I decided to try it for my energy and overall wellness. I feel more grounded and less reactive, especially in stressful situations. It's become a staple in my daily supplement stack.
                        </p>
                        <p className="text-xs text-white/50 mt-1">David R. - May 3, 2025</p>
                      </div>

                      <Link href="#" className="text-[#a3ff00] hover:underline text-sm flex items-center">
                        View all 19 reviews
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <EnhancedFooter />
    </div>
  )
} 
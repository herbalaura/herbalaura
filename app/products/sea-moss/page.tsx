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
import SeaMossProductGallery from "@/components/SeaMossProductGallery"
import ProductTestimonials from "@/components/ProductTestimonials"

export default function SeaMossProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [purchaseType, setPurchaseType] = useState("one-time")
  const [activeTab, setActiveTab] = useState("description")
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  // Hardcoded product data for Sea Moss
  const product = {
    id: "sea-moss",
    name: "Sea Moss Capsules",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-pMHzv6eRJM02zQZNZgMtztMgTv90ru.png",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-pMHzv6eRJM02zQZNZgMtztMgTv90ru.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-i0qZApkdeOp3EDV6A0W7VhJ2rGfMwP.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-HL2V44kMF7Z8FnaXgJ1J9PmhWAmoB5.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-hgzW24k3sqYqDaJuvr1PhnJOeCWAmB.png",
    ],
    description: "Boost your immune system with our nutrient-rich Sea Moss supplement.",
    price: "$29.99",
    tag: "New",
    benefits:
      "Contains 92 of the 102 minerals your body needs, supporting immune function, digestion, and thyroid health. Rich in iodine, potassium, and calcium for overall wellness.",
    ingredients: "100% Organic Irish Sea Moss (Chondrus crispus), Vegetable Cellulose Capsule",
  }

  // Define Sea Moss-specific testimonials
  const seaMossReviews = [
    {
      name: "Alicia P.",
      date: "October 18, 2024",
      text: "I've been taking Sea Moss every morning and it's done wonders for my digestion and energy levels. I feel less bloated and way more alert during the day. It's now part of my daily routine and I swear by it.",
      rating: 5
    },
    {
      name: "Marcus L.",
      date: "February 3, 2025",
      text: "Sea Moss gave my immune system a real boost this winter. I usually get sick around February, but I haven't even caught a cold this year. My skin also feels clearer and healthier since I started taking it.",
      rating: 5
    },
    {
      name: "Danielle R.",
      date: "May 27, 2025",
      text: "I started using Sea Moss for thyroid support and noticed better focus and less fatigue within two weeks. It's one of the few supplements I've tried that actually made a difference. I'm really happy with the results so far.",
      rating: 5
    }
  ]

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
                      width={800}
                      height={800}
                      className="object-contain relative z-10 mx-auto transition-transform duration-300"
                      priority
                    />
                    {selectedImageIndex === 1 && (
                      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">
                        <p>Tap image to view full benefits</p>
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
                        Subscribe & save 15% - $25.49
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

                  {activeTab === "reviews" && (
                    <div className="text-white/80">
                      <div className="space-y-12">
                        <div className="flex justify-between items-center mb-8">
                          <h2 className="text-3xl font-bold text-white">Customer Reviews</h2>
                          <Link href="/products/sea-moss/testimonials" className="text-[#a3ff00] hover:underline flex items-center">
                            View All <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                        
                        {/* Use the product-specific reviews */}
                        <ProductTestimonials testimonials={seaMossReviews} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Review Section */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8">Customer Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Sea Moss-specific Reviews */}
                {[
                  { 
                    name: "Tanya L.", 
                    date: "June 2, 2024", 
                    review: "I've tried so many supplements for my digestive issues, but Sea Moss is the only one that's made a real difference. My stomach feels settled, and I'm much more regular now. It's been a total game-changer for my gut health." 
                  },
                  { 
                    name: "Marcus W.", 
                    date: "May 25, 2024", 
                    review: "As someone with hypothyroidism, I was looking for natural support alongside my medication. Since adding Sea Moss to my routine, I've noticed more consistent energy levels throughout the day and less brain fog. My last lab tests even showed improvement!" 
                  },
                  { 
                    name: "Priya K.", 
                    date: "May 12, 2024", 
                    review: "I started taking Sea Moss for its mineral content, and I've been amazed at how much better my skin looks. It's clearer, more hydrated, and I've even noticed my hair growing faster and stronger. This is definitely a permanent part of my wellness routine now." 
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
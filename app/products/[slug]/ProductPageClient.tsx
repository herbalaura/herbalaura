"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, ArrowRight, Heart, Share2, Star, Check } from "lucide-react"
import Link from "next/link"
import EnhancedNavbar from "@/components/EnhancedNavbar"
import NavbarSpacer from "@/components/NavbarSpacer"
import EnhancedFooter from "@/components/EnhancedFooter"
import ProductTestimonials from "@/components/ProductTestimonials"
import DynamicProductGallery from "@/components/DynamicProductGallery"
import { ProductData } from "@/lib/productData"

// Import the Mullein testimonials data
const mulleinTestimonials = [
  {
    name: "Sarah M.",
    date: "May 20, 2024",
    text: "I've been a smoker for over 15 years, and my lungs always felt heavy and tight. After just a couple of weeks on Mullein Leaf, I started breathing easier and coughing less. It truly feels like my lungs have been deeply detoxed.",
    rating: 5
  },
  {
    name: "John D.",
    date: "April 15, 2024",
    text: "I suffer from mild asthma and often get short of breath, especially during allergy season. Since starting Mullein Leaf, my breathing has felt much more open and manageable. It's the only herbal supplement that's actually made a difference.",
    rating: 5
  },
  {
    name: "Emily R.",
    date: "March 22, 2024",
    text: "I had constant mucus buildup in my chest and always felt congested in the mornings. Mullein Leaf helped break that up and clear it out naturally. I feel lighter, clearer, and way more comfortable throughout the day.",
    rating: 5
  }
]

interface ProductPageClientProps {
  product: ProductData
  slug: string
}

export default function ProductPageClient({ product, slug }: ProductPageClientProps) {
  const [quantity, setQuantity] = useState(1)
  const [purchaseType, setPurchaseType] = useState("one-time")
  const [activeTab, setActiveTab] = useState("description")
  const [addedToCart, setAddedToCart] = useState(false)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  // Use the specific testimonials for Mullein, otherwise use the product's testimonials
  const testimonials = slug === "mullein" ? mulleinTestimonials : product.testimonials
  
  // Reset the "Added to Cart" message after 3 seconds
  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => setAddedToCart(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);

  // Calculate the price based on purchase type
  const finalPrice = purchaseType === "subscription" 
    ? (product.price * 0.85).toFixed(2) 
    : product.price.toFixed(2);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex flex-col">
      {/* Enhanced background gradient for better visual appeal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#222_0%,_#111_50%,_#000_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/90"></div>
          {slug === "mullein" && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(42,125,63,0.15)_0%,_transparent_60%)]"></div>
          )}
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
              <span className="text-white">{product.title}</span>
            </nav>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <DynamicProductGallery productSlug={slug} />
              
              {/* Special badge for Mullein product */}
              {slug === "mullein" && (
                <motion.div 
                  className="absolute -top-4 -left-4 bg-[#a3ff00] text-black font-bold px-4 py-2 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.5 }}
                >
                  Bestseller
                </motion.div>
              )}
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
                  {product.badge.text}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.title}</h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#a3ff00] fill-[#a3ff00]" />
                  ))}
                </div>
                <span className="ml-2 text-white/70">{product.reviewCount} reviews</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">${finalPrice}</span>
                {purchaseType === "subscription" && (
                  <span className="ml-2 text-[#a3ff00] text-sm">
                    Save 15% <span className="line-through text-white/50">${product.price.toFixed(2)}</span>
                  </span>
                )}
              </div>

              {/* Description */}
              <motion.p 
                className="text-white/80 mb-6 text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {product.shortDescription}
              </motion.p>

              {/* Purchase Options */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Purchase Options</h3>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
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

                  <label className="flex items-center cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
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
                      <span className="text-white">Subscribe & save 15% - ${(product.price * 0.85).toFixed(2)}</span>
                      <p className="text-white/60 text-sm">Delivered every 30 days. Cancel anytime.</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-3">Quantity</h3>
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

              {/* Add to Cart Button with animation */}
              <div className="flex gap-4 mb-8">
                <motion.button 
                  className={`flex-1 ${addedToCart ? 'bg-[#2a7d3f]' : 'bg-[#2a7d3f] hover:bg-[#a3ff00]'} text-white hover:text-black font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2`}
                  onClick={() => setAddedToCart(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </motion.button>
                <motion.button 
                  className="w-12 h-12 bg-black/30 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5" />
                </motion.button>
                <motion.button 
                  className="w-12 h-12 bg-black/30 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
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
                    <motion.div 
                      className="text-white/80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {product.fullDescription.map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                      <h3 className="text-white font-semibold text-lg mt-6 mb-3">Key Benefits:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                      <p className="mt-4">
                        Each bottle contains 60 capsules of pure, organic {product.title}, carefully processed 
                        to preserve its bioactive compounds and therapeutic properties.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "ingredients" && (
                    <motion.div 
                      className="text-white/80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="bg-black/20 p-4 rounded-lg border border-white/10 mb-4">
                        <h3 className="text-white font-semibold text-lg mb-2">Ingredients:</h3>
                        <p>{product.ingredients}</p>
                      </div>
                      
                      <div className="bg-black/20 p-4 rounded-lg border border-white/10 mb-4">
                        <h3 className="text-white font-semibold text-lg mb-2">Free From:</h3>
                        <p>Gluten, Dairy, Soy, GMOs, Artificial Colors, Preservatives, Fillers</p>
                      </div>
                      
                      <div className="bg-black/20 p-4 rounded-lg border border-white/10">
                        <h3 className="text-white font-semibold text-lg mb-2">Suggested Use:</h3>
                        <p>Take 2 capsules daily with water, preferably with food or as directed by a healthcare professional.</p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "reviews" && (
                    <div className="text-white/80">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <p className="text-lg font-semibold">Customer Reviews</p>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-[#a3ff00] fill-[#a3ff00]" />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-white/70">Based on {product.reviewCount} reviews</span>
                          </div>
                        </div>
                        <button className="text-[#a3ff00] hover:underline text-sm">Write a Review</button>
                      </div>
                      
                      <div className="space-y-6">
                        {testimonials.map((review, index) => (
                          <motion.div 
                            key={index} 
                            className="border-b border-white/10 pb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            <div className="flex items-center mb-2">
                              <p className="text-white font-medium">{review.name}</p>
                              <span className="mx-2 text-white/30">•</span>
                              <p className="text-white/60 text-sm">{review.date}</p>
                            </div>
                            <div className="flex mb-2">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-[#a3ff00] fill-[#a3ff00]" />
                              ))}
                            </div>
                            <p className="text-white/80">{review.text}</p>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-8 text-center">
                        <Link href={`/products/${slug}/testimonials`} className="inline-flex items-center text-[#a3ff00] hover:underline">
                          View All Reviews
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Testimonials Section with enhanced styling */}
      <div className="relative z-10 py-16 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-6">
          {slug === "mullein" ? (
            <>
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white">Mullein Leaf Testimonials</h2>
                <div className="h-1 w-24 bg-[#a3ff00] mx-auto mt-4"></div>
                <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                  See how our Mullein Leaf supplement has helped customers improve their respiratory health and breathing.
                </p>
              </motion.div>
              <ProductTestimonials testimonials={mulleinTestimonials} title="" />
            </>
          ) : (
            <ProductTestimonials testimonials={product.testimonials} />
          )}
        </div>
      </div>

      {/* Footer */}
      <EnhancedFooter />
    </div>
  )
}

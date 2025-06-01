"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import EnhancedNavbar from "@/components/EnhancedNavbar"
import WhyChooseUs from "@/components/WhyChooseUs"
import NavbarSpacer from "@/components/NavbarSpacer"
import EnhancedFooter from "@/components/EnhancedFooter"

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const products = [
    {
      id: "mullein",
      name: "Mullein Leaf Capsules",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-HL2V44kMF7Z8FnaXgJ1J9PmhWAmoB5.png",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-HL2V44kMF7Z8FnaXgJ1J9PmhWAmoB5.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-P4pIVLW1haiohVcUjxbqTS2fseAkiL.jpeg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-pMHzv6eRJM02zQZNZgMtztMgTv90ru.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-i0qZApkdeOp3EDV6A0W7VhJ2rGfMwP.png",
      ],
      description: "Support respiratory health with our organic Mullein Leaf supplement.",
      price: "$24.99",
      tag: "Bestseller",
      benefits:
        "Supports respiratory health by soothing the lungs and promoting clearer breathing. Traditionally used for asthma, smoking-related concerns, and seasonal allergies.",
      ingredients: "100% Organic Mullein Leaf (Verbascum thapsus), Vegetable Cellulose Capsule",
    },
    {
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
    },
    {
      id: "seamoss",
      name: "Sea Moss Capsules",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-0pkyCp9mQqajZ1IyjHKekMMoMNozvL.png",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-0pkyCp9mQqajZ1IyjHKekMMoMNozvL.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-di8QJDF5frufu9eFfsJK7bFcrzKgP2.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-YmMaE9KDZBUDhCymyWqyNTGRoffz8i.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-8cx0q2RgSUxoElSeuhcqGbUPqU1E1j.png",
      ],
      description: "Support your immune system with our premium Sea Moss supplement.",
      price: "$24.99",
      tag: "New",
      benefits:
        "Fuel your body with over 90 essential minerals found in sea moss, supporting immunity, digestion, and thyroid health. This nutrient-rich superfood promotes energy, gut balance, and overall vitality.",
      ingredients: "100% Organic Irish Sea Moss (Chondrus crispus), Vegetable Cellulose Capsule",
    },
  ]

  const questions = [
    {
      question: "What's your primary wellness goal?",
      options: [
        { label: "Improve respiratory health", value: "respiratory" },
        { label: "Reduce stress and anxiety", value: "stress" },
        { label: "Boost overall immunity", value: "immunity" },
        { label: "Improve energy levels", value: "energy" },
      ],
    },
    {
      question: "Do you have any specific health concerns?",
      options: [
        { label: "Respiratory issues (asthma, allergies, etc.)", value: "respiratory-issues" },
        { label: "Stress and sleep problems", value: "stress-issues" },
        { label: "Digestive health", value: "digestive" },
        { label: "General wellness", value: "general" },
      ],
    },
    {
      question: "How would you describe your lifestyle?",
      options: [
        { label: "Very active, exercise regularly", value: "active" },
        { label: "Moderately active", value: "moderate" },
        { label: "Mostly sedentary", value: "sedentary" },
        { label: "High-stress environment", value: "high-stress" },
      ],
    },
  ]

  const router = useRouter()

  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId)
    setSelectedImageIndex(0) // Reset to first image when changing products

    // Update the URL without full page reload
    router.push(`/products?id=${productId}`, { scroll: false })

    // Scroll to top for better UX
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleAnswerSelect = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed, determine recommendation
      const recommendation = getRecommendation(answers)
      setSelectedProduct(recommendation)
      setQuizStarted(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const getRecommendation = (answers: Record<string, string>): string => {
    // Simple recommendation logic based on answers
    if (answers[0] === "respiratory" || answers[1] === "respiratory-issues") {
      return "mullein"
    } else if (answers[0] === "stress" || answers[1] === "stress-issues" || answers[2] === "high-stress") {
      return "ashwagandha"
    } else {
      return "seamoss" // Default to sea moss for immunity and general wellness
    }
  }

  useEffect(() => {
    // Check URL for product ID
    const params = new URLSearchParams(window.location.search)
    const productId = params.get("id")

    if (productId) {
      const validProduct = products.find((p) => p.id === productId)
      if (validProduct) {
        setSelectedProduct(productId)
      }
    }
  }, [])

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
          {selectedProduct ? (
            // Product Detail View
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => {
                  setSelectedProduct(null)
                  router.push("/products", { scroll: false })
                }}
                className="text-[#a3ff00] mb-8 flex items-center hover:underline"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to all products
              </button>

              {products
                .filter((p) => p.id === selectedProduct)
                .map((product) => (
                  <div key={product.id} className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                            width={
                              selectedImageIndex === 1 && (product.id === "ashwagandha" || product.id === "seamoss")
                                ? 600
                                : selectedImageIndex === 3 && product.id === "ashwagandha"
                                  ? 500
                                  : 800
                            }
                            height={
                              selectedImageIndex === 1 && (product.id === "ashwagandha" || product.id === "seamoss")
                                ? 600
                                : selectedImageIndex === 3 && product.id === "ashwagandha"
                                  ? 500
                                  : 800
                            }
                            className={`object-contain relative z-10 mx-auto ${
                              selectedImageIndex === 1 && (product.id === "ashwagandha" || product.id === "seamoss")
                                ? "rounded-lg shadow-lg"
                                : ""
                            } transition-transform duration-300`}
                            priority
                          />
                          {selectedImageIndex === 1 && (product.id === "ashwagandha" || product.id === "seamoss") && (
                            <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">
                              <p>Tap image to view full benefits</p>
                            </div>
                          )}
                          {selectedImageIndex === 3 && product.id === "ashwagandha" && (
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
                ))}

              {/* Review Section */}
              <section className="mt-16">
                <h2 className="text-3xl font-bold text-white mb-8">Customer Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Sample Reviews */}
                  {[
                    { name: "Sarah M.", date: "May 20, 2024", review: "Great product! Noticed a difference within a week." },
                    { name: "John D.", date: "April 15, 2024", review: "Excellent quality and fast shipping. Highly recommend." },
                    { name: "Emily R.", date: "March 22, 2024", review: "This supplement is fantastic! I feel so much better." },
                  ].map((review, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-gradient-to-r from-green-800 to-black p-6 shadow-lg text-white"
                    >
                      {/* Star Rating (Placeholder) */}
                      <div className="text-yellow-400 mb-2">
                        ★★★★★
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
                      <p className="text-sm text-gray-300 mb-4">{review.date}</p>
                      <p>{review.review}</p>
                    </div>
                  ))}
                </div>
                {/* Example with no gradient - adjust as desired */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "Sarah M.", date: "May 20, 2024", review: "Great product! Noticed a difference within a week." },
                    { name: "John D.", date: "April 15, 2024", review: "Excellent quality and fast shipping. Highly recommend." },
                    { name: "Emily R.", date: "March 22, 2024", review: "This supplement is fantastic! I feel so much better." },
                  ].map((review, index) => (
                    <div key={index} className="rounded-xl bg-zinc-900 p-6 shadow-lg text-white">
                      <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
                      <p className="text-sm text-gray-300 mb-4">{review.date}</p>
                      <p>{review.review}</p>
                    </div>
                  ))}
                </div> */}
              </section>
            </div>
          ) : quizStarted ? (
            // Quiz View
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">{questions[currentQuestion].question}</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option.value)}
                    className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-green-900/30 text-white text-lg font-medium transition-all duration-300 hover:border-[#a3ff00]/70 hover:bg-[#a3ff00]/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105 text-left"
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    if (currentQuestion > 0) {
                      setCurrentQuestion(currentQuestion - 1)
                    } else {
                      setQuizStarted(false)
                    }
                  }}
                  className="text-[#a3ff00] hover:underline"
                >
                  {currentQuestion > 0 ? "Previous question" : "Cancel quiz"}
                </button>
              </div>
            </div>
          ) : (
            // Product Listing with Questionnaire Hero
            <>
              <div className="text-center max-w-4xl mx-auto mb-24 -mt-16">
                {/* Three evenly spaced image frames */}
                <div className="flex justify-end gap-4 mb-8 -mt-56 pr-12 -mr-24">
                  {[1, 2, 3].map((_, index) => (
                    <motion.div
                      key={index}
                      className={`relative ${index === 2 ? "w-[380px] mt-6" : "w-[280px]"} h-[450px] rounded-lg overflow-hidden backdrop-blur-sm`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <div className="absolute inset-0"></div>
                      <div
                        className={`absolute inset-0 top-[110px] left-0 right-0 flex items-center justify-center ${index === 0 ? "pb-0" : "pb-8"} ${index === 0 ? "left-image-container" : ""} ${index === 2 ? "right-image-wrapper" : ""}`}
                      >
                        <div className="w-full h-full mx-auto overflow-hidden flex justify-start items-center group">  
                          {index !== 3 && (
                            index === 2 ? (
                              <div className="group transition-transform duration-300 ease-in-out hover:scale-105 scale-95">
                                <Image
                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-h8Hzus1h5Q1TQ8ye8xibBkzp5E0Wif.png"
                                  alt="Herbal Aura supplement bottles - Mullein Leaf, Ashwagandha, and Sea Moss capsules"
                                  fill={false}
                                  width={600}
                                  height={500}
                                  className="w-[90%] h-[90%] object-contain ml-4 transition-transform duration-500 group-hover:scale-125 cursor-zoom-in"
                                />
                              </div>
                            ) : index === 0 ? (
                              <div className="scale-[1.25] origin-center relative -translate-x-4 transition-transform duration-300">
                                <Image
                                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-UJ5gBvThmZclDrcjVm210vI3FSIhKu.png"
                                  alt="Herbal Aura supplements stack with Sea Moss, Mullein Leaf, and Ashwagandha Capsules"
                                  fill={false}
                                  width={800}
                                  height={500}
                                  className="w-[90%] h-[90%] max-h-[480px] object-contain ml-16 object-position-top mt-4 transition-transform duration-500 group-hover:scale-125 cursor-zoom-in"
                                />
                              </div>
                            ) : (
                              <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-MtRBtQDYa3JF6EUw5PFAMaGq21SjfQ.png"
                                alt="Our Premium Organic Supplements logo"
                                fill={false}
                                width={350}
                                height={500}
                                className="w-auto h-auto max-h-[360px] object-cover mt-8 transition-transform duration-500 group-hover:scale-125 cursor-zoom-in"
                              />
                            )
                          )}
                        </div>  
                      </div>  
                    </motion.div> 
                    ))}
                </div>
                {/* Remove this right image frame since we've repositioned it */}
                {/* <motion.div
                  className="hidden md:block absolute right-0 top-0 w-[60rem] h-80 rounded-lg overflow-hidden mt-8 -mr-16"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-end">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-uNSpc95kCB5e64uBCtL9T3qPT5C7o3.png"
                      alt="Premium Organic Supplements"
                      width={400}
                      height={500}
                      className="object-cover z-10 w-1/2 h-auto mr-8"
                    />
                  </div>
                </motion.div> */}
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-white mb-4 relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    textShadow: [
                      "0 0 5px rgba(163, 255, 0, 0.3)",
                      "0 0 15px rgba(163, 255, 0, 0.7)",
                      "0 0 5px rgba(163, 255, 0, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 0.8,
                    textShadow: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    textShadow: "0 0 8px rgba(163, 255, 0, 0.5)",
                  }}
                >
                  <motion.span
                    animate={{ y: [0, 16, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="inline-block font-space-grotesk tracking-wider text-3xl md:text-4xl mt-8 -mt-[140rem] relative"
                  >
                    Struggling to Pick the Right Supplement? We'll Help You Decide!
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="text-base md:text-lg text-green-100 max-w-2xl mx-auto mb-8 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
                >
                  Take a quick quiz or browse our premium organic supplements below.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <button
                    onClick={() => {
                      setQuizStarted(true)
                      setCurrentQuestion(0)
                      setAnswers({})
                    }}
                    className="bg-[#2a7d3f] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:bg-[#3a8d4f] hover:shadow-[#a3ff00]/50 hover:text-[#a3ff00] hover:scale-105"
                  >
                    Take the Quiz
                  </button>
                  <a
                    href="#products"
                    className="bg-transparent text-[#a3ff00] font-semibold py-3 px-6 border border-[#a3ff00] rounded-full transition-all duration-300 hover:bg-[#2a7d3f]/20 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(163,255,0,0.5)] hover:scale-105"
                  >
                    Browse Products
                  </a>
                </motion.div>
              </div>

              <div id="products" className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="flex flex-col items-center group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                    >
                      <motion.div
                        className="relative h-[300px] w-full mb-6 cursor-pointer"
                        onClick={() => handleProductClick(product.id)}
                        animate={{
                          y: [0, index % 2 === 0 ? -15 : 15, 0],
                          rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Replace the always-visible blur with one that only shows on hover */}
                        <div className="absolute inset-0 bg-white rounded-full filter blur-3xl opacity-5 group-hover:opacity-60 transition-opacity duration-300 w-3/4 h-3/4 m-auto"></div>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className={`transform ${index % 2 === 0 ? "-rotate-12" : "rotate-12"} object-contain relative z-10`}
                          priority
                        />
                        {product.tag && (
                          <div className="absolute top-0 right-0 bg-[#a3ff00] text-black text-xs font-bold px-3 py-1 rounded-full z-20">
                            {product.tag}
                          </div>
                        )}
                      </motion.div>

                      <h3 className="text-xl font-semibold text-white text-center mb-2">{product.name}</h3>
                      <p className="text-green-100 text-center mb-4">{product.description}</p>
                      <span className="text-2xl font-bold text-white mb-4">{product.price}</span>
                      <button
                        onClick={() => handleProductClick(product.id)}
                        className="bg-[#2a7d3f] hover:bg-[#a3ff00] text-white hover:text-black font-bold py-2 px-4 rounded-full transition-all duration-300 text-sm flex items-center gap-2"
                      >
                        View Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}  
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


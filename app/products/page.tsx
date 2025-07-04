"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import EnhancedNavbar from "@/components/EnhancedNavbar"
import WhyChooseUs from "@/components/WhyChooseUs"
import NavbarSpacer from "@/components/NavbarSpacer"
import EnhancedFooter from "@/components/EnhancedFooter"

export default function ProductsPage() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const products = [
    {
      id: "mullein",
      slug: "mullein",
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
      slug: "ashwagandha",
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
      slug: "sea-moss",
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

  const handleProductClick = (productSlug: string) => {
    // Navigate to the dynamic product page
    router.push(`/products/${productSlug}`)
  }

  const handleAnswerSelect = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completed, determine recommendation
      const recommendation = getRecommendation(answers)
      setQuizStarted(false)
      
      // Navigate to the recommended product page
      router.push(`/products/${recommendation}`)
    }
  }

  const getRecommendation = (answers: Record<string, string>): string => {
    // Simple recommendation logic based on answers
    if (answers[0] === "respiratory" || answers[1] === "respiratory-issues") {
      return "mullein"
    } else if (answers[0] === "stress" || answers[1] === "stress-issues" || answers[2] === "high-stress") {
      return "ashwagandha"
    } else {
      return "sea-moss" // Default to sea moss for immunity and general wellness
    }
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
          {quizStarted ? (
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
                        onClick={() => handleProductClick(product.slug)}
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
                        onClick={() => handleProductClick(product.slug)}
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


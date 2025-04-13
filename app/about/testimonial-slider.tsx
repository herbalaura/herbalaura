"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah J.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I've tried many herbal supplements, but Herbal Aura's products are truly exceptional. The Mullein Leaf capsules have made a remarkable difference in my respiratory health. The quality is unmatched!",
  },
  {
    name: "Michael T.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The Ashwagandha capsules have been a game-changer for my stress levels. I appreciate Herbal Aura's commitment to organic ingredients and sustainable practices. Customer for life!",
  },
  {
    name: "Emily R.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Not only are the products amazing, but the customer service is exceptional. They took the time to answer all my questions and help me find the perfect supplement for my needs.",
  },
  {
    name: "David L.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The Sea Moss capsules have boosted my immunity significantly. I love that I can trust the purity of Herbal Aura's products. The transparency about ingredients is refreshing.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="bg-black/30 backdrop-blur-sm border border-[#a3ff00]/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#a3ff00]/30">
                      <Image
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#a3ff00] text-[#a3ff00]" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl italic text-white/90 mb-4">"{testimonials[current].text}"</p>
                    <p className="font-bold text-[#a3ff00]">{testimonials[current].name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#a3ff00]/30 text-[#a3ff00] hover:bg-[#a3ff00]/10"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#a3ff00]/30 text-[#a3ff00] hover:bg-[#a3ff00]/10"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-[#a3ff00] w-6" : "bg-[#a3ff00]/30"
            }`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
          />
        ))}
      </div>
    </div>
  )
}


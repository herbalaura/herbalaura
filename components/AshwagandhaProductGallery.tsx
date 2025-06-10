"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

export default function AshwagandhaProductGallery() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asw-NRxGWWsSIhTrhtW8claBkH9HO7jX9c.png",
      alt: "Ashwagandha Capsules Bottle",
      type: "product",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-yDzIoY1RRzlyKztbMSEiz2S8o3OG6L.png",
      alt: "Ashwagandha Benefits Infographic",
      type: "infographic",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-hgzW24k3sqYqDaJuvr1PhnJOeCWAmB.png",
      alt: "Multiple Ashwagandha Capsules Bottles",
      type: "product",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-FjSGz9b59d9KRHDxgXAaSHctQk4XY8.png",
      alt: "Ashwagandha Capsules Collection Close-up",
      type: "product",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg bg-black/30 border border-white/10 shadow-xl aspect-square">
        <div
          className={`transition-transform duration-500 ease-out ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={toggleZoom}
        >
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            width={800}
            height={800}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        {!isZoomed && (
          <button
            className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
            onClick={toggleZoom}
          >
            <ZoomIn className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between -mt-6 px-2">
        <button
          onClick={prevImage}
          className="bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`border-2 rounded-md overflow-hidden cursor-pointer transition-colors ${
              activeIndex === index ? "border-[#a3ff00]" : "border-transparent"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        ))}
      </div>

      {/* Type Indicator */}
      {images[activeIndex].type === "infographic" && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">Infographic</span>
        </div>
      )}
    </div>
  )
} 
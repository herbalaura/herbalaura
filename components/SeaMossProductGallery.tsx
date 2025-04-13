"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

export default function SeaMossProductGallery() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-0pkyCp9mQqajZ1IyjHKekMMoMNozvL.png",
      alt: "Sea Moss Capsules Bottle",
      type: "product",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-di8QJDF5frufu9eFfsJK7bFcrzKgP2.png",
      alt: "Sea Moss Benefits Infographic",
      type: "infographic",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-YmMaE9KDZBUDhCymyWqyNTGRoffz8i.png",
      alt: "Multiple Sea Moss Capsules Bottles",
      type: "product",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-8cx0q2RgSUxoElSeuhcqGbUPqU1E1j.png",
      alt: "Sea Moss Capsules Collection Close-up",
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
      {/* Main Image Display */}
      <div className="relative aspect-square bg-black/10 backdrop-blur-sm rounded-lg overflow-hidden mb-4">
        <motion.div
          className={`relative w-full h-full ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
          onClick={toggleZoom}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[activeIndex].src || "/placeholder.svg"}
            alt={images[activeIndex].alt}
            fill
            className={`object-contain transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
            priority
          />

          {/* Image type indicator */}
          {images[activeIndex].type === "infographic" && (
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-[#a3ff00]/80 text-black text-xs font-medium px-3 py-1 rounded-full">
                Tap to zoom and view benefits
              </span>
            </div>
          )}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Zoom indicator */}
        <button
          onClick={toggleZoom}
          className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          aria-label={isZoomed ? "Zoom out" : "Zoom in"}
        >
          <ZoomIn className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
              activeIndex === index
                ? "border-[#a3ff00] shadow-[0_0_10px_rgba(163,255,0,0.5)]"
                : "border-white/20 hover:border-white/50"
            }`}
            aria-label={`View ${image.alt}`}
            aria-current={activeIndex === index}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Thumbnail for ${image.alt}`}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-4 left-4 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  )
}


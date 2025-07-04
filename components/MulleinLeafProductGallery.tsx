"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useZoomAnimation } from "@/hooks/useZoomAnimation"
import { ZoomIn } from "lucide-react"

export default function MulleinLeafProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const { scope } = useZoomAnimation(4) // 4 is the number of images
  
  const zoomIn = () => setIsZoomed(true)
  const zoomOut = () => setIsZoomed(false)
  const toggleZoom = () => setIsZoomed(!isZoomed)

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-HL2V44kMF7Z8FnaXgJ1J9PmhWAmoB5.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed.jpg-P4pIVLW1haiohVcUjxbqTS2fseAkiL.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-pMHzv6eRJM02zQZNZgMtztMgTv90ru.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-i0qZApkdeOp3EDV6A0W7VhJ2rGfMwP.png",
  ]

  return (
    <div ref={scope} className="product-gallery">
      {/* Main Image */}
      <motion.div 
        className="relative mb-4 overflow-hidden rounded-lg bg-black/30 border border-white/10 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`relative h-[400px] transition-all duration-500 ease-in-out ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={toggleZoom}
        >
          <Image
            src={images[selectedImage]}
            alt="Mullein Leaf Product"
            fill
            className="object-contain"
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
      </motion.div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <motion.button
            key={index}
            className={`relative h-24 overflow-hidden rounded-md ${
              selectedImage === index
                ? "ring-2 ring-[#a3ff00] ring-offset-2 ring-offset-black"
                : "ring-1 ring-white/20"
            }`}
            onClick={() => setSelectedImage(index)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Image src={image} alt={`Mullein Leaf thumbnail ${index + 1}`} fill className="object-cover" />
          </motion.button>
        ))}
      </div>
      
      {/* Image counter */}
      <div className="absolute top-4 left-4 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
        {selectedImage + 1} / {images.length}
      </div>
    </div>
  )
} 
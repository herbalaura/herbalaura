"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProductGallery() {
  const images = [
    {
      id: 1,
      src: "/images/sea-moss-front.png",
      alt: "Sea Moss Front",
    },
    {
      id: 2,
      src: "/images/sea-moss-benefits.png",
      alt: "Sea Moss Benefits",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-1-yVR1hrglecIP7HJ4QerSt74dhAN2fW.png",
      alt: "Mullein Leaf Capsules",
    },
    {
      id: 4,
      src: "/images/placeholder.png",
      alt: "Placeholder",
    },
  ]

  const [selectedImage, setSelectedImage] = useState(images[0])
  const [isZoomed, setIsZoomed] = useState(false)

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-4 order-2 md:order-1">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`border-2 p-1 rounded transition-all duration-300 ${
              selectedImage.id === image.id
                ? "border-lime-400 shadow-[0_0_10px_rgba(163,255,0,0.5)]"
                : "border-transparent hover:border-lime-400/50"
            }`}
          >
            <div className="w-20 h-20 relative overflow-hidden rounded">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div
        className={`flex-1 order-1 md:order-2 relative ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
        onClick={toggleZoom}
      >
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          <div className="aspect-square relative">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className={`object-contain transition-all duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
            />
          </div>
        </div>

        {/* Zoom indicator */}
        <div className="absolute top-4 right-4 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
          {isZoomed ? "Click to zoom out" : "Click to zoom in"}
        </div>
      </div>
    </div>
  )
}


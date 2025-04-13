"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

interface OrbitingCarouselProps {
  images: string[]
}

const OrbitingCarousel: React.FC<OrbitingCarouselProps> = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(true)
  const [hasError, setHasError] = useState(false)
  const controls = useAnimation()

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
    controls.start({
      rotate: 360,
      transition: {
        duration: 30,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    })
  }, [controls])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
    controls.stop()
  }, [controls])

  useEffect(() => {
    startAnimation()
    return () => controls.stop()
  }, [startAnimation, controls])

  if (hasError) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Customer Experience ${index + 1}`}
              fill
              className="object-cover"
              onError={() => setHasError(true)}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] border-2 border-green-500/10 rounded-full">
          <div className="absolute inset-0 border-2 border-green-500/5 rounded-full transform scale-90"></div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={controls}
        onHoverStart={stopAnimation}
        onHoverEnd={startAnimation}
      >
        {images.map((src, index) => {
          const angle = (index * 2 * Math.PI) / images.length
          const radius = 200

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                rotate: -angle * (180 / Math.PI),
              }}
              whileHover={{
                scale: 1.2,
                zIndex: 10,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-lg transition-transform duration-300">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Customer Experience ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-300"
                  style={{
                    filter: hoveredIndex === null || hoveredIndex === index ? "none" : "blur(2px) brightness(0.7)",
                  }}
                  sizes="(max-width: 768px) 128px, 160px"
                  onError={() => setHasError(true)}
                />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default OrbitingCarousel


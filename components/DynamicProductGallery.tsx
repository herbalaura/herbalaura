"use client"

import MulleinLeafProductGallery from "@/components/MulleinLeafProductGallery"
import AshwagandhaProductGallery from "@/components/AshwagandhaProductGallery"
import SeaMossProductGallery from "@/components/SeaMossProductGallery"

interface DynamicProductGalleryProps {
  productSlug: string
}

export default function DynamicProductGallery({ productSlug }: DynamicProductGalleryProps) {
  // Render the appropriate gallery component based on the product slug
  switch (productSlug) {
    case "mullein":
      return <MulleinLeafProductGallery />
    case "ashwagandha":
      return <AshwagandhaProductGallery />
    case "sea-moss":
      return <SeaMossProductGallery />
    default:
      // Fallback to a default gallery or error message
      return (
        <div className="flex items-center justify-center h-[400px] bg-black/20 rounded-lg">
          <p className="text-white/60">Product gallery not available</p>
        </div>
      )
  }
} 
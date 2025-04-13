"use client"

import { useState } from "react"
import Image from "next/image"

export default function SeaMossImageGallery() {
  // Define the product images in the gallery
  const [images, setImages] = useState([
    { id: 1, src: "/images/seamoss_thumbnail.png", alt: "Sea Moss Thumbnail" },
    { id: 2, src: "/images/seamoss_benefits.png", alt: "Sea Moss Second Frame" },
    { id: 3, src: "/images/seamoss_third_frame.png", alt: "Sea Moss Third Frame" },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-XJHLn7IqQUkUn6yDeVMVlwF2aiijqP.png",
      alt: "Sea Moss Bottles Collection",
    },
  ])

  // Track the selected image for preview
  const [selectedImage, setSelectedImage] = useState(images[0])

  // Function to update the fourth frame with the new Sea Moss image
  const updateFourthImage = () => {
    const updatedImages = images.map((img) =>
      img.id === 4 ? { ...img, src: "/uploads/seamoss_fourth_image.png" } : img,
    )
    setImages(updatedImages)
    setSelectedImage(updatedImages[3]) // Update main image preview
  }

  return (
    <div className="product-gallery">
      {/* Thumbnail Sidebar */}
      <div className="thumbnail-gallery">
        {images.map((img) => (
          <div
            key={img.id}
            className={`thumbnail-container ${selectedImage.id === img.id ? "active" : ""}`}
            onClick={() => setSelectedImage(img)}
          >
            <Image src={img.src || "/placeholder.svg"} alt={img.alt} width={60} height={60} className="thumbnail" />
          </div>
        ))}
      </div>

      {/* Main Image Display */}
      <div className="main-image">
        <Image
          src={selectedImage.src || "/placeholder.svg"}
          alt={selectedImage.alt}
          width={400}
          height={400}
          className="product-image"
        />
      </div>

      {/* Upload New Image Button */}
      <button className="upload-btn" onClick={updateFourthImage}>
        Upload Fourth Image
      </button>

      <style jsx>{`
        .product-gallery {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        .thumbnail-gallery {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .thumbnail-container {
          width: 60px;
          height: 60px;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
          overflow: hidden;
          position: relative;
        }
        .thumbnail-container.active {
          border: 2px solid #32cd32;
        }
        .main-image {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 400px;
          height: 400px;
          position: relative;
        }
        .upload-btn {
          background-color: #32cd32;
          color: white;
          border: none;
          padding: 10px 15px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
          transition: 0.3s;
        }
        .upload-btn:hover {
          background-color: #28a428;
        }
      `}</style>
    </div>
  )
}


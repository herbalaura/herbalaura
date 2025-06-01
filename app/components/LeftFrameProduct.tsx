import Image from "next/image"

export default function LeftFrameProduct({ 
  imageSrc = "/images/product-default.jpg", 
  imageAlt = "Product Image",
  width = 500,
  height = 750
}) {
  return (
    <div className="relative overflow-hidden group">
      <div className="relative w-full h-[750px] flex items-center justify-center">
        <Image 
          src={imageSrc} 
          alt={imageAlt}
          width={width}
          height={height}
          className="w-auto h-[750px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-150"
          priority
        />
      </div>
    </div>
  )
} 
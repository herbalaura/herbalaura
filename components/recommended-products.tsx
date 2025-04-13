import Image from "next/image"

export default function RecommendedProducts() {
  const products = [
    {
      name: "ASHWAGANDHA CAPSULES",
      description: "Stress Support & Adaptogen",
      price: "$34.99",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "SEA MOSS CAPSULES",
      description: "Immune Support & Vitality",
      price: "$27.99",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "ELDERBERRY EXTRACT",
      description: "Immune System Support",
      price: "$32.99",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "TURMERIC CAPSULES",
      description: "Joint Support & Inflammation",
      price: "$29.99",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div key={index} className="bg-[#f5f0ff] rounded-lg p-6 text-black">
          <div className="relative h-48 mb-4">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
          </div>
          <h3 className="font-bold mb-1">{product.name}</h3>
          <p className="text-sm mb-2">{product.description}</p>
          <p className="font-bold mb-4">{product.price}</p>
          <button className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 rounded-full border border-gray-200">
            QUICK ADD
          </button>
        </div>
      ))}
    </div>
  )
}


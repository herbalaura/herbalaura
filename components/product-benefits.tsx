import Image from "next/image"

export default function ProductBenefits() {
  const benefits = [
    {
      icon: "/placeholder.svg?height=64&width=64",
      title: "GLUTEN-FREE",
    },
    {
      icon: "/placeholder.svg?height=64&width=64",
      title: "NO SUGAR ADDED",
    },
    {
      icon: "/placeholder.svg?height=64&width=64",
      title: "VEGETARIAN",
    },
    {
      icon: "/placeholder.svg?height=64&width=64",
      title: "NO ARTIFICIAL SWEETENERS OR SYNTHETIC COLORS",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      {benefits.map((benefit, index) => (
        <div key={index}>
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-4 border border-gray-200">
            <Image src={benefit.icon || "/placeholder.svg"} alt={benefit.title} width={64} height={64} />
          </div>
          <h3 className="font-bold">{benefit.title}</h3>
        </div>
      ))}
    </div>
  )
}


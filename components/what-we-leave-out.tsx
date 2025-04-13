export default function WhatWeLeaveOut() {
  const avoidedIngredients = [
    "Artificial Colors",
    "Synthetic Fillers",
    "GMOs",
    "Gluten",
    "Dairy",
    "Soy",
    "Artificial Preservatives",
    "Artificial Flavors",
  ]

  return (
    <section className="py-16 bg-[#022f1c] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-black rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">What We Leave Out</h2>
              <p className="mb-6">
                At Herbal Aura, we believe what we leave out is just as important as what we put in. Our products are
                formulated without:
              </p>
              <ul className="grid grid-cols-2 gap-y-2">
                {avoidedIngredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-[#a3ff00]">✕</span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2a7d3f] p-8">
              <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
              <p className="mb-4">We're committed to creating products that are:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-[#a3ff00]">✓</span>
                  100% Organic
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#a3ff00]">✓</span>
                  Sustainably Sourced
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#a3ff00]">✓</span>
                  Ethically Harvested
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#a3ff00]">✓</span>
                  Third-Party Tested
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


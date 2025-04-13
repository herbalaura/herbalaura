"use client"

import { useState } from "react"

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("benefits")

  return (
    <div>
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("benefits")}
          className={`py-2 px-4 ${activeTab === "benefits" ? "border-b-2 border-black font-medium" : "text-gray-500"}`}
        >
          Product benefits
        </button>
        <button
          onClick={() => setActiveTab("facts")}
          className={`py-2 px-4 ${activeTab === "facts" ? "border-b-2 border-black font-medium" : "text-gray-500"}`}
        >
          Supplement Facts
        </button>
      </div>

      <div className="py-4">
        {activeTab === "benefits" && (
          <div>
            <p className="mb-4">Our premium Mullein Leaf Capsules are formulated to support:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respiratory health and lung function*</li>
              <li>Clear breathing and seasonal wellness*</li>
              <li>Healthy immune system response*</li>
              <li>Overall respiratory comfort*</li>
            </ul>
            <p className="mt-4">
              Mullein leaf has been used in traditional herbalism for centuries to support the respiratory system. Our
              organic, sustainably sourced mullein leaf extract is carefully processed to preserve its beneficial
              compounds.
            </p>
          </div>
        )}

        {activeTab === "facts" && (
          <div>
            <p className="font-bold mb-2">Supplement Facts</p>
            <p className="mb-2">Serving Size: 2 Capsules</p>
            <p className="mb-4">Servings Per Container: 30</p>

            <div className="border-t border-b border-gray-200 py-2 flex justify-between">
              <span>Organic Mullein Leaf Extract</span>
              <span>500mg</span>
            </div>

            <p className="mt-4 text-sm">Other Ingredients: Organic Pullulan Capsule, Organic Rice Concentrate</p>
            <p className="mt-2 text-sm">Suggested Use: Take 2 capsules daily with water, preferably with food.</p>
          </div>
        )}
      </div>
    </div>
  )
}


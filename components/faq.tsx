"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I take Herbal Aura Mullein Leaf Capsules?",
      answer:
        "We recommend taking 2 capsules daily with water, preferably with food. For best results, take consistently as part of your daily wellness routine.",
    },
    {
      question: "Are Herbal Aura products organic?",
      answer:
        "Yes, all Herbal Aura products are made with 100% organic herbs that are sustainably sourced and third-party tested for purity and potency.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Individual results may vary. Many customers report feeling benefits within 1-2 weeks of consistent use, while others may take up to 30 days to experience the full effects.",
    },
    {
      question: "Can I take this with other supplements?",
      answer:
        "Herbal Aura products are designed to complement each other and can generally be taken together. However, we always recommend consulting with your healthcare provider before starting any new supplement regimen, especially if you are taking medications.",
    },
    {
      question: "What is your shipping policy?",
      answer:
        "We offer free shipping on all orders over $50 within the continental US. Orders typically ship within 1-2 business days and arrive within 3-5 business days.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left font-medium"
          >
            {faq.question}
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 flex-shrink-0" />
            )}
          </button>

          {openIndex === index && <div className="mt-2 text-gray-600">{faq.answer}</div>}
        </div>
      ))}
    </div>
  )
}


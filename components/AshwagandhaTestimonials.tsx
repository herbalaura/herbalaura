"use client"

import ProductTestimonials from "./ProductTestimonials"

const ashwagandhaTestimonials = [
  {
    name: "Melissa T.",
    date: "January 22, 2024",
    text: "Ashwagandha has completely changed how I handle busy work weeks. I no longer feel overwhelmed or mentally foggy in the afternoons. My focus and mood have both improved since starting this supplement.",
    rating: 5
  },
  {
    name: "David R.",
    date: "May 3, 2024",
    text: "After hearing about Ashwagandha from a friend, I decided to try it for my energy and overall wellness. I feel more grounded and less reactive, especially in stressful situations. It's become a staple in my daily supplement stack.",
    rating: 5
  },
  {
    name: "Jessica K.",
    date: "February 8, 2024",
    text: "As someone who struggles with anxiety, Ashwagandha has been a game-changer. I notice a significant difference in my stress levels and sleep quality. I feel more balanced and resilient when facing daily challenges.",
    rating: 5
  }
]

export default function AshwagandhaTestimonials() {
  return <ProductTestimonials testimonials={ashwagandhaTestimonials} title="Ashwagandha Testimonials" />
} 
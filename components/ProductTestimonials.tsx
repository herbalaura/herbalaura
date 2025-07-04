"use client"

import { motion } from "framer-motion"

interface Testimonial {
  name: string
  date: string
  text: string
  rating: number
}

interface ProductTestimonialsProps {
  testimonials: Testimonial[]
  title?: string
}

export default function ProductTestimonials({ testimonials, title = "Customer Testimonials" }: ProductTestimonialsProps) {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">{title}</h2>}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-green-900 to-black rounded-xl p-6 shadow-md"
            >
              <p className="text-yellow-400 text-lg mb-2">
                {"★".repeat(testimonial.rating)}
              </p>
              <h3 className="text-white text-xl font-semibold mb-1">{testimonial.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{testimonial.date}</p>
              <p className="text-white">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 
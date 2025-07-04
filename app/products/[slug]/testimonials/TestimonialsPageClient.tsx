"use client"

import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import EnhancedNavbar from "@/components/EnhancedNavbar";
import NavbarSpacer from "@/components/NavbarSpacer";
import EnhancedFooter from "@/components/EnhancedFooter";
import { ProductData } from "@/lib/productData";

interface TestimonialsPageClientProps {
  product: ProductData;
  slug: string;
}

export default function TestimonialsPageClient({ product, slug }: TestimonialsPageClientProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#222_0%,_#111_50%,_#000_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/90"></div>
        </div>
      </div>

      {/* Navigation */}
      <EnhancedNavbar />
      <NavbarSpacer />

      {/* Main Content */}
      <main className="relative container mx-auto px-6 pt-12 pb-32 flex-grow">
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex text-sm">
              <Link href="/" className="text-gray-400 hover:text-[#a3ff00]">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/products" className="text-gray-400 hover:text-[#a3ff00]">
                Products
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href={`/products/${slug}`} className="text-gray-400 hover:text-[#a3ff00]">
                {product.title}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-white">Testimonials</span>
            </nav>
          </div>

          {/* Header */}
          <div className="mb-12">
            <Link 
              href={`/products/${slug}`} 
              className="inline-flex items-center text-[#a3ff00] hover:underline mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to {product.title}
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Customer Testimonials for {product.title}
            </h1>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#a3ff00] fill-[#a3ff00]" />
                ))}
              </div>
              <span className="ml-2 text-white/70">{product.reviewCount} verified reviews</span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-900 to-black rounded-xl p-6 shadow-md"
              >
                <p className="text-yellow-400 text-lg mb-2">
                  {"★".repeat(testimonial.rating)}
                </p>
                <h3 className="text-white text-xl font-semibold mb-1">{testimonial.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{testimonial.date}</p>
                <p className="text-white">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Additional testimonials - these could be added to the product data if needed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Additional testimonials could be added here */}
            <div
              className="bg-gradient-to-r from-green-900 to-black rounded-xl p-6 shadow-md"
            >
              <p className="text-yellow-400 text-lg mb-2">★★★★★</p>
              <h3 className="text-white text-xl font-semibold mb-1">Michael T.</h3>
              <p className="text-gray-300 text-sm mb-4">June 12, 2024</p>
              <p className="text-white">
                I've tried many supplements before, but this one actually delivers on its promises. 
                I feel more energetic and my overall health has improved since I started taking it.
              </p>
            </div>

            <div
              className="bg-gradient-to-r from-green-900 to-black rounded-xl p-6 shadow-md"
            >
              <p className="text-yellow-400 text-lg mb-2">★★★★★</p>
              <h3 className="text-white text-xl font-semibold mb-1">Rebecca L.</h3>
              <p className="text-gray-300 text-sm mb-4">May 30, 2024</p>
              <p className="text-white">
                The quality of this product is exceptional. I appreciate the sustainable packaging and 
                the fact that it's made with organic ingredients. Will definitely purchase again.
              </p>
            </div>

            <div
              className="bg-gradient-to-r from-green-900 to-black rounded-xl p-6 shadow-md"
            >
              <p className="text-yellow-400 text-lg mb-2">★★★★★</p>
              <h3 className="text-white text-xl font-semibold mb-1">David K.</h3>
              <p className="text-gray-300 text-sm mb-4">April 18, 2024</p>
              <p className="text-white">
                I was skeptical at first, but after using this product for a month, I'm a believer. 
                The results speak for themselves. My friends have even noticed the difference!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <EnhancedFooter />
    </div>
  );
} 
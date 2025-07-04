import { notFound } from "next/navigation"
import ProductPageClient from "./ProductPageClient"
import { productData } from "@/lib/productData"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug]

  if (!product) {
    return notFound()
  }

  return <ProductPageClient product={product} slug={params.slug} />
}

// Generate static params for all products
export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({
    slug,
  }))
} 
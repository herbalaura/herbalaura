import { productData } from "@/lib/productData";
import { notFound } from "next/navigation";
import TestimonialsPageClient from "./TestimonialsPageClient";

export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({
    slug,
  }));
}

export default function ProductTestimonialsPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug];
  
  if (!product) {
    return notFound();
  }

  return <TestimonialsPageClient product={product} slug={params.slug} />;
} 
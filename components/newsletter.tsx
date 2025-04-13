export default function Newsletter() {
  return (
    <section className="py-16 bg-[#f5f0ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Be First to Get the Goods</h2>
          <p className="mb-6">
            Sign up for our newsletter to receive exclusive offers, wellness tips, and updates on new products.
          </p>

          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2a7d3f]"
              required
            />
            <button
              type="submit"
              className="bg-[#2a7d3f] hover:bg-[#1f5c2e] text-white font-bold py-3 px-8 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}


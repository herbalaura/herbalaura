"use client"

import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-green-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="text-lg font-bold">100% Organic Ingredients</h3>
            <p className="text-sm text-gray-300 mt-2">Sourced from the finest natural herbs with no additives.</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-3">🧪</div>
            <h3 className="text-lg font-bold">Lab-Tested for Purity & Potency</h3>
            <p className="text-sm text-gray-300 mt-2">Every batch is tested to ensure the highest quality.</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-lg font-bold">Sustainably Sourced</h3>
            <p className="text-sm text-gray-300 mt-2">Eco-friendly and ethical harvesting practices.</p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-3">🚫</div>
            <h3 className="text-lg font-bold">No Artificial Additives or Fillers</h3>
            <p className="text-sm text-gray-300 mt-2">Only clean, effective ingredients.</p>
          </div>
        </div>

        <div className="what-we-leave-container">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* First image frame - ENLARGED */}
            <div className="relative w-full md:w-[550px] h-[550px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 rounded-lg"></div>
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center animate-[float_6s_ease-in-out_infinite] mt-8">
                <div className="absolute inset-0 rounded-full bg-green-500/50 blur-xl animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-jLkLFMetVajzPi5HMUDtJC8R8wQyIG.png"
                  alt="What We Leave In"
                  width={420}
                  height={504}
                  className="object-contain opacity-80 transform rotate-[270deg] mt-22 scale-110"
                />
              </div>
            </div>

            {/* Second image frame - ENLARGED */}
            <div className="relative w-full md:w-[550px] h-[550px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 rounded-lg"></div>
              <div className="absolute inset-0 bg-black/5 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center animate-[float_6s_ease-in-out_infinite] mt-4">
                <div className="absolute inset-0 rounded-full bg-red-500/50 blur-xl animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-82FZMwS9Xc8BI31BkIYaYylqDa5GDI.png"
                  alt="What We Leave Out"
                  width={420}
                  height={504}
                  className="object-contain opacity-80 transform rotate-[270deg] mt-22 scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .what-we-leave-container {
          position: relative;
          top: -80px; /* Moves section up */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes gradient-shift {
          0% {
            transform: translateX(-50%) rotate(0deg);
          }
          50% {
            transform: translateX(50%) rotate(5deg);
          }
          100% {
            transform: translateX(-50%) rotate(0deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        @keyframes move-up {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(2deg);
          }
        }
      `}</style>
    </section>
  )
}


"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Leaf, ShoppingCart, ChevronRight, Lock } from "lucide-react"
import Image from "next/image"

const plans = [
  {
    name: "Starter Pack",
    price: 29.99,
    description: "Perfect for beginners",
    features: ["30-day supply", "Free shipping", "24/7 support"],
  },
  {
    name: "Wellness Bundle",
    price: 49.99,
    description: "Most popular choice",
    features: ["60-day supply", "Free shipping", "24/7 support", "Personalized plan"],
  },
  {
    name: "Premium Package",
    price: 79.99,
    description: "For dedicated users",
    features: ["90-day supply", "Free shipping", "24/7 support", "Personalized plan", "Exclusive bonuses"],
  },
]

export default function SubscribeAndSaveMobile() {
  const [isSubscription, setIsSubscription] = useState(false)
  const [currentPlan, setCurrentPlan] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50
    if (info.offset.x > threshold && currentPlan > 0) {
      setCurrentPlan(currentPlan - 1)
    } else if (info.offset.x < -threshold && currentPlan < plans.length - 1) {
      setCurrentPlan(currentPlan + 1)
    }
    controls.start({ x: -currentPlan * 100 + "%" })
  }

  useEffect(() => {
    controls.start({ x: -currentPlan * 100 + "%" })
  }, [currentPlan, controls])

  return (
    <section className="py-16 bg-gradient-to-b from-[#022f1c] to-[#011f18] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 hero-text-3d" data-text="Subscribe & Save">
          Subscribe & Save
        </h2>

        <div className="flex justify-center items-center mb-8 space-x-2">
          <span className={`text-sm ${!isSubscription ? "text-[#a3ff00]" : "text-gray-400"}`}>One-Time</span>
          <Switch
            checked={isSubscription}
            onCheckedChange={setIsSubscription}
            className="data-[state=checked]:bg-[#2a7d3f]"
          />
          <span className={`text-sm ${isSubscription ? "text-[#a3ff00]" : "text-gray-400"}`}>Subscribe (15% Off)</span>
        </div>

        <div className="relative overflow-hidden mb-8" ref={carouselRef}>
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={carouselRef}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {plans.map((plan, index) => (
              <div key={plan.name} className="w-full flex-shrink-0">
                <Card className="bg-black/30 backdrop-blur-sm border border-green-900/30 overflow-hidden mx-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-[#a3ff00]">{plan.name}</CardTitle>
                    <p className="text-xs text-gray-400">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold mb-2">
                      ${isSubscription ? (plan.price * 0.85).toFixed(2) : plan.price.toFixed(2)}
                      <span className="text-xs font-normal">{isSubscription ? "/month" : ""}</span>
                    </p>
                    <ul className="space-y-1 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Leaf className="w-4 h-4 mr-1 text-[#a3ff00]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-[#2a7d3f] hover:bg-[#3a8d4f] text-white text-sm py-2"
                      onClick={() => setCurrentPlan(index)}
                    >
                      {currentPlan === index ? "Selected" : "Choose Plan"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center space-x-2 mb-8">
          {plans.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${currentPlan === index ? "bg-[#a3ff00]" : "bg-gray-600"}`}
              onClick={() => setCurrentPlan(index)}
            ></div>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-8">
          <h3 className="text-lg font-bold mb-2">Loyalty Rewards</h3>
          <div className="flex items-center mb-2">
            <Progress value={60} className="flex-grow mr-2" />
            <span className="text-sm">60/100 pts</span>
          </div>
          <p className="text-xs mb-2">Earn 1 point per $1 spent. Redeem for discounts!</p>
          <div className="flex justify-between items-center">
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <Image
                  key={i}
                  src="/placeholder.svg?height=20&width=20"
                  alt="Leaf badge"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              ))}
            </div>
            <Button variant="outline" size="sm" className="text-[#a3ff00] border-[#a3ff00] text-xs">
              Learn More
              <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#2a7d3f] hover:bg-[#3a8d4f] text-white px-6 py-3 rounded-full text-base font-semibold mb-4 glow w-full"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Start Saving Now
          </Button>
          <p className="text-xs text-gray-400 flex justify-center items-center">
            <Lock className="mr-1 h-3 w-3" />
            Secure Payments | Cancel Anytime
          </p>
        </div>
      </div>
    </section>
  )
}


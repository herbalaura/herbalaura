"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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

export default function SubscribeAndSave() {
  const [isSubscription, setIsSubscription] = useState(false)
  const [currentPlan, setCurrentPlan] = useState(1)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-[#022f1c] to-[#011f18] text-white"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 hero-text-3d"
          data-text="Subscribe & Save – Unlock Monthly Discounts & Rewards!"
        >
          Subscribe & Save – Unlock Monthly Discounts & Rewards!
        </h2>

        <div className="flex justify-center items-center mb-12 space-x-4">
          <span className={`text-lg ${!isSubscription ? "text-[#a3ff00]" : "text-gray-400"}`}>One-Time Purchase</span>
          <Switch
            checked={isSubscription}
            onCheckedChange={setIsSubscription}
            className="data-[state=checked]:bg-[#2a7d3f]"
          />
          <span className={`text-lg ${isSubscription ? "text-[#a3ff00]" : "text-gray-400"}`}>
            Subscribe & Save (15% Off Monthly)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Card className="bg-black/30 backdrop-blur-sm border border-green-900/30 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#a3ff00]">{plan.name}</CardTitle>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-4">
                    ${isSubscription ? (plan.price * 0.85).toFixed(2) : plan.price.toFixed(2)}
                    <span className="text-sm font-normal">{isSubscription ? "/month" : ""}</span>
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Leaf className="w-5 h-5 mr-2 text-[#a3ff00]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#2a7d3f] hover:bg-[#3a8d4f] text-white"
                    onClick={() => setCurrentPlan(index)}
                  >
                    {currentPlan === index ? "Selected" : "Choose Plan"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-12">
          <h3 className="text-2xl font-bold mb-4">Loyalty Rewards</h3>
          <div className="flex items-center mb-4">
            <Progress value={60} className="flex-grow mr-4" />
            <span>60/100 points</span>
          </div>
          <p className="mb-4">Earn 1 point per $1 spent. Redeem points for exclusive discounts!</p>
          <div className="flex justify-between items-center">
            <div className="flex">
              {[...Array(3)].map((_, i) => (
                <Image
                  key={i}
                  src="/placeholder.svg?height=24&width=24"
                  alt="Leaf badge"
                  width={24}
                  height={24}
                  className="mr-2"
                />
              ))}
            </div>
            <Button variant="outline" className="text-[#a3ff00] border-[#a3ff00]">
              Learn More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#2a7d3f] hover:bg-[#3a8d4f] text-white px-8 py-3 rounded-full text-lg font-semibold mb-4 glow"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Start Saving Now
          </Button>
          <p className="text-sm text-gray-400 flex justify-center items-center">
            <Lock className="mr-2 h-4 w-4" />
            Secure Payments | Cancel Anytime
          </p>
        </div>
      </div>
    </motion.section>
  )
}


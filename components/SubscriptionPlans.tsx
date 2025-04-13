"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronRight, Gift, Truck, Star, Crown, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function SubscriptionPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })

  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners",
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: [
        "Monthly delivery of selected products",
        "10% off all regular purchases",
        "Free shipping on subscription orders",
        "Email support",
      ],
      popular: false,
      cta: "Start Basic Plan",
    },
    {
      name: "Standard",
      description: "Our most popular choice",
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: [
        "Monthly delivery of selected products",
        "15% off all regular purchases",
        "Free shipping on all orders",
        "Priority email support",
        "Early access to new products",
      ],
      popular: true,
      cta: "Choose Standard Plan",
    },
    {
      name: "Premium",
      description: "The ultimate wellness experience",
      monthlyPrice: 79.99,
      yearlyPrice: 799.99,
      features: [
        "Monthly delivery of selected products",
        "20% off all regular purchases",
        "Free express shipping on all orders",
        "24/7 priority support",
        "Early access to new products",
        "Exclusive wellness consultation",
        "VIP member events",
      ],
      popular: false,
      cta: "Go Premium",
    },
  ]

  const benefits = [
    {
      icon: <ShoppingBag className="w-10 h-10 text-[#a3ff00]" />,
      title: "Save Up to 20%",
      description: "Enjoy significant discounts on all your favorite products with our subscription plans.",
    },
    {
      icon: <Truck className="w-10 h-10 text-[#a3ff00]" />,
      title: "Free Shipping",
      description: "Never pay for shipping again with free delivery on all subscription orders.",
    },
    {
      icon: <Star className="w-10 h-10 text-[#a3ff00]" />,
      title: "Early Access",
      description: "Be the first to try our newest products before they're available to the public.",
    },
    {
      icon: <Crown className="w-10 h-10 text-[#a3ff00]" />,
      title: "VIP Perks",
      description: "Enjoy exclusive benefits like wellness consultations and member-only events.",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000] to-[#022f1c]"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Aurora waves effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`aurora-${i}`}
              className="absolute w-full h-[30vh] rounded-[100%]"
              style={{
                background:
                  i % 2 === 0
                    ? `linear-gradient(90deg, transparent, rgba(163, 255, 0, ${0.05 + i * 0.01}), transparent)`
                    : `linear-gradient(90deg, transparent, rgba(42, 125, 63, ${0.05 + i * 0.01}), transparent)`,
                bottom: `${-10 + i * 5}%`,
                left: "0",
                filter: "blur(60px)",
                transformOrigin: "center bottom",
              }}
              animate={{
                scaleX: [0.8, 1.2, 0.8],
                scaleY: [0.3, 0.4, 0.3],
                x: ["-10%", "10%", "-10%"],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(circle at center, rgba(163, 255, 0, 0.15), transparent 60%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle at 30% 30%, rgba(163, 255, 0, 0.6), rgba(163, 255, 0, 0.2))"
                  : "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.2))",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 4px rgba(255, 255, 255, 0.5)",
              filter: "blur(1px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Larger glowing orbs */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${30 + Math.random() * 60}px`,
              height: `${30 + Math.random() * 60}px`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle at 30% 30%, rgba(163, 255, 0, 0.4), rgba(163, 255, 0, 0))"
                  : "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(8px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Light beams */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute opacity-10"
            style={{
              width: "150%",
              height: "20px",
              background:
                i % 2 === 0
                  ? "linear-gradient(90deg, transparent, rgba(163, 255, 0, 0.2), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
              left: "-25%",
              top: `${15 + i * 25}%`,
              transform: `rotate(${-20 + i * 15}deg)`,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 7,
            }}
          />
        ))}

        {/* Subtle energy waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-[200%] h-[200%] rounded-[100%] opacity-5"
            style={{
              border: `1px solid rgba(163, 255, 0, ${0.1 + i * 0.05})`,
              left: "-50%",
              top: "-50%",
              filter: "blur(30px)",
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-[#a3ff00]/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-20 bottom-40 w-60 h-60 rounded-full bg-[#a3ff00]/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white font-bebas-neue tracking-wider">
            Subscribe & Save
          </h2>
          <p className="text-lg md:text-xl text-[#a3ff00] max-w-3xl mx-auto">
            Join our wellness journey with flexible subscription plans designed to support your health goals while
            saving you money.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center items-center mb-12 space-x-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className={`text-lg ${billingCycle === "monthly" ? "text-[#a3ff00]" : "text-gray-400"}`}>Monthly</span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            className="data-[state=checked]:bg-[#2a7d3f]"
          />
          <div className="flex items-center">
            <span className={`text-lg ${billingCycle === "yearly" ? "text-[#a3ff00]" : "text-gray-400"}`}>Yearly</span>
            <Badge className="ml-2 bg-[#a3ff00] text-black font-medium">Save 15%</Badge>
          </div>
        </motion.div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-[#a3ff00] transform md:-translate-y-4 md:scale-105"
                  : "border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#a3ff00] text-black text-center py-1 font-medium">
                  Most Popular
                </div>
              )}
              <div className="bg-black/30 backdrop-blur-sm p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === "monthly" ? plan.monthlyPrice.toFixed(2) : (plan.yearlyPrice / 12).toFixed(2)}
                    </span>
                    <span className="text-white/60 ml-2 mb-1">/month</span>
                  </div>
                  {billingCycle === "yearly" && (
                    <div className="text-[#a3ff00] text-sm mt-1">${plan.yearlyPrice.toFixed(2)} billed yearly</div>
                  )}
                </div>

                <div className="mb-8 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-[#a3ff00] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[#a3ff00] hover:bg-[#b4ff3a] text-black"
                      : "bg-[#2a7d3f] hover:bg-[#3a8d4f] text-white"
                  } transition-all duration-300 group`}
                >
                  <span>{plan.cta}</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Subscribe Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Why <span className="text-[#a3ff00]">Subscribe</span> With Us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative p-8 rounded-xl overflow-hidden">
            {/* White light effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-70 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] opacity-20 pointer-events-none"></div>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#a3ff00]/30 transition-all duration-300 group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-[#a3ff00] transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#022f1c]/80 to-[#022f1c]/40 backdrop-blur-sm rounded-xl p-8 md:p-12 max-w-4xl mx-auto border border-[#a3ff00]/20">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-12 h-12 text-[#a3ff00] mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to start your wellness journey?</h3>
            </div>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              JOIN NOW! With thousands of satisfied customers who have transformed their health with our premium organic
              supplements. Subscribe today and experience the difference. IT STARTS WITHIN!
            </p>
            <Link href="/subscribe">
              <Button
                size="lg"
                className="bg-[#a3ff00] hover:bg-[#b4ff3a] text-black px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(163,255,0,0.5)]"
              >
                Subscribe & Save Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-white/60 mt-4 text-sm">
              No commitment required. Cancel or modify your subscription anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


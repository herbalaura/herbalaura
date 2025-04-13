"use client"

import { useRef, useEffect } from "react"
import { useAnimate, stagger } from "framer-motion"

export const useZoomAnimation = (count: number) => {
  const [scope, animate] = useAnimate()
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    animate("div", { scale: [0.8, 1], opacity: [0, 1] }, { duration: 0.8, delay: stagger(0.2) })
  }, [animate])

  return { scope }
}


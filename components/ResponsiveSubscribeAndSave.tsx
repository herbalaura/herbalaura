"use client"

import { useState, useEffect } from "react"
import SubscribeAndSave from "./SubscribeAndSave"
import SubscribeAndSaveMobile from "./SubscribeAndSaveMobile"

export default function ResponsiveSubscribeAndSave() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile ? <SubscribeAndSaveMobile /> : <SubscribeAndSave />
}


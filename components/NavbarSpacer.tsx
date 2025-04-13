"use client"

import { useState, useEffect } from "react"

export default function NavbarSpacer() {
  const [height, setHeight] = useState(96)

  useEffect(() => {
    const handleResize = () => {
      // Adjust the height based on screen size
      setHeight(window.innerWidth < 768 ? 72 : 96)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <div style={{ height: `${height}px` }}></div>
}


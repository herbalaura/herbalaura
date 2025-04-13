"use client"

import type React from "react"

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "md", ...props }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantClasses = {
    primary: "bg-[#2a7d3f] hover:bg-[#3a8d4f] text-white",
    secondary: "bg-[#a3ff00] hover:bg-[#b4ff3a] text-black",
    outline: "bg-transparent border border-[#a3ff00] text-[#a3ff00] hover:bg-[#a3ff00]/10",
  }

  return (
    <button className={`font-semibold ${sizeClasses[size]} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  )
}

export default Button


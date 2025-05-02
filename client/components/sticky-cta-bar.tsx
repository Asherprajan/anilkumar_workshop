"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function StickyCtaBar() {
  const [seatsLeft, setSeatsLeft] = useState(17) // Random initial value for demo

  // Simulate decreasing seats randomly
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7 && seatsLeft > 1) {
        setSeatsLeft((prev) => prev - 1)
      }
    }, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [seatsLeft])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg py-3 px-4 z-50 transition-all duration-300 transform translate-y-0 safe-area-bottom">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <p className="font-medium text-slate-900 text-sm sm:text-base">Book Your Seat Now for Just ₹5,999/-</p>
          <div className="flex items-center justify-center sm:justify-start text-[#e85d3d] text-xs sm:text-sm mt-1">
            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span>Only {seatsLeft} seats left!</span>
          </div>
        </div>
        <div className="relative w-full sm:w-auto">
          {/* Progress bar to show urgency */}
          <div className="absolute -top-3 left-0 right-0 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#e85d3d] animate-pulse"
              style={{ width: `${Math.min(100, (25 - seatsLeft) * 4)}%` }}
            ></div>
          </div>

          <Button className="bg-[#e85d3d] hover:bg-[#d94c2c] h-auto py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-lg animate-button-pulse w-full sm:w-auto">
            Register Now at ₹5,999 Only
          </Button>
        </div>
      </div>
    </div>
  )
}

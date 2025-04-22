"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 4,
    minutes: 46,
    seconds: 11,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              } else {
                // Timer complete
                clearInterval(timer)
                return prev
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-rose-600 font-medium mb-2 animate-pulse">Limited Time Offer - Ending Soon!</p>
      <div className="flex justify-center gap-4">
        <div className="text-center">
          <div className="bg-slate-800 text-white rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
            {formatNumber(timeLeft.days)}
          </div>
          <p className="text-xs mt-1 text-slate-600">Days</p>
        </div>
        <div className="text-center">
          <div className="bg-slate-800 text-white rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
            {formatNumber(timeLeft.hours)}
          </div>
          <p className="text-xs mt-1 text-slate-600">Hours</p>
        </div>
        <div className="text-center">
          <div className="bg-slate-800 text-white rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
            {formatNumber(timeLeft.minutes)}
          </div>
          <p className="text-xs mt-1 text-slate-600">Minutes</p>
        </div>
        <div className="text-center">
          <div className="bg-slate-800 text-white rounded-lg w-16 h-16 flex items-center justify-center text-2xl font-bold">
            {formatNumber(timeLeft.seconds)}
          </div>
          <p className="text-xs mt-1 text-slate-600">Seconds</p>
        </div>
      </div>
      <p className="text-sm text-slate-600 mt-2">After this, price increases to ₹1,999/-</p>
    </div>
  )
}


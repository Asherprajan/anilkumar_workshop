"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string; // Format: "YYYY-MM-DD HH:MM:SS"
  className?: string;
  compact?: boolean;
}

export default function CountdownTimer({ targetDate, className = '', compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  // Format numbers to always have two digits
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  if (compact) {
    return (
      <div className={`grid grid-cols-4 gap-1 ${className}`}>
        <div className="bg-slate-800 text-white rounded p-1 text-center">
          <p className="text-lg font-bold">{formatNumber(timeLeft.days)}</p>
          <p className="text-[10px]">DAYS</p>
        </div>
        <div className="bg-slate-800 text-white rounded p-1 text-center">
          <p className="text-lg font-bold">{formatNumber(timeLeft.hours)}</p>
          <p className="text-[10px]">HOURS</p>
        </div>
        <div className="bg-slate-800 text-white rounded p-1 text-center">
          <p className="text-lg font-bold">{formatNumber(timeLeft.minutes)}</p>
          <p className="text-[10px]">MINUTES</p>
        </div>
        <div className="bg-slate-800 text-white rounded p-1 text-center">
          <p className="text-lg font-bold">{formatNumber(timeLeft.seconds)}</p>
          <p className="text-[10px]">SECONDS</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-4 gap-2 ${className}`}>
      <div className="bg-slate-800 text-white rounded p-2 text-center">
        <p className="text-2xl font-bold">{formatNumber(timeLeft.days)}</p>
        <p className="text-xs">DAYS</p>
      </div>
      <div className="bg-slate-800 text-white rounded p-2 text-center">
        <p className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</p>
        <p className="text-xs">HOURS</p>
      </div>
      <div className="bg-slate-800 text-white rounded p-2 text-center">
        <p className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</p>
        <p className="text-xs">MINUTES</p>
      </div>
      <div className="bg-slate-800 text-white rounded p-2 text-center">
        <p className="text-2xl font-bold">{formatNumber(timeLeft.seconds)}</p>
        <p className="text-xs">SECONDS</p>
      </div>
    </div>
  )
}


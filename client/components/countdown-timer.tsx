"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export type TimerTheme = "default" | "primary" | "dark" | "light" | "accent"
export type TimerSize = "sm" | "md" | "lg"

export interface CountdownTimerProps {
  targetDate: string; // Format: "YYYY-MM-DD HH:MM:SS"
  className?: string;
  theme?: TimerTheme;
  size?: TimerSize;
  compact?: boolean;
  showLabels?: boolean;
  onChange?: (timeLeft: TimeLeft) => void;
  onComplete?: () => void;
  hideZeroDays?: boolean;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export default function CountdownTimer({ 
  targetDate, 
  className = '', 
  theme = "default", 
  size = "md", 
  compact = false,
  showLabels = true,
  onChange,
  onComplete,
  hideZeroDays = false,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true })
        if (onComplete) onComplete()
        return true
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      const newTimeLeft = { days, hours, minutes, seconds, isComplete: false }
      setTimeLeft(newTimeLeft)
      if (onChange) onChange(newTimeLeft)
      return false
    }

    // Initial calculation
    const isComplete = calculateTimeLeft()
    if (isComplete) return

    const interval = setInterval(() => {
      const isComplete = calculateTimeLeft()
      if (isComplete) clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate, onChange, onComplete])

  // Format numbers to always have two digits
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  // Get theme-based styles
  const getThemeStyles = (): { container: string, box: string, digits: string, label: string } => {
    switch (theme) {
      case "primary":
        return {
          container: "gap-2",
          box: "bg-[#e85d3d] text-white shadow-sm",
          digits: "font-bold text-white",
          label: "text-slate-600 font-medium"
        }
      case "dark":
        return {
          container: "gap-2",
          box: "bg-gray-100 text-gray-900 shadow-sm",
          digits: "font-bold text-gray-900",
          label: "text-slate-600 font-medium"
        }
      case "light":
        return {
          container: "gap-2",
          box: "bg-slate-100 text-slate-800 shadow-sm",
          digits: "font-bold text-slate-800",
          label: "text-slate-600 font-medium"
        }
      case "accent":
        return {
          container: "gap-2",
          box: "bg-[#fff0ed] text-[#e85d3d] shadow-sm",
          digits: "font-bold text-[#e85d3d]",
          label: "text-slate-600 font-medium"
        }
      default:
        return {
          container: "gap-2",
          box: "bg-gray-100 text-gray-900 shadow-sm",
          digits: "font-bold text-gray-900",
          label: "text-slate-600 font-medium"
        }
    }
  }

  // Get size-based styles
  const getSizeStyles = (): { box: string, digits: string, label: string } => {
    switch (size) {
      case "sm":
        return {
          box: "w-14 h-14",
          digits: "text-xl",
          label: "text-xs"
        }
      case "lg":
        return {
          box: "w-20 h-20",
          digits: "text-3xl",
          label: "text-sm"
        }
      default: // md
        return {
          box: "w-16 h-16",
          digits: "text-2xl",
          label: "text-xs"
        }
    }
  }

  const themeStyles = getThemeStyles()
  const sizeStyles = getSizeStyles()

  // Determine which units to show
  const shouldShowDays = !hideZeroDays || timeLeft.days > 0

  return (
    <div className={cn(
      "flex justify-center", 
      themeStyles.container, 
      className
    )}>
      {shouldShowDays && (
        <div className="flex flex-col items-center">
          <div className={cn(themeStyles.box, sizeStyles.box, "flex items-center justify-center transition-all rounded-lg")}>
            <p className={cn(themeStyles.digits, sizeStyles.digits)}>{formatNumber(timeLeft.days)}</p>
          </div>
          {showLabels && <p className={cn(themeStyles.label, sizeStyles.label, "mt-1 uppercase text-center whitespace-nowrap")}>DAYS</p>}
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className={cn(themeStyles.box, sizeStyles.box, "flex items-center justify-center transition-all rounded-lg")}>
          <p className={cn(themeStyles.digits, sizeStyles.digits)}>{formatNumber(timeLeft.hours)}</p>
        </div>
        {showLabels && <p className={cn(themeStyles.label, sizeStyles.label, "mt-1 uppercase text-center whitespace-nowrap")}>HOURS</p>}
      </div>
      <div className="flex flex-col items-center">
        <div className={cn(themeStyles.box, sizeStyles.box, "flex items-center justify-center transition-all rounded-lg")}>
          <p className={cn(themeStyles.digits, sizeStyles.digits)}>{formatNumber(timeLeft.minutes)}</p>
        </div>
        {showLabels && <p className={cn(themeStyles.label, sizeStyles.label, "mt-1 uppercase text-center whitespace-nowrap")}>MINUTES</p>}
      </div>
      <div className="flex flex-col items-center">
        <div className={cn(themeStyles.box, sizeStyles.box, "flex items-center justify-center transition-all rounded-lg")}>
          <p className={cn(themeStyles.digits, sizeStyles.digits)}>{formatNumber(timeLeft.seconds)}</p>
        </div>
        {showLabels && <p className={cn(themeStyles.label, sizeStyles.label, "mt-1 uppercase text-center whitespace-nowrap")}>SECONDS</p>}
      </div>
    </div>
  )
}

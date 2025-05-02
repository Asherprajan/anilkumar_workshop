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
          container: "gap-1 sm:gap-2",
          box: "bg-[#e85d3d] text-white rounded-md shadow-sm",
          digits: "font-bold text-white",
          label: "text-white/90 font-medium"
        }
      case "dark":
        return {
          container: "gap-1 sm:gap-2",
          box: "bg-slate-800 text-white rounded-md shadow-sm",
          digits: "font-bold text-white",
          label: "text-slate-300 font-medium"
        }
      case "light":
        return {
          container: "gap-1 sm:gap-2",
          box: "bg-slate-100 text-slate-800 rounded-md shadow-sm border border-slate-200",
          digits: "font-bold text-slate-800",
          label: "text-slate-600 font-medium"
        }
      case "accent":
        return {
          container: "gap-1 sm:gap-2",
          box: "bg-[#fff0ed] text-[#e85d3d] rounded-md shadow-sm border border-[#ffcec2]",
          digits: "font-bold text-[#e85d3d]",
          label: "text-[#e85d3d]/80 font-medium"
        }
      default:
        return {
          container: "gap-1 sm:gap-2",
          box: "bg-slate-800 text-white rounded-md shadow-sm",
          digits: "font-bold text-white",
          label: "text-slate-300 font-medium"
        }
    }
  }

  // Get size-based styles
  const getSizeStyles = (): { box: string, digits: string, label: string } => {
    switch (size) {
      case "sm":
        return {
          box: compact ? "p-1" : "p-1.5",
          digits: compact ? "text-base" : "text-lg",
          label: compact ? "text-[9px]" : "text-[10px]"
        }
      case "lg":
        return {
          box: compact ? "p-2" : "p-3",
          digits: compact ? "text-2xl" : "text-3xl",
          label: compact ? "text-xs" : "text-sm"
        }
      default: // md
        return {
          box: compact ? "p-1.5" : "p-2",
          digits: compact ? "text-lg" : "text-2xl",
          label: compact ? "text-[10px]" : "text-xs"
        }
    }
  }

  const themeStyles = getThemeStyles()
  const sizeStyles = getSizeStyles()

  // Determine number of columns
  const shouldShowDays = !hideZeroDays || timeLeft.days > 0
  const numCols = shouldShowDays ? 4 : 3
  const gridColsClass = `grid-cols-${numCols}`

  return (
    <div className={cn(
      `grid ${gridColsClass}`, 
      themeStyles.container, 
      className
    )}>
      {shouldShowDays && (
        <div className={cn(themeStyles.box, sizeStyles.box, "text-center transition-all")}>
          <p className={cn(themeStyles.digits, sizeStyles.digits)}>{formatNumber(timeLeft.days)}</p>
          {showLabels && <p className={cn(themeStyles.label, sizeStyles.label)}>DAYS</p>}
        </div>
      )}
      <div className={cn(themeStyles.box, sizeStyles.box, "text-center transition-all")}>
        <p className={cn(themeStyles.digits, sizeStyles.digits)}>{formatNumber(timeLeft.hours)}</p>
        {showLabels && <p className={cn(themeStyles.label, sizeStyles.label)}>HOURS</p>}
      </div>
      <div className={cn(themeStyles.box, sizeStyles.box, "text-center transition-all")}>
        <p className={cn(themeStyles.digits, sizeStyles.digits)}>{formatNumber(timeLeft.minutes)}</p>
        {showLabels && <p className={cn(themeStyles.label, sizeStyles.label)}>MINUTES</p>}
      </div>
      <div className={cn(themeStyles.box, sizeStyles.box, "text-center transition-all")}>
        <p className={cn(themeStyles.digits, sizeStyles.digits)}>{formatNumber(timeLeft.seconds)}</p>
        {showLabels && <p className={cn(themeStyles.label, sizeStyles.label)}>SECONDS</p>}
      </div>
    </div>
  )
}


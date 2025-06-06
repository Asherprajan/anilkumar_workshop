"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Priya Sharma",
    title: "LIC Development Officer",
    company: "LIC India",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Anilkumar's workshop was a game-changer for my insurance career. Within 3 months of implementing his strategies, my team increased policy sales by 42% and I qualified for the Million Dollar Round Table.",
  },
  {
    name: "Vikram Mehta",
    title: "Branch Manager",
    company: "HDFC Life Insurance",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "After 7 years of struggling with agent retention, Anilkumar's agency-building systems helped me develop a stable team. My branch now consistently exceeds targets even during difficult quarters.",
  },
  {
    name: "Ananya Patel",
    title: "Senior Insurance Advisor",
    company: "Max Life Insurance",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The client acquisition strategies I learned from Anilkumar helped me grow from 10 to 40 policies per month in just 6 months. My renewal ratio also improved from 65% to 92%.",
  },
  {
    name: "Rahul Kapoor",
    title: "Agency Owner",
    company: "SBI Life Insurance",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "As an insurance agency owner, I was always struggling with team turnover. After implementing Anilkumar's frontline leadership strategies, my agent retention increased by 65% and our premium collection doubled.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount())

  function getVisibleCount() {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
    }
    return 1
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0))
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev < testimonials.length - visibleCount ? prev + 1 : prev))
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <p className="font-medium text-slate-900">{testimonial.name}</p>
                        <p className="text-sm text-slate-600">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#e85d3d] fill-[#e85d3d]" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic flex-grow">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonials</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={currentIndex >= testimonials.length - visibleCount}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonials</span>
        </Button>
      </div>
    </div>
  )
}


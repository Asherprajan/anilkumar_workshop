"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Briefcase,
  Award,
  BookOpen,
  Target,
  Shield,
  Star,
  MapPin,
} from "lucide-react";
import CountdownTimer from "@/components/countdown-timer";
import TestimonialCarousel from "@/components/testimonial-carousel";
import StickyCtaBar from "@/components/sticky-cta-bar";

function whatsapp(){
  window.location.href = 'https://chat.whatsapp.com/HLNDpcM5XJO8yjMcBoZ8Vi';
}

export default function BusinessWorkshop() {
  const handleRegisterClick = () => {
    window.location.href = 'https://rzp.io/rzp/bridge-foundation';
  };

  return (
    <main className="min-h-screen bg-white pb-32">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
        {/* Logo - Top Left Position with Shadow */}
        <span className="absolute top-4 left-4 z-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          <Image 
            src="/bridg_sales.png"
            alt="Bridg Sales Logo"
            width={120}
            height={48}
            className="h-auto"
          />
        </span>
        
        {/* Mobile Layout - Optimized for Conversion */}
        <div className="lg:hidden px-4 pt-4 pb-20">
          <div className="container mx-auto max-w-md">
            {/* Social Proof Banner - Immediate Trust Building */}
            <div className="bg-[#e7f8e6] rounded-full px-3 py-1.5 mb-4 flex items-center justify-center gap-2 animate-pulse">
              <div className="w-2 h-2 bg-[#38b137] rounded-full"></div>
              <p className="text-[#38b137] text-sm font-medium">
                <span className="font-bold">47 people</span> are viewing this
                workshop
              </p>
            </div>

            {/* Hero Image with Trust Indicators */}
            <div className="relative mb-6">
              <div className="aspect-square w-48 sm:w-56 mx-auto relative">
                <div className="absolute inset-0 bg-[#fff0ed]/30 rounded-lg blur-xl transform -rotate-6 scale-95"></div>
                <Image
                  src="/meetyour.png"
                  alt="N S Anilkumar"
                  width={200}
                  height={200}
                  className="object-cover rounded-lg shadow-xl relative z-10"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/60 to-transparent rounded-b-lg z-20"></div>

                {/* Visual Trust Elements */}
                <div className="absolute -top-2 -right-2 bg-[#fff0ed] rounded-full p-2 border-2 border-white shadow-lg z-20">
                  <Star className="h-5 w-5 text-[#e85d3d]" />
                </div>
              </div>
              {/* Trust Badge Overlay */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 whitespace-nowrap z-20 w-auto">
                <p className="text-xs font-medium text-slate-700 flex items-center gap-1">
                  <Users className="h-3 w-3 text-[#e85d3d] flex-shrink-0" />
                  <span className="relative whitespace-nowrap">
                    Trusted by{" "}
                    <span className="text-[#e85d3d] font-semibold">
                      10,000+
                    </span>{" "}
                    Insurance Leaders
                  </span>
                </p>
              </div>
            </div>

            {/* Value Proposition & Urgency */}
            <div className="text-center space-y-3 mb-6">
              <Badge className="bg-[#210A05FF] text-white px-4 py-1.5 text-sm font-medium uppercase tracking-wide">
                Exclusive Live Workshop
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Transform Your{" "}
                <span className="text-[#e85d3d] relative inline-block">
                  Career
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#e85d3d]/30 rounded-full"></span>
                </span>{" "}
                in Just 1 Day
              </h1>
              <p className="text-slate-600 text-base">
                Join the{" "}
                <span className="font-semibold">exclusive workshop</span> where
                top insurance professionals learn to{" "}
                <span className="font-semibold">2X their client base</span>
              </p>
            </div>

            {/* Coach Profile - Authority Building */}
            <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    N S Anilkumar
                  </h2>
                  <p className="text-slate-600 font-semibold text-xs uppercase">
                    Insurance & Sales Expert
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-slate-900">34+</p>
                  <p className="text-xs text-slate-600">Years Experience</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <p className="text-lg font-bold text-slate-900">1 Lakh+</p>
                  <p className="text-xs text-slate-600">Trained</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <p className="text-lg font-bold text-slate-900">1000+</p>
                  <p className="text-xs text-slate-600">Workshops</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <p className="text-lg font-bold text-slate-900">4.96/5</p>
                  <p className="text-xs text-slate-600">Rating</p>
                </div>
              </div>
            </div>

            {/* Pricing Section - Value & Scarcity */}
            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-r from-[#fff0ed] to-[#fff0ed]/50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="bg-white text-[#e85d3d] border-[#ffcec2] text-xs"
                  >
                    Limited Time
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white text-[#e85d3d] border-[#ffcec2] text-xs"
                  >
                    Early Bird Offer
                  </Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#e85d3d]">
                    ₹5,999
                  </span>
                  <span className="text-[#e85d3d] line-through text-sm">
                    ₹9,999
                  </span>
                  <span className="text-[#e85d3d] text-xs">only</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <Clock className="h-5 w-5 text-slate-600 flex-shrink-0" />
                <div className="text-xs text-slate-800">
                  <p className="font-semibold">
                    May 18th 2025 |  9:30 AM to 4:30 PM
                  </p>
                  <p>Hotel Dimora, Trivandrum</p>
                </div>
              </div>

              {/* Countdown Timer for Mobile */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Star
                    className="h-5 w-5 text-[#e85d3d]"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-[#e85d3d]"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-[#e85d3d]"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-[#e85d3d]"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-[#e85d3d]"
                    fill="currentColor"
                  />
                  <span className="text-[#e85d3d] font-medium ml-1">
                    4.96/5
                  </span>
                </div>

                <div className="text-center mb-3">
                  <h3 className="font-bold text-slate-800 text-lg">
                    STARTS ON May 18th 2025
                  </h3>
                  <p className="text-slate-600 text-sm">
                    (9:30 AM to 4:30 PM) at Hotel Dimora, Trivandrum
                  </p>
                </div>

                <div className="text-center mb-3">
                  <p className="text-sm text-slate-700">
                    Register In Next 👇 To Unlock Bonuses Worth{" "}
                    <span className="font-bold text-[#e85d3d]">Rs 6,487</span>
                  </p>
                </div>

                <CountdownTimer
                  targetDate="2025-05-18 10:00:00"
                  theme="dark"
                  size="md"
                  className="my-4"
                  showLabels={true}
                />

                <div className="flex justify-center gap-4 mb-6 hidden">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">12</span>
                    </div>
                    <span className="text-xs sm:text-sm mt-2 text-slate-600">DAYS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">21</span>
                    </div>
                    <span className="text-xs sm:text-sm mt-2 text-slate-600">HOURS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">06</span>
                    </div>
                    <span className="text-xs sm:text-sm mt-2 text-slate-600">MINUTES</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">21</span>
                    </div>
                    <span className="text-xs sm:text-sm mt-2 text-slate-600">SECONDS</span>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="flex items-center gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <Shield className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <p className="text-xs text-emerald-800">
                  <span className="font-semibold">
                    100% Money-Back Guarantee
                  </span>{" "}
                  - No questions asked
                </p>
              </div>
            </div>

            {/* CTA Section - Clear Action Steps */}
            <div className="space-y-4 mb-8">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Book Your Seat Now
                </h3>
                <div className="flex items-center justify-center gap-2 text-[#e85d3d]">
                  <Clock className="h-4 w-4" />
                  <p className="text-sm font-medium">
                    Only 14 seats remaining!
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full bg-[#e85d3d] hover:bg-[#d94c2c] text-white py-4 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] animate-button-pulse"
                onClick={handleRegisterClick}
              >
                <span className="relative z-10">
                  Grab your Seat now for just ₹999
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e85d3d] to-[#d94c2c] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Button>
              <p className="text-center text-xs text-slate-500">
                Register now for just ₹999 and <span className="font-semibold text-[#e85d3d]">Pay the rest later!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Optimized for Trust Building */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-row-reverse items-start justify-between gap-16 max-w-6xl mx-auto">
              {/* Content Section - Right side */}
              <div className="w-1/2 pt-8">
                <div className="text-left space-y-8">
                  {/* Trust & Scarcity Indicators */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-[#e7f8e6] px-3 py-1.5 rounded-full animate-pulse">
                        <span className="w-2 h-2 bg-[#38b137] rounded-full"></span>
                        <p className="text-[#38b137] font-medium text-sm">
                          47 People Watching Live
                        </p>
                      </div>
                      <Badge className="bg-[#fff0ed] text-[#e85d3d] border-[#ffcec2]">
                        40% OFF
                      </Badge>
                    </div>
                    <Badge className="bg-[#210A05FF] hover:bg-[#000000] text-white px-6 py-2 uppercase tracking-wide font-semibold">
                      Exclusive Live Workshop
                    </Badge>
                  </div>

                  {/* Main Value Proposition */}
                  <div className="space-y-4">
                    <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                      Transform Your{" "}
                      <span className="text-[#e85d3d] relative inline-block">
                        Career
                        <span className="absolute bottom-0 left-0 right-0 h-2 bg-[#e85d3d]/20 rounded-full"></span>
                      </span>{" "}
                      in Just 1 Day
                    </h1>
                    <p className="text-xl text-slate-600">
                      Join the{" "}
                      <span className="font-semibold">exclusive workshop</span>{" "}
                      where top insurance professionals learn to{" "}
                      <span className="font-semibold">
                        2X their client base
                      </span>{" "}
                      and maximize their income
                    </p>
                  </div>

                  {/* Authority & Social Proof */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900">
                            N S Anilkumar
                          </h2>
                          <p className="font-medium text-sm uppercase text-slate-500">
                            Insurance & Sales Expert
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-slate-900">
                          34+
                        </span>
                        <p className="text-sm text-slate-600">
                          Years Experience
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                        <p className="text-2xl font-bold text-slate-700">
                          10K+
                        </p>
                        <p className="text-sm text-slate-600">
                          Professionals Trained
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                        <p className="text-2xl font-bold text-slate-700">
                          1000+
                        </p>
                        <p className="text-sm text-slate-600">
                          Workshops Conducted
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                        <p className="text-2xl font-bold text-slate-700">
                          4.96/5
                        </p>
                        <p className="text-sm text-slate-600">Average Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Trust Builders */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-[#fff0ed] to-[#fff0ed]/50 p-6 rounded-xl border border-[#ffcec2] transform hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[#e85d3d] text-sm uppercase font-bold tracking-wider">
                            Early Bird Offer
                          </p>
                          <Badge
                            variant="outline"
                            className="text-[#e85d3d] border-[#ffcec2]"
                          >
                            Limited Seats
                          </Badge>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-extrabold text-[#e85d3d]">
                            ₹5,999
                          </span>
                          <span className="text-[#e85d3d] line-through font-medium">
                            ₹9,999
                          </span>
                          <span className="text-[#e85d3d] text-sm">only</span>
                        </div>
                        <div className="mt-2 text-sm text-[#e85d3d]">
                          <p className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> May 18th 2025 | 10:00
                            AM - 2:00 PM
                          </p>
                          <p className="flex items-center gap-1 mt-1">
                            <MapPin className="h-4 w-4" /> Hotel Dimora,
                            Trivandrum
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 rounded-xl border border-emerald-200 transform hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                        <div className="flex items-start gap-3">
                          <Shield className="h-8 w-8 text-emerald-600 flex-shrink-0" />
                          <div>
                            <p className="text-emerald-800 font-bold text-lg">
                              100% Money-Back Guarantee
                            </p>
                            <p className="text-emerald-700 text-sm">
                              If you're not satisfied, get a full refund. No
                              questions asked.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="absolute -top-3 left-0 right-0 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#e85d3d] w-3/4 animate-pulse"></div>
                        </div>
                        <Button
                          size="lg"
                          className="w-full bg-[#e85d3d] hover:bg-[#d94c2c] text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg font-semibold group animate-button-pulse transform hover:translate-y-[-2px]"
                          onClick={handleRegisterClick}
                        >
                          <div className="flex flex-col items-center">
                            <span className="tracking-wide group-hover:scale-105 transition-transform">
                              Grab your Seat now for just ₹999
                            </span>
                            <span className="text-sm opacity-90 font-medium">
                              Only 14 Seats Left!
                            </span>
                          </div>
                        </Button>
                      </div>
                      <p className="text-center text-sm text-slate-500">
                        Register now for just ₹999 and <span className="font-semibold text-[#e85d3d]">Pay the rest later!</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section - Left side */}
              <div className="w-1/2 relative">
                <div className="sticky top-0 pt-4">
                  <div className="relative w-[600px] mx-auto">
                    {/* Background Elements */}
                    <div className="absolute -top-4 -left-4 w-40 h-40 bg-[#fff0ed] rounded-full opacity-50 blur-lg animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#fff0ed] rounded-full opacity-50 blur-lg animate-pulse"></div>

                    <div className="relative group">
                      <Image
                        src="/meetyour.png"
                        alt="N S Anilkumar - Insurance & Sales Expert"
                        width={600}
                        height={600}
                        className="rounded-xl mx-auto transform group-hover:scale-105 transition-transform duration-300 object-contain drop-shadow-xl"
                        priority
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/60 to-transparent rounded-b-xl"></div>

                      {/* Trust Badge Overlay */}
                      <div className="absolute -bottom-4 left-0 right-0 bg-white px-5 py-3 rounded-xl shadow-lg border border-slate-100 text-center transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center justify-center gap-2">
                          <div className="bg-[#fff0ed] p-1.5 rounded-full">
                            <Users className="h-4 w-4 text-[#e85d3d]" />
                          </div>
                          <p className="text-base md:text-lg font-semibold text-slate-800">
                            Trusted by{" "}
                            <span className="text-[#e85d3d]">1 Lakh+</span>{" "}
                            Insurance Professionals
                          </p>
                          <div className="hidden md:block h-1.5 w-1.5 bg-[#e85d3d] rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Floating Trust Elements */}

                      <div className="absolute -left-4 bottom-1/4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 transform hover:scale-105 transition-transform">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-[#e85d3d]" />
                          <p className="font-semibold text-slate-700">
                            10,000+ Happy Students
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Countdown Timer Under Image */}
                  <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-md mt-8 max-w-[600px] mx-auto">
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <Star
                        className="h-5 w-5 text-[#e85d3d]"
                        fill="currentColor"
                      />
                      <Star
                        className="h-5 w-5 text-[#e85d3d]"
                        fill="currentColor"
                      />
                      <Star
                        className="h-5 w-5 text-[#e85d3d]"
                        fill="currentColor"
                      />
                      <Star
                        className="h-5 w-5 text-[#e85d3d]"
                        fill="currentColor"
                      />
                      <Star
                        className="h-5 w-5 text-[#e85d3d]"
                        fill="currentColor"
                      />
                      <span className="text-[#e85d3d] font-medium ml-1">
                        4.96/5
                      </span>
                    </div>

                    <div className="text-center mb-4">
                      <h3 className="font-bold text-slate-800 text-xl mb-1">
                        STARTS ON May 18th 2025
                      </h3>
                      <p className="text-slate-600">
                        ( 9:30am to 4:30pm ) at Hotel Dimora, Trivandrum
                      </p>
                    </div>

                    <div className="text-center mb-4">
                      <p className="text-slate-700 font-medium">
                        Register In Next 👇 To Unlock Bonuses Worth{" "}
                        <span className="font-bold text-[#e85d3d] text-lg">
                          Rs 6,487
                        </span>
                      </p>
                    </div>

                    <CountdownTimer
                      targetDate="2025-05-18 10:00:00"
                      theme="dark"
                      size="lg"
                      className="mb-6"
                      showLabels={true}
                    />
                    
                    <div className="flex justify-center gap-4 mb-6 hidden">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">12</span>
                        </div>
                        <span className="text-xs sm:text-sm mt-2 text-slate-600">DAYS</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">21</span>
                        </div>
                        <span className="text-xs sm:text-sm mt-2 text-slate-600">HOURS</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">06</span>
                        </div>
                        <span className="text-xs sm:text-sm mt-2 text-slate-600">MINUTES</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">21</span>
                        </div>
                        <span className="text-xs sm:text-sm mt-2 text-slate-600">SECONDS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bonus Packages Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Bonuses If You Register Before Timer Hits 0
            </h2>
            <div className="w-20 sm:w-28 h-1 bg-[#e85d3d] mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-2">
              Get exclusive bonuses worth ₹70,000+ when you register today
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
            <div className="relative w-full lg:w-3/5">
              <div className="absolute -top-10 -left-5 sm:-left-10 w-32 sm:w-40 h-32 sm:h-40 bg-rose-100 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-10 -right-5 sm:-right-10 w-32 sm:w-40 h-32 sm:h-40 bg-amber-100 rounded-full opacity-20 blur-xl"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 sm:p-5 rounded-xl shadow-lg transform hover:scale-102 transition-all duration-300">
                    <div className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-0">
                      <div className="bg-[#e85d3d] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold sm:mb-3 sm:mx-auto">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold sm:text-center mb-1 sm:mb-3 text-[#ff9d85]">
                          Personal Financial Guidance
                        </h3>
                        <div className="sm:text-center">
                          <p className="text-sm sm:text-base text-slate-200 mb-1 sm:mb-2">
                            Personalized financial planning sessions with expert
                            advisors
                          </p>
                          <p className="text-lg sm:text-xl font-bold text-[#ff9d85]">
                            Worth ₹25,000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 sm:p-5 rounded-xl shadow-lg transform hover:scale-102 transition-all duration-300">
                    <div className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-0">
                      <div className="bg-[#e85d3d] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold sm:mb-3 sm:mx-auto">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold sm:text-center mb-1 sm:mb-3 text-[#ff9d85]">
                          Mind Reprogramming Sessions
                        </h3>
                        <div className="sm:text-center">
                          <p className="text-sm sm:text-base text-slate-200 mb-1 sm:mb-2">
                            66 Powerful sessions to transform your mindset for
                            success
                          </p>
                          <p className="text-lg sm:text-xl font-bold text-[#ff9d85]">
                            Worth ₹33,000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 sm:p-5 rounded-xl shadow-lg transform hover:scale-102 transition-all duration-300">
                    <div className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-0">
                      <div className="bg-[#e85d3d] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold sm:mb-3 sm:mx-auto">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold sm:text-center mb-1 sm:mb-3 text-[#ff9d85]">
                          Recorded Meditation Sessions
                        </h3>
                        <div className="sm:text-center">
                          <p className="text-sm sm:text-base text-slate-200 mb-1 sm:mb-2">
                            Premium meditation sessions for mental clarity and
                            focus
                          </p>
                          <p className="text-lg sm:text-xl font-bold text-[#ff9d85]">
                            Worth ₹12,000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6 sm:mt-0 sm:absolute sm:-bottom-10 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-center text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full border border-slate-700 shadow-xl">
                    <p className="text-base sm:text-xl font-bold">
                      Total Value:{" "}
                      <span className="text-[#ff9d85]">₹70,000+</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg border border-slate-100 mt-10 lg:mt-0">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Limited Time Offer
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Register before the timer expires to claim all bonuses
                </p>
              </div>

              <CountdownTimer
                targetDate="2025-05-18 10:00:00"
                theme="dark"
                size="lg" 
                className="mb-6"
                showLabels={true}
              />
              
              <div className="flex justify-center gap-4 mb-6 hidden">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">12</span>
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-slate-600">DAYS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">21</span>
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-slate-600">HOURS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">06</span>
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-slate-600">MINUTES</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">21</span>
                  </div>
                  <span className="text-xs sm:text-sm mt-2 text-slate-600">SECONDS</span>
                </div>
              </div>

              <div className="text-center">
                {/* <div className="bg-[#fff0ed] p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                  <p className="text-[#e85d3d] text-sm sm:text-base font-medium">
                    You're getting all bonuses worth ₹70,000+{" "}
                    <br className="hidden xs:block" /> for just ₹5,999!
                  </p>
                </div> */}

                <Button
                  size="lg"
                  className="bg-[#e85d3d] hover:bg-[#d94c2c] w-full text-white text-base sm:text-lg py-4 sm:py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  onClick={handleRegisterClick}
                >
                  <span className="relative z-10">
                    GRAB YOUR SEAT NOW FOR JUST ₹999
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e85d3d] to-[#ff7d5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700 bg-[#e85d3d] blur-xl"></div>
                </Button>
                <p className="text-sm text-slate-600 mt-2">
                  Register now for just ₹999 and <span className="text-[#e85d3d] font-medium">Pay the rest later!</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4">
                  100% Money-Back Guarantee If You're Not Satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/* What Happens When You Join */}
 <section className="hidden md:block py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              What Happens When You Join
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-12 w-12 text-[#e85d3d] mb-4" />
                <CardTitle>Unlock Time & Wealth Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn how top professionals manage time, delegate, and build
                  systems for freedom and financial growth.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Target className="h-12 w-12 text-[#e85d3d] mb-4" />
                <CardTitle>Master Foundational Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover core activities that drive consistent sales, client
                  trust, and business growth.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <BarChart3 className="h-12 w-12 text-[#e85d3d] mb-4" />
                <CardTitle>Accelerate Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strategies to increase monthly income, attract quality
                  clients, and boost cash flow.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Award className="h-12 w-12 text-[#e85d3d] mb-4" />
                <CardTitle>More Profit. More Freedom. More Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Achieve higher profits, freedom, and scalability—backed by a
                  money-back guarantee.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* About the Coach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-slate-100 text-slate-600 mb-4">
              Meet Your Coach
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">
              N S Anilkumar
            </h2>
            <p className="text-xl text-slate-700 mb-6">
              Insurance & Sales Coach | 34 Years in Insurance | 24 Years in
              Coaching
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 order-1 flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#fff0ed] rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#fff0ed] rounded-full opacity-50"></div>
                <div className="relative z-10">
                  <Image
                    src="/meetyour.png"
                    alt="N S Anilkumar"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300 object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-[#e85d3d] mb-2">
                        1 Lakh+
                      </p>
                      <p className="text-slate-700">Positive People Reached</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-[#e85d3d] mb-2">
                        1000+
                      </p>
                      <p className="text-slate-700">Seminars & Workshops</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 hover:bg-slate-100 transition-colors duration-300 md:col-span-2">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-xl font-medium text-slate-900 mb-2">
                        "My mission is to help insurance professionals grow
                        their business faster, smarter, and more confidently."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "34 Years", sublabel: "Insurance Experience" },
                  { label: "24 Years", sublabel: "Coaching Experience" },
                  { label: "10K+", sublabel: "Paid Customers" },
                  { label: "15+", sublabel: "Countries Visited" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-slate-50 rounded-lg"
                  >
                    <p className="text-xl font-bold text-[#e85d3d]">
                      {stat.label}
                    </p>
                    <p className="text-sm text-slate-600">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* What You Will Learn Section */}
      <section className="hidden md:block py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What You Will Learn In 1 Day?
            </h2>
            <div className="w-20 h-1 bg-[#e85d3d] mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
            {/* Left side - Image */}
            <div className="w-full lg:w-2/5 relative">
              <div className="relative">
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#fff0ed] rounded-full opacity-50 blur-lg"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#fff0ed] rounded-full opacity-50 blur-lg"></div>
                <Image
                  src="/hero.png"
                  alt="N S Anilkumar Gesturing to Learning Points"
                  width={500}
                  height={600}
                  className="relative z-10 rounded-xl object-contain mx-auto"
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-20 rounded-b-xl"></div>
              </div>
            </div>

            {/* Right side - Learning Points */}
            <div className="w-full lg:w-3/5 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#e85d3d] text-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold mb-3 mx-auto">
                      01.
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      7 Foundational Activities Used By Successful Insurance
                      Professionals
                    </h3>
                    <p className="text-slate-600">
                      Which You Can COPY To Build A Stable And Scalable
                      Insurance Business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#e85d3d] text-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold mb-3 mx-auto">
                      02.
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      3 Ingredients You Need To Focus On
                    </h3>
                    <p className="text-slate-600">
                      To Build An Insurance Business That Can Grow Without You.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#e85d3d] text-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold mb-3 mx-auto">
                      03.
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      How To Build Your Front-Line Leaders:
                    </h3>
                    <p className="text-slate-600">
                      Understand The Step-By-Step Process Of Building Your
                      Second Line Of Insurance Leaders That You Can Implement
                      Immediately
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#e85d3d] text-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold mb-3 mx-auto">
                      04.
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      How To Retain Insurance Employees:
                    </h3>
                    <p className="text-slate-600">
                      Strategies And Systems That You Can Implement To Make Sure
                      You Create An Environment For Employees To Work Longer So
                      That You Can Focus On Strategic Business Growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-[#e85d3d]">
                <p className="text-slate-800 font-semibold text-center">
                  Strategies Are Applicable To ALL Types Of Insurance
                  Businesses, <br /> Regardless Of Industry Or Team Size
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens When You Join - Renamed and Redesigned for Psychology */}
      <section className="hidden md:block py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#fff0ed] text-[#e85d3d] mb-4 px-4 py-1">
              Psychology of Insurance Success
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              The Transformation You'll Experience
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Learn powerful strategies already implemented by 10,000+ top
              insurance professionals across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <div className="bg-[#fff0ed] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="h-8 w-8 text-[#e85d3d]" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Time Freedom
                </h3>
                <p className="text-slate-600">
                  Build systems to process more insurance applications with less
                  effort, giving you back precious hours in your day.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <div className="bg-[#fff0ed] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="h-8 w-8 text-[#e85d3d]" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Client Acquisition
                </h3>
                <p className="text-slate-600">
                  Learn proven strategies to attract high-premium clients who
                  stay longer and refer more business to you.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <div className="bg-[#fff0ed] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="h-8 w-8 text-[#e85d3d]" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Premium Growth
                </h3>
                <p className="text-slate-600">
                  Implement systems to consistently grow your premium income
                  even during industry downturns and market fluctuations.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
              <div className="bg-[#fff0ed] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-[#e85d3d]" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Team Expansion
                </h3>
                <p className="text-slate-600">
                  Develop and retain a team of motivated insurance advisors who
                  will help multiply your agency's impact and revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section - Updated to be more action-oriented */}
      <section className="hidden md:block py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#fff0ed] text-[#e85d3d] mb-4 px-4 py-1">
              Insurance Growth Strategies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Transform Your Insurance Business With These Proven Tactics
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              These techniques have helped over 1,000+ insurance agents increase
              their policies and premium collection
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4 mb-8">
              {[
                {
                  title: "Daily Activities of Top Insurance Performers",
                  description:
                    "Copy these 7 daily activities that top 1% insurance agents use to consistently close high-value policies",
                },
                {
                  title: "Build a Self-Running Insurance Agency",
                  description:
                    "Discover the exact framework to create an insurance business that generates premiums without your constant involvement",
                },
                {
                  title: "Insurance Team Leadership Blueprint",
                  description:
                    "Step-by-step method to identify and train future insurance leaders who will help scale your agency",
                },
                {
                  title: "Insurance Advisor Retention Mastery",
                  description:
                    "Proven techniques to keep your top insurance performers engaged, motivated and loyal for years",
                },
                {
                  title: "Policy Renewal & Referral Automation",
                  description:
                    "Install systems that bring qualified insurance prospects to you on autopilot through existing clients",
                },
                {
                  title: "Insurance Productivity Maximization",
                  description:
                    "How to process more applications and service more clients in less time through delegation and automation",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 transform hover:translate-x-1"
                >
                  <div className="bg-[#fff0ed] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-[#e85d3d]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#fff0ed] border border-[#ffcec2] rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-8 w-8 text-[#e85d3d]" />
                <h3 className="text-xl font-bold text-[#ff9d85]">
                  Limited Time Offer
                </h3>
              </div>
              <p className="text-[#e85d3d] mb-4">
                This workshop is specifically designed for insurance
                professionals who are serious about scaling their business. The
                strategies work for agencies of all sizes.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#ff9d85]">
                    ₹999
                  </span>
                  <span className="text-[#e85d3d] line-through">₹5,999</span>
                </div>
                <Badge
                  variant="outline"
                  className="bg-[#fff0ed] text-[#e85d3d] border-[#ffcec2]"
                >
                  40% Off
                </Badge>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 relative">
                <div className="h-2 bg-slate-100 rounded-full">
                  <div className="h-full bg-[#e85d3d] rounded-full w-3/4 animate-pulse"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Filling fast</span>
                  <span>Only 14 seats left</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-[#e85d3d] hover:bg-[#d94c2c] w-full text-white text-lg py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                onClick={handleRegisterClick}
              >
                <span className="relative z-10">
                  GRAB YOUR SEAT NOW FOR JUST ₹999
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#e85d3d] to-[#ff7d5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700 bg-[#e85d3d] blur-xl"></div>
              </Button>
              <p className="text-sm text-slate-600 mt-2">
                Register now for just ₹999 and <span className="text-[#e85d3d] font-medium">Pay the rest later!</span>
              </p>
              <p className="text-sm text-slate-500 mt-4">
                100% Money-Back Guarantee If You're Not Satisfied
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend - Updated with Social Proof */}
      <section className="hidden md:block py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#fff0ed] text-[#e85d3d] mb-4">
              Perfect For You If...
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Who Will Benefit The Most
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Join the community of insurance professionals who are taking their
              insurance career to the next level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-[#e85d3d]"></div>
              <div className="p-6">
                <div className="bg-[#fff0ed] w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-[#e85d3d]" />
                </div>
                <h3 className="text-xl font-bold text-center text-slate-900 mb-3">
                  LIC Agents
                </h3>
                <p className="text-center text-slate-600">
                  Looking to increase your policy sales and premium collection
                  while working fewer hours per policy
                </p>
                <div className="mt-4 text-center">
                  <Badge
                    variant="outline"
                    className="bg-[#fff0ed] text-[#e85d3d] border-[#ffcec2]"
                  >
                    93% Success Rate
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-[#e85d3d]"></div>
              <div className="p-6">
                <div className="bg-[#fff0ed] w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-[#e85d3d]" />
                </div>
                <h3 className="text-xl font-bold text-center text-slate-900 mb-3">
                  Insurance Agency Owners
                </h3>
                <p className="text-center text-slate-600">
                  Wanting to build systems and teams for your insurance agency
                  that can operate successfully without your daily involvement
                </p>
                <div className="mt-4 text-center">
                  <Badge
                    variant="outline"
                    className="bg-[#fff0ed] text-[#e85d3d] border-[#ffcec2]"
                  >
                    95% Success Rate
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-[#e85d3d]"></div>
              <div className="p-6">
                <div className="bg-[#fff0ed] w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-[#e85d3d]" />
                </div>
                <h3 className="text-xl font-bold text-center text-slate-900 mb-3">
                  POSP/Development Officers
                </h3>
                <p className="text-center text-slate-600">
                  Seeking strategies to recruit, train and retain
                  high-performing insurance agents in your organization
                </p>
                <div className="mt-4 text-center">
                  <Badge
                    variant="outline"
                    className="bg-[#fff0ed] text-[#e85d3d] border-[#ffcec2]"
                  >
                    97% Success Rate
                  </Badge>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-[#e85d3d]"></div>
              <div className="p-6">
                <div className="bg-[#fff0ed] w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-[#e85d3d]" />
                </div>
                <h3 className="text-xl font-bold text-center text-slate-900 mb-3">
                  Insurance Sales Managers
                </h3>
                <p className="text-center text-slate-600">
                  Aiming to implement proven systems to consistently hit and
                  exceed policy sales targets with your team
                </p>
                <div className="mt-4 text-center">
                  <Badge
                    variant="outline"
                    className="bg-[#fff0ed] text-[#e85d3d] border-[#ffcec2]"
                  >
                    91% Success Rate
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow border-l-4 border-[#e85d3d]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-[#fff0ed] w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-10 w-10 text-[#e85d3d]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Join the Elite Insurance Community
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Over 10,000+ insurance professionals across India have
                    already implemented these strategies with remarkable
                    success. The methods work for all insurance companies,
                    products, and experience levels.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#fff0ed] text-[#e85d3d]">LIC</Badge>
                    <Badge className="bg-[#fff0ed] text-[#e85d3d]">
                      HDFC Life
                    </Badge>
                    <Badge className="bg-[#fff0ed] text-[#e85d3d]">
                      ICICI Prudential
                    </Badge>
                    <Badge className="bg-[#fff0ed] text-[#e85d3d]">
                      SBI Life
                    </Badge>
                    <Badge className="bg-[#fff0ed] text-[#e85d3d]">
                      Max Life
                    </Badge>
                    <Badge className="bg-[#fff0ed] text-[#e85d3d]">
                      Bajaj Allianz
                    </Badge>
                    <Badge className="bg-[#fff0ed] text-[#e85d3d]">
                      Star Health
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="w-full max-w-md mx-auto bg-[#e85d3d] hover:bg-[#d94c2c] text-white text-base md:text-lg px-4 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              onClick={handleRegisterClick}
            >
              <span className="relative z-10">GRAB YOUR SEAT NOW FOR JUST ₹999</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e85d3d] to-[#ff7d5d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700 bg-[#e85d3d] blur-xl"></div>
            </Button>
            <p className="text-sm text-slate-600 mt-2">
              Register now for just ₹999 and <span className="text-[#e85d3d] font-medium">Pay the rest later!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="hidden md:block py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-[#e85d3d] mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Real results from insurance professionals who implemented these
              strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "10X Increase in Qualified Leads",
                icon: <Users className="h-8 w-8 text-white" />,
                color: "from-blue-600 to-blue-400",
                badge: "blue"
              },
              {
                title: "2X Growth in Commission & Income",
                icon: <BarChart3 className="h-8 w-8 text-white" />,
                color: "from-emerald-600 to-emerald-400",
                badge: "emerald"
              },
              {
                title: "Achieved Monthly & Annual Targets",
                icon: <Target className="h-8 w-8 text-white" />,
                color: "from-purple-600 to-purple-400",
                badge: "purple"
              },
              {
                title: "Earned Promotions & Recognition",
                icon: <Award className="h-8 w-8 text-white" />,
                color: "from-amber-600 to-amber-400",
                badge: "amber"
              },
              {
                title: "Won Bonuses & Exotic Trips",
                icon: <Briefcase className="h-8 w-8 text-white" />,
                color: "from-indigo-600 to-indigo-400",
                badge: "indigo"
              },
              {
                title: "Mastered Digital Sales & Marketing",
                icon: <BookOpen className="h-8 w-8 text-white" />,
                color: "from-teal-600 to-teal-400",
                badge: "teal"
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${story.color}`}></div>
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div className={`bg-gradient-to-br ${story.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      {story.icon}
                    </div>
                    <p className="font-bold text-slate-900 text-lg text-center mb-2">
                      {story.title}
                    </p>
                    {story.badge === "blue" && (
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-600 border-blue-200 mt-2"
                      >
                        Verified Result
                      </Badge>
                    )}
                    {story.badge === "emerald" && (
                      <Badge
                        variant="outline"
                        className="bg-emerald-50 text-emerald-600 border-emerald-200 mt-2"
                      >
                        Verified Result
                      </Badge>
                    )}
                    {story.badge === "purple" && (
                      <Badge
                        variant="outline"
                        className="bg-purple-50 text-purple-600 border-purple-200 mt-2"
                      >
                        Verified Result
                      </Badge>
                    )}
                    {story.badge === "amber" && (
                      <Badge
                        variant="outline"
                        className="bg-amber-50 text-amber-600 border-amber-200 mt-2"
                      >
                        Verified Result
                      </Badge>
                    )}
                    {story.badge === "indigo" && (
                      <Badge
                        variant="outline"
                        className="bg-indigo-50 text-indigo-600 border-indigo-200 mt-2"
                      >
                        Verified Result
                      </Badge>
                    )}
                    {story.badge === "teal" && (
                      <Badge
                        variant="outline"
                        className="bg-teal-50 text-teal-600 border-teal-200 mt-2"
                      >
                        Verified Result
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="hidden md:block py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              No Questions Asked Money Back Guarantee
            </h2>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="pt-6">
                <p className="text-slate-800 mb-4">
                  If after attending the session you feel it didn't deliver the
                  value you were hoping for—for any reason at all—I take
                  complete responsibility. Simply send an email to
                  nsanilkumar.bridge@gmail.com, and my team will refund your
                  entire session fee of ₹5,999—no questions asked.
                </p>
                <p className="font-medium text-slate-900">
                  You have everything to gain and absolutely nothing to lose.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Courses Section - New Addition */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="mb-4">
              <Badge className="bg-[#fff0ed] text-[#e85d3d] px-3 sm:px-4 py-1">
                Transformation Journey
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900 relative inline-block">
              MY COURSES
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#e85d3d]/30 rounded-full"></div>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto mt-6">
              Comprehensive programs designed to transform your financial
              mindset and insurance career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Course 1 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-3 bg-amber-400"></div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 shadow-sm text-xs">
                    Foundation Level
                  </Badge>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  MONEY MINDSET MASTERY
                </h3>

                <ul className="space-y-2 mb-6 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">Financial Discipline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">Financial Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Savings & Investment Methods
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Guidance to Create 1Cr-10Cr Wealth
                    </span>
                  </li>
                </ul>

                <Button
                  onClick={whatsapp}
                  variant="outline"
                  className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 py-2 sm:py-2.5 font-medium transition-all duration-300 hover:border-amber-400 shadow-sm group-hover:bg-amber-100"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-3 bg-emerald-500"></div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 shadow-sm text-xs">
                    Growth Level
                  </Badge>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  WEALTH EXPANSION BLUEPRINT
                </h3>

                <ul className="space-y-2 mb-6 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Practical Knowledge of Wealth Creation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Different Ways to Create Wealth
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Savings and Investment Support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Tax Optimization Strategies
                    </span>
                  </li>
                </ul>

                <Button
                  onClick={whatsapp}
                  variant="outline"
                  className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 py-2 sm:py-2.5 font-medium transition-all duration-300 hover:border-emerald-400 shadow-sm group-hover:bg-emerald-100"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-3 bg-blue-500"></div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 shadow-sm text-xs">
                    Advanced Level
                  </Badge>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  FINANCIAL FREEDOM ACCELERATOR
                </h3>

                <ul className="space-y-2 mb-6 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      How to Keep Your Wealth
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Passive Income Strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Business Growth Systems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Work-Life Balance Mastery
                    </span>
                  </li>
                </ul>

                <Button
                  onClick={whatsapp}
                  variant="outline"
                  className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 py-2 sm:py-2.5 font-medium transition-all duration-300 hover:border-blue-400 shadow-sm group-hover:bg-blue-100"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Course 4 */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-3 bg-purple-500"></div>
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 shadow-sm text-xs">
                    Elite Level
                  </Badge>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                  LEGACY & WEALTH MASTERY
                </h3>

                <ul className="space-y-2 mb-6 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Multi-Generational Wealth Planning
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Estate Planning Strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Advanced Wealth Protection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#e85d3d] flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">
                      Philanthropic Giving Strategies
                    </span>
                  </li>
                </ul>

                <Button
                  onClick={whatsapp}
                  variant="outline"
                  className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 py-2 sm:py-2.5 font-medium transition-all duration-300 hover:border-purple-400 shadow-sm group-hover:bg-purple-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 text-center">
            <p className="text-slate-700 mb-6 text-base sm:text-lg">
              Each course builds upon the previous level to create a complete
              wealth transformation system
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#e85d3d]/20 blur-xl rounded-full"></div>
              <Button className="bg-[#e85d3d] hover:bg-[#d94c2c] text-white text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-button-pulse transform hover:translate-y-[-2px] relative z-10">
                Register Now at ₹5,999 Only
              </Button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section - New Addition */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 relative inline-block">
              Still Have Questions?
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#e85d3d]/30 rounded-full"></div>
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mt-6">
              Reach out to us and our team will get back to you within 24 hours
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  ),
                  title: "Call Us",
                  link: {
                    href: "tel:+919876543210",
                    text: "+91 98765 43210"
                  },
                  details: ["Monday - Saturday", "9:00 AM - 6:00 PM"]
                },
                {
                  icon: (
                    <>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </>
                  ),
                  title: "Email Us",
                  link: {
                    href: "mailto:nsanilkumar.bridge@gmail.com",
                    text: "nsanilkumar.bridge@gmail.com"
                  },
                  details: ["We respond to all emails", "within 24 hours"]
                },
                {
                  icon: (
                    <>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </>
                  ),
                  title: "Visit Us",
                  location: "Hotel Dimora, Trivandrum",
                  details: ["Workshop Venue", "May 18th 2025, 10 AM - 2 PM"]
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 transform hover:translate-y-[-5px] group">
                  <div className="w-14 h-14 bg-[#fff0ed] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#e85d3d]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#e85d3d] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a href={item.link.href} className="text-[#e85d3d] font-medium hover:underline">
                      {item.link.text}
                    </a>
                  ) : (
                    <p className="text-[#e85d3d] font-medium">{item.location}</p>
                  )}
                  <p className="text-sm text-slate-500 mt-2">
                    {item.details[0]}<br />{item.details[1]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-slate-700 mb-4">
                Join our WhatsApp community for updates
              </p>
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto shadow-md hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span onClick={whatsapp}>Join WhatsApp Group</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I attend the workshop?
                </AccordionTrigger>
                <AccordionContent>
                  The workshop will be held at Hotel Dimora, Trivandrum on May
                  18th 2025 from 9:30 AM to 4:30 PM. After registration, you'll
                  receive a confirmation email with detailed instructions and
                  location map. The venue is easily accessible by public
                  transport and has ample parking space.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is ₹5,999 the full cost?</AccordionTrigger>
                <AccordionContent>
                  Yes, ₹5,999 is the complete early bird price for attending the
                  workshop. There are no hidden charges or upsells during the
                  event. This special price (regular price ₹9,999) is offered
                  for a limited time to make this valuable training accessible
                  to serious insurance professionals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Is it suitable for my insurance setup?
                </AccordionTrigger>
                <AccordionContent>
                  The strategies and techniques taught are 100% applicable to
                  all insurance setups—whether you're an individual advisor,
                  agency owner, or development officer. The principles are
                  universal and can be adapted to your specific situation
                  regardless of which insurance company you represent (LIC, HDFC
                  Life, Max Life, SBI Life, etc.).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I bring my team members?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can bring your team members. Each person needs to
                  register separately. We encourage bringing your team as it
                  helps in better implementation of the strategies learned. For
                  groups of 5 or more, please contact us directly for special
                  group rates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Will materials be shared after?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all attendees will receive digital copies of the workshop
                  materials, including presentation slides, worksheets, and
                  insurance sales scripts. These will be emailed to you within
                  24 hours after the workshop, allowing you to implement the
                  strategies immediately.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What if I miss the event?</AccordionTrigger>
                <AccordionContent>
                  If you're unable to attend after registration, please email us
                  at least 48 hours before the event. We can either transfer
                  your registration to a future workshop or process a refund as
                  per our cancellation policy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  How will this help my insurance practice specifically?
                </AccordionTrigger>
                <AccordionContent>
                  The workshop focuses on practical strategies for insurance
                  professionals including: effective client prospecting
                  techniques, policyholder retention systems, premium collection
                  optimization, team building for insurance agencies,
                  cross-selling strategies for multiple insurance products, and
                  digital marketing specifically for insurance advisors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  I'm new to the insurance industry. Is this workshop right for
                  me?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! The workshop is designed for insurance
                  professionals at all levels. New advisors will learn
                  foundational systems to start their career strong, while
                  experienced agents will discover advanced strategies to scale
                  their existing practice. Many new insurance advisors have
                  doubled their policy count within 90 days of implementing
                  these strategies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  Does Anilkumar offer ongoing support after the workshop?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all participants will get access to a private WhatsApp
                  community group for 30 days where Anilkumar personally answers
                  implementation questions. For those needing more extensive
                  support, a separate long-term coaching program is available
                  (details will be shared at the workshop for interested
                  participants only).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <StickyCtaBar />
    </main>
  );
}

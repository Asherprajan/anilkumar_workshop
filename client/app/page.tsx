import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BarChart3, Briefcase, Award, BookOpen, Target, Shield, Star } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StickyCtaBar from "@/components/sticky-cta-bar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Transform Your Insurance Career in 4 Hours | N S Anilkumar Workshop",
  description: "Join N S Anilkumar's exclusive workshop to learn proven strategies to 2X your insurance client base. 34+ years experience, 1 Lakh+ professionals trained. Limited seats at 90% off!",
  keywords: "insurance workshop, insurance career growth, insurance sales training, N S Anilkumar, insurance business growth",
  openGraph: {
    title: "Transform Your Insurance Career in 4 Hours | N S Anilkumar Workshop",
    description: "Join N S Anilkumar's exclusive workshop to learn proven strategies to 2X your insurance client base. 34+ years experience, 1 Lakh+ professionals trained.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "N S Anilkumar Insurance Workshop"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transform Your Insurance Career in 4 Hours | N S Anilkumar Workshop",
    description: "Join N S Anilkumar's exclusive workshop to learn proven strategies to 2X your insurance client base. 34+ years experience, 1 Lakh+ professionals trained.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://yourdomain.com/workshop", // Replace with your actual domain
  },
}

export default function BusinessWorkshop() {
  return (
    <main className="min-h-screen bg-white pb-32">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Mobile Layout - Optimized for Conversion */}
        <div className="lg:hidden px-4 pt-4 pb-20">
          <div className="container mx-auto max-w-md">
            {/* Social Proof Banner - Immediate Trust Building */}
            <div className="bg-rose-50 rounded-full px-3 py-1.5 mb-4 flex items-center justify-center gap-2 animate-pulse">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <p className="text-rose-600 text-sm font-medium">
                <span className="font-bold">47 people</span> are viewing this workshop
              </p>
            </div>

            {/* Hero Image with Trust Indicators */}
            <div className="relative mb-6">
              <div className="aspect-square w-48 sm:w-56 mx-auto relative">
              <Image
                  src="/hero.png"
                  alt="N S Anilkumar"
                  width={200}
                  height={200}
                  className="object-cover rounded-lg shadow-xl"
                  priority
                />
                {/* Visual Trust Elements */}
                <div className="absolute -top-2 -right-2 bg-amber-50 rounded-full p-2 border-2 border-white shadow-lg">
                  <Star className="h-5 w-5 text-amber-500" />
                </div>
              </div>
              {/* Trust Badge Overlay */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 whitespace-nowrap">
                <p className="text-xs font-medium text-slate-700 flex items-center gap-1">
                  <Users className="h-3 w-3 text-rose-500" />
                  Trusted by 1 Lakh+ Professionals
                </p>
              </div>
            </div>

            {/* Value Proposition & Urgency */}
            <div className="text-center space-y-3 mb-6">
              <Badge className="bg-rose-500 text-white px-4 py-1.5 text-sm font-medium uppercase tracking-wide">
                Exclusive Live Workshop
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Transform Your <span className="text-rose-500">Insurance Career</span> in Just 4 Hours
              </h1>
              <p className="text-slate-600 text-base">
                Join the <span className="font-semibold">exclusive workshop</span> where top insurance professionals learn to <span className="font-semibold">2X their client base</span>
              </p>
            </div>

            {/* Coach Profile - Authority Building */}
            <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-rose-100">
                    <Image
                      src="/hero.png"
                      alt="N S Anilkumar"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">N S Anilkumar</h2>
                    <p className="text-rose-500 font-semibold text-xs uppercase">Insurance & Sales Expert</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-slate-900">34+</p>
                  <p className="text-xs text-slate-600">Years Experience</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <p className="text-lg font-bold text-rose-500">1 Lakh+</p>
                  <p className="text-xs text-slate-600">Trained</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <p className="text-lg font-bold text-rose-500">1000+</p>
                  <p className="text-xs text-slate-600">Workshops</p>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg text-center">
                  <p className="text-lg font-bold text-amber-500">4.96/5</p>
                  <p className="text-xs text-slate-600">Rating</p>
                </div>
              </div>
            </div>

            {/* Pricing Section - Value & Scarcity */}
            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-white text-amber-600 border-amber-200 text-xs">Limited Time</Badge>
                  <Badge variant="outline" className="bg-white text-amber-600 border-amber-200 text-xs">90% OFF</Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-amber-900">₹99</span>
                  <span className="text-amber-700 line-through text-sm">₹999</span>
                  <span className="text-amber-800 text-xs">only</span>
                </div>
              </div>
              
              {/* Money Back Guarantee */}
              <div className="flex items-center gap-2 bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <Shield className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <p className="text-xs text-emerald-800">
                  <span className="font-semibold">100% Money-Back Guarantee</span> - No questions asked
                </p>
              </div>
            </div>

            {/* CTA Section - Clear Action Steps */}
            <div className="space-y-4 mb-8">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Book Your Seat Now</h3>
                <div className="flex items-center justify-center gap-2 text-rose-500">
                  <Clock className="h-4 w-4" />
                  <p className="text-sm font-medium">Only 14 seats remaining!</p>
                </div>
              </div>
              <Button size="lg" className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 text-base font-semibold rounded-xl relative overflow-hidden group">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Button>
              <p className="text-center text-xs text-slate-500">
                Join 1 Lakh+ successful insurance professionals
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
                      <div className="flex items-center gap-2 bg-rose-50 px-3 py-1.5 rounded-full animate-pulse">
                        <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
                        <p className="text-rose-600 font-medium text-sm">47 People Watching Live</p>
                      </div>
                      <Badge className="bg-amber-50 text-amber-700 border-amber-200">
                        90% OFF
                      </Badge>
                    </div>
                    <Badge className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 uppercase tracking-wide font-semibold">
                      Exclusive Live Workshop
                    </Badge>
                  </div>

                  {/* Main Value Proposition */}
                  <div className="space-y-4">
                    <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                      Transform Your <span className="text-rose-500">Insurance Career</span> in Just 4 Hours
                    </h1>
                    <p className="text-xl text-slate-600">
                      Join the <span className="font-semibold">exclusive workshop</span> where top insurance professionals learn to <span className="font-semibold">2X their client base</span> and maximize their income
                    </p>
                  </div>

                  {/* Authority & Social Proof */}
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose-100">
                          <Image
                            src="/hero.png"
                            alt="N S Anilkumar"
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900">N S Anilkumar</h2>
                          <p className="text-rose-600 font-semibold text-sm uppercase">Insurance & Sales Expert</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-slate-900">34+</span>
                        <p className="text-sm text-slate-600">Years Experience</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-slate-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                        <p className="text-2xl font-bold text-rose-600">1 Lakh+</p>
                        <p className="text-sm text-slate-600">Professionals Trained</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                        <p className="text-2xl font-bold text-rose-600">1000+</p>
                        <p className="text-sm text-slate-600">Workshops Conducted</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                        <p className="text-2xl font-bold text-amber-500">4.96/5</p>
                        <p className="text-sm text-slate-600">Average Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Trust Builders */}
                  <div className="space-y-6">
                    <div className="flex items-stretch gap-4">
                      <div className="flex-1 bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 rounded-xl border border-amber-200 transform hover:scale-105 transition-transform">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-amber-800 text-sm uppercase font-bold tracking-wider">Limited Time Offer</p>
                          <Badge variant="outline" className="text-amber-600 border-amber-200">90% OFF</Badge>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-extrabold text-amber-900">₹99</span>
                          <span className="text-amber-600 line-through font-medium">₹999</span>
                          <span className="text-amber-700 text-sm">only</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 rounded-xl border border-emerald-200 transform hover:scale-105 transition-transform">
                        <div className="flex items-start gap-3">
                          <Shield className="h-8 w-8 text-emerald-600 flex-shrink-0" />
                          <div>
                            <p className="text-emerald-800 font-bold text-lg">100% Money-Back Guarantee</p>
                            <p className="text-emerald-700 text-sm">If you're not satisfied, get a full refund. No questions asked.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="absolute -top-3 left-0 right-0 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-600 w-3/4 animate-pulse"></div>
                        </div>
                        <Button size="lg" className="w-full bg-rose-600 hover:bg-rose-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold group">
                          <div className="flex flex-col items-center">
                            <span className="tracking-wide group-hover:scale-105 transition-transform">Reserve Your Seat Now</span>
                            <span className="text-sm opacity-90 font-medium">Only 14 Seats Left!</span>
                          </div>
                        </Button>
                      </div>
                      <p className="text-center text-sm text-slate-500">
                        Join 1 Lakh+ successful insurance professionals today
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
                    <div className="absolute -top-4 -left-4 w-40 h-40 bg-rose-100 rounded-full opacity-50 blur-lg animate-pulse"></div>
                    <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-amber-100 rounded-full opacity-50 blur-lg animate-pulse"></div>
                    
                    <div className="relative group">
                      <Image
                        src="/hero.png"
                        alt="N S Anilkumar - Insurance & Sales Expert"
                        width={600}
                        height={600}
                        className="rounded-xl mx-auto transform group-hover:scale-105 transition-transform duration-300 object-contain drop-shadow-xl"
                        priority
                      />
                      {/* Floating Trust Elements */}
                      <div className="absolute -right-4 top-1/4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 transform hover:scale-105 transition-transform">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-amber-400" />
                          <p className="font-semibold text-slate-700">4.96/5 Rating</p>
                        </div>
                      </div>
                      <div className="absolute -left-4 bottom-1/4 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 transform hover:scale-105 transition-transform">
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-rose-500" />
                          <p className="font-semibold text-slate-700">10,000+ Happy Students</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Coach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-slate-100 text-slate-600 mb-4">Meet Your Coach</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">N S Anilkumar</h2>
            <p className="text-xl text-slate-700 mb-6">Insurance & Sales Coach | 34 Years in Insurance | 24 Years in Coaching</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 order-1 flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-100 rounded-full opacity-50"></div>
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
                      <p className="text-4xl font-bold text-rose-600 mb-2">1 Lakh+</p>
                      <p className="text-slate-700">Positive People Reached</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-rose-600 mb-2">1000+</p>
                      <p className="text-slate-700">Seminars & Workshops</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-50 hover:bg-slate-100 transition-colors duration-300 md:col-span-2">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-xl font-medium text-slate-900 mb-2">
                        "My mission is to help insurance professionals grow their business faster, smarter, and more confidently."
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
                  { label: "15+", sublabel: "Countries Visited" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-xl font-bold text-rose-600">{stat.label}</p>
                    <p className="text-sm text-slate-600">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens When You Join */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">What Happens When You Join</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Unlock Time & Wealth Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn how top professionals manage time, delegate, and build systems for freedom and financial growth.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Target className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Master Foundational Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover core activities that drive consistent sales, client trust, and business growth.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <BarChart3 className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>Accelerate Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strategies to increase monthly income, attract quality clients, and boost cash flow.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Award className="h-12 w-12 text-rose-600 mb-4" />
                <CardTitle>More Profit. More Freedom. More Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Achieve higher profits, freedom, and scalability—backed by a money-back guarantee.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Will Change in Your Business */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Key Topics Covered</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-4 mb-8">
              {[
                "Foundational Activities of Successful Insurance Professionals",
                "Key Ingredients to Grow Your Insurance Business Without Being Involved in Everything",
                "How to Build Your Second Line of Insurance Leaders",
                "Retention Strategies for Insurance Teams",
                "Daily routines and client acquisition methods",
                "Team building, automation, and delegation strategies",
                "Step-by-step method to identify and train leaders",
                "Systems to retain top agents and staff"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-800">{item}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="text-center">
                <div className="mb-4 relative">
                  <div className="h-2 bg-slate-100 rounded-full">
                    <div className="h-full bg-rose-600 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>Workshop filling fast</span>
                    <span>75% booked</span>
                  </div>
                </div>
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg">
                  Buy Now for ₹99 Only
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Who Should Attend</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Briefcase className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <p className="font-medium text-slate-900">Insurance Agents</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <p className="font-medium text-slate-900">Agency Owners</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <p className="font-medium text-slate-900">Development Officers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <p className="font-medium text-slate-900">Sales Teams</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mb-8">
            <p className="text-slate-700 italic">100% applicable to all insurance setups—individual advisors, agency owners, or development officers</p>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg">
              Reserve Your Seat Now
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "10X Increase in Qualified Leads", icon: <Users className="h-12 w-12 text-rose-600 mb-4" /> },
              { title: "2X Growth in Commission & Income", icon: <BarChart3 className="h-12 w-12 text-rose-600 mb-4" /> },
              { title: "Achieved Monthly & Annual Targets", icon: <Target className="h-12 w-12 text-rose-600 mb-4" /> },
              { title: "Earned Promotions & Recognition", icon: <Award className="h-12 w-12 text-rose-600 mb-4" /> },
              { title: "Won Bonuses & Exotic Trips", icon: <Briefcase className="h-12 w-12 text-rose-600 mb-4" /> },
              { title: "Mastered Digital Sales & Marketing", icon: <BookOpen className="h-12 w-12 text-rose-600 mb-4" /> }
            ].map((story, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {story.icon}
                  </div>
                  <p className="font-medium text-slate-900">{story.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">No Questions Asked Money Back Guarantee</h2>
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="pt-6">
                <p className="text-slate-800 mb-4">
                  If after attending the session you feel it didn't deliver the value you were hoping for—for any reason at all—I take complete responsibility. Simply send an email to nsanilkumar.bridge@gmail.com, and my team will refund your entire session fee of ₹99—no questions asked.
                </p>
                <p className="font-medium text-slate-900">You have everything to gain and absolutely nothing to lose.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I attend the workshop?</AccordionTrigger>
                <AccordionContent>
                  After registration, you'll receive a confirmation email with the venue details and instructions. The workshop will be held at a premium venue in the city center, easily accessible by public transport.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is ₹99 the full cost?</AccordionTrigger>
                <AccordionContent>
                  Yes, ₹99 is the complete cost for attending the workshop. There are no hidden charges or upsells during the event. This special price is offered to make this valuable training accessible to all insurance professionals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it suitable for my insurance setup?</AccordionTrigger>
                <AccordionContent>
                  The strategies and techniques taught are 100% applicable to all insurance setups—whether you're an individual advisor, agency owner, or development officer. The principles are universal and can be adapted to your specific situation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I bring my team members?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can bring your team members. Each person needs to register separately. We encourage bringing your team as it helps in better implementation of the strategies learned.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Will materials be shared after?</AccordionTrigger>
                <AccordionContent>
                  Yes, all attendees will receive digital copies of the workshop materials, including presentation slides and worksheets. These will be emailed to you within 24 hours after the workshop.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What if I miss the event?</AccordionTrigger>
                <AccordionContent>
                  If you're unable to attend after registration, please email us at least 48 hours before the event. We can either transfer your registration to a future workshop or process a refund.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <StickyCtaBar />
    </main>
  )
}



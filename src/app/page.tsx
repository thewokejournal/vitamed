"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Pill,
  Stethoscope,
  Baby,
  Leaf,
  Truck,
  Phone,
  MapPin,
  Clock,
  Mail,
  Heart,
  Star,
  ShoppingCart,
  Activity,
  Thermometer,
  Search,
  MessageCircle,
  ChevronRight,
  Plus,
  CheckCircle2,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("rolf-valley-dark-mode");
    if (saved) {
      const val = JSON.parse(saved);
      setIsDark(val);
      if (val) document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("rolf-valley-dark-mode", JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Vitamed Pharmacy Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-2xl font-bold text-foreground">Vitamed Pharmacy</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className={`text-muted-foreground hover:text-primary`}>
                Home
              </a>
              <a href="#doctor" className={`text-muted-foreground hover:text-primary`}>
                Doctor
              </a>
              <a href="#services" className={`text-muted-foreground hover:text-primary`}>
                Services
              </a>
              <a href="#products" className={`text-muted-foreground hover:text-primary`}>
                Products
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button className="bg-[#0B7138] hover:bg-[#095c30] hidden md:flex">
                Order Medicines
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <button
                onClick={() => {
                  // Add a short overlay animation class then toggle theme
                  document.documentElement.classList.add("theme-animate");
                  setTimeout(() => document.documentElement.classList.remove("theme-animate"), 320);
                  setIsDark((prev) => !prev);
                }}
                className={`p-2 rounded-lg bg-popover text-foreground`}
                aria-pressed={isDark}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Search className="w-5 h-5 cursor-pointer text-muted-foreground" />
              <ShoppingCart className="w-5 h-5 cursor-pointer text-muted-foreground" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`gradient-hero py-20 relative overflow-hidden`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm`}>
                <Activity className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Insights</span>
                <Badge className={`bg-yellow-100 text-yellow-800 hover:bg-opacity-80`}>
                  NEW
                </Badge>
              </div>
              <h1 className={`text-4xl md:text-6xl font-bold text-foreground leading-tight`}>
                Supporting Better Health,
                <br />
                <span className="text-muted-foreground">Every Day</span>
              </h1>
              <p className={`text-lg text-muted-foreground max-w-full md:max-w-md`}>
                Licensed pharmacy serving Harare CBD with prescription dispensing, chronic medication management, and same-day delivery across Harare.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-[#0B7138] hover:bg-[#095c30] text-white px-6 py-3 md:px-8 md:py-6 text-base md:text-lg">
                  WhatsApp Your Prescription
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <a href="https://wa.me/263773210987?text=Hi%20Vitamed%20Pharmacy%2C%20please%20check%20stock%20for..." className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium border-border text-muted-foreground hover:bg-popover`}>
                  <Search className="w-4 h-4" /> Check Stock (WhatsApp)
                </a>
                <a
                  href="tel:+263242321890"
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium border-border text-muted-foreground hover:bg-popover`}
                >
                  <Phone className="w-4 h-4" /> Speak to a Pharmacist
                </a>
              </div>
                <div className={`bg-card p-4 md:p-6 rounded-2xl shadow-lg w-full md:w-auto text-center`}> 
                  <div className={`text-4xl md:text-5xl font-bold text-foreground`}>PCZ</div>
                  <div className={`text-sm text-muted-foreground mt-1`}>Licensed & Regulated</div>
                </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://ugc.same-assets.com/lpp198i8E_afBG_8NkUsU7Ds4DVIculR.jpeg"
                  alt="Pharmacist"
                  className="rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/50 dark:bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0B7138]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Our Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              {
                name: "Prescription Medicines",
                image: "https://ugc.same-assets.com/huodsVniB-8JgoyyzyV7xjPr5d2KgeId.jpeg",
                color: "#E8F5E9",
              },
              {
                name: "Chronic Care",
                image: "https://ugc.same-assets.com/MjkkwgnViWDccC1zx_IPB57sZiFABwmq.jpeg",
                color: "#E3F2FD",
              },
              {
                name: "Vitamins & Supplements",
                image: "https://ugc.same-assets.com/aRNT5oPPqKK1l-aQ_X-SPEq_jewIaaT9.jpeg",
                color: "#E8F5E9",
              },
              {
                name: "Personal Care",
                image: "https://ugc.same-assets.com/hTAzwn_8o04Yb5JP_AvGNa7nIYTKac82.jpeg",
                color: "#FFE0B2",
              },
              {
                name: "Diabetes Care",
                image: "https://ugc.same-assets.com/YAN9PxeSqF7_VymBQ3wqUuBWlKGa-xH5.jpeg",
                color: "#F3E5F5",
              },
              {
                name: "Baby Care",
                image: "https://ugc.same-assets.com/kk_JaZuPlX__V_QqKxd8hu-qBSdiqzTR.jpeg",
                color: "#FFEBEE",
              },
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg p-2 flex items-center justify-center"
                  style={{ backgroundColor: category.color }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-card overflow-hidden flex items-center justify-center p-1">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-foreground">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Best Offer */}
      <section className="py-20 bg-popover">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className={`text-4xl font-bold text-foreground`}>
              Todays Best Offer
              <br />
              <span className={`text-2xl font-normal text-muted-foreground`}>
                Just For You
              </span>
            </h2>
            <Button variant="outline" className={`hidden md:flex border-border text-muted-foreground hover:bg-popover`}>
              See more
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Panado (Paracetamol)",
                price: "Available",
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
              },
              {
                name: "Vitamin C Tablets",
                price: "Available",
                image:
                  "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
              },
              {
                name: "Benylin Cough Syrup",
                price: "Available",
                image: "/products/vitamin-c-1000mg.svg",
              },
              {
                name: "Multivitamins",
                price: "Available",
                image:
                  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
              },
            ].map((product, index) => (
              <Card key={index} className={`overflow-hidden group cursor-pointer bg-card border-border`}>
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className={`bg-white text-gray-900 hover:bg-opacity-80 dark:bg-card dark:text-foreground`}>
                      In Stock
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <button className={`w-8 h-8 bg-white hover:bg-gray-50 dark:bg-card dark:hover:bg-gray-700 rounded-full flex items-center justify-center shadow-md`}>
                      <Heart className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className={`bg-popover aspect-square flex items-center justify-center`}> 
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`font-medium text-foreground mb-2`}>
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold text-foreground`}>
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-[#0B7138] hover:bg-[#095c30]"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      WhatsApp Order
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 bg-background`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center text-foreground mb-4`}>Our Services</h2>
          <p className={`text-center text-muted-foreground mb-16 max-w-2xl mx-auto`}>
            Comprehensive pharmaceutical services tailored to meet your health needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Pill,
                name: "Prescription Dispensing",
                desc: "Licensed dispensing with valid prescriptions",
              },
              {
                icon: Heart,
                name: "Chronic Medication Management",
                desc: "Ongoing support for chronic condition management",
              },
              {
                icon: Leaf,
                name: "Medication Counselling",
                desc: "Professional guidance on medication use",
              },
              {
                icon: Thermometer,
                name: "Free Blood Pressure Monitoring",
                desc: "Complimentary BP checks during operating hours",
              },
              {
                icon: Baby,
                name: "Diabetes Care & Support",
                desc: "Blood glucose testing and diabetes management",
              },
              {
                icon: Stethoscope,
                name: "Minor Ailment Advice",
                desc: "Professional advice for common health issues",
              },
              {
                icon: Truck,
                name: "Same-Day Delivery in Harare",
                desc: "Fast delivery across Harare for your convenience",
              },
              {
                icon: Phone,
                name: "Corporate & Institutional Supply",
                desc: "Bulk orders for organizations and businesses",
              },
            ].map((service, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-shadow cursor-pointer bg-card border-border`}>
                <div className={`w-14 h-14 bg-primary/10 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className={`font-semibold text-foreground mb-2`}>{service.name}</h3>
                <p className={`text-sm text-muted-foreground`}>{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalogue */}
      <section id="products" className={`py-20 bg-background`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center text-foreground mb-4`}>Medicine Inventory</h2>
          <p className={`text-center text-muted-foreground mb-12`}>Quality medicines for your health needs — Vitamed Pharmacy selection</p>
          {(
            [
              {
                name: "Prescription Medicines",
                items: [
                  { n: "Amoxicillin 250mg / 500mg Capsules", p: "Prescription Only" },
                  { n: "Augmentin 625mg Tablets", p: "Prescription Only" },
                  { n: "Cefuroxime 500mg", p: "Prescription Only" },
                  { n: "Ciprofloxacin 500mg", p: "Prescription Only" },
                  { n: "Metformin 500mg / 850mg", p: "Prescription Only" },
                  { n: "Gliclazide 80mg", p: "Prescription Only" },
                  { n: "Amlodipine 5mg / 10mg", p: "Prescription Only" },
                  { n: "Enalapril 10mg", p: "Prescription Only" },
                  { n: "Losartan 50mg", p: "Prescription Only" },
                  { n: "Atorvastatin 20mg", p: "Prescription Only" },
                  { n: "Salbutamol Inhaler", p: "Prescription Only" },
                  { n: "Insulin (Actrapid, Mixtard)", p: "Prescription Only" },
                ],
              },
              {
                name: "Over-the-Counter Medicines",
                items: [
                  { n: "Panado (Paracetamol)", p: "Available" },
                  { n: "Ibuprofen", p: "Available" },
                  { n: "Aspirin", p: "Available" },
                  { n: "Lemsip Cold & Flu", p: "Available" },
                  { n: "Benylin Cough Syrup", p: "Available" },
                  { n: "Strepsils", p: "Available" },
                  { n: "Antacid Tablets & Syrups", p: "Available" },
                  { n: "ORS Sachets", p: "Available" },
                ],
              },
              {
                name: "Wellness & Home Care",
                items: [
                  { n: "Blood Pressure Monitors", p: "Available" },
                  { n: "Glucometers & Test Strips", p: "Available" },
                  { n: "Nebulisers", p: "Available" },
                  { n: "Digital Thermometers", p: "Available" },
                ],
              },
              {
                name: "Vitamins & Immune Support",
                items: [
                  { n: "Vitamin C", p: "Available" },
                  { n: "Vitamin D3", p: "Available" },
                  { n: "Zinc", p: "Available" },
                  { n: "Multivitamins (Adults & Children)", p: "Available" },
                  { n: "Iron Supplements", p: "Available" },
                  { n: "Prenatal & Postnatal Vitamins", p: "Available" },
                ],
              },
              {
                name: "Personal Care & Wellness",
                items: [
                  { n: "Skincare & Dermatological Products", p: "Available" },
                  { n: "Sunscreen SPF 30 / 50", p: "Available" },
                  { n: "Feminine Hygiene Products", p: "Available" },
                  { n: "Baby Care Essentials", p: "Available" },
                  { n: "Hand Sanitizers & Face Masks", p: "Available" },
                ],
              },
            ] as { name: string; items: { n: string; p: string }[] }[]
          ).map((cat) => (
            <div key={cat.name} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-2xl font-semibold text-foreground`}>{cat.name}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((it) => (
                  <Card key={it.n} className={`p-5 flex items-center justify-between bg-card border-border`}>
                    <div className={`text-sm text-muted-foreground font-medium max-w-[70%]`}>{it.n}</div>
                    <div className={`text-base font-semibold text-foreground`}>{it.p}</div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Solutions */}
      <section className={`py-20 bg-popover`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center text-foreground mb-16`}>
            Health & Wellness
            <br />
            <span className={`text-muted-foreground`}>Solutions for You</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Pain Relief Solutions",
                image: "https://ugc.same-assets.com/8XphXz4087R9qHIzuMJlxf55o1cS3RoW.jpeg",
                color: "#F3E5F5",
              },
              {
                title: "Cold & Flu Care",
                image: "https://ugc.same-assets.com/G1IBBzyrkLW3aLe_q8q6rDRqeVcNPkp9.jpeg",
                color: "#E3F2FD",
              },
              {
                title: "Chronic Disease Management",
                image: "https://ugc.same-assets.com/Fj4c_U76iqOmMf7PMmrnmvezmuP4AZEd.jpeg",
                color: "#FFEBEE",
              },
            ].map((solution, index) => (
              <Card key={index} className={`overflow-hidden cursor-pointer group bg-card border-border`}>
                <div
                  className="h-64 flex items-center justify-center relative"
                  style={{ backgroundColor: solution.color }}
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`font-semibold text-foreground mb-4`}>{solution.title}</h3>
                  <Button variant="outline" className={`w-full border-border text-muted-foreground hover:bg-popover`}>
                    Browse
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className={`py-20 bg-background`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className={`bg-primary text-white p-8 overflow-hidden relative`}>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Professional Pharmacists</h3>
                <p className={`text-white mb-4`}>
                  Licensed by PCZ
                  <br />
                  Prescription dispensing & medication counselling
                </p>
                <Button className={`bg-white text-primary hover:bg-gray-100`}>
                  Contact Us
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64">
                <img
                  src="https://ugc.same-assets.com/lpp198i8E_afBG_8NkUsU7Ds4DVIculR.jpeg"
                  alt="Pharmacist"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            <Card className={`bg-card p-8 overflow-hidden relative border-border`}>
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-2 text-foreground`}>Dedicated Support Team</h3>
                <p className={`text-muted-foreground mb-4`}>
                  Customer Service
                  <br />
                  Here to help with your health needs
                </p>
                <Button variant="outline" className={`border-border text-muted-foreground hover:bg-popover`}>
                  Contact Us
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64">
                <img
                  src="https://ugc.same-assets.com/huodsVniB-8JgoyyzyV7xjPr5d2KgeId.jpeg"
                  alt="Customer care"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className={`py-20 bg-popover`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold text-foreground mb-4`}>
              Trusted by Harare
              <br />
              Communities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                rating: 5,
                text: "Excellent service and very professional staff. They always have my chronic medication in stock and the pharmacist takes time to explain everything clearly.",
                author: "M. Sibanda",
              },
              {
                rating: 5,
                text: "Very reliable pharmacy in the CBD. Same-day delivery is a lifesaver when I can't leave the office. Highly recommend Vitamed!",
                author: "R. Mutasa",
              },
              {
                rating: 5,
                text: "Great experience! The team is knowledgeable and friendly. They helped me understand my medication better. Will definitely come back.",
                author: "T. Ncube",
              },
            ].map((review, index) => (
              <Card key={index} className={`p-6 bg-card border-border`}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                          i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                  <p className={`text-muted-foreground mb-4 text-sm leading-relaxed`}>
                  {review.text}
                </p>
                  <p className={`text-sm font-medium text-foreground`}>
                  {review.author}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Promotion */}
      <section className={`py-20 bg-background`}>
        <div className="container mx-auto px-4">
          <div className={`gradient-delivery rounded-3xl p-12 relative overflow-hidden`}>
            <div className="relative z-10 max-w-xl">
              <h2 className={`text-4xl font-bold text-foreground mb-4`}>
                Same-day delivery within Harare
                <br />
                Scheduled deliveries for chronic patients
              </h2>
              <Button className={`bg-white text-primary hover:bg-gray-100`}>
                WhatsApp Your Prescription
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 w-96 h-full">
              <img
                src="https://ugc.same-assets.com/KyEc_KKDTG1mpQ3iRG5yIlrhvzOD0VzQ.jpeg"
                alt="Delivery courier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 bg-popover`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold text-center text-foreground mb-16`}>
            Frequently Asked Question
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                  q: "Do you offer delivery?",
                  a: "Yes — same-day delivery within Harare and scheduled monthly deliveries for chronic patients.",
                },
                {
                  q: "Do you accept medical aid?",
                  a: "Yes, we support selected medical aid providers. Please contact us to confirm your scheme.",
                },
                {
                  q: "Do you do blood pressure monitoring?",
                  a: "Yes, we offer free blood pressure monitoring during operating hours.",
                },
                {
                  q: "Are you licensed and regulated?",
                  a: "Yes — we are licensed and regulated by the Pharmacists Council of Zimbabwe (PCZ).",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept Cash, EcoCash, OneMoney, ZIPIT, and selected Medical Aid Providers.",
                },
            ].map((faq, index) => (
              <Card key={index} className={`p-6 cursor-pointer hover:shadow-md bg-card border-border`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className={`font-semibold text-foreground mb-2`}>
                      {faq.q}
                    </h3>
                    <p className={`text-sm text-muted-foreground`}>{faq.a}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-muted-foreground`} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-card border-t border-border text-muted-foreground py-16`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Vitamed Pharmacy Logo" className="w-10 h-10 rounded-lg object-cover" />
                <span className="text-xl font-bold">Vitamed Pharmacy</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Supporting Better Health, Every Day
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div>+263 242 321 890</div>
                    <div className="text-xs">Main Line</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div>+263 77 321 0987</div>
                    <div className="text-xs">WhatsApp Available</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>info@vitamedpharmacy.co.zw</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Location</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Main Branch</div>
                    <div>27 Jason Moyo Avenue</div>
                    <div>Harare CBD, Zimbabwe</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Operating Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Monday – Friday</div>
                    <div>8:00 AM – 6:30 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Saturday</div>
                    <div>8:00 AM – 3:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Sunday & Public Holidays</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                © 2025 Vitamed Pharmacy. All rights reserved. Licensed by Pharmacists Council of Zimbabwe.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/263773210987"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Vitamed Pharmacy"
        className={`fixed bottom-6 right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ease-in-out hover:opacity-95 z-50 relative`}
      >
        <span className="absolute -inset-1 rounded-full bg-primary opacity-20 animate-ping"></span>
        <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M20.52 3.48A11.86 11.86 0 0012 1C6 1 1.43 5.57 1.43 11.57c0 2.03.53 4 1.53 5.73L1 23l5.84-1.52A11.58 11.58 0 0012 23c6 0 10.52-4.57 10.52-10.52 0-2.83-1.09-5.49-3-7.0z" fill="white" opacity="0.08"/>
            <path d="M16.8 15.2c-.6-.3-1.6-.7-2.1-.8-.5-.1-1-.1-1.5.3s-0.7.8-1 1.2c-.2.5-.4.5-.9.2-1-.5-2.1-1.7-2.9-3.1-.2-.4 0-.7.3-1 0 0 .4-.7.5-.9.1-.2.1-.4 0-.6l-.7-1.6c-.2-.4-.5-.9-.8-1.2-.3-.3-.7-.2-1-.1-.3.1-1.2.8-1.2 2.5 0 2.7 1.4 5.3 3.2 7 1.4 1.3 3.4 2.5 6 3.1 2.1.5 2.5.4 3 .4.5 0 1.6-.7 1.8-1.3.2-.7.2-1.3.1-1.5-.1-.3-.4-.5-1-.8z" fill="white"/>
          </svg>
          <span className="sr-only">WhatsApp</span>
        </div>
      </a>

      {/* Stock Check Floating Button */}
      <button className={`fixed bottom-24 right-6 bg-primary text-white px-6 py-3 rounded-full shadow-lg transition-opacity hover:opacity-90 z-50 flex items-center gap-2`}>
        <Search className="w-5 h-5" />
        <span className="font-medium">Check Stock</span>
      </button>

      {/* Call Pharmacy Button */}
      <a
        href="tel:+263242321890"
        className={`fixed bottom-40 right-6 bg-primary text-white px-6 py-3 rounded-full shadow-lg transition-opacity hover:opacity-90 z-50 flex items-center gap-2`}
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">Call Now</span>
      </a>
    </div>
  );
}

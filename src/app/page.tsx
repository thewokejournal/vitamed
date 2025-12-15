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
              <img src="/logo.png" alt="Rolf Valley Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-2xl font-bold text-foreground">Rolf Valley Pharmacy</span>
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
                Book Appointment
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
              <h1 className={`text-6xl font-bold text-foreground leading-tight`}>
                Your Neighbourhood
                <br />
                <span className="text-muted-foreground">Pharmacy in Borrowdale</span>
              </h1>
              <p className={`text-lg text-muted-foreground max-w-md`}>
                Quality medication, fast service, and same-day delivery across Rolf Valley and surrounding suburbs.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-[#0B7138] hover:bg-[#095c30] text-white px-8 py-6 text-lg">
                  Order Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <a href="https://wa.me/263778894411?text=Hi%20Rolf%20Valley%20Pharmacy%2C%20please%20check%20stock%20for..." className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium border-border text-muted-foreground hover:bg-popover`}>
                  <Search className="w-4 h-4" /> Check Stock (WhatsApp)
                </a>
                <a
                  href="tel:+263715552211"
                  className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium border-border text-muted-foreground hover:bg-popover`}
                >
                  <Phone className="w-4 h-4" /> Call 24/7 Voice Agent
                </a>
              </div>
                <div className={`bg-card p-6 rounded-2xl shadow-lg inline-block`}>
                  <div className={`text-5xl font-bold text-foreground`}>24/7</div>
                  <div className={`text-sm text-muted-foreground mt-1`}>Stock Checking Support</div>
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
                name: "Kidney Care",
                image: "https://ugc.same-assets.com/huodsVniB-8JgoyyzyV7xjPr5d2KgeId.jpeg",
                color: "#E8F5E9",
              },
              {
                name: "Digestive Health",
                image: "https://ugc.same-assets.com/MjkkwgnViWDccC1zx_IPB57sZiFABwmq.jpeg",
                color: "#E3F2FD",
              },
              {
                name: "Liver Care",
                image: "https://ugc.same-assets.com/aRNT5oPPqKK1l-aQ_X-SPEq_jewIaaT9.jpeg",
                color: "#E8F5E9",
              },
              {
                name: "Physiology Care",
                image: "https://ugc.same-assets.com/hTAzwn_8o04Yb5JP_AvGNa7nIYTKac82.jpeg",
                color: "#FFE0B2",
              },
              {
                name: "Sleep Care",
                image: "https://ugc.same-assets.com/YAN9PxeSqF7_VymBQ3wqUuBWlKGa-xH5.jpeg",
                color: "#F3E5F5",
              },
              {
                name: "Pregnant Care",
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
                name: "Immune Booster Combo Pack",
                price: "$10.00",
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
              },
              {
                name: "Omega 3 Fish Oil",
                price: "$12.00",
                image:
                  "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
              },
              {
                name: "Vitamin C 1000mg",
                price: "$6.00",
                image: "/products/vitamin-c-1000mg.svg",
              },
              {
                name: "Revivo Multi-Vitamin",
                price: "$9.00",
                image:
                  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
              },
            ].map((product, index) => (
              <Card key={index} className={`overflow-hidden group cursor-pointer bg-card border-border`}>
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className={`bg-white text-gray-900 hover:bg-opacity-80 dark:bg-card dark:text-foreground`}>
                      Nature's bounty
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
                      Order Now
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
                name: "Prescription Dispensing & Chronic Disease Management",
                desc: "Chronic medication refills and ongoing disease support",
              },
              {
                icon: Heart,
                name: "Over-The-Counter (OTC) Medicine",
                desc: "Everyday medicine and symptom relief",
              },
              {
                icon: Leaf,
                name: "Wellness & Nutritional Supplements",
                desc: "Premium imported health supplements",
              },
              {
                icon: Thermometer,
                name: "Premium Beauty & Skincare",
                desc: "Dermatologist-recommended brands",
              },
              {
                icon: Baby,
                name: "Mother & Baby Essentials",
                desc: "Formula, nappies, baby care and essentials",
              },
              {
                icon: Stethoscope,
                name: "Diagnostics & Checks",
                desc: "BP checks, sugar tests and basic screening",
              },
              {
                icon: Truck,
                name: "Same-Day Delivery",
                desc: "Same-day delivery across Borrowdale & surrounds",
              },
              {
                icon: Phone,
                name: "24/7 AI Voice Agent",
                desc: "Real-time stock checks and hours",
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
          <h2 className={`text-4xl font-bold text-center text-foreground mb-4`}>Mock Product Catalogue</h2>
          <p className={`text-center text-muted-foreground mb-12`}>Curated premium and international products — Rolf Valley selection</p>
          {(
            [
              {
                name: "Chronic Medication",
                items: [
                  { n: "Telmi-H 40/12.5", p: "$18.00" },
                  { n: "Amlodipine 5mg", p: "$4.00" },
                  { n: "Jardiance 10mg", p: "$45.00" },
                  { n: "Glucophage XR", p: "$8.00" },
                  { n: "Insulin Lantus", p: "$32.00" },
                  { n: "Rosuvastatin 10mg", p: "$14.00" },
                  { n: "Losartan 100mg", p: "$12.00" },
                ],
              },
              {
                name: "Pain & Fever",
                items: [
                  { n: "Panado Extra Strength", p: "$3.00" },
                  { n: "Ibuprofen 400mg", p: "$4.00" },
                  { n: "Nurofen", p: "$6.00" },
                  { n: "Myprodol Capsules", p: "$5.00" },
                ],
              },
              {
                name: "Cold, Flu & Cough",
                items: [
                  { n: "ACC 600", p: "$7.00" },
                  { n: "Coryx", p: "$4.00" },
                  { n: "Vicks Inhaler", p: "$3.50" },
                  { n: "Benylin Dry Cough", p: "$7.00" },
                ],
              },
              {
                name: "Stomach & Digestion",
                items: [
                  { n: "Buscopan", p: "$5.00" },
                  { n: "Gaviscon Liquid", p: "$8.00" },
                  { n: "Smecta", p: "$3.00" },
                  { n: "Vitality Probiotics (Premium)", p: "$12.00" },
                ],
              },
              {
                name: "Allergy Relief",
                items: [
                  { n: "Cetirizine", p: "$4.00" },
                  { n: "Allergex", p: "$3.50" },
                  { n: "Avamys Nasal Spray", p: "$14.00" },
                  { n: "Clarityne", p: "$7.00" },
                ],
              },
              {
                name: "Mother & Baby",
                items: [
                  { n: "NAN Optipro 1", p: "$18.00" },
                  { n: "Aptamil (Premium)", p: "$26.00" },
                  { n: "Pampers Premium Care", p: "$22.00" },
                  { n: "Purity Teething Gel", p: "$3.50" },
                ],
              },
              {
                name: "Wellness & Supplements",
                items: [
                  { n: "Solgar Vitamin C 1000mg (Premium)", p: "$18.00" },
                  { n: "Vitaforce Multivitamin", p: "$12.00" },
                  { n: "Omega-3 Fish Oil", p: "$14.00" },
                  { n: "NutriWomen Wellness Pack", p: "$20.00" },
                ],
              },
              {
                name: "Skincare & Beauty",
                items: [
                  { n: "CeraVe Foaming Cleanser", p: "$22.00" },
                  { n: "La Roche-Posay Effaclar Duo", p: "$30.00" },
                  { n: "Bioderma Micellar Water", p: "$16.00" },
                  { n: "Eucerin Sun Gel-Cream SPF 50+", p: "$25.00" },
                ],
              },
              {
                name: "Medical Equipment",
                items: [
                  { n: "Omron M2 Basic BP Monitor", p: "$45.00" },
                  { n: "Accu-Chek Glucometer + Strips", p: "$40.00" },
                  { n: "Digital Oral Thermometer", p: "$6.00" },
                  { n: "Nebuliser Machine", p: "$35.00" },
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
            Our Seasonal
            <br />
            <span className={`text-muted-foreground`}>Exclusive Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Headache & Migraine Solutions",
                image: "https://ugc.same-assets.com/8XphXz4087R9qHIzuMJlxf55o1cS3RoW.jpeg",
                color: "#F3E5F5",
              },
              {
                title: "Cold & Flu Relief",
                image: "https://ugc.same-assets.com/G1IBBzyrkLW3aLe_q8q6rDRqeVcNPkp9.jpeg",
                color: "#E3F2FD",
              },
              {
                title: "Allergy Relief Essentials",
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
                <h3 className="text-2xl font-bold mb-2">Tafadzwa Nyamande</h3>
                <p className={`text-white mb-4`}>
                  BPharm (UZ), 8+ years experience
                  <br />
                  Head Pharmacist — Chronic medication specialist
                </p>
                <Button className={`bg-white text-primary hover:bg-gray-100`}>
                  Contact
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64">
                <img
                  src="https://ugc.same-assets.com/lpp198i8E_afBG_8NkUsU7Ds4DVIculR.jpeg"
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            <Card className={`bg-card p-8 overflow-hidden relative border-border`}>
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-2 text-foreground`}>Lisa M.</h3>
                <p className={`text-muted-foreground mb-4`}>
                  Customer Care Lead
                  <br />
                  Head of Customer Support
                </p>
                <Button variant="outline" className={`border-border text-muted-foreground hover:bg-popover`}>
                  Contact
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64">
                <img
                  src="https://ugc.same-assets.com/huodsVniB-8JgoyyzyV7xjPr5d2KgeId.jpeg"
                  alt="Customer care lead"
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
              4.5/5 review from
              <br />
              7,000+ verified customer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                rating: 3,
                text: "This pharmacy was incredibly Being accommodating with COVID-19 as a pandemic going on.I recommend this pharmacy, including the FAST pick-up and delivery!",
                author: "Joe Silva Smith",
              },
              {
                rating: 5,
                text: "This pharmacy was incredibly Being accommodating with COVID-19 as a pandemic going on.I recommend this pharmacy, including the FAST pick-up and delivery!",
                author: "Joe Silva Smith",
              },
              {
                rating: 5,
                text: "This pharmacy was incredibly Being accommodating with COVID-19 as a pandemic going on.I recommend this pharmacy, including the FAST pick-up and delivery!",
                author: "Joe Silva Smith",
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
                Same-day delivery across Borrowdale & surrounds
                <br />
                Delivery: $3–$5 depending on distance
              </h2>
              <Button className={`bg-white text-primary hover:bg-gray-100`}>
                Order Now
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
                  q: "Do you deliver?",
                  a: "Yes — same day in Borrowdale & surrounding suburbs.",
                },
                {
                  q: "Do you accept medical aid?",
                  a: "Yes, selected schemes.",
                },
                {
                  q: "Do you do BP and Sugar checks?",
                  a: "Yes, available anytime during opening hours.",
                },
                {
                  q: "Do you stock premium skincare?",
                  a: "Yes — CeraVe, Bioderma, Eucerin, La Roche-Posay, and more.",
                },
                {
                  q: "Does the AI voice agent check stock?",
                  a: "Yes — it provides 24/7 stock and hours information.",
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
                <img src="/logo.png" alt="Rolf Valley Logo" className="w-10 h-10 rounded-lg object-cover" />
                <span className="text-xl font-bold">Rolf Valley Pharmacy</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Trusted Care for Your Family.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div>+263 77 889 4411</div>
                    <div className="text-xs">WhatsApp Available</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>info@rolfvalleypharmacy.co.zw</div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-red-400">After-hours AI Voice Agent</div>
                    <div>+263 71 555 2211</div>
                  </div>
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
                    <div>42 Hindhead Avenue, Rolf Valley, Borrowdale, Harare</div>
                    <div className="text-xs">(Inside Rolf Valley Shopping Centre)</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Mon - Fri</div>
                    <div>8:00am – 7:00pm</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Saturday</div>
                    <div>8:00am – 5:00pm</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white">Sunday</div>
                    <div>9:00am – 1:00pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                © 2025 Rolf Valley Pharmacy. All rights reserved.
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
        href="https://wa.me/263778894411"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Rolf Valley Pharmacy"
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

      {/* Call Voice Agent Button */}
      <a
        href="tel:+263715552211"
        className={`fixed bottom-40 right-6 bg-primary text-white px-6 py-3 rounded-full shadow-lg transition-opacity hover:opacity-90 z-50 flex items-center gap-2`}
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">Call 24/7</span>
      </a>
    </div>
  );
}

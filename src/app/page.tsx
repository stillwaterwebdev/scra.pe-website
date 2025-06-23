import Star28 from "@/components/stars/s28"
import Star20 from "@/components/stars/s20"
import Star11 from "@/components/stars/s11"
import { DollarSign, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar is rendered in layout.tsx */}
      <main className="pt-[70px]">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-70px)] flex items-center justify-center px-6 py-16 bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-center">
              
                            {/* Left Section */}
              <div className="space-y-8 max-w-xl">
                {/* Line 1: scra.pe with logo */}
                <div className="flex items-center gap-3">
                  <Star28 
                    size={56} 
                  color="var(--main)"
                    stroke="var(--border)" 
                    strokeWidth={2}
                    className="transition-transform hover:rotate-12"
                  />
                  <h1 className="text-6xl md:text-7xl font-heading text-black">
                    scra.pe
            </h1>
                </div>

                {/* Line 2: Tagline */}
                <h2 className="text-4xl md:text-5xl font-heading text-black">
                  Data Extraction, Refined
                </h2>

                {/* Line 3: Description */}
                <p className="text-2xl md:text-3xl text-black leading-relaxed">
                  Professional-grade business data from Google Maps, automated and delivered seamlessly
                </p>

                {/* Line 4: CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  <Button 
                    asChild
                    className="font-heading text-xl px-10 py-4 h-14 w-full"
                  >
                    <Link href="/pricing-calculator">
                      Pricing Calculator
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    className="font-heading text-xl px-10 py-4 h-14 w-full"
                  >
                    <Link href="/auth?tab=signup">
                      Get Started
            </Link>
                  </Button>
          </div>

                {/* Trust Text */}
                <div className="text-center">
                  <p className="text-lg text-black/70 font-medium">
                    PCI‑secure • 30‑day money‑back guarantee
                  </p>
        </div>
              </div>

              {/* Right Section - Placeholder Graphic */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-main/10 rounded-base border-4 border-border shadow-shadow flex items-center justify-center">
                  <Star20
                    size={200}
                    color="var(--main)"
                    stroke="var(--border)"
                    strokeWidth={3}
                    className="opacity-60"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-secondary-background">
          <div className="mx-auto max-w-6xl">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading text-black mb-6">
                Built for precision, designed for scale
              </h2>
              <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto">
                Sophisticated data extraction that adapts to your business needs
              </p>
              </div>

            {/* Three Core Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              
              {/* Smart Pricing Engine */}
              <Card className="bg-background border-4 border-border shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-main rounded-base border-4 border-border shadow-shadow flex items-center justify-center">
                      <DollarSign size={32} color="black" strokeWidth={3} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-heading text-black">
                    Transparent, Dynamic Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-black mb-6 leading-relaxed">
                    Pay only for what you need. Our intelligent pricing calculates costs based on your exact search parameters—keywords, geographic scope, and data volume—with no hidden fees or surprises.
                  </p>
                  <div className="space-y-2">
                    <div><Badge variant="neutral">Real-time cost calculation</Badge></div>
                    <div><Badge variant="neutral">Keyword × location-based pricing</Badge></div>
                    <div><Badge variant="neutral">No setup fees or subscriptions</Badge></div>
                  </div>
                </CardContent>
              </Card>

              {/* Automated Delivery */}
              <Card className="bg-background border-4 border-border shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-main rounded-base border-4 border-border shadow-shadow flex items-center justify-center">
                      <Mail size={32} color="black" strokeWidth={3} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-heading text-black">
                    Instant Results, Zero Wait
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-black mb-6 leading-relaxed">
                    From payment to inbox in minutes. Our automated processing pipeline handles everything—scraping, formatting, and delivering your Excel file while you focus on what matters most.
                  </p>
                  <div className="space-y-2">
                    <div><Badge variant="neutral">Automated Excel generation</Badge></div>
                    <div><Badge variant="neutral">Email delivery within 30 minutes</Badge></div>
                    <div><Badge variant="neutral">No manual intervention required</Badge></div>
                  </div>
                </CardContent>
              </Card>

              {/* Precision Targeting */}
              <Card className="bg-background border-4 border-border shadow-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-main rounded-base border-4 border-border shadow-shadow flex items-center justify-center">
                      <MapPin size={32} color="black" strokeWidth={3} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-heading text-black">
                    Surgical Geographic Precision
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-black mb-6 leading-relaxed">
                    Target exactly where your customers are. Search by state, county, metropolitan area, or specific ZIP codes to get the precise business data you need for your market analysis.
                  </p>
                  <div className="space-y-2">
                    <div><Badge variant="neutral">Multiple geographic filters</Badge></div>
                    <div><Badge variant="neutral">Custom ZIP code targeting</Badge></div>
                    <div><Badge variant="neutral">Comprehensive US coverage</Badge></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Secondary Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              
              <div className="bg-background rounded-base border-4 border-border p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Star11 size={24} color="var(--main)" strokeWidth={2} />
                  <h3 className="text-xl font-heading text-black">
                    Professional Data Standards
                  </h3>
                </div>
                <p className="text-black">
                  Enterprise-grade data extraction with consistent formatting and comprehensive business details ready for immediate analysis.
                </p>
              </div>

              <div className="bg-background rounded-base border-4 border-border p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Star11 size={24} color="var(--main)" strokeWidth={2} />
                  <h3 className="text-xl font-heading text-black">
                    Secure Processing
                  </h3>
                </div>
                <p className="text-black">
                  Bank-level security with encrypted data transmission, secure payment processing, and protected storage of all business information.
                </p>
            </div>

              <div className="bg-background rounded-base border-4 border-border p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Star11 size={24} color="var(--main)" strokeWidth={2} />
                  <h3 className="text-xl font-heading text-black">
                    Custom Data Solutions
                  </h3>
                </div>
                <p className="text-black">
                  Need something specific? Our team handles custom data requests with tailored pricing and extraction for unique business requirements.
                </p>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-background rounded-base border-4 border-border p-6">
              <h3 className="text-2xl font-heading text-black mb-6 text-center">
                Technical Specifications
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
                <div>
                  <span className="font-heading font-bold">File Format:</span> Excel (.xlsx) with structured data columns
        </div>
                        <div>
                  <span className="font-heading font-bold">Processing Time:</span> Typically 15-30 minutes for standard requests
                        </div>
                <div>
                  <span className="font-heading font-bold">Coverage:</span> All US states, counties, and metropolitan areas
                      </div>
                <div>
                  <span className="font-heading font-bold">Data Points:</span> Business name, address, phone, website, ratings, hours
                      </div>
                <div>
                  <span className="font-heading font-bold">Payment:</span> Secure Stripe integration with instant processing
                    </div>
                <div>
                  <span className="font-heading font-bold">Support:</span> Custom data requests handled within 24 hours
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-6 bg-background">
          <div className="mx-auto max-w-6xl">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading text-black mb-6">
                How It Works
          </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              
              {/* Step 1 */}
              <div className="bg-secondary-background rounded-base border-4 border-border p-6">
                <div className="flex items-end gap-3 mb-6">
                  <div className="w-12 h-12 bg-main rounded-base border-4 border-border shadow-shadow flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-heading text-black font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-heading text-black">
                    Define Your Search
                  </h3>
                </div>
                <p className="text-lg text-black leading-relaxed">
                  Enter your target keywords and select your geographic area—whether that's specific states, counties, or custom ZIP codes. Our system calculates your project scope and cost.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-secondary-background rounded-base border-4 border-border p-6">
                <div className="flex items-end gap-3 mb-6">
                  <div className="w-12 h-12 bg-main rounded-base border-4 border-border shadow-shadow flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-heading text-black font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-heading text-black">
                    Confirm & Pay
                  </h3>
                </div>
                <p className="text-lg text-black leading-relaxed">
                  Review your search parameters and pricing, then proceed with secure payment through Stripe. You'll receive confirmation and your order enters our automated processing queue.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-secondary-background rounded-base border-4 border-border p-6">
                <div className="flex items-end gap-3 mb-6">
                  <div className="w-12 h-12 bg-main rounded-base border-4 border-border shadow-shadow flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-heading text-black font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-heading text-black">
                    We Handle the Rest
                  </h3>
          </div>
                <p className="text-lg text-black leading-relaxed">
                  Our Python-powered scraping engine queries Google Maps using your parameters, extracts comprehensive business data, and formats everything into a clean Excel file—all automatically.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-secondary-background rounded-base border-4 border-border p-6">
                <div className="flex items-end gap-3 mb-6">
                  <div className="w-12 h-12 bg-main rounded-base border-4 border-border shadow-shadow flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-heading text-black font-bold">4</span>
                  </div>
                  <h3 className="text-2xl font-heading text-black">
                    Receive Your Data
                  </h3>
                </div>
                <p className="text-lg text-black leading-relaxed">
                  Within 30 minutes, your formatted Excel file arrives in your inbox, complete with business names, addresses, contact information, ratings, and hours of operation.
                </p>
              </div>
            </div>

            {/* Call-to-Action */}
            <div className="text-center">
              <h3 className="text-2xl font-heading text-black mb-6">
                Ready to get started?
              </h3>
              <Button 
                asChild
                className="font-heading text-xl px-10 py-4 h-14"
              >
                <Link href="/pricing-calculator">
                  Calculate your project cost →
                </Link>
              </Button>
            </div>

          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="py-16 px-6 bg-secondary-background">
          <div className="mx-auto max-w-6xl">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading text-black mb-4">
                Quick Answers
              </h2>
              <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
                Get instant answers to the most common questions about scra.pe
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="mb-12">
              <Card className="bg-white border-4 border-border">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    
                    {/* Question 1: Pricing */}
                    <AccordionItem value="item-1" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        How is pricing calculated?
                </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Our pricing formula is simple: Number of Keywords × Number of ZIP Codes × Base Rate. For example, if you search for 2 keywords across 100 ZIP codes, you'll pay for 200 individual queries. The system shows your exact cost before payment with no hidden fees.
                </AccordionContent>
              </AccordionItem>

                    {/* Question 2: Processing Time */}
                    <AccordionItem value="item-2" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        How long does processing take?
                </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Most orders are processed and delivered within 15-30 minutes of payment confirmation. Complex searches covering large geographic areas may take up to 60 minutes. You'll receive email updates on your order status throughout the process.
                </AccordionContent>
              </AccordionItem>

                    {/* Question 3: Account Required */}
                    <AccordionItem value="item-3" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Do I need an account to use scra.pe?
                </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        No, you can place orders as a guest user. Simply provide your email address for delivery and payment processing. However, creating an optional account allows you to track order history and manage multiple projects more easily.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
                </CardContent>
              </Card>
          </div>

            {/* Link to Full FAQ */}
            <div className="text-center">
              <Button 
                asChild
                variant="neutral"
                className="font-heading text-lg px-8 py-3"
              >
                <Link href="/faq">
                  View All FAQ →
                </Link>
              </Button>
              </div>

          </div>
        </section>
      </main>
    </div>
  )
}

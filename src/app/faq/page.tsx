import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-[70px]">
        {/* FAQ Header */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading text-black mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-black max-w-2xl mx-auto">
                Everything you need to know about scra.pe's Google Maps data extraction service
              </p>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-6">
              
              {/* General Questions */}
              <Card className="bg-white border-4 border-border">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-xl font-heading text-black">
                    General Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What is Google Maps scraping?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Google Maps scraping is the automated process of extracting business information from Google Maps search results. We collect data like business names, addresses, phone numbers, websites, ratings, and hours of operation, then organize it into a structured Excel file for your use.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        How accurate is the data?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Our data is sourced directly from Google Maps, so it's as accurate as what Google displays publicly. We extract information in real-time, ensuring you receive the most current data available. However, business information can change frequently, so we recommend using data shortly after receiving it.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What data fields are included in the Excel file?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Each Excel file contains: Business Name, Full Address, Phone Number, Website URL, Google Rating (if available), Number of Reviews, Business Category, Hours of Operation (when available), and Geographic Coordinates (latitude/longitude).
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Is this service legal?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Yes, we only extract publicly available information that Google displays in their search results. We comply with all applicable data protection laws and Google's terms of service. We do not access private or restricted information.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What file format do I receive?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        All data is delivered as a clean, formatted Excel (.xlsx) file with clearly labeled columns and organized rows. The file is ready for immediate use in analysis, CRM systems, or other business applications.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Pricing & Payment */}
              <Card className="bg-white border-4 border-border">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-xl font-heading text-black">
                    Pricing & Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-6" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        How is pricing calculated?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Our pricing formula is: Number of Keywords × Number of ZIP Codes × Base Rate. For example, if you search for 2 keywords across 100 ZIP codes, you'll pay for 200 individual queries. The system shows your exact cost before payment.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-7" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What payment methods do you accept?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        We accept all major credit cards (Visa, MasterCard, American Express, Discover) through our secure Stripe payment system. We do not store your payment information on our servers.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-8" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Are there any hidden fees?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        No. The price shown in our calculator is exactly what you'll pay. There are no setup fees, processing fees, subscription costs, or hidden charges of any kind.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-9" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What is your refund policy?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        If our system fails to deliver your data due to technical issues on our end, we provide a full refund. However, due to the nature of data services, we cannot offer refunds for delivered data that doesn't meet your specific expectations or if your search parameters yield fewer results than anticipated.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-10" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Do you offer volume discounts?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Currently, our pricing is consistent regardless of order size. For very large projects or ongoing data needs, please contact us through our Custom Data Solutions page to discuss potential arrangements.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Technical Questions */}
              <Card className="bg-white border-4 border-border">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-xl font-heading text-black">
                    Technical Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-11" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        How long does processing take?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Most orders are processed and delivered within 15-30 minutes of payment confirmation. Complex searches covering large geographic areas may take up to 60 minutes. You'll receive email updates on your order status.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-12" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What if my search returns no results?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        If a specific keyword and location combination yields no results, that will be noted in your Excel file. You're still charged for the query attempt, as our system performed the search as requested. We recommend testing with broader keywords if results are limited.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-13" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Can I modify my search after payment?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        No, searches cannot be modified after payment is processed. Please carefully review your keywords and geographic parameters before completing your purchase. If you need different data, you'll need to place a new order.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-14" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What happens if the system encounters an error?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Our system automatically retries failed queries and logs any technical issues. If we cannot complete your order due to system problems, you'll receive a full refund and notification email explaining the issue.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-15" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Do you store my scraped data?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Yes, all scraped data is stored securely in our database for quality assurance and potential re-delivery if needed. We do not share your data with third parties and maintain strict security protocols for all stored information.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Account & Usage */}
              <Card className="bg-white border-4 border-border">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-xl font-heading text-black">
                    Account & Usage
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-16" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Do I need an account to use scra.pe?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        No, you can place orders as a guest user. Simply provide your email address for delivery and payment processing. However, creating an optional account allows you to track order history and manage multiple projects more easily.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-17" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        How do I track my order?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        After payment, you'll receive a confirmation email with your order number. If you have an account, you can log in to view order status. All users receive email updates when orders are completed and ready for download.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-18" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Can I reorder the same search?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Yes, but each search is processed fresh to ensure you receive the most current data available. If you have an account, you can easily repeat previous searches with the same parameters.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-19" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What if I don't receive my email?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        First, check your spam/junk folder as automated emails sometimes get filtered. If you still don't see it after 60 minutes, contact our support team with your order number for immediate assistance.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-20" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Can I get data for locations outside the United States?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Currently, scra.pe only supports searches within the United States. We cover all 50 states, US territories, and can target specific counties, metropolitan areas, or ZIP codes within the US.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Custom Data & Support */}
              <Card className="bg-white border-4 border-border">
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-xl font-heading text-black">
                    Custom Data & Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-21" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What qualifies as a "custom data request"?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Custom requests include: searches requiring specific data fields we don't normally extract, ongoing data collection services, integration with your existing systems, or searches that fall outside our standard geographic or keyword parameters.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-22" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        How long do custom requests take?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Custom data requests are typically completed within 24-48 hours, depending on complexity. We'll provide a timeline estimate when we respond to your initial request.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-23" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Do you provide technical support?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Yes, we offer email support for all technical issues, payment problems, or questions about your data. While we don't provide phone support, we typically respond to emails within 4 business hours.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-24" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        Can you help with data analysis or interpretation?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        Our service focuses on data extraction and delivery. We don't provide analysis services, but our Excel format makes it easy to import into analysis tools, CRM systems, or work with data analysts.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-25" className="border-b border-border">
                      <AccordionTrigger className="text-left font-heading text-base py-4 hover:no-underline">
                        What if I need ongoing, regular data updates?
                      </AccordionTrigger>
                      <AccordionContent className="text-black text-sm leading-relaxed pb-4">
                        For businesses needing regular data refreshes, please contact us through our Custom Data Solutions page. We can discuss automated scheduling, custom pricing, and delivery arrangements for ongoing projects.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 pt-8 border-t-4 border-border">
              <h3 className="text-xl font-heading text-black mb-4">
                Still have questions?
              </h3>
              <p className="text-base text-black mb-6 max-w-lg mx-auto">
                Can't find what you're looking for? Our team is here to help with any specific questions about your data needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  asChild
                  className="font-heading text-base px-6 py-2"
                >
                  <Link href="/pricing-calculator">
                    Get Started Now
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="neutral"
                  className="font-heading text-base px-6 py-2"
                >
                  <Link href="/custom-data-solutions">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
} 
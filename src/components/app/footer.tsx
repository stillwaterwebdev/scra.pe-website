import Link from "next/link"
import Star28 from "@/components/stars/s28"

export default function Footer() {
  return (
    <footer className="bg-secondary-background border-t-4 border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Star28 
                size={32} 
                color="var(--main)"
                stroke="var(--border)" 
                strokeWidth={2}
              />
              <span className="text-2xl font-heading text-black">scra.pe</span>
            </Link>
            <p className="text-black text-sm leading-relaxed max-w-md">
              Professional Google Maps data extraction service. Get high-quality business leads with our automated scraping platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-black text-sm hover:text-main transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pricing-calculator" className="text-black text-sm hover:text-main transition-colors">
                  Pricing Calculator
                </Link>
              </li>
              <li>
                <Link href="/custom-data-solutions" className="text-black text-sm hover:text-main transition-colors">
                  Custom Data Solutions
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-black text-sm hover:text-main transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading text-lg text-black mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@scra.pe" className="text-black text-sm hover:text-main transition-colors">
                  support@scra.pe
                </a>
              </li>
              <li>
                <span className="text-black text-sm">
                  Response within 4 hours
                </span>
              </li>
              <li>
                <span className="text-black text-sm">
                  Monday - Friday, 9 AM - 6 PM EST
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-black text-sm">
            © 2025 scra.pe. All rights reserved.
          </p>
          <div className="flex gap-3">
            <Link href="/privacy" className="text-black text-sm hover:text-main transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-black text-sm hover:text-main transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
} 
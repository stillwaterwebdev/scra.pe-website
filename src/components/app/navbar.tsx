import Link from "next/link"
import Star28 from "@/components/stars/s28"
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-20 mx-auto flex h-[70px] w-full items-center border-b-4 border-border bg-secondary-background">
      <div className="mx-auto flex max-w-6xl px-6 w-full text-black items-center justify-between">
        <div className="flex items-center gap-10 -ml-5">
          {/* Logo */}
          <Link
            className="flex items-center gap-3 text-[24px] font-heading text-black hover:text-main transition-colors"
            href={"/"}
          >
            <Star28 
              size={32} 
              color="var(--main)" 
              stroke="var(--border)" 
              strokeWidth={2}
              className="transition-transform hover:rotate-12"
            />
            <span>scra.pe</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-base font-base">
            <Link 
              href="/pricing" 
              className="text-black hover:text-main transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="/custom-data-solutions" 
              className="text-black hover:text-main transition-colors font-medium"
            >
              Custom Data Solutions
            </Link>
            <Link 
              href="/faq" 
              className="text-black hover:text-main transition-colors font-medium"
            >
              FAQ
            </Link>
            <Link 
              href="/terms" 
              className="text-black hover:text-main transition-colors font-medium"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Right Side - Auth & CTA */}
        <div className="flex items-center gap-6">
          {/* Login/Register */}
          <div className="flex items-center gap-3">
            <Link 
              href="/auth?tab=signin" 
              className="text-base font-medium text-black hover:text-main transition-colors"
            >
              Login
            </Link>
            <span className="text-black">|</span>
            <Link 
              href="/auth?tab=signup" 
              className="text-base font-medium text-black hover:text-main transition-colors"
            >
              Register
            </Link>
          </div>

          {/* Try Now Button */}
          <Button 
            asChild
            className="ml-4 font-heading text-base px-6 py-1 h-8"
          >
            <Link href="/try-now">
              Try Now
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

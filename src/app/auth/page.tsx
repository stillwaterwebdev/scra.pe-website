"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"

function AuthContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("signin")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "signup" || tab === "register") {
      setActiveTab("signup")
    } else {
      setActiveTab("signin")
    }
  }, [searchParams])
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-[70px]">
        <section className="py-16 px-6 min-h-[calc(100vh-70px)] flex items-center justify-center">
          <div className="mx-auto max-w-lg w-full">
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-heading text-black mb-4">
                Welcome to scra.pe
              </h1>
              <p className="text-base text-black">
                Sign in to your account or create a new one to get started
              </p>
            </div>

            <Card className="bg-white border-4 border-border">
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="signin" className="font-heading">
                      Sign In
                    </TabsTrigger>
                    <TabsTrigger value="signup" className="font-heading">
                      Sign Up
                    </TabsTrigger>
                  </TabsList>

                  {/* Sign In Tab */}
                  <TabsContent value="signin" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signin-email" className="font-heading">
                          Email
                        </Label>
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="Enter your email"
                          className="border-2 border-border"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="signin-password" className="font-heading">
                          Password
                        </Label>
                        <Input
                          id="signin-password"
                          type="password"
                          placeholder="Enter your password"
                          className="border-2 border-border"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Link 
                          href="/forgot-password" 
                          className="text-sm text-black hover:text-main transition-colors"
                        >
                          Forgot password?
                        </Link>
                      </div>

                      <Button className="w-full font-heading text-base py-2 h-12">
                        Sign In
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Sign Up Tab */}
                  <TabsContent value="signup" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-name" className="font-heading">
                          Full Name
                        </Label>
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="Enter your full name"
                          className="border-2 border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="font-heading">
                          Email
                        </Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="Enter your email"
                          className="border-2 border-border"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="font-heading">
                          Password
                        </Label>
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="Create a password"
                          className="border-2 border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-confirm-password" className="font-heading">
                          Confirm Password
                        </Label>
                        <Input
                          id="signup-confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          className="border-2 border-border"
                        />
                      </div>

                      <div className="text-xs text-black leading-relaxed">
                        By creating an account, you agree to our{" "}
                        <Link href="/terms" className="text-main hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-main hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </div>

                      <Button className="w-full font-heading text-base py-2 h-12">
                        Create Account
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <p className="text-sm text-black">
                Need help?{" "}
                <a 
                  href="mailto:support@scra.pe" 
                  className="text-main hover:underline font-medium"
                >
                  Contact Support
                </a>
              </p>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContent />
    </Suspense>
  )
} 
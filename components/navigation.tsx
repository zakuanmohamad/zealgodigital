"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap, MessageCircle } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/", scrollTo: "top" },
  {
    name: "Perkhidmatan",
    href: "#",
    scrollTo: "services-section",
    submenu: [
      { name: "Online Marketing", href: "/online-marketing" },
      { name: "POS System", href: "/pos-system" },
      { name: "QR Payment", href: "/qr-payment" },
      { name: "CCTV Installation", href: "/cctv-installation" },
      { name: "Attendance System", href: "/attendance-system" },
    ],
  },
  {
    name: "Training",
    href: "#",
    submenu: [
      { name: "Kelas Online", href: "/training/kelas-online" },
      { name: "Kelas Offline", href: "/training/kelas-offline" },
      { name: "Kelas Hybrid", href: "/training/kelas-hybrid" },
    ],
  },
  {
    name: "Download",
    href: "#",
    submenu: [{ name: "Free Ebook", href: "/download/free-ebook" }],
  },
  { name: "Tentang Kami", href: "/tentang-kami" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimoni", href: "/testimoni" },
  { name: "Kerjaya", href: "/kerjaya" },
  { name: "Hubungi Kami", href: "/hubungi-kami", scrollTo: "contact-section" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleQuoteRequest = () => {
    const message = "Halo ZealGoDigital! Saya ingin mendapatkan sebut harga untuk perkhidmatan anda."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
  }

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close mobile menu after scrolling
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-red-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Zap className="h-8 w-8 text-red-500 mr-2" />
            <span className="text-xl font-bold text-white">
              Zeal<span className="text-red-500">Go</span>Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div>
                    <button className="text-white hover:text-red-500 transition-colors py-2">{item.name}</button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-red-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-white hover:text-red-500 hover:bg-red-900/20 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    {item.scrollTo ? (
                      <button
                        onClick={() => {
                          if (item.scrollTo === "top") {
                            handleScrollToTop()
                          } else {
                            handleScrollToSection(item.scrollTo)
                          }
                        }}
                        className="text-white hover:text-red-500 transition-colors"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link href={item.href} className="text-white hover:text-red-500 transition-colors">
                        {item.name}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Button onClick={handleQuoteRequest} size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              <MessageCircle className="h-4 w-4 mr-1" />
              Sebut Harga
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-red-900 w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-red-500 mr-2" />
                  <span className="text-lg font-bold text-white">
                    Zeal<span className="text-red-500">Go</span>Digital
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <div>
                        <div className="text-white font-medium py-2 border-b border-red-900/30">{item.name}</div>
                        <div className="ml-4 space-y-2 mt-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block text-gray-400 hover:text-red-500 transition-colors py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        {item.scrollTo ? (
                          <button
                            onClick={() => {
                              if (item.scrollTo === "top") {
                                handleScrollToTop()
                              } else {
                                handleScrollToSection(item.scrollTo)
                              }
                            }}
                            className="block w-full text-left text-white hover:text-red-500 transition-colors py-2 border-b border-red-900/30"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className="block text-white hover:text-red-500 transition-colors py-2 border-b border-red-900/30"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                <Button onClick={handleQuoteRequest} className="w-full bg-red-600 hover:bg-red-700 text-white mt-6">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Dapatkan Sebut Harga
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

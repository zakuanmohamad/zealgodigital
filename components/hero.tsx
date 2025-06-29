"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const handleWhatsAppContact = () => {
    const message =
      "Halo ZealGoDigital! Saya berminat untuk mengetahui lebih lanjut tentang perkhidmatan transformasi digital anda."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
  }

  const handleGetStarted = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Digital+Transformation+Technology+Background+with+AI+Circuits+and+Data+Streams')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/20 to-black/80" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <div className="flex items-center justify-center mb-6">
          <Zap className="h-12 w-12 text-red-500 mr-3" />
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Zeal<span className="text-red-500">Go</span>Digital
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transformasi Digital untuk Masa Depan Perniagaan Anda
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Kami membantu usahawan mengembangkan perniagaan melalui solusi digital terkini - dari sistem POS hingga
          pembayaran QR, pemasangan CCTV, dan sistem kehadiran digital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
          >
            Mulakan Transformasi
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link href="/tentang-kami">
            <Button
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              Ketahui Lebih Lanjut
            </Button>
          </Link>
        </div>

        {/* Quick WhatsApp Button */}
        <div className="mt-8">
          <Button
            onClick={() => window.open("https://wa.me/60182461092", "_blank")}
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp Kami
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

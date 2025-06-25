import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZealGoDigital - Transformasi Digital Malaysia",
  description:
    "Rakan kongsi terpercaya dalam transformasi digital perniagaan anda. POS System, QR Payment, CCTV, Online Marketing dan lebih lagi.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

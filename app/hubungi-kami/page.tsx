import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export default function HubungiKami() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hubungi <span className="text-red-500">Kami</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sedia untuk memulakan transformasi digital? Mari berbincang tentang keperluan perniagaan anda.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}

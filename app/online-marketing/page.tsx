import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Megaphone, Search, Share2, BarChart3, Target, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Online Marketing - ZealGoDigital",
  description:
    "Perkhidmatan pemasaran digital profesional untuk meningkatkan kehadiran online dan jualan perniagaan anda.",
}

export default function OnlineMarketing() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Tingkatkan ranking website anda di Google dengan strategi SEO yang berkesan.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Pengurusan media sosial profesional untuk meningkatkan engagement dan followers.",
    },
    {
      icon: Target,
      title: "Google Ads",
      description: "Kempen iklan Google yang tepat sasaran untuk hasil maksimum.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Laporan terperinci tentang prestasi kempen pemasaran digital anda.",
    },
    {
      icon: Users,
      title: "Content Marketing",
      description: "Kandungan berkualiti yang menarik dan mengonversi pelanggan.",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-600 rounded-full">
              <Megaphone className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Online <span className="text-red-500">Marketing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Tingkatkan kehadiran online perniagaan anda dengan strategi pemasaran digital yang berkesan dan terukur.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Dapatkan Konsultasi Percuma
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Perkhidmatan <span className="text-red-500">Pemasaran Digital</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-black border-red-900 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sedia untuk Meningkatkan <span className="text-red-500">Jualan Online</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk mendapatkan strategi pemasaran digital yang sesuai dengan perniagaan anda.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Hubungi Kami Sekarang
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

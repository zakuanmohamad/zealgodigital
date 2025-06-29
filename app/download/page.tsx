"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, BookOpen, FileText, Users, Star, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function DownloadPage() {
  const stats = [
    { number: "10,000+", label: "Downloads" },
    { number: "50+", label: "Free Resources" },
    { number: "4.8/5", label: "Average Rating" },
    { number: "24/7", label: "Access" },
  ]

  const categories = [
    {
      icon: BookOpen,
      title: "Free Ebooks",
      description: "Koleksi ebook percuma tentang digital transformation, AI, marketing dan banyak lagi.",
      count: "25+ Ebooks",
      href: "/download/free-ebook",
      color: "bg-blue-600",
    },
    {
      icon: FileText,
      title: "Templates & Guides",
      description: "Template dan panduan praktikal untuk membantu perniagaan anda.",
      count: "Coming Soon",
      href: "#",
      color: "bg-green-600",
      disabled: true,
    },
    {
      icon: Users,
      title: "Case Studies",
      description: "Kajian kes kejayaan klien-klien kami dalam transformasi digital.",
      count: "Coming Soon",
      href: "#",
      color: "bg-purple-600",
      disabled: true,
    },
  ]

  const handleComingSoonInquiry = () => {
    const message =
      "Halo ZealGoDigital! Saya berminat dengan resources yang akan datang. Boleh notify saya bila tersedia?"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Download className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Download <span className="text-blue-500">Center</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Akses koleksi resources percuma kami untuk membantu perjalanan transformasi digital anda. Ebook, template,
            panduan dan banyak lagi!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-2 text-blue-500" />
              Free Downloads
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-blue-500" />
              High Quality Content
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-blue-500" />
              Expert Created
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-black border-red-900 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kategori <span className="text-blue-500">Resources</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih kategori resources yang anda perlukan untuk meningkatkan pengetahuan dan kemahiran
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className={`bg-black border-red-900 hover:border-blue-500 transition-all duration-300 group ${
                  category.disabled ? "opacity-60" : ""
                }`}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 ${category.color} rounded-full group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  <p className="text-gray-400">{category.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-blue-500 font-semibold mb-4">{category.count}</div>
                  {category.disabled ? (
                    <Button
                      onClick={handleComingSoonInquiry}
                      variant="outline"
                      className="w-full border-gray-600 text-gray-400 hover:bg-gray-800 bg-transparent"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Notify Me
                    </Button>
                  ) : (
                    <Link href={category.href}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Browse Resources
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-blue-500">Downloads</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Resources paling popular dan berguna untuk transformasi digital anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-red-900 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">Digital Transformation Guide</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Panduan lengkap untuk memulakan transformasi digital perniagaan anda.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 text-sm">⭐ 4.9/5 (500+ downloads)</span>
                  <Link href="/download/free-ebook">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Download
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">AI for Business Starter Kit</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Panduan asas menggunakan AI untuk meningkatkan produktiviti perniagaan.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 text-sm">⭐ 4.8/5 (350+ downloads)</span>
                  <Link href="/download/free-ebook">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Download
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-white font-semibold mb-2">Digital Marketing Checklist</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Checklist lengkap untuk kempen digital marketing yang berkesan.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-500 text-sm">⭐ 4.7/5 (280+ downloads)</span>
                  <Link href="/download/free-ebook">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Download
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dapatkan <span className="text-blue-500">Updates</span> Terkini
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe untuk mendapat notifikasi bila ada resources baru dan exclusive content untuk subscribers sahaja.
          </p>
          <Button
            onClick={() => {
              const message =
                "Halo ZealGoDigital! Saya ingin subscribe untuk mendapat updates tentang resources dan content terbaru anda."
              const encodedMessage = encodeURIComponent(message)
              window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
            }}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Subscribe Updates
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

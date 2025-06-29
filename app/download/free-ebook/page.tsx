"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Star, Users, MessageCircle, FileText } from "lucide-react"

export default function FreeEbook() {
  const ebooks = [
    {
      title: "Panduan Lengkap Digital Transformation untuk SME",
      description:
        "Panduan step-by-step untuk memulakan transformasi digital perniagaan kecil dan sederhana di Malaysia.",
      pages: "45 halaman",
      downloads: "1,200+",
      rating: 4.9,
      category: "Digital Transformation",
      level: "Beginner",
      image: "/placeholder.svg?height=300&width=200&text=Digital+Transformation+Guide+SME+Business+Book",
      highlights: ["Strategi Digital", "Implementation Guide", "Case Studies", "ROI Calculator"],
    },
    {
      title: "AI for Business: Panduan Praktikal 2024",
      description: "Cara menggunakan AI untuk meningkatkan produktiviti dan keuntungan perniagaan anda.",
      pages: "38 halaman",
      downloads: "950+",
      rating: 4.8,
      category: "Artificial Intelligence",
      level: "Intermediate",
      image: "/placeholder.svg?height=300&width=200&text=AI+Business+Guide+2024+Artificial+Intelligence+Book",
      highlights: ["AI Tools Review", "Implementation Strategy", "Cost Analysis", "Success Metrics"],
    },
    {
      title: "Digital Marketing Mastery: Strategi Terkini",
      description: "Strategi digital marketing yang terbukti berkesan untuk perniagaan Malaysia.",
      pages: "52 halaman",
      downloads: "1,500+",
      rating: 4.7,
      category: "Digital Marketing",
      level: "Intermediate",
      image: "/placeholder.svg?height=300&width=200&text=Digital+Marketing+Strategy+Social+Media+Book",
      highlights: ["Social Media Strategy", "Google Ads Guide", "Content Marketing", "Analytics Setup"],
    },
    {
      title: "POS System Selection Guide",
      description: "Panduan memilih sistem POS yang sesuai untuk jenis perniagaan anda.",
      pages: "28 halaman",
      downloads: "800+",
      rating: 4.6,
      category: "POS Systems",
      level: "Beginner",
      image: "/placeholder.svg?height=300&width=200&text=POS+System+Point+of+Sale+Business+Guide+Book",
      highlights: ["Feature Comparison", "Pricing Guide", "Implementation Tips", "Vendor Reviews"],
    },
    {
      title: "CCTV Security Planning Handbook",
      description: "Panduan merancang sistem keselamatan CCTV yang berkesan untuk premis anda.",
      pages: "35 halaman",
      downloads: "650+",
      rating: 4.8,
      category: "Security Systems",
      level: "Beginner",
      image: "/placeholder.svg?height=300&width=200&text=CCTV+Security+Camera+Surveillance+Planning+Book",
      highlights: ["Security Assessment", "Camera Placement", "Storage Planning", "Budget Guide"],
    },
    {
      title: "QR Payment Integration Manual",
      description: "Cara mengintegrasikan pembayaran QR dalam perniagaan anda dengan mudah.",
      pages: "22 halaman",
      downloads: "720+",
      rating: 4.5,
      category: "Payment Systems",
      level: "Beginner",
      image: "/placeholder.svg?height=300&width=200&text=QR+Payment+Digital+Wallet+Integration+Guide+Book",
      highlights: ["Platform Comparison", "Setup Guide", "Security Tips", "Customer Education"],
    },
    {
      title: "Employee Attendance System Guide",
      description: "Panduan memilih dan menggunakan sistem kehadiran digital untuk pekerja.",
      pages: "30 halaman",
      downloads: "550+",
      rating: 4.7,
      category: "HR Systems",
      level: "Beginner",
      image: "/placeholder.svg?height=300&width=200&text=Employee+Attendance+HR+System+Biometric+Book",
      highlights: ["System Types", "Implementation", "Policy Creation", "Compliance Guide"],
    },
    {
      title: "E-commerce Startup Blueprint",
      description: "Panduan lengkap memulakan perniagaan e-commerce dari sifar hingga berjaya.",
      pages: "48 halaman",
      downloads: "900+",
      rating: 4.9,
      category: "E-commerce",
      level: "Beginner",
      image: "/placeholder.svg?height=300&width=200&text=E-commerce+Online+Business+Startup+Guide+Book",
      highlights: ["Platform Selection", "Product Strategy", "Marketing Plan", "Operations Guide"],
    },
  ]

  const handleEbookDownload = (ebookTitle: string) => {
    const message = `Halo ZealGoDigital!

Saya ingin download ebook percuma berikut:

*Ebook:* ${ebookTitle}

Boleh saya dapatkan link download atau maklumat cara untuk mendapatkannya?

Terima kasih!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
  }

  const categories = [
    "All",
    "Digital Transformation",
    "Artificial Intelligence",
    "Digital Marketing",
    "POS Systems",
    "Security Systems",
    "Payment Systems",
    "HR Systems",
    "E-commerce",
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-green-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600 rounded-full">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Free <span className="text-green-500">Ebooks</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Koleksi ebook percuma berkualiti tinggi untuk membantu perjalanan transformasi digital anda. Ditulis oleh
            pakar industri dengan pengalaman bertahun-tahun.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-2 text-green-500" />
              100% Free
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-2 text-green-500" />
              High Quality Content
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-green-500" />
              5,000+ Downloads
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-800 text-gray-300 hover:bg-green-600 hover:text-white cursor-pointer transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Ebooks Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ebooks.map((ebook, index) => (
              <Card
                key={index}
                className="bg-black border-red-900 hover:border-green-500 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={ebook.image || "/placeholder.svg"}
                    alt={ebook.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-600 text-white">{ebook.level}</Badge>
                  <Badge className="absolute top-4 left-4 bg-black/80 text-white text-xs">{ebook.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-lg line-clamp-2">{ebook.title}</CardTitle>
                  <p className="text-gray-400 text-sm line-clamp-2">{ebook.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {ebook.pages}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {ebook.downloads}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {ebook.rating}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {ebook.highlights.slice(0, 2).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleEbookDownload(ebook.title)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Free
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cara <span className="text-green-500">Download</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Mudah sahaja untuk mendapatkan ebook percuma kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-red-900 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Pilih Ebook</h3>
                <p className="text-gray-400 text-sm">Klik button "Download Free" pada ebook yang anda inginkan</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">WhatsApp Kami</h3>
                <p className="text-gray-400 text-sm">
                  Anda akan diarahkan ke WhatsApp dengan mesej yang telah disediakan
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Terima Link</h3>
                <p className="text-gray-400 text-sm">Kami akan hantar link download terus ke WhatsApp anda</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Perlukan <span className="text-green-500">Bantuan</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Jika anda menghadapi masalah dengan download atau perlukan bantuan lain, jangan segan untuk hubungi kami.
          </p>
          <Button
            onClick={() => {
              const message = "Halo ZealGoDigital! Saya perlukan bantuan dengan download ebook. Boleh tolong saya?"
              const encodedMessage = encodeURIComponent(message)
              window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
            }}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Hubungi Support
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

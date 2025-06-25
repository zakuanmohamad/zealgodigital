"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Monitor, Users, Zap, BookOpen, Award, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Training() {
  const trainingTypes = [
    {
      icon: Monitor,
      title: "Kelas Online",
      description: "Belajar dari rumah dengan fleksibiliti masa yang sesuai dengan jadual anda.",
      features: ["Akses 24/7", "Video HD Quality", "Sertifikat Digital", "Support Community"],
      href: "/training/kelas-online",
      color: "bg-blue-600",
    },
    {
      icon: Users,
      title: "Kelas Offline",
      description: "Pembelajaran hands-on dengan instruktur berpengalaman di lokasi kami.",
      features: ["Interaksi Langsung", "Praktik Terarah", "Networking", "Sertifikat Fizikal"],
      href: "/training/kelas-offline",
      color: "bg-green-600",
    },
    {
      icon: Zap,
      title: "Kelas Hybrid",
      description: "Kombinasi terbaik antara pembelajaran online dan offline.",
      features: ["Fleksibiliti Maksimum", "Best of Both Worlds", "Personalized Learning", "Premium Support"],
      href: "/training/kelas-hybrid",
      color: "bg-purple-600",
    },
  ]

  const stats = [
    { number: "1000+", label: "Pelajar Berjaya" },
    { number: "50+", label: "Kursus Tersedia" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  const handleEnrollInquiry = () => {
    const message =
      "Halo ZealGoDigital! Saya berminat untuk menyertai program training anda. Boleh saya dapatkan maklumat lanjut?"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://zealgodigitaltanya.wasap.my/?text=${encodedMessage}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-600 rounded-full">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Training & <span className="text-red-500">Education</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Tingkatkan kemahiran digital anda dengan program training terkini dari ZealGoDigital. Dari AI hingga digital
            marketing, kami sediakan pembelajaran yang komprehensif.
          </p>
          <Button onClick={handleEnrollInquiry} size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <MessageCircle className="h-5 w-5 mr-2" />
            Daftar Sekarang
          </Button>
        </div>
      </section>

      {/* Training Types */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pilih Mod <span className="text-red-500">Pembelajaran</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kami menawarkan pelbagai mod pembelajaran untuk memenuhi keperluan dan gaya belajar anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {trainingTypes.map((type, index) => (
              <Card
                key={index}
                className="bg-black border-red-900 hover:border-red-500 transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 ${type.color} rounded-full group-hover:scale-110 transition-transform`}>
                      <type.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{type.title}</CardTitle>
                  <p className="text-gray-400">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={type.href}>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Lihat Kursus</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-black border-red-900 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mengapa Pilih <span className="text-red-500">Training Kami</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-red-900 text-center">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Kurikulum Terkini</h3>
                <p className="text-gray-400 text-sm">
                  Materi pembelajaran yang selalu dikemas kini mengikut trend industri
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Sertifikat Diiktiraf</h3>
                <p className="text-gray-400 text-sm">
                  Sertifikat yang diiktiraf industri untuk meningkatkan kerjaya anda
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-red-900 text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Instruktur Berpengalaman</h3>
                <p className="text-gray-400 text-sm">Belajar dari pakar industri dengan pengalaman bertahun-tahun</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sedia untuk Meningkatkan <span className="text-red-500">Kemahiran</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Jangan lepaskan peluang untuk menjadi pakar dalam bidang digital. Daftar sekarang dan mulakan perjalanan
            pembelajaran anda!
          </p>
          <Button onClick={handleEnrollInquiry} size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <MessageCircle className="h-5 w-5 mr-2" />
            Hubungi Kami Sekarang
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

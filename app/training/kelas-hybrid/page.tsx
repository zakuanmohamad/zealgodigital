"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Monitor, Users, Calendar, MessageCircle, Star } from "lucide-react"

export default function KelasHybrid() {
  const hybridPrograms = [
    {
      title: "Complete Digital Transformation Program",
      description:
        "Program komprehensif 3 bulan yang menggabungkan pembelajaran online dan offline untuk transformasi digital menyeluruh.",
      onlineHours: "40 Jam",
      offlineHours: "20 Jam",
      duration: "3 Bulan",
      schedule: "Flexible Online + 4 Weekend Sessions",
      price: "RM 1,999",
      originalPrice: "RM 2,999",
      features: [
        "40 jam video pembelajaran online",
        "4 sesi offline intensif (5 jam setiap sesi)",
        "Personal mentoring sessions",
        "Project-based learning",
        "Lifetime access to materials",
        "Premium certification",
        "Job placement assistance",
        "Alumni network access",
      ],
      popular: true,
    },
    {
      title: "AI Business Mastery Hybrid",
      description:
        "Program hybrid untuk menguasai penggunaan AI dalam perniagaan dengan kombinasi teori online dan praktik offline.",
      onlineHours: "25 Jam",
      offlineHours: "15 Jam",
      duration: "2 Bulan",
      schedule: "Self-paced Online + 3 Weekend Workshops",
      price: "RM 1,499",
      originalPrice: "RM 2,199",
      features: [
        "25 jam pembelajaran online",
        "3 workshop offline (5 jam setiap sesi)",
        "AI tools access",
        "Real business case studies",
        "Group projects",
        "Expert mentorship",
        "Implementation support",
        "Success tracking",
      ],
      popular: false,
    },
    {
      title: "Digital Marketing Pro Hybrid",
      description: "Program marketing digital yang menggabungkan strategi online dengan implementasi praktik langsung.",
      onlineHours: "30 Jam",
      offlineHours: "12 Jam",
      duration: "6 Minggu",
      schedule: "Online Modules + 2 Intensive Weekends",
      price: "RM 1,299",
      originalPrice: "RM 1,899",
      features: [
        "30 jam konten online",
        "2 weekend intensif (6 jam setiap sesi)",
        "Live campaign creation",
        "Tools & software training",
        "Portfolio development",
        "Industry connections",
        "Performance analytics",
        "Ongoing support",
      ],
      popular: false,
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Fleksibiliti Maksimum",
      description: "Belajar online mengikut masa anda, datang offline untuk praktik intensif.",
    },
    {
      icon: Monitor,
      title: "Best of Both Worlds",
      description: "Gabungan kelebihan pembelajaran online dan offline dalam satu program.",
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Pendekatan pembelajaran yang disesuaikan dengan gaya dan keperluan anda.",
    },
    {
      icon: Star,
      title: "Premium Support",
      description: "Sokongan premium dari instruktur dan mentor sepanjang program.",
    },
  ]

  const handleProgramInquiry = (programTitle: string, price: string) => {
    const message = `Halo ZealGoDigital!

Saya berminat dengan program hybrid berikut:

*Program:* ${programTitle}
*Harga:* ${price}

Boleh saya dapatkan maklumat lanjut tentang:
- Jadual program yang akan datang
- Kaedah pembayaran (installment available?)
- Keperluan untuk join
- Lokasi sesi offline

Terima kasih!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://zealgodigitaltanya.wasap.my/?text=${encodedMessage}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-purple-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-600 rounded-full">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kelas <span className="text-purple-500">Hybrid</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Kombinasi terbaik antara pembelajaran online dan offline. Fleksibiliti maksimum dengan hasil yang optimal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Monitor className="h-4 w-4 mr-2 text-purple-500" />
              Online Learning
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-purple-500" />
              Offline Workshops
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-purple-500" />
              Premium Support
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Program <span className="text-purple-500">Hybrid</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Program pembelajaran hybrid yang direka untuk memberikan pengalaman belajar yang komprehensif
            </p>
          </div>

          <div className="space-y-8">
            {hybridPrograms.map((program, index) => (
              <Card
                key={index}
                className={`bg-black transition-all duration-300 ${
                  program.popular
                    ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-105"
                    : "border-red-900 hover:border-purple-500"
                }`}
              >
                {program.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 text-sm font-semibold">🔥 MOST POPULAR</div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  <div className="lg:col-span-2">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-white text-2xl mb-2">{program.title}</CardTitle>
                      <p className="text-gray-400">{program.description}</p>
                    </CardHeader>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                      <div className="text-center">
                        <div className="text-purple-500 font-bold">{program.onlineHours}</div>
                        <div className="text-gray-400">Online</div>
                      </div>
                      <div className="text-center">
                        <div className="text-purple-500 font-bold">{program.offlineHours}</div>
                        <div className="text-gray-400">Offline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-purple-500 font-bold">{program.duration}</div>
                        <div className="text-gray-400">Duration</div>
                      </div>
                      <div className="text-center">
                        <Calendar className="h-6 w-6 text-purple-500 mx-auto mb-1" />
                        <div className="text-gray-400 text-xs">{program.schedule}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Program Includes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-gray-300 text-sm">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="text-center mb-6">
                      <div className="text-gray-400 line-through text-lg">{program.originalPrice}</div>
                      <div className="text-4xl font-bold text-purple-500 mb-2">{program.price}</div>
                      <div className="text-gray-400 text-sm">Payment plans available</div>
                    </div>

                    <Button
                      onClick={() => handleProgramInquiry(program.title, program.price)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Daftar Program
                    </Button>

                    <div className="text-center text-xs text-gray-400">
                      💳 Installment plans available
                      <br />🎓 Money-back guarantee
                      <br />📞 Free consultation call
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kelebihan <span className="text-purple-500">Hybrid Learning</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-red-900 hover:border-purple-500 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-purple-600 rounded-full">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sedia untuk <span className="text-purple-500">Transformasi</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Dapatkan konsultasi percuma untuk menentukan program hybrid yang sesuai dengan keperluan anda.
          </p>
          <Button
            onClick={() => {
              const message =
                "Halo ZealGoDigital! Saya ingin mendapatkan konsultasi percuma untuk program hybrid training. Boleh kita berbincang?"
              const encodedMessage = encodeURIComponent(message)
              window.open(`https://zealgodigitaltanya.wasap.my/?text=${encodedMessage}`, "_blank")
            }}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Konsultasi Percuma
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

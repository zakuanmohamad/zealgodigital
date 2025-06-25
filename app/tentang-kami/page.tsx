import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, CheckCircle, Zap, Target, Heart } from "lucide-react"

export default function TentangKami() {
  const values = [
    {
      icon: Target,
      title: "Fokus Pelanggan",
      description: "Kami mengutamakan kepuasan dan kejayaan pelanggan dalam setiap projek.",
    },
    {
      icon: Zap,
      title: "Inovasi",
      description: "Sentiasa menggunakan teknologi terkini untuk memberikan solusi terbaik.",
    },
    {
      icon: Heart,
      title: "Integriti",
      description: "Beroperasi dengan jujur dan telus dalam semua urusan perniagaan.",
    },
  ]

  const stats = [
    { icon: Users, number: "500+", label: "Klien Berpuas Hati" },
    { icon: Award, number: "5+", label: "Tahun Pengalaman" },
    { icon: CheckCircle, number: "1000+", label: "Projek Siap" },
    { icon: Zap, number: "24/7", label: "Sokongan Teknikal" },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tentang <span className="text-red-500">Kami</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ZealGoDigital adalah rakan kongsi terpercaya dalam perjalanan transformasi digital perniagaan anda.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Misi <span className="text-red-500">Kami</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Kami berkomitmen untuk membantu perniagaan kecil dan sederhana di Malaysia berkembang melalui
                transformasi digital yang berkesan dan mampu milik.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Dengan pengalaman bertahun-tahun dalam industri teknologi, kami memahami cabaran yang dihadapi oleh
                usahawan tempatan dan menyediakan solusi yang sesuai dengan keperluan mereka.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-black border-red-900 text-center p-6">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-red-600 rounded-full">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nilai-nilai <span className="text-red-500">Kami</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-black border-red-900 hover:border-red-500 transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-red-600 rounded-full">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

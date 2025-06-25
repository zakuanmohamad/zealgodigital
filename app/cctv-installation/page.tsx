import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Shield, Monitor, Cloud, Eye, Lock, Check, Phone } from "lucide-react"

export default function CCTVInstallation() {
  const features = [
    {
      icon: Eye,
      title: "HD Recording",
      description: "Rakaman video berkualiti tinggi untuk kejelasan maksimum.",
    },
    {
      icon: Monitor,
      title: "Remote Monitoring",
      description: "Pantau premis anda dari mana-mana melalui smartphone atau komputer.",
    },
    {
      icon: Shield,
      title: "Night Vision",
      description: "Penglihatan malam yang jelas untuk keselamatan 24 jam.",
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Simpan rakaman di cloud untuk akses yang selamat dan mudah.",
    },
    {
      icon: Lock,
      title: "Motion Detection",
      description: "Pengesanan pergerakan automatik dengan alert real-time.",
    },
  ]

  const packages = [
    {
      title: "4 Channel Premium",
      channels: "4",
      resolution: "2MP",
      price: "RM 1,899",
      originalPrice: "RM 2,299",
      popular: false,
      features: [
        "Full HD 1080p Resolution",
        "4 Channel 1080p DVR",
        "4 High Quality Cameras with 20M IR Distance",
        "1TB Hard Drive",
        "HDMI/VGA Port",
        "Live Audio Recording",
        "Remote Video Footage Access via Mobile App",
        "Installation & Programming",
        "1 Year Warranty",
      ],
      image: "/cctv-4ch.jpg",
    },
    {
      title: "6 Channel Premium",
      channels: "6",
      resolution: "2MP",
      price: "RM 2,799",
      originalPrice: "RM 3,299",
      popular: true,
      features: [
        "Full HD 1080p Resolution",
        "6 Channel 1080p DVR",
        "6 High Quality Cameras with 20M IR Distance",
        "2TB Hard Drive",
        "HDMI/VGA Port",
        "Live Audio Recording",
        "Remote Video Footage Access via Mobile App",
        "Installation & Programming",
        "1 Year Warranty",
      ],
      image: "/cctv-6ch.jpg",
    },
    {
      title: "8 Channel Premium",
      channels: "8",
      resolution: "2MP",
      price: "RM 3,399",
      originalPrice: "RM 3,999",
      popular: false,
      features: [
        "Full HD 1080p Resolution",
        "8 Channel 1080p DVR",
        "8 High Quality Cameras with 20M IR Distance",
        "2TB Hard Drive",
        "HDMI/VGA Port",
        "Live Audio Recording",
        "Remote Video Footage Access via Mobile App",
        "Installation & Programming",
        "1 Year Warranty",
      ],
      image: "/cctv-8ch.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/services/cctv-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/20 to-black/80" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-600 rounded-full">
              <Camera className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            CCTV <span className="text-red-500">Installation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Sistem keselamatan CCTV profesional untuk melindungi premis perniagaan anda dengan teknologi terkini.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Dapatkan Sebut Harga
          </Button>
        </div>
      </section>

      {/* CCTV Packages */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pakej CCTV <span className="text-red-500">Premium</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih pakej CCTV yang sesuai dengan keperluan keselamatan premis anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`bg-black border-2 transition-all duration-300 relative overflow-hidden ${
                  pkg.popular
                    ? "border-red-500 shadow-lg shadow-red-500/20 scale-105"
                    : "border-red-900 hover:border-red-500"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-semibold">
                    POPULAR
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  <div className="bg-red-600 text-white py-2 px-4 rounded-lg mb-4">
                    <div className="text-3xl font-bold">{pkg.channels}</div>
                    <div className="text-sm">CHANNEL</div>
                    <div className="text-lg font-semibold">{pkg.resolution}</div>
                    <div className="text-xs">ANALOG CAMERA AUDIO</div>
                  </div>

                  <CardTitle className="text-white text-xl mb-2">{pkg.title}</CardTitle>

                  <div className="text-center">
                    <div className="text-gray-400 line-through text-sm">{pkg.originalPrice}</div>
                    <div className="text-3xl font-bold text-red-500">{pkg.price}</div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300 text-sm">
                        <Check className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Hubungi Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Ciri-ciri <span className="text-red-500">Keselamatan</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-red-900 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-red-600 rounded-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mengapa Pilih <span className="text-red-500">Kami</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-red-900 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
                <h3 className="text-white font-semibold mb-2">Monitoring</h3>
                <p className="text-gray-400 text-sm">Pemantauan berterusan untuk keselamatan maksimum</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">1080p</div>
                <h3 className="text-white font-semibold mb-2">HD Quality</h3>
                <p className="text-gray-400 text-sm">Kualiti video yang jelas dan tajam</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">20M</div>
                <h3 className="text-white font-semibold mb-2">Night Vision</h3>
                <p className="text-gray-400 text-sm">Jarak penglihatan malam hingga 20 meter</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">1 Year</div>
                <h3 className="text-white font-semibold mb-2">Warranty</h3>
                <p className="text-gray-400 text-sm">Waranti penuh untuk ketenangan minda</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sedia untuk Meningkatkan <span className="text-red-500">Keselamatan</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Hubungi kami hari ini untuk mendapatkan konsultasi percuma dan sebut harga terbaik untuk sistem CCTV anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="h-5 w-5 mr-2" />
              Hubungi Kami Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              WhatsApp Kami
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimoni() {
  const testimonials = [
    {
      name: "Pak Ali",
      business: "Restoran Pak Ali",
      rating: 5,
      comment:
        "Sistem POS dari ZealGoDigital sangat membantu dalam menguruskan restoran saya. Sekarang saya boleh terima pembayaran QR dari semua platform. Jualan meningkat 40% sejak menggunakan sistem ini!",
      image: "/testimonials/pak-ali.jpg",
    },
    {
      name: "Siti Aminah",
      business: "Kedai Runcit Siti",
      rating: 5,
      comment:
        "CCTV dan sistem attendance yang dipasang sangat berkualiti. Saya rasa lebih selamat dan mudah untuk monitor pekerja. Service after-sales pun sangat baik!",
      image: "/testimonials/siti-aminah.jpg",
    },
    {
      name: "Azman Ibrahim",
      business: "Bengkel Motor Azman",
      rating: 5,
      comment:
        "Digital marketing campaign yang dijalankan berjaya meningkatkan pelanggan saya dengan drastik. Sekarang bengkel saya selalu penuh dengan tempahan. Terima kasih ZealGoDigital!",
      image: "/testimonials/azman-ibrahim.jpg",
    },
    {
      name: "Dr. Sarah",
      business: "Klinik Dr. Sarah",
      rating: 5,
      comment:
        "Transformasi digital yang lengkap untuk klinik saya. Dari sistem appointment hingga digital marketing, semuanya berjalan dengan lancar. Highly recommended!",
      image: "/testimonials/dr-sarah.jpg",
    },
    {
      name: "Farah Fashionista",
      business: "Butik Fashionista",
      rating: 5,
      comment:
        "E-commerce platform yang dibina sangat user-friendly. Pelanggan mudah untuk beli online dan sistem POS untuk kedai fizikal pun sangat efficient. Sales online meningkat 300%!",
      image: "/testimonials/farah-fashionista.jpg",
    },
    {
      name: "Ahmad Arkitek",
      business: "Pejabat Arkitek Kreatif",
      rating: 5,
      comment:
        "Sistem keselamatan dan attendance yang dipasang sangat canggih. Boleh monitor dari phone dan laporan attendance automatik. Sangat membantu untuk HR management.",
      image: "/testimonials/ahmad-arkitek.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Testimoni <span className="text-red-500">Klien</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dengar sendiri pengalaman klien-klien kami yang telah berjaya mentransformasi perniagaan mereka.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black border-red-900 hover:border-red-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-red-500 text-sm">{testimonial.business}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="h-6 w-6 text-red-500 mb-2" />
                    <p className="text-gray-400 italic">"{testimonial.comment}"</p>
                  </div>
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

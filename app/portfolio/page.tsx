import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Restoran Pak Ali",
      category: "POS System + QR Payment",
      description: "Sistem POS lengkap dengan integrasi pembayaran QR untuk restoran popular di Kuala Krai.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["POS", "QR Payment", "Restaurant"],
    },
    {
      title: "Kedai Runcit Siti",
      category: "CCTV + Attendance System",
      description: "Pemasangan CCTV dan sistem kehadiran untuk kedai runcit dengan 10 pekerja.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["CCTV", "Attendance", "Retail"],
    },
    {
      title: "Bengkel Motor Azman",
      category: "Online Marketing",
      description: "Kempen digital marketing yang meningkatkan pelanggan sebanyak 200% dalam 6 bulan.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Marketing", "SEO", "Social Media"],
    },
    {
      title: "Klinik Dr. Sarah",
      category: "Complete Digital Solution",
      description: "Transformasi digital lengkap termasuk POS, appointment system, dan digital marketing.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Healthcare", "POS", "Marketing"],
    },
    {
      title: "Butik Fashionista",
      category: "E-commerce + POS",
      description: "Integrasi sistem POS dengan platform e-commerce untuk jualan online dan offline.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["E-commerce", "POS", "Fashion"],
    },
    {
      title: "Pejabat Arkitek Kreatif",
      category: "Security + Attendance",
      description: "Sistem keselamatan CCTV dan attendance system untuk pejabat dengan 25 pekerja.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["CCTV", "Attendance", "Office"],
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Portfolio <span className="text-red-500">Kami</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lihat projek-projek transformasi digital yang telah kami jayakan untuk klien-klien kami.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black border-red-900 hover:border-red-500 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-red-600 text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <p className="text-red-500 text-sm font-medium">{project.category}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{project.description}</p>
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

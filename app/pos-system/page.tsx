import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Package, BarChart, CreditCard, Users, Printer } from "lucide-react"

export default function POSSystem() {
  const features = [
    {
      icon: Package,
      title: "Pengurusan Inventori",
      description: "Jejak stok produk secara real-time dengan sistem inventori yang canggih.",
    },
    {
      icon: BarChart,
      title: "Laporan Jualan",
      description: "Analisis jualan harian, mingguan dan bulanan dengan grafik yang mudah difahami.",
    },
    {
      icon: CreditCard,
      title: "Multi-Payment",
      description: "Terima pembayaran tunai, kad kredit, dan e-wallet dalam satu sistem.",
    },
    {
      icon: Users,
      title: "Customer Database",
      description: "Simpan maklumat pelanggan dan program loyalty untuk meningkatkan retention.",
    },
    {
      icon: Printer,
      title: "Receipt Printing",
      description: "Cetak resit dengan mudah dan customize format mengikut keperluan.",
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
              <ShoppingCart className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            POS <span className="text-red-500">System</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Sistem Point of Sales yang mudah digunakan untuk menguruskan jualan, inventori dan laporan perniagaan anda.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Demo Percuma
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Ciri-ciri <span className="text-red-500">Utama</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-black border-red-900 hover:border-red-500 transition-all duration-300">
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

      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QrCode, Smartphone, Shield, Zap } from "lucide-react"

export default function QRPayment() {
  const paymentMethods = [
    {
      name: "Maybank QRPay",
      description: "Pembayaran QR rasmi dari Maybank Malaysia",
      color: "bg-yellow-600",
    },
    {
      name: "Shopee Pay",
      description: "E-wallet popular untuk pembayaran online dan offline",
      color: "bg-orange-600",
    },
    {
      name: "Grab Pay",
      description: "Pembayaran digital dari platform Grab",
      color: "bg-green-600",
    },
    {
      name: "Touch N Go eWallet",
      description: "E-wallet terkemuka di Malaysia",
      color: "bg-blue-600",
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
              <QrCode className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            QR <span className="text-red-500">Payment</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Terima pembayaran QR dari semua platform e-wallet utama di Malaysia dengan satu sistem terintegrasi.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Setup QR Payment
          </Button>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Platform <span className="text-red-500">Pembayaran</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="bg-black border-red-900 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 ${method.color} rounded-lg mr-4`}>
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{method.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-red-900 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">Pembayaran Pantas</h3>
                <p className="text-gray-400">Transaksi selesai dalam beberapa saat sahaja</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">Selamat & Terjamin</h3>
                <p className="text-gray-400">Teknologi enkripsi terkini untuk keselamatan</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-600 rounded-full">
                    <QrCode className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2">Mudah Digunakan</h3>
                <p className="text-gray-400">Scan QR dan bayar - semudah itu!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

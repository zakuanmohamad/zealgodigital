import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Fingerprint, Clock, BarChart, Users, Calendar, Download } from "lucide-react"

export default function AttendanceSystem() {
  const features = [
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Sistem cap jari yang tepat dan tidak boleh dipalsukan.",
    },
    {
      icon: BarChart,
      title: "Attendance Reports",
      description: "Laporan kehadiran terperinci untuk pengurusan HR.",
    },
    {
      icon: Clock,
      title: "Overtime Calculation",
      description: "Pengiraan overtime automatik mengikut polisi syarikat.",
    },
    {
      icon: Users,
      title: "Employee Management",
      description: "Pengurusan maklumat pekerja yang lengkap dan teratur.",
    },
    {
      icon: Calendar,
      title: "Shift Management",
      description: "Pengurusan syif kerja yang fleksibel dan mudah.",
    },
    {
      icon: Download,
      title: "Data Export",
      description: "Export data kehadiran ke Excel atau PDF.",
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
              <Fingerprint className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Attendance <span className="text-red-500">System</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Sistem kehadiran digital dengan teknologi cap jari untuk pengurusan pekerja yang efisien dan tepat.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Lihat Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Ciri-ciri <span className="text-red-500">Sistem</span>
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

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Calendar, Clock, MessageCircle, Award } from "lucide-react"

export default function KelasOffline() {
  const offlineCourses = [
    {
      title: "Digital Marketing Intensive Workshop",
      description: "Workshop 3 hari intensif untuk menguasai digital marketing dari asas hingga advanced.",
      duration: "3 Hari",
      schedule: "Setiap Sabtu & Ahad",
      location: "Akademi Integriti Insan PLT, Kuala Krai",
      maxStudents: "15 orang",
      price: "RM 899",
      originalPrice: "RM 1299",
      includes: ["Modul Lengkap", "Sertifikat", "Makan Tengahari", "Networking Session"],
    },
    {
      title: "POS System Setup & Management",
      description: "Hands-on training untuk setup dan pengurusan sistem POS untuk perniagaan.",
      duration: "2 Hari",
      schedule: "Weekdays Available",
      location: "Akademi Integriti Insan PLT, Kuala Krai",
      maxStudents: "10 orang",
      price: "RM 599",
      originalPrice: "RM 899",
      includes: ["Live Demo", "Praktik Langsung", "Setup Guidance", "Follow-up Support"],
    },
    {
      title: "CCTV Installation Masterclass",
      description: "Kursus praktikal untuk belajar pemasangan dan maintenance sistem CCTV.",
      duration: "2 Hari",
      schedule: "Weekend Batch",
      location: "Akademi Integriti Insan PLT, Kuala Krai",
      maxStudents: "8 orang",
      price: "RM 799",
      originalPrice: "RM 1199",
      includes: ["Equipment Training", "Installation Practice", "Troubleshooting", "Certification"],
    },
    {
      title: "AI Tools for Business Workshop",
      description: "Workshop praktikal menggunakan AI tools untuk meningkatkan produktiviti perniagaan.",
      duration: "1 Hari",
      schedule: "Monthly Sessions",
      location: "Akademi Integriti Insan PLT, Kuala Krai",
      maxStudents: "20 orang",
      price: "RM 399",
      originalPrice: "RM 599",
      includes: ["AI Tools Access", "Hands-on Practice", "Templates", "Consultation"],
    },
  ]

  const handleCourseInquiry = (courseTitle: string, price: string) => {
    const message = `Halo ZealGoDigital!

Saya berminat dengan kursus offline berikut:

*Kursus:* ${courseTitle}
*Harga:* ${price}

Boleh saya dapatkan maklumat lanjut tentang:
- Jadual kelas yang tersedia
- Lokasi tepat
- Kaedah pembayaran
- Keperluan untuk join

Terima kasih!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-green-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600 rounded-full">
              <Users className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kelas <span className="text-green-500">Offline</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Pembelajaran hands-on dengan instruktur berpengalaman. Interaksi langsung dan praktik terarah di lokasi
            kami.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-green-500" />
              Kelas Kecil (Max 20 orang)
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-green-500" />
              Kuala Krai, Kelantan
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2 text-green-500" />
              Sertifikat Fizikal
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kursus <span className="text-green-500">Tersedia</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kursus offline dengan pendekatan praktikal dan interaksi langsung dengan instruktur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offlineCourses.map((course, index) => (
              <Card key={index} className="bg-black border-red-900 hover:border-green-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{course.title}</CardTitle>
                  <p className="text-gray-400">{course.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-green-500" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-green-500" />
                      {course.schedule}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-green-500" />
                      {course.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2 text-green-500" />
                      Max {course.maxStudents}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Termasuk:</h4>
                    <ul className="space-y-1">
                      {course.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 line-through text-sm">{course.originalPrice}</span>
                      <div className="text-2xl font-bold text-green-500">{course.price}</div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleCourseInquiry(course.title, course.price)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Daftar Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Lokasi <span className="text-green-500">Training</span>
            </h2>
          </div>

          <Card className="bg-gray-900 border-red-900 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-white text-xl font-semibold mb-4">ZealGoDigital Training Center</h3>
              <p className="text-gray-400 mb-2 font-semibold">Akademi Integriti Insan PLT</p>
              <p className="text-gray-400 mb-6">
                PT 4489, Tingkat Satu Guchil Luar
                <br />
                18020 Kuala Krai, Kelantan
              </p>
              <p className="text-gray-400 mb-6">
                <strong>Tel Pejabat:</strong> 09-9668789
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>🚗 Parking tersedia</p>
                <p>☕ Refreshment disediakan</p>
                <p>💻 Equipment lengkap</p>
                <p>🌐 WiFi berkelajuan tinggi</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

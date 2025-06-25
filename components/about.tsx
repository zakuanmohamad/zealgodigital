"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Zap } from "lucide-react"

const stats = [
  { icon: Users, number: "500+", label: "Klien Berpuas Hati" },
  { icon: Award, number: "5+", label: "Tahun Pengalaman" },
  { icon: CheckCircle, number: "1000+", label: "Projek Siap" },
  { icon: Zap, number: "24/7", label: "Sokongan Teknikal" },
]

export function About() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mengapa Pilih <span className="text-red-500">ZealGoDigital</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Kami adalah rakan kongsi terpercaya dalam perjalanan transformasi digital anda. Dengan pengalaman
              bertahun-tahun dan komitmen terhadap kualiti, kami membantu perniagaan berkembang di era digital.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Solusi Terintegrasi</h3>
                  <p className="text-gray-400">Semua keperluan digital anda dalam satu tempat</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Sokongan Berterusan</h3>
                  <p className="text-gray-400">Tim sokongan 24/7 untuk memastikan operasi lancar</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Harga Berpatutan</h3>
                  <p className="text-gray-400">Pakej yang sesuai untuk semua saiz perniagaan</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Hubungi Kami Sekarang
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-900 border-red-900 text-center p-6">
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
      </div>
    </section>
  )
}

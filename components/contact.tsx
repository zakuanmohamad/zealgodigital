"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi <span className="text-red-500">Kami</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sedia untuk memulakan transformasi digital? Mari berbincang tentang keperluan anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-black border-red-900">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Hantar Mesej</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Nama Anda"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Input
                    placeholder="Email Anda"
                    type="email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <Input
                  placeholder="Nombor Telefon"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Input placeholder="Subjek" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                <Textarea
                  placeholder="Mesej Anda"
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Hantar Mesej</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-black border-red-900">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-red-600 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-400">+60 18-246 1092</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-red-600 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-gray-400">info@zealgo.digital</p>
                    <p className="text-gray-400">support@zealgo.digital</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-red-600 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Alamat</h3>
                    <p className="text-gray-400">
                      Guchil Luar, Kuala Krai,
                      <br />
                      18000 Kuala Krai, Kelantan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-red-600 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Waktu Operasi</h3>
                    <p className="text-gray-400">Ahad - Khamis: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Jumaat - Sabtu: Tutup</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

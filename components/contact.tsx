"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  })

  const services = [
    "Online Marketing",
    "POS System",
    "QR Payment Solutions",
    "CCTV Installation",
    "Attendance System",
    "Complete Digital Transformation",
    "Consultation",
    "Lain-lain",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `Halo ZealGoDigital!

Saya ingin mendapatkan maklumat mengenai perkhidmatan anda.

*Maklumat Saya:*
Nama: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Perkhidmatan: ${formData.service}
Subjek: ${formData.subject}

*Mesej:*
${formData.message}

Terima kasih!`

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)

    // Redirect to WhatsApp
    window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contact-section" className="py-20 bg-gray-900">
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
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Nama Anda *"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      required
                    />
                    <Input
                      placeholder="Email Anda *"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <Input
                    placeholder="Nombor Telefon *"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    required
                  />
                  <Select onValueChange={(value) => handleInputChange("service", value)} required>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Pilih Perkhidmatan *" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="text-white hover:bg-gray-700">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Subjek"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Textarea
                    placeholder="Mesej Anda *"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    required
                  />
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Hantar ke WhatsApp
                  </Button>
                </form>
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
                    <a href="tel:+60182461092" className="text-gray-400 hover:text-red-500 transition-colors">
                      +60 18-246 1092
                    </a>
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
                    <a
                      href="mailto:info@zealgo.digital"
                      className="text-gray-400 hover:text-red-500 transition-colors block"
                    >
                      info@zealgo.digital
                    </a>
                    <a
                      href="mailto:support@zealgo.digital"
                      className="text-gray-400 hover:text-red-500 transition-colors block"
                    >
                      support@zealgo.digital
                    </a>
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
                      PT 4489, Tingkat Satu, Guchil Luar,
                      <br />
                      18020 Kuala Krai, Kelantan
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

            {/* WhatsApp Direct Button */}
            <Card className="bg-gradient-to-r from-green-600 to-green-700 border-green-500">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">WhatsApp Terus</h3>
                <p className="text-green-100 mb-4 text-sm">Untuk respons yang lebih pantas</p>
                <Button
                  onClick={() => window.open("https://wa.me/60182461092", "_blank")}
                  className="bg-white text-green-600 hover:bg-green-50 w-full"
                >
                  Chat WhatsApp Sekarang
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

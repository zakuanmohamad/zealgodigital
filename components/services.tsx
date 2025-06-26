"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, QrCode, Camera, Fingerprint, Megaphone, Smartphone } from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Online Marketing",
    description: "Strategi pemasaran digital yang berkesan untuk meningkatkan kehadiran online dan jualan anda.",
    features: ["Social Media Marketing", "Google Ads", "SEO Optimization", "Content Marketing"],
  },
  {
    icon: ShoppingCart,
    title: "Point of Sales System",
    description: "Sistem POS yang mudah digunakan untuk menguruskan jualan, inventori dan laporan perniagaan.",
    features: ["Inventory Management", "Sales Reporting", "Customer Database", "Multi-Payment Support"],
  },
  {
    icon: QrCode,
    title: "QR Payment Solutions",
    description: "Integrasi pembayaran QR untuk semua platform utama di Malaysia.",
    features: ["Maybank QRPay", "Shopee Pay", "Grab Pay", "Touch N Go eWallet"],
  },
  {
    icon: Camera,
    title: "Pemasangan CCTV",
    description: "Sistem keselamatan CCTV profesional untuk melindungi premis perniagaan anda.",
    features: ["HD Recording", "Remote Monitoring", "Night Vision", "Cloud Storage"],
  },
  {
    icon: Fingerprint,
    title: "Punch Card Thumb Print",
    description: "Sistem kehadiran digital dengan teknologi cap jari untuk pengurusan pekerja yang efisien.",
    features: ["Biometric Authentication", "Attendance Reports", "Overtime Calculation", "Mobile Access"],
  },
  {
    icon: Smartphone,
    title: "Program Digital Lain",
    description: "Pelbagai solusi digital lain yang disesuaikan dengan keperluan perniagaan anda.",
    features: ["Custom Apps", "E-commerce Solutions", "Digital Consultation", "Training Programs"],
  },
]

export function Services() {
  return (
    <section id="services-section" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perkhidmatan <span className="text-red-500">Digital</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Solusi lengkap untuk transformasi digital perniagaan anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-black border-red-900 hover:border-red-500 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-600 rounded-lg group-hover:bg-red-500 transition-colors">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

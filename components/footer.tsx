"use client"

import { Zap, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-2xl font-bold text-white">
                Zeal<span className="text-red-500">Go</span>Digital
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Rakan kongsi terpercaya anda dalam transformasi digital. Kami membantu perniagaan berkembang dengan
              teknologi terkini.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Perkhidmatan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Online Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  POS System
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  QR Payment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Attendance System
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Syarikat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Kerjaya
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ZealGoDigital. Hak Cipta Terpelihara. |
            <Link href="#" className="text-red-500 hover:text-red-400 ml-1">
              Dasar Privasi
            </Link>{" "}
            |
            <Link href="#" className="text-red-500 hover:text-red-400 ml-1">
              Terma & Syarat
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

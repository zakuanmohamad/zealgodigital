import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermaSyarat() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terma & <span className="text-red-500">Syarat</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Syarat-syarat penggunaan perkhidmatan ZealGoDigital.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-black border-red-900">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Penerimaan Terma</h2>
                <p className="text-gray-400">
                  Dengan menggunakan perkhidmatan ZealGoDigital, anda bersetuju untuk terikat dengan terma dan syarat
                  ini. Jika anda tidak bersetuju dengan mana-mana bahagian terma ini, sila jangan gunakan perkhidmatan
                  kami.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Perkhidmatan</h2>
                <p className="text-gray-400 mb-4">
                  ZealGoDigital menyediakan perkhidmatan transformasi digital termasuk:
                </p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Sistem Point of Sales (POS)</li>
                  <li>• Pembayaran QR</li>
                  <li>• Pemasangan CCTV</li>
                  <li>• Sistem kehadiran digital</li>
                  <li>• Pemasaran digital</li>
                  <li>• Perkhidmatan digital lain yang berkaitan</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Pembayaran dan Harga</h2>
                <p className="text-gray-400 mb-4">
                  Harga perkhidmatan adalah seperti yang dinyatakan dalam sebut harga rasmi. Pembayaran hendaklah dibuat
                  mengikut terma yang dipersetujui:
                </p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Deposit 50% sebelum kerja bermula</li>
                  <li>• Baki 50% selepas kerja siap</li>
                  <li>• Pembayaran lewat akan dikenakan caj tambahan</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Waranti dan Sokongan</h2>
                <p className="text-gray-400 mb-4">Kami menyediakan waranti untuk semua produk dan perkhidmatan:</p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Waranti hardware: 12 bulan</li>
                  <li>• Waranti software: 6 bulan</li>
                  <li>• Sokongan teknikal percuma untuk 3 bulan pertama</li>
                  <li>• Latihan pengguna disediakan</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Tanggungjawab Pelanggan</h2>
                <p className="text-gray-400 mb-4">Pelanggan bertanggungjawab untuk:</p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Menyediakan maklumat yang tepat dan lengkap</li>
                  <li>• Memastikan akses ke premis untuk pemasangan</li>
                  <li>• Menjaga peralatan yang dipasang</li>
                  <li>• Membuat pembayaran mengikut jadual yang dipersetujui</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Had Liabiliti</h2>
                <p className="text-gray-400">
                  ZealGoDigital tidak akan bertanggungjawab untuk sebarang kerugian tidak langsung, kerugian keuntungan,
                  atau kerosakan yang timbul daripada penggunaan perkhidmatan kami, kecuali jika disebabkan oleh
                  kecuaian kami.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Pembatalan Kontrak</h2>
                <p className="text-gray-400 mb-4">Kontrak boleh dibatalkan dalam keadaan berikut:</p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Notis pembatalan 7 hari sebelum kerja bermula</li>
                  <li>• Deposit tidak akan dikembalikan jika kerja telah bermula</li>
                  <li>• Caj pembatalan mungkin dikenakan</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Undang-undang yang Berkenaan</h2>
                <p className="text-gray-400">
                  Terma dan syarat ini dikawal oleh undang-undang Malaysia. Sebarang pertikaian akan diselesaikan
                  melalui mahkamah yang berwibawa di Malaysia.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Perubahan Terma</h2>
                <p className="text-gray-400">
                  Kami berhak untuk mengubah terma dan syarat ini pada bila-bila masa. Perubahan akan berkuat kuasa
                  selepas dipaparkan di laman web kami.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Hubungi Kami</h2>
                <p className="text-gray-400">Untuk sebarang pertanyaan mengenai terma dan syarat ini, sila hubungi:</p>
                <div className="mt-4 text-gray-400">
                  <p>Email: info@zealgodigital.online</p>
                  <p>Telefon: +60 18-246 1092</p>
                  <p>Alamat: Guchil Luar, Kuala Krai, 18000 Kuala Krai, Kelantan</p>
                </div>
              </div>

              <div className="border-t border-red-900 pt-6">
                <p className="text-gray-500 text-sm">
                  Terma dan syarat ini berkuat kuasa mulai 1 Januari 2024 dan dikemas kini terakhir pada 25 Juni 2025.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

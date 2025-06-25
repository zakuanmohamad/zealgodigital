import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function DasarPrivasi() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dasar <span className="text-red-500">Privasi</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Komitmen kami terhadap perlindungan data dan privasi anda.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-black border-red-900">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Pengumpulan Maklumat</h2>
                <p className="text-gray-400 mb-4">Kami mengumpul maklumat yang anda berikan secara sukarela ketika:</p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Mengisi borang hubungan di laman web kami</li>
                  <li>• Menghubungi kami melalui telefon atau email</li>
                  <li>• Menggunakan perkhidmatan kami</li>
                  <li>• Melanggan newsletter kami</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Penggunaan Maklumat</h2>
                <p className="text-gray-400 mb-4">Maklumat yang dikumpul digunakan untuk:</p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Memberikan perkhidmatan yang diminta</li>
                  <li>• Berkomunikasi dengan anda mengenai projek</li>
                  <li>• Mengirim maklumat produk dan perkhidmatan</li>
                  <li>• Meningkatkan kualiti perkhidmatan kami</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Perlindungan Data</h2>
                <p className="text-gray-400">
                  Kami melaksanakan langkah-langkah keselamatan yang sesuai untuk melindungi maklumat peribadi anda
                  daripada akses, penggunaan, atau pendedahan yang tidak dibenarkan. Data anda disimpan dengan selamat
                  dan hanya diakses oleh kakitangan yang diberi kuasa.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Perkongsian dengan Pihak Ketiga</h2>
                <p className="text-gray-400">
                  Kami tidak akan menjual, memperdagangkan, atau memindahkan maklumat peribadi anda kepada pihak ketiga
                  tanpa kebenaran anda, kecuali untuk tujuan menyediakan perkhidmatan yang diminta atau jika dikehendaki
                  oleh undang-undang.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Hak Anda</h2>
                <p className="text-gray-400 mb-4">Anda mempunyai hak untuk:</p>
                <ul className="space-y-2 text-gray-400 ml-6">
                  <li>• Mengakses maklumat peribadi yang kami simpan</li>
                  <li>• Meminta pembetulan maklumat yang tidak tepat</li>
                  <li>• Meminta pemadaman maklumat peribadi anda</li>
                  <li>• Menarik balik persetujuan pada bila-bila masa</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
                <p className="text-gray-400">
                  Laman web kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah fail teks
                  kecil yang disimpan di komputer anda untuk membantu kami menganalisis penggunaan laman web dan
                  menyesuaikan kandungan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Perubahan Dasar</h2>
                <p className="text-gray-400">
                  Kami berhak untuk mengemas kini dasar privasi ini dari semasa ke semasa. Sebarang perubahan akan
                  dipaparkan di laman web ini dengan tarikh kemaskini yang baharu.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Hubungi Kami</h2>
                <p className="text-gray-400">
                  Jika anda mempunyai sebarang soalan mengenai dasar privasi ini, sila hubungi kami di:
                </p>
                <div className="mt-4 text-gray-400">
                  <p>Email: info@zealgodigital.online</p>
                  <p>Telefon: +60 18-246 1092</p>
                  <p>Alamat: Guchil Luar, Kuala Krai, 18000 Kuala Krai, Kelantan</p>
                </div>
              </div>

              <div className="border-t border-red-900 pt-6">
                <p className="text-gray-500 text-sm">
                  Dasar privasi ini berkuat kuasa mulai 1 Januari 2024 dan dikemas kini terakhir pada 25 Juni 2025.
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

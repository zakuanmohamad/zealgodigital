import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"

export default function Kerjaya() {
  const jobs = [
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Kuala Krai, Kelantan",
      type: "Full-time",
      salary: "RM 2,500 - RM 4,000",
      description:
        "Kami mencari Digital Marketing Specialist yang berpengalaman untuk menguruskan kempen digital marketing klien-klien kami.",
      requirements: [
        "Diploma/Degree dalam Marketing atau bidang berkaitan",
        "2+ tahun pengalaman dalam digital marketing",
        "Mahir dalam Google Ads, Facebook Ads, SEO",
        "Kemahiran komunikasi yang baik",
      ],
    },
    {
      title: "Technical Support Engineer",
      department: "Technical",
      location: "Kuala Krai, Kelantan",
      type: "Full-time",
      salary: "RM 2,000 - RM 3,500",
      description:
        "Jawatan untuk memberikan sokongan teknikal kepada klien dan menyelenggara sistem yang telah dipasang.",
      requirements: [
        "Diploma dalam IT atau bidang berkaitan",
        "Pengalaman dalam hardware/software troubleshooting",
        "Kemahiran komunikasi pelanggan yang baik",
        "Sanggup berkerja di lapangan",
      ],
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Kuala Krai, Kelantan",
      type: "Full-time",
      salary: "RM 2,200 - RM 5,000 (dengan komisi)",
      description:
        "Peluang kerjaya dalam jualan untuk mempromosikan produk dan perkhidmatan digital transformation kami.",
      requirements: [
        "SPM/Diploma dalam mana-mana bidang",
        "Pengalaman dalam jualan (kelebihan)",
        "Personaliti yang outgoing dan persuasif",
        "Kemahiran komunikasi yang excellent",
      ],
    },
  ]

  const benefits = [
    "Gaji yang kompetitif",
    "Bonus prestasi",
    "Latihan dan pembangunan kerjaya",
    "Persekitaran kerja yang friendly",
    "Peluang untuk berkembang",
    "Cuti tahunan dan medical leave",
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kerjaya di <span className="text-red-500">ZealGoDigital</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sertai pasukan kami dan bantu mentransformasi perniagaan di seluruh Malaysia dengan teknologi digital.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Jawatan <span className="text-red-500">Kosong</span>
          </h2>

          <div className="space-y-8 mb-16">
            {jobs.map((job, index) => (
              <Card key={index} className="bg-black border-red-900 hover:border-red-500 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white mt-4 md:mt-0">Mohon Sekarang</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{job.description}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Keperluan:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-400">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <Card className="bg-black border-red-900">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">
                Faedah <span className="text-red-500">Bekerja</span> dengan Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    {benefit}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

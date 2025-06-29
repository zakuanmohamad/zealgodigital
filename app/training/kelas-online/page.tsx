"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Clock, Users, Star, MessageCircle, Play, BookOpen } from "lucide-react"
import Link from "next/link"

export default function KelasOnline() {
  const courses = [
    {
      title: "AI Kickstart: Belajar Asas Kecerdasan Buatan",
      slug: "ai-kickstart",
      description: "Pelajari asas-asas AI dan bagaimana menggunakannya dalam kehidupan seharian dan perniagaan.",
      duration: "8 Jam",
      level: "Beginner",
      students: "500+",
      rating: 4.9,
      price: "RM 299",
      originalPrice: "RM 499",
      image: "/placeholder.svg?height=200&width=300&text=AI+Artificial+Intelligence+Brain+Circuit+Technology",
      highlights: ["Pengenalan AI", "Machine Learning Basics", "AI Tools", "Practical Applications"],
    },
    {
      title: "AI Marketing Blueprint",
      slug: "ai-marketing-blueprint",
      description: "Kuasai strategi pemasaran digital menggunakan kekuatan AI untuk hasil yang maksimum.",
      duration: "12 Jam",
      level: "Intermediate",
      students: "350+",
      rating: 4.8,
      price: "RM 399",
      originalPrice: "RM 699",
      image: "/placeholder.svg?height=200&width=300&text=AI+Marketing+Digital+Strategy+Analytics+Dashboard",
      highlights: ["AI Marketing Strategy", "Automated Campaigns", "Data Analytics", "ROI Optimization"],
    },
    {
      title: "AI Designer Lab: Kuasa Kreativiti Automatik",
      slug: "ai-designer-lab",
      description: "Revolusi cara anda berkarya dengan AI design tools yang canggih dan efisien.",
      duration: "10 Jam",
      level: "Intermediate",
      students: "280+",
      rating: 4.7,
      price: "RM 349",
      originalPrice: "RM 599",
      image: "/placeholder.svg?height=200&width=300&text=AI+Design+Creative+Tools+Graphics+Automation",
      highlights: ["AI Design Tools", "Automated Graphics", "Brand Creation", "Creative Workflows"],
    },
    {
      title: "AI Video Creator Masterclass",
      slug: "ai-video-creator",
      description: "Cipta video berkualiti profesional dengan bantuan AI dalam masa yang singkat.",
      duration: "15 Jam",
      level: "Advanced",
      students: "200+",
      rating: 4.9,
      price: "RM 499",
      originalPrice: "RM 899",
      image: "/placeholder.svg?height=200&width=300&text=AI+Video+Creation+Editing+Production+Studio",
      highlights: ["AI Video Generation", "Automated Editing", "Script Writing", "Voice Synthesis"],
    },
    {
      title: "CanvaSmart: Asas Rekaan Mudah & Efektif",
      slug: "canvasmart",
      description: "Kuasai Canva untuk menghasilkan design yang menarik untuk semua keperluan anda.",
      duration: "6 Jam",
      level: "Beginner",
      students: "800+",
      rating: 4.6,
      price: "RM 199",
      originalPrice: "RM 349",
      image: "/placeholder.svg?height=200&width=300&text=Canva+Design+Graphics+Templates+Creative",
      highlights: ["Canva Basics", "Template Mastery", "Brand Kit", "Social Media Graphics"],
    },
    {
      title: "CanvaPro Mastery",
      slug: "canvapro-mastery",
      description: "Tingkatkan kemahiran Canva anda ke tahap profesional dengan teknik lanjutan.",
      duration: "10 Hrs",
      level: "Advanced",
      students: "300+",
      rating: 4.8,
      price: "RM 349",
      originalPrice: "RM 599",
      image: "/placeholder.svg?height=200&width=300&text=Canva+Pro+Advanced+Design+Professional+Graphics",
      highlights: ["Advanced Features", "Animation", "Team Collaboration", "Brand Management"],
    },
    {
      title: "AI HackLab: Legal & Ethical Automation",
      slug: "ai-hacklab",
      description: "Pelajari penggunaan AI yang bertanggungjawab dan selamat dalam automasi perniagaan.",
      duration: "8 Jam",
      level: "Intermediate",
      students: "150+",
      rating: 4.7,
      price: "RM 399",
      originalPrice: "RM 699",
      image: "/placeholder.svg?height=200&width=300&text=AI+Ethics+Legal+Compliance+Security+Automation",
      highlights: ["AI Ethics", "Legal Compliance", "Safe Automation", "Risk Management"],
    },
    {
      title: "The AI Mastery Code: Menjadi Pakar AI Serba Boleh",
      slug: "ai-mastery-code",
      description: "Program komprehensif untuk menjadi pakar AI yang serba boleh dalam pelbagai bidang.",
      duration: "25 Jam",
      level: "Advanced",
      students: "100+",
      rating: 5.0,
      price: "RM 899",
      originalPrice: "RM 1499",
      image: "/placeholder.svg?height=200&width=300&text=AI+Mastery+Expert+Code+Programming+Technology",
      highlights: ["Complete AI Mastery", "Multiple Domains", "Expert Certification", "Lifetime Access"],
    },
    {
      title: "WebAI Developer Bootcamp: Kuasai Web & Automasi AI",
      slug: "webai-developer",
      description: "Bootcamp intensif untuk menguasai pembangunan web dengan integrasi AI.",
      duration: "30 Jam",
      level: "Advanced",
      students: "80+",
      rating: 4.9,
      price: "RM 1299",
      originalPrice: "RM 1999",
      image: "/placeholder.svg?height=200&width=300&text=Web+Development+AI+Integration+Coding+Programming",
      highlights: ["Web Development", "AI Integration", "Full Stack", "Real Projects"],
    },
    {
      title: "ZealPotential: Unlock Rahsia Potensi Anda",
      slug: "zealpotential",
      description: "Program transformasi diri untuk membuka potensi tersembunyi dan mencapai kejayaan.",
      duration: "12 Jam",
      level: "All Levels",
      students: "600+",
      rating: 4.8,
      price: "RM 299",
      originalPrice: "RM 499",
      image: "/placeholder.svg?height=200&width=300&text=Personal+Development+Success+Motivation+Growth",
      highlights: ["Self Discovery", "Goal Setting", "Mindset Transformation", "Success Strategies"],
    },
    {
      title: "ZealQuit: Zero Smoke & Drug Transformation",
      slug: "zealquit",
      description: "Program holistik untuk berhenti merokok dan mengatasi ketagihan dengan pendekatan yang terbukti.",
      duration: "16 Jam",
      level: "All Levels",
      students: "250+",
      rating: 4.9,
      price: "RM 399",
      originalPrice: "RM 699",
      image: "/placeholder.svg?height=200&width=300&text=Health+Transformation+Quit+Smoking+Wellness+Recovery",
      highlights: ["Addiction Recovery", "Behavioral Change", "Health Transformation", "Support System"],
    },
  ]

  const handleCourseInquiry = (courseTitle: string, price: string) => {
    const message = `Halo ZealGoDigital!

Saya berminat dengan kursus online berikut:

*Kursus:* ${courseTitle}
*Harga:* ${price}

Boleh saya dapatkan maklumat lanjut tentang:
- Jadual kelas
- Kaedah pembayaran
- Akses ke materi
- Sertifikat

Terima kasih!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/60182461092?text=${encodedMessage}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Monitor className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Kelas <span className="text-blue-500">Online</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Belajar dari rumah dengan fleksibiliti masa. Akses kursus berkualiti tinggi 24/7 dengan sertifikat digital.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center">
              <Play className="h-4 w-4 mr-2 text-blue-500" />
              Video HD Quality
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-blue-500" />
              Akses Seumur Hidup
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
              Sertifikat Digital
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kursus <span className="text-blue-500">Tersedia</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pilih dari koleksi kursus online kami yang direka khas untuk meningkatkan kemahiran digital anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="bg-black border-red-900 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-blue-600 text-white">{course.level}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-lg line-clamp-2">{course.title}</CardTitle>
                  <p className="text-gray-400 text-sm line-clamp-2">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {course.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 line-through text-sm">{course.originalPrice}</span>
                        <div className="text-2xl font-bold text-blue-500">{course.price}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Link href={`/training/kelas-online/${course.slug}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Lihat Detail</Button>
                      </Link>
                      <Button
                        onClick={() => handleCourseInquiry(course.title, course.price)}
                        variant="outline"
                        className="w-full border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Daftar Sekarang
                      </Button>
                    </div>
                  </div>
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

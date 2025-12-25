"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Users,
  Car,
  Shield,
  Calendar,
  Gift,
  CreditCard,
  Wallet,
  Building,
  Phone,
  Award,
  BookOpen,
  Target,
  Route,
  ParkingCircle,
  Gauge,
  FileCheck,
  BadgeCheck,
  Zap,
  ThumbsUp
} from "lucide-react";

const packages = [
  {
    name: "Paket Basic",
    sessions: "10x pertemuan",
    price: "Rp 1.500.000",
    pricePerSession: "Rp 150.000/sesi",
    description: "Cocok untuk pemula total yang ingin belajar dasar mengemudi",
    features: [
      "Cocok untuk pemula total",
      "Pilihan manual atau matic",
      "Belajar di area tertutup + jalan raya",
      "Durasi 90 menit per sesi",
      "Materi dasar mengemudi lengkap",
      "Sertifikat kelulusan",
    ],
    notIncluded: [
      "Simulasi ujian SIM",
      "Antar jemput",
      "Garansi bisa",
    ],
    popular: false,
    color: "border-gray-200",
    icon: Car,
    recommended: "Pemula yang punya waktu fleksibel",
  },
  {
    name: "Paket Standard",
    sessions: "15x pertemuan",
    price: "Rp 2.000.000",
    pricePerSession: "Rp 133.000/sesi",
    description: "Paket terlengkap dari pemula hingga mahir dengan simulasi SIM",
    features: [
      "Pemula sampai mahir",
      "Include simulasi ujian SIM",
      "Free antar jemput (radius 10km)",
      "Durasi 90 menit per sesi",
      "Latihan parkir paralel & mundur",
      "Praktek di jalan raya & tanjakan",
      "Tips lolos ujian SIM",
      "Sertifikat kelulusan",
    ],
    notIncluded: [
      "Garansi bisa",
      "Private 1-on-1",
    ],
    popular: true,
    color: "border-primary",
    icon: Award,
    recommended: "Pemula yang ingin langsung bisa + SIM",
  },
  {
    name: "Paket Intensive",
    sessions: "20x pertemuan",
    price: "Rp 2.800.000",
    pricePerSession: "Rp 140.000/sesi",
    description: "Program intensif 2 minggu untuk yang ingin cepat mahir",
    features: [
      "Belajar setiap hari (2 minggu)",
      "Private 1-on-1 dengan instruktur",
      "GARANSI BISA menyetir",
      "Durasi 90 menit per sesi",
      "Instruktur dedicated pilihan Anda",
      "Include simulasi ujian SIM lengkap",
      "Free antar jemput (radius 15km)",
      "Praktek di berbagai kondisi jalan",
      "Sertifikat kelulusan",
      "Konsultasi gratis seumur hidup",
    ],
    notIncluded: [],
    popular: false,
    color: "border-secondary",
    icon: Zap,
    recommended: "Butuh cepat bisa dalam 2 minggu",
  },
  {
    name: "Paket SIM",
    sessions: "5x pertemuan",
    price: "Rp 800.000",
    pricePerSession: "Rp 160.000/sesi",
    description: "Khusus untuk yang sudah bisa tapi butuh persiapan ujian SIM",
    features: [
      "Khusus persiapan ujian SIM",
      "Simulasi ujian praktek lengkap",
      "Bantuan pengurusan SIM",
      "Durasi 90 menit per sesi",
      "Tips & trik lolos ujian",
      "Latihan di jalur ujian sesungguhnya",
    ],
    notIncluded: [
      "Materi dasar mengemudi",
      "Antar jemput",
      "Garansi bisa",
    ],
    popular: false,
    color: "border-accent",
    icon: FileCheck,
    recommended: "Sudah bisa nyetir, butuh SIM",
  },
];

const learningMaterials = [
  {
    icon: BookOpen,
    title: "Teori Mengemudi",
    items: ["Pengenalan bagian mobil", "Cara kerja mesin", "Rambu lalu lintas", "Aturan berkendara"],
  },
  {
    icon: Target,
    title: "Praktek Dasar",
    items: ["Starter & mematikan mesin", "Kopling & gas (manual)", "Rem & akselerasi", "Perpindahan gigi"],
  },
  {
    icon: Route,
    title: "Praktek Jalan",
    items: ["Menyetir di jalan lurus", "Belok kiri & kanan", "Putar balik (U-turn)", "Jalan tanjakan & turunan"],
  },
  {
    icon: ParkingCircle,
    title: "Parkir",
    items: ["Parkir paralel", "Parkir mundur", "Parkir serong", "Keluar dari parkir"],
  },
];

const bonuses = [
  {
    icon: Gift,
    title: "Modul Belajar Digital",
    description: "E-book lengkap teori mengemudi & rambu lalu lintas",
    value: "Senilai Rp 150.000",
  },
  {
    icon: FileCheck,
    title: "Simulasi Ujian Teori",
    description: "Akses 500+ soal latihan ujian teori SIM",
    value: "Senilai Rp 100.000",
  },
  {
    icon: Shield,
    title: "Asuransi Kecelakaan",
    description: "Perlindungan selama masa kursus",
    value: "Senilai Rp 200.000",
  },
  {
    icon: Phone,
    title: "Konsultasi 24/7",
    description: "Tanya jawab via WhatsApp dengan instruktur",
    value: "Senilai Rp 100.000",
  },
];

const paymentMethods = [
  { name: "Transfer Bank", icon: Building, banks: ["BCA", "Mandiri", "BNI", "BRI"] },
  { name: "E-Wallet", icon: Wallet, banks: ["GoPay", "OVO", "DANA", "ShopeePay"] },
  { name: "Kartu Kredit", icon: CreditCard, banks: ["Visa", "Mastercard", "Cicilan 0%"] },
];

const testimonials = [
  {
    name: "Rina W.",
    package: "Paket Standard",
    text: "Paket Standard worth it banget! Include antar jemput dan simulasi SIM. Langsung lulus!",
    rating: 5,
  },
  {
    name: "Dimas A.",
    package: "Paket Intensive",
    text: "2 minggu tiap hari latihan, sekarang udah lancar nyetir sendiri. Garansi bisa beneran!",
    rating: 5,
  },
  {
    name: "Maya S.",
    package: "Paket Basic",
    text: "Untuk pemula kayak saya, Paket Basic udah cukup banget. Instrukturnya sabar.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk bisa menyetir?",
    answer: "Rata-rata siswa kami bisa menyetir dalam 10-15 sesi. Namun, kecepatan belajar setiap orang berbeda tergantung kemampuan dan intensitas latihan.",
  },
  {
    question: "Apakah bisa pilih jadwal sendiri?",
    answer: "Ya, kami menyediakan jadwal fleksibel. Anda bisa memilih pagi (07:00-12:00), siang (12:00-15:00), atau sore (15:00-18:00) sesuai kebutuhan.",
  },
  {
    question: "Bagaimana jika saya belum bisa setelah paket selesai?",
    answer: "Kami memberikan garansi bisa untuk Paket Intensive. Untuk paket lain, Anda bisa menambah sesi latihan dengan biaya Rp 150.000/sesi.",
  },
  {
    question: "Apakah instruktur bisa datang ke rumah?",
    answer: "Untuk Paket Standard (radius 10km) dan Intensive (radius 15km), kami menyediakan layanan antar jemput gratis.",
  },
  {
    question: "Apakah ada cicilan?",
    answer: "Ya, kami menerima pembayaran cicilan melalui kartu kredit dengan bunga 0% hingga 6 bulan. Anda juga bisa bayar 50% di awal, sisanya sebelum sesi ke-5.",
  },
  {
    question: "Apa yang harus dibawa saat kursus?",
    answer: "Cukup bawa KTP/identitas diri. Untuk yang ingin langsung urus SIM, siapkan juga dokumen persyaratan SIM (KTP, surat kesehatan).",
  },
  {
    question: "Apakah bisa ganti instruktur?",
    answer: "Bisa. Jika Anda merasa kurang cocok dengan instruktur, kami akan segera mengganti dengan instruktur lain tanpa biaya tambahan.",
  },
  {
    question: "Berapa lama masa berlaku paket?",
    answer: "Paket berlaku selama 3 bulan sejak pembayaran. Untuk Paket Intensive, harus diselesaikan dalam 2-3 minggu.",
  },
];

const comparisonFeatures = [
  { name: "Jumlah Pertemuan", basic: "10x", standard: "15x", intensive: "20x", sim: "5x" },
  { name: "Durasi per Sesi", basic: "90 menit", standard: "90 menit", intensive: "90 menit", sim: "90 menit" },
  { name: "Simulasi Ujian SIM", basic: false, standard: true, intensive: true, sim: true },
  { name: "Antar Jemput", basic: false, standard: "10km", intensive: "15km", sim: false },
  { name: "Garansi Bisa", basic: false, standard: false, intensive: true, sim: false },
  { name: "Private 1-on-1", basic: false, standard: false, intensive: true, sim: false },
  { name: "Instruktur Dedicated", basic: false, standard: false, intensive: true, sim: false },
  { name: "Bantuan Urus SIM", basic: false, standard: true, intensive: true, sim: true },
  { name: "Konsultasi Seumur Hidup", basic: false, standard: false, intensive: true, sim: false },
];

export default function PaketPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent text-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PILIH PAKET TERBAIK
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Paket Kursus Mengemudi</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Pilih paket yang sesuai dengan kebutuhan dan kemampuan Anda. Semua paket termasuk sertifikat kelulusan.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-accent" /> Instruktur Bersertifikat
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-accent" /> Mobil Tahun 2022-2024
              </span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-accent" /> Jadwal Fleksibel
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">Rp 800K</p>
              <p className="text-muted text-sm">Mulai dari</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">90 Menit</p>
              <p className="text-muted text-sm">Per Sesi</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4 Paket</p>
              <p className="text-muted text-sm">Pilihan</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">Cicilan 0%</p>
              <p className="text-muted text-sm">Tersedia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pilih Paket Anda</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Setiap paket dirancang untuk kebutuhan berbeda. Baca detail fitur untuk memilih yang paling sesuai.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-card rounded-2xl p-8 border-2 ${pkg.color} shadow-sm hover:shadow-xl transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-white" /> TERPOPULER
                    </span>
                  </div>
                )}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${pkg.popular ? 'bg-primary text-white' : 'bg-primary/10'}`}>
                    <pkg.icon className={`w-8 h-8 ${pkg.popular ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-foreground">{pkg.name}</h3>
                    <p className="text-muted text-sm">{pkg.description}</p>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-4xl font-bold text-primary">{pkg.price}</p>
                  <p className="text-muted">{pkg.sessions} • {pkg.pricePerSession}</p>
                </div>
                <div className="mb-6">
                  <p className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary" /> Yang Anda Dapatkan:
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {pkg.notIncluded.length > 0 && (
                  <div className="mb-6 text-sm text-muted">
                    <p className="mb-2">Tidak termasuk:</p>
                    <ul className="space-y-1">
                      {pkg.notIncluded.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-4 h-4 flex items-center justify-center text-gray-400">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-background rounded-lg p-3 mb-6">
                  <p className="text-sm text-muted">
                    <span className="font-semibold text-foreground">Cocok untuk:</span> {pkg.recommended}
                  </p>
                </div>
                <Link
                  href="/daftar"
                  className={`block text-center py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary-dark text-white shadow-lg"
                      : "bg-gray-100 hover:bg-primary hover:text-white text-foreground"
                  }`}
                >
                  Pilih {pkg.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              KURIKULUM
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Apa yang Akan Anda Pelajari?</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Materi lengkap dari teori hingga praktek yang akan membuat Anda mahir mengemudi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningMaterials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all"
              >
                <material.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg text-foreground mb-3">{material.title}</h3>
                <ul className="space-y-2">
                  {material.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PERBANDINGAN
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Bandingkan Semua Paket</h2>
            <p className="text-muted">Lihat perbedaan fitur setiap paket untuk memilih yang paling sesuai</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] bg-card rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left py-4 px-6 font-semibold">Fitur</th>
                  <th className="text-center py-4 px-4 font-semibold">Basic</th>
                  <th className="text-center py-4 px-4 font-semibold bg-accent text-foreground">Standard</th>
                  <th className="text-center py-4 px-4 font-semibold">Intensive</th>
                  <th className="text-center py-4 px-4 font-semibold">SIM</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-6 text-foreground font-medium">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.basic === 'boolean' ? (
                        feature.basic ? <CheckCircle className="w-5 h-5 text-secondary mx-auto" /> : <span className="text-gray-300">-</span>
                      ) : feature.basic}
                    </td>
                    <td className="text-center py-4 px-4 bg-accent/5">
                      {typeof feature.standard === 'boolean' ? (
                        feature.standard ? <CheckCircle className="w-5 h-5 text-secondary mx-auto" /> : <span className="text-gray-300">-</span>
                      ) : <span className="font-semibold text-primary">{feature.standard}</span>}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.intensive === 'boolean' ? (
                        feature.intensive ? <CheckCircle className="w-5 h-5 text-secondary mx-auto" /> : <span className="text-gray-300">-</span>
                      ) : feature.intensive}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof feature.sim === 'boolean' ? (
                        feature.sim ? <CheckCircle className="w-5 h-5 text-secondary mx-auto" /> : <span className="text-gray-300">-</span>
                      ) : feature.sim}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-bold text-foreground">Harga</td>
                  <td className="text-center py-4 px-4 font-bold">Rp 1.5 Jt</td>
                  <td className="text-center py-4 px-4 font-bold text-primary bg-accent/5">Rp 2 Jt</td>
                  <td className="text-center py-4 px-4 font-bold">Rp 2.8 Jt</td>
                  <td className="text-center py-4 px-4 font-bold">Rp 800K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              BONUS EKSKLUSIF
            </span>
            <h2 className="text-3xl font-bold mb-4">Gratis untuk Semua Paket!</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Setiap pendaftaran paket kursus akan mendapatkan bonus senilai Rp 550.000
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <bonus.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">{bonus.title}</h3>
                <p className="text-green-100 text-sm mb-3">{bonus.description}</p>
                <p className="text-accent font-semibold text-sm">{bonus.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent-dark px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TESTIMONI
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Apa Kata Mereka?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{testimonial.package}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimoni" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Lihat Lebih Banyak Testimoni <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PEMBAYARAN
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Metode Pembayaran</h2>
            <p className="text-muted">Berbagai pilihan pembayaran yang memudahkan Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 border border-border text-center"
              >
                <method.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg text-foreground mb-3">{method.name}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {method.banks.map((bank, idx) => (
                    <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-muted">
                      {bank}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 bg-accent/10 rounded-xl p-6 text-center">
            <p className="text-foreground">
              <span className="font-semibold">Cicilan 0%</span> tersedia untuk kartu kredit BCA, Mandiri, dan BNI hingga 6 bulan.
              Atau bayar <span className="font-semibold">50% di awal</span>, sisanya sebelum sesi ke-5.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Pertanyaan Umum tentang Paket</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-accent text-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
            PROMO BULAN INI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Diskon 10% untuk Semua Paket!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Daftar sekarang dan dapatkan potongan harga spesial + bonus senilai Rp 550.000
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daftar"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-all"
            >
              <Phone className="w-5 h-5" /> Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

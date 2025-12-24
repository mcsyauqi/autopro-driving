"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

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
    popular: false,
    color: "border-gray-200",
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
      "Free antar jemput",
      "Durasi 90 menit per sesi",
      "Latihan parkir paralel & mundur",
      "Praktek di jalan raya & tanjakan",
      "Tips lolos ujian SIM",
      "Sertifikat kelulusan",
    ],
    popular: true,
    color: "border-primary",
  },
  {
    name: "Paket Intensive",
    sessions: "20x pertemuan",
    price: "Rp 2.800.000",
    pricePerSession: "Rp 140.000/sesi",
    description: "Program intensif 2 minggu untuk yang ingin cepat mahir",
    features: [
      "Belajar setiap hari (2 minggu)",
      "Private 1-on-1",
      "Garansi bisa menyetir",
      "Durasi 90 menit per sesi",
      "Instruktur dedicated",
      "Include simulasi ujian SIM",
      "Free antar jemput",
      "Praktek di berbagai kondisi jalan",
      "Sertifikat kelulusan",
    ],
    popular: false,
    color: "border-secondary",
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
      "Latihan di jalur ujian",
    ],
    popular: false,
    color: "border-accent",
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
    answer: "Kami memberikan garansi bisa untuk Paket Intensive. Untuk paket lain, Anda bisa menambah sesi latihan dengan biaya tambahan yang terjangkau.",
  },
  {
    question: "Apakah instruktur bisa datang ke rumah?",
    answer: "Untuk Paket Standard dan Intensive, kami menyediakan layanan antar jemput gratis dalam radius 10km dari lokasi kami.",
  },
];

export default function PaketPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Paket Kursus Mengemudi</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan dan kemampuan Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-card rounded-2xl p-8 border-2 ${pkg.color} shadow-sm hover:shadow-lg transition-all`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-white" /> TERPOPULER
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-bold text-2xl text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted">{pkg.description}</p>
                </div>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary">{pkg.price}</p>
                  <p className="text-muted">{pkg.sessions} • {pkg.pricePerSession}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/daftar"
                  className={`block text-center py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-foreground"
                  }`}
                >
                  Pilih Paket Ini
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Perbandingan Paket</h2>
            <p className="text-muted">Bandingkan fitur setiap paket untuk pilihan terbaik</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Fitur</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Basic</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary bg-primary/5">Standard</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Intensive</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">SIM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">Jumlah Pertemuan</td>
                  <td className="text-center py-4 px-4">10x</td>
                  <td className="text-center py-4 px-4 bg-primary/5 font-semibold">15x</td>
                  <td className="text-center py-4 px-4">20x</td>
                  <td className="text-center py-4 px-4">5x</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">Simulasi Ujian SIM</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-secondary mx-auto" /></td>
                  <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-secondary mx-auto" /></td>
                  <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-secondary mx-auto" /></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">Antar Jemput</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-secondary mx-auto" /></td>
                  <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-secondary mx-auto" /></td>
                  <td className="text-center py-4 px-4">-</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">Garansi Bisa</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4 bg-primary/5">-</td>
                  <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-secondary mx-auto" /></td>
                  <td className="text-center py-4 px-4">-</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-foreground">Private 1-on-1</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4 bg-primary/5">-</td>
                  <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-secondary mx-auto" /></td>
                  <td className="text-center py-4 px-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pertanyaan Umum</h2>
            <p className="text-muted">Jawaban untuk pertanyaan yang sering diajukan</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Masih Bingung Pilih Paket?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi kami untuk konsultasi gratis dan dapatkan rekomendasi paket terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/daftar"
              className="bg-accent hover:bg-accent-dark text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

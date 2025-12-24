"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, Users, Award, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Sari Dewi",
    location: "Jakarta Selatan",
    package: "Paket Standard",
    rating: 5,
    text: "Dari takut nyetir jadi lancar dalam 2 minggu. Thank you AutoPro! Pak Bambang instrukturnya sabar banget ngajarin dari nol. Sekarang udah PD nyetir sendiri ke kantor.",
    date: "November 2024",
  },
  {
    name: "Budi Santoso",
    location: "Jakarta Timur",
    package: "Paket Basic",
    rating: 5,
    text: "Instrukturnya sabar banget. Recommended untuk pemula! Awalnya takut sama kopling, sekarang udah lancar pindah gigi. Worth it banget deh.",
    date: "Oktober 2024",
  },
  {
    name: "Anita Putri",
    location: "Depok",
    package: "Paket Intensive",
    rating: 5,
    text: "Langsung lulus ujian SIM berkat simulasi dari AutoPro. Mas Andi jago banget ngasih tips buat ujian praktik. Satu kali coba langsung lulus!",
    date: "November 2024",
  },
  {
    name: "Reza Pratama",
    location: "Bekasi",
    package: "Paket SIM",
    rating: 5,
    text: "Cuma butuh 5x pertemuan buat persiapan ujian SIM. Fokus banget ke materi ujian. Alhamdulillah langsung lulus. Thank you Pak Dedi!",
    date: "Oktober 2024",
  },
  {
    name: "Maya Anggraini",
    location: "Jakarta Barat",
    package: "Paket Standard",
    rating: 5,
    text: "Sebagai perempuan yang selama ini takut nyetir, Mbak Ratna bisa bikin saya jadi percaya diri. Pengajarannya santai tapi tetap efektif. Love it!",
    date: "September 2024",
  },
  {
    name: "Dimas Aditya",
    location: "Tangerang",
    package: "Paket Intensive",
    rating: 5,
    text: "Program intensif 2 minggu beneran efektif. Setiap hari latihan bikin makin mahir. Garansi bisa memang bukan janji kosong. Recommended!",
    date: "Oktober 2024",
  },
  {
    name: "Rina Wulandari",
    location: "Jakarta Utara",
    package: "Paket Basic",
    rating: 4,
    text: "Belajar mobil matic di AutoPro sangat menyenangkan. Mobilnya baru dan terawat. Instrukturnya juga on time. Jadwal fleksibel sesuai kebutuhan saya.",
    date: "September 2024",
  },
  {
    name: "Ahmad Fauzi",
    location: "Bogor",
    package: "Paket Standard",
    rating: 5,
    text: "Free antar jemput sangat membantu karena rumah saya agak jauh. Layanannya profesional dan tepat waktu. Instruktur datang sesuai jadwal.",
    date: "November 2024",
  },
  {
    name: "Linda Kartika",
    location: "Jakarta Selatan",
    package: "Paket Intensive",
    rating: 5,
    text: "Sudah berumur 40 tahun baru belajar nyetir, tapi AutoPro bikin saya merasa nyaman dan tidak malu. Pak Bambang sangat pengertian. Terima kasih!",
    date: "Oktober 2024",
  },
];

const stats = [
  { icon: Users, value: "10.000+", label: "Alumni Sukses" },
  { icon: Award, value: "98%", label: "Tingkat Kelulusan SIM" },
  { icon: Star, value: "4.9/5", label: "Rating Kepuasan" },
  { icon: ThumbsUp, value: "95%", label: "Merekomendasikan" },
];

export default function TestimoniPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimoni Alumni</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Apa kata mereka yang sudah belajar mengemudi bersama AutoPro?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-accent text-accent"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-100" />
                  <p className="text-foreground relative z-10 pl-4">{testimonial.text}</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary font-medium">{testimonial.package}</span>
                  <span className="text-muted">{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Video Testimoni</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Dengarkan langsung cerita sukses dari alumni kami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center"
              >
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p>Video Testimoni {index + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Jadi Bagian dari 10.000+ Alumni Sukses</h2>
          <p className="text-xl text-green-100 mb-8">
            Mulai perjalanan belajar mengemudi Anda sekarang juga!
          </p>
          <Link
            href="/daftar"
            className="inline-block bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}

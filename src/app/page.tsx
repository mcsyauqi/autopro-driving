"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Clock,
  Shield,
  Car,
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Gauge,
} from "lucide-react";

const stats = [
  { number: "10.000+", label: "Alumni", icon: Users },
  { number: "98%", label: "Lulus SIM", icon: Award },
  { number: "15", label: "Tahun Pengalaman", icon: Clock },
];

const features = [
  {
    icon: Heart,
    title: "Instruktur Sabar",
    description: "Pengajar yang sabar dan telaten membimbing dari nol hingga mahir",
  },
  {
    icon: Car,
    title: "Mobil Terawat",
    description: "Kendaraan baru tahun 2022-2024 dengan dual brake untuk keamanan",
  },
  {
    icon: Calendar,
    title: "Jadwal Fleksibel",
    description: "Pagi, siang, sore - pilih waktu yang sesuai kebutuhan Anda",
  },
  {
    icon: Shield,
    title: "Garansi Bisa",
    description: "Belum bisa menyetir? Tambah latihan gratis tanpa biaya",
  },
];

const packages = [
  {
    name: "Paket Basic",
    sessions: "10x pertemuan",
    price: "Rp 1.500.000",
    features: [
      "Cocok untuk pemula total",
      "Manual atau Matic",
      "Belajar di area tertutup + jalan raya",
    ],
    popular: false,
  },
  {
    name: "Paket Standard",
    sessions: "15x pertemuan",
    price: "Rp 2.000.000",
    features: [
      "Pemula sampai mahir",
      "Include simulasi ujian SIM",
      "Free antar jemput",
    ],
    popular: true,
  },
  {
    name: "Paket Intensive",
    sessions: "20x pertemuan",
    price: "Rp 2.800.000",
    features: [
      "Belajar setiap hari (2 minggu)",
      "Private 1-on-1",
      "Garansi bisa menyetir",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Sari Dewi",
    text: "Dari takut nyetir jadi lancar dalam 2 minggu. Thank you AutoPro!",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    text: "Instrukturnya sabar banget. Recommended untuk pemula!",
    rating: 5,
  },
  {
    name: "Anita Putri",
    text: "Langsung lulus ujian SIM berkat simulasi dari AutoPro.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-accent text-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                #1 Kursus Mengemudi di Jakarta
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Jago Nyetir dalam 2 Minggu, <span className="text-accent">Dijamin!</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Kursus mengemudi mobil manual & matic dengan instruktur bersertifikat.
                <span className="font-semibold"> Bonus: Bantuan pembuatan SIM.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/daftar"
                  className="bg-accent hover:bg-accent-dark text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 text-center"
                >
                  Daftar Sekarang
                </Link>
                <Link
                  href="/paket"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-white/30 text-center"
                >
                  Lihat Paket
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <Gauge className="w-48 h-48 text-accent mx-auto" />
                  <p className="text-center text-xl font-semibold mt-4">Mulai Perjalananmu!</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mt-16"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kenapa Pilih AutoPro?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman belajar mengemudi terbaik untuk Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pilih Paket Sesuai Kebutuhan
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Berbagai pilihan paket kursus yang bisa disesuaikan dengan kemampuan dan waktu Anda
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-background rounded-xl p-6 border-2 transition-all hover:scale-105 ${
                  pkg.popular ? "border-primary shadow-lg" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    TERPOPULER
                  </span>
                )}
                <h3 className="font-bold text-xl text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted mb-4">{pkg.sessions}</p>
                <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/daftar"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-foreground"
                  }`}
                >
                  Pilih Paket
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/paket"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Lihat Semua Paket <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apa Kata Alumni Kami?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Ribuan alumni telah berhasil belajar mengemudi bersama AutoPro
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl shadow-sm border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimoni"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Lihat Semua Testimoni <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Belajar Mengemudi?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Daftar sekarang dan mulai perjalanan mengemudi Anda bersama AutoPro!
            </p>
            <Link
              href="/daftar"
              className="inline-block bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
            >
              Daftar Sekarang
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

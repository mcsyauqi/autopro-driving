"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Shield, Settings, CheckCircle, Fuel, Calendar } from "lucide-react";

const vehicles = [
  {
    name: "Toyota Avanza",
    type: "Manual",
    year: "2023",
    image: "/vehicles/avanza.jpg",
    features: ["Transmisi Manual 5 Speed", "AC Double Blower", "Power Steering", "Dual Brake System"],
    description: "MPV populer yang cocok untuk belajar mobil manual. Mudah dikontrol dan nyaman dikendarai.",
    color: "Putih",
  },
  {
    name: "Honda Brio",
    type: "Manual",
    year: "2024",
    image: "/vehicles/brio.jpg",
    features: ["Transmisi Manual 5 Speed", "AC", "Power Steering", "Dual Brake System"],
    description: "City car compact yang lincah dan mudah dimanuver. Ideal untuk belajar di jalan sempit.",
    color: "Merah",
  },
  {
    name: "Toyota Calya",
    type: "Matic",
    year: "2023",
    image: "/vehicles/calya.jpg",
    features: ["Transmisi Automatic CVT", "AC Double Blower", "Power Steering", "Dual Brake System"],
    description: "LCGC matic yang irit bahan bakar. Sempurna untuk pemula yang ingin belajar mobil matic.",
    color: "Silver",
  },
  {
    name: "Honda City",
    type: "Matic",
    year: "2022",
    image: "/vehicles/city.jpg",
    features: ["Transmisi Automatic CVT", "AC Digital", "Power Steering", "Dual Brake System", "Rear Camera"],
    description: "Sedan elegan dengan fitur lengkap. Memberikan pengalaman belajar yang premium.",
    color: "Hitam",
  },
];

const safetyFeatures = [
  {
    icon: Shield,
    title: "Dual Brake System",
    description: "Semua kendaraan dilengkapi rem ganda untuk keamanan maksimal. Instruktur bisa mengontrol rem dari kursi penumpang.",
  },
  {
    icon: Settings,
    title: "Perawatan Rutin",
    description: "Kendaraan menjalani service rutin setiap 1000km untuk memastikan performa optimal dan keamanan berkendara.",
  },
  {
    icon: Car,
    title: "Kendaraan Terbaru",
    description: "Armada kami terdiri dari kendaraan tahun 2022-2024 dengan kondisi prima dan fitur keselamatan modern.",
  },
  {
    icon: Fuel,
    title: "BBM Berkualitas",
    description: "Kami hanya menggunakan BBM berkualitas tinggi untuk menjaga performa mesin tetap optimal.",
  },
];

export default function KendaraanPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Armada Kendaraan Latihan</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Kendaraan terawat tahun 2022-2024 dengan sistem keamanan ganda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Pilihan Kendaraan</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Pilih tipe transmisi sesuai kebutuhan Anda - Manual atau Matic
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Car className="w-24 h-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-foreground">{vehicle.name}</h3>
                      <p className="text-muted">{vehicle.color}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        vehicle.type === "Manual"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}>
                        {vehicle.type}
                      </span>
                      <div className="flex items-center gap-1 mt-1 text-sm text-muted">
                        <Calendar className="w-4 h-4" />
                        {vehicle.year}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mb-4">{vehicle.description}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-foreground mb-2">Fitur:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual vs Matic */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Manual vs Matic?</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Bingung pilih yang mana? Berikut perbandingannya
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border-2 border-primary"
            >
              <h3 className="font-bold text-2xl text-primary mb-4">Transmisi Manual</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Lebih hemat bahan bakar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Kontrol penuh atas kendaraan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">SIM A manual bisa mengendarai semua jenis mobil</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Biaya perawatan lebih murah</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted">
                Cocok untuk: Yang ingin menguasai semua jenis mobil
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border-2 border-secondary"
            >
              <h3 className="font-bold text-2xl text-secondary mb-4">Transmisi Matic</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Lebih mudah dipelajari</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Nyaman untuk macet di perkotaan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Tidak perlu pusing ganti gigi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Lebih sedikit hal yang dipikirkan</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted">
                Cocok untuk: Yang fokus berkendara di perkotaan
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Belajar Mengemudi?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Pilih mobil manual atau matic sesuai kebutuhan Anda
          </p>
          <Link
            href="/daftar"
            className="inline-block bg-accent hover:bg-accent-dark text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}

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
  MapPin,
  Phone,
  BookOpen,
  Target,
  Zap,
  ThumbsUp,
  FileCheck,
  Headphones,
  CircleDot,
  Play,
  BadgeCheck,
  GraduationCap,
  Route,
  CarFront,
  Settings,
} from "lucide-react";

const stats = [
  { number: "10.000+", label: "Alumni Sukses", icon: Users },
  { number: "98%", label: "Lulus SIM", icon: Award },
  { number: "15", label: "Tahun Pengalaman", icon: Clock },
  { number: "4.9/5", label: "Rating Google", icon: Star },
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
    location: "Jakarta Selatan",
    text: "Dari takut nyetir jadi lancar dalam 2 minggu. Thank you AutoPro!",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    location: "Bekasi",
    text: "Instrukturnya sabar banget. Recommended untuk pemula!",
    rating: 5,
  },
  {
    name: "Anita Putri",
    location: "Depok",
    text: "Langsung lulus ujian SIM berkat simulasi dari AutoPro.",
    rating: 5,
  },
];

const learningSteps = [
  {
    step: 1,
    title: "Pendaftaran",
    description: "Daftar online atau datang langsung ke kantor kami. Pilih paket dan jadwal yang sesuai.",
    icon: FileCheck,
  },
  {
    step: 2,
    title: "Teori Dasar",
    description: "Pelajari teori mengemudi, rambu-rambu lalu lintas, dan aturan berkendara yang aman.",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Praktek Area Tertutup",
    description: "Latihan di area tertutup untuk menguasai dasar-dasar seperti starter, kopling, dan rem.",
    icon: Target,
  },
  {
    step: 4,
    title: "Praktek Jalan Raya",
    description: "Praktek di jalan raya dengan berbagai kondisi: macet, tanjakan, parkir, dan lainnya.",
    icon: Route,
  },
  {
    step: 5,
    title: "Simulasi Ujian SIM",
    description: "Latihan simulasi ujian SIM agar Anda siap menghadapi tes sesungguhnya.",
    icon: Zap,
  },
  {
    step: 6,
    title: "Lulus & Dapat SIM",
    description: "Anda siap ujian SIM! Kami juga bantu proses pengurusan SIM Anda.",
    icon: GraduationCap,
  },
];

const vehicles = [
  { name: "Toyota Avanza", type: "Manual", year: "2023" },
  { name: "Honda Brio", type: "Manual", year: "2024" },
  { name: "Toyota Calya", type: "Matic", year: "2023" },
  { name: "Honda City", type: "Matic", year: "2022" },
];

const instructors = [
  { name: "Pak Bambang", experience: "15 tahun", specialty: "Spesialis Pemula" },
  { name: "Pak Dedi", experience: "12 tahun", specialty: "Sabar & Detail" },
  { name: "Mas Andi", experience: "8 tahun", specialty: "Instruktur Favorit" },
  { name: "Mbak Ratna", experience: "6 tahun", specialty: "Instruktur Wanita" },
];

const coverageAreas = [
  "Jakarta Selatan",
  "Jakarta Timur",
  "Jakarta Barat",
  "Jakarta Utara",
  "Jakarta Pusat",
  "Depok",
  "Bekasi",
  "Tangerang",
  "Tangerang Selatan",
  "Bogor",
];

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Instruktur Bersertifikat",
    description: "Semua instruktur kami memiliki sertifikasi resmi dan pengalaman minimal 5 tahun.",
  },
  {
    icon: CarFront,
    title: "Armada Modern",
    description: "Kendaraan tahun 2022-2024 dengan fitur keamanan lengkap termasuk dual brake system.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Tim customer service siap membantu Anda kapan saja melalui WhatsApp.",
  },
  {
    icon: Settings,
    title: "Kurikulum Terstruktur",
    description: "Materi pembelajaran yang terstruktur dari dasar hingga mahir dengan modul lengkap.",
  },
  {
    icon: ThumbsUp,
    title: "Garansi Kepuasan",
    description: "Tidak puas dengan layanan? Kami berikan garansi uang kembali dalam 7 hari.",
  },
  {
    icon: MapPin,
    title: "Jangkauan Luas",
    description: "Layanan antar jemput gratis mencakup Jabodetabek dengan radius hingga 15km.",
  },
];

const faqs = [
  {
    question: "Berapa lama waktu yang dibutuhkan untuk bisa menyetir?",
    answer: "Rata-rata siswa kami bisa menyetir dengan lancar dalam 10-15 pertemuan (2-3 minggu). Namun, kecepatan belajar setiap orang berbeda.",
  },
  {
    question: "Apakah saya bisa memilih instruktur?",
    answer: "Ya, Anda bisa request instruktur favorit. Kami juga menyediakan instruktur wanita untuk siswa yang lebih nyaman dengan instruktur perempuan.",
  },
  {
    question: "Bagaimana jika saya belum bisa setelah paket selesai?",
    answer: "Untuk Paket Intensive, kami berikan garansi bisa. Jika belum mahir, Anda bisa tambah latihan gratis hingga bisa.",
  },
  {
    question: "Apakah ada layanan antar jemput?",
    answer: "Ya, untuk Paket Standard dan Intensive, kami menyediakan layanan antar jemput gratis dalam radius 10km dari lokasi kami.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/daftar"
                  className="bg-accent hover:bg-accent-dark text-foreground px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 text-center shadow-lg"
                >
                  Daftar Sekarang
                </Link>
                <Link
                  href="/paket"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-white/30 text-center backdrop-blur-sm"
                >
                  Lihat Paket
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-accent" /> Instruktur Sabar
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-accent" /> Mobil Baru
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-accent" /> Garansi Bisa
                </span>
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
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-bold text-2xl text-accent">Rp 800K</p>
                      <p className="text-blue-200">Mulai dari</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-bold text-2xl text-accent">2 Minggu</p>
                      <p className="text-blue-200">Jago Nyetir</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted">
            <span className="flex items-center gap-2 text-sm">
              <BadgeCheck className="w-5 h-5 text-primary" />
              Terdaftar di Dinas Perhubungan
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Shield className="w-5 h-5 text-primary" />
              Asuransi Kecelakaan
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Award className="w-5 h-5 text-primary" />
              ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Star className="w-5 h-5 text-accent fill-accent" />
              4.9 Rating Google
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              KEUNGGULAN KAMI
            </span>
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
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-border group hover:border-primary"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Learning Path */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PROSES BELAJAR
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bagaimana Cara Belajar di AutoPro?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Proses belajar yang terstruktur dan mudah dipahami untuk pemula
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="pt-2">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/daftar"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Mulai Belajar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent-dark px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PAKET KURSUS
            </span>
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
                className={`relative bg-card rounded-xl p-6 border-2 transition-all hover:scale-105 ${
                  pkg.popular ? "border-primary shadow-xl" : "border-border hover:border-primary/50"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
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
                      : "bg-gray-100 hover:bg-primary hover:text-white text-foreground"
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
              Lihat Semua Paket & Perbandingan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TIM INSTRUKTUR
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Belajar dari Instruktur Terbaik
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Tim instruktur berpengalaman dan bersertifikat siap membimbing Anda
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all hover:border-primary"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {instructor.name.split(' ')[1]?.[0] || instructor.name[0]}
                </div>
                <h3 className="font-bold text-foreground">{instructor.name}</h3>
                <p className="text-primary text-sm font-medium">{instructor.specialty}</p>
                <p className="text-muted text-sm mt-1">{instructor.experience}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/instruktur"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Lihat Profil Lengkap Instruktur <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicles Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                ARMADA KENDARAAN
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Belajar dengan Mobil Terbaru
              </h2>
              <p className="text-muted text-lg mb-6">
                Semua kendaraan kami adalah mobil tahun 2022-2024 dengan kondisi prima dan fitur keamanan lengkap termasuk dual brake system.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dual Brake System</p>
                    <p className="text-sm text-muted">Rem ganda untuk keamanan maksimal</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Service Rutin</p>
                    <p className="text-sm text-muted">Perawatan rutin setiap 1000km</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <CarFront className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Manual & Matic</p>
                    <p className="text-sm text-muted">Pilihan transmisi sesuai kebutuhan</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/kendaraan"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Lihat Semua Kendaraan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {vehicles.map((vehicle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-4 border border-border hover:shadow-lg transition-all"
                >
                  <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3">
                    <Car className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-foreground">{vehicle.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      vehicle.type === "Manual"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}>
                      {vehicle.type}
                    </span>
                    <span className="text-xs text-muted">{vehicle.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              KEUNGGULAN
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Harus AutoPro?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Berbagai keunggulan yang membuat kami menjadi pilihan terbaik
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent-dark px-4 py-1 rounded-full text-sm font-semibold mb-4">
              TESTIMONI
            </span>
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
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                </div>
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

      {/* Coverage Area */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                AREA LAYANAN
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Jangkauan Layanan Kami
              </h2>
              <p className="text-muted text-lg mb-6">
                Kami melayani area Jabodetabek dengan layanan antar jemput gratis untuk paket tertentu.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-6"
              >
                Cek Jangkauan Lokasi Anda <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-2" />
                <p className="font-medium">Peta Jangkauan</p>
                <p className="text-sm">Jabodetabek Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-lg text-foreground mb-2 flex items-start gap-3">
                  <CircleDot className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted pl-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted mb-4">Masih ada pertanyaan?</p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              <Headphones className="w-5 h-5" /> Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.a
              href="tel:081234567890"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Phone className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1">Telepon</h3>
              <p className="text-primary font-semibold">0812-3456-7890</p>
              <p className="text-sm text-muted mt-2">Senin - Minggu, 07:00 - 18:00</p>
            </motion.a>
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border border-border hover:border-secondary hover:shadow-lg transition-all text-center group"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                <svg className="w-8 h-8 text-secondary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1">WhatsApp</h3>
              <p className="text-secondary font-semibold">Chat Sekarang</p>
              <p className="text-sm text-muted mt-2">Respon cepat dalam 5 menit</p>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent hover:shadow-lg transition-all text-center group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <MapPin className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1">Lokasi</h3>
              <p className="text-foreground font-semibold">Jakarta Selatan</p>
              <p className="text-sm text-muted mt-2">Jl. Raya Pendidikan No. 123</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PROMO TERBATAS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Belajar Mengemudi?
            </h2>
            <p className="text-xl text-green-100 mb-4">
              Daftar sekarang dan dapatkan DISKON 10% untuk semua paket!
            </p>
            <p className="text-green-200 mb-8">
              *Promo berlaku hingga akhir bulan ini
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/daftar"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
              >
                Daftar Sekarang <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                <Phone className="w-5 h-5" /> Hubungi Kami
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

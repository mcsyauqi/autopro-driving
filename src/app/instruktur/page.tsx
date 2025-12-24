"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Clock, Star, Users, CheckCircle } from "lucide-react";

const instructors = [
  {
    name: "Pak Bambang Suryanto",
    experience: "15 tahun pengalaman",
    specialty: "Spesialis Pemula",
    description: "Instruktur senior yang sangat sabar dalam membimbing pemula. Ahli dalam membangun kepercayaan diri siswa dari nol.",
    rating: 4.9,
    students: 2500,
    certifications: ["Instruktur Bersertifikat Nasional", "Ahli K3 Berkendara"],
    image: "/instructors/bambang.jpg",
  },
  {
    name: "Pak Dedi Hermawan",
    experience: "12 tahun pengalaman",
    specialty: "Sabar & Detail",
    description: "Dikenal dengan metode pengajaran yang detail dan sistematis. Sangat teliti dalam mengajarkan teknik mengemudi yang benar.",
    rating: 4.8,
    students: 2000,
    certifications: ["Instruktur Bersertifikat Nasional", "Pelatih Defensive Driving"],
    image: "/instructors/dedi.jpg",
  },
  {
    name: "Mas Andi Pratama",
    experience: "8 tahun pengalaman",
    specialty: "Instruktur Favorit",
    description: "Instruktur muda dengan pendekatan modern dan friendly. Favorit di kalangan siswa muda karena komunikatif dan easy going.",
    rating: 4.9,
    students: 1500,
    certifications: ["Instruktur Bersertifikat Nasional", "Advanced Driving Technique"],
    image: "/instructors/andi.jpg",
  },
  {
    name: "Mbak Ratna Sari",
    experience: "6 tahun pengalaman",
    specialty: "Instruktur Wanita",
    description: "Instruktur wanita pertama kami yang sangat memahami kebutuhan siswa perempuan. Sabar dan penuh perhatian.",
    rating: 4.9,
    students: 1200,
    certifications: ["Instruktur Bersertifikat Nasional", "Certified Women Driving Coach"],
    image: "/instructors/ratna.jpg",
  },
];

const stats = [
  { icon: Users, value: "7.200+", label: "Siswa Dibimbing" },
  { icon: Clock, value: "41", label: "Tahun Pengalaman Gabungan" },
  { icon: Star, value: "4.9", label: "Rating Rata-rata" },
  { icon: Award, value: "100%", label: "Instruktur Bersertifikat" },
];

export default function InstrukturPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tim Instruktur Kami</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Instruktur berpengalaman dan bersertifikat siap membimbing Anda belajar mengemudi
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

      {/* Instructors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                      {instructor.name.split(' ')[1]?.[0] || instructor.name.split(' ')[0][0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-foreground">{instructor.name}</h3>
                      <p className="text-primary font-medium">{instructor.specialty}</p>
                      <p className="text-muted text-sm">{instructor.experience}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="font-semibold">{instructor.rating}</span>
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted">
                          <Users className="w-4 h-4" />
                          {instructor.students.toLocaleString()} siswa
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted mt-4">{instructor.description}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Sertifikasi:</p>
                    <ul className="space-y-1">
                      {instructor.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          {cert}
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

      {/* Why Our Instructors */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Kenapa Instruktur Kami Berbeda?</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Kami memilih instruktur bukan hanya berdasarkan kemampuan, tapi juga sikap dan kesabaran
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Seleksi Ketat",
                description: "Setiap instruktur melalui proses seleksi ketat termasuk tes psikologi dan kemampuan mengajar",
              },
              {
                title: "Pelatihan Berkelanjutan",
                description: "Instruktur kami mengikuti pelatihan rutin untuk update teknik pengajaran terbaru",
              },
              {
                title: "Evaluasi Berkala",
                description: "Performa instruktur dievaluasi berdasarkan feedback siswa untuk menjaga kualitas",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Belajar Bersama Instruktur Terbaik</h2>
          <p className="text-xl text-green-100 mb-8">
            Daftar sekarang dan pilih instruktur favorit Anda
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

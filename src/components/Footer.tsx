import Link from "next/link";
import { Car, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl">AutoPro</span>
                <span className="text-sm text-gray-400 ml-1">Driving School</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Belajar Menyetir dengan Aman dan Percaya Diri. Kursus mengemudi terpercaya dengan instruktur bersertifikat.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/paket" className="text-gray-400 hover:text-white transition-colors">Paket Kursus</Link></li>
              <li><Link href="/instruktur" className="text-gray-400 hover:text-white transition-colors">Instruktur</Link></li>
              <li><Link href="/kendaraan" className="text-gray-400 hover:text-white transition-colors">Kendaraan</Link></li>
              <li><Link href="/testimoni" className="text-gray-400 hover:text-white transition-colors">Testimoni</Link></li>
              <li><Link href="/daftar" className="text-gray-400 hover:text-white transition-colors">Daftar</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-primary" />
                <span>0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@autopro.id</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Jl. Raya Pendidikan No. 123, Jakarta Selatan</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Jam Operasional</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Senin - Jumat: 07:00 - 18:00</span>
              </li>
              <li className="pl-6">Sabtu: 07:00 - 17:00</li>
              <li className="pl-6">Minggu: 08:00 - 15:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 AutoPro Driving School. All rights reserved.</p>
          <p className="mt-2">
            Website ini dibuat dengan ❤️ oleh{" "}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Creativism Digital Marketing Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

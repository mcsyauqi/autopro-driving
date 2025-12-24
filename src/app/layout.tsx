import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AutoPro | Kursus Mengemudi Mobil Jakarta | Belajar Nyetir Terdekat",
  description: "Kursus mengemudi mobil manual & matic dengan instruktur bersertifikat. Belajar menyetir dengan aman dan percaya diri. 10.000+ alumni, 98% lulus SIM.",
  keywords: "kursus mengemudi, belajar nyetir, kursus mobil jakarta, les mobil, kursus SIM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

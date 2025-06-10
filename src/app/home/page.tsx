'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#f9fafb] text-[#263238]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance mb-4">
            Solusi Digital Inovatif untuk Pertumbuhan Bisnis Anda
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Easy Way Digital membantu Anda membangun kehadiran online yang kuat
            dengan teknologi modern dan strategi yang tepat sasaran.
          </p>
          <div className="flex gap-4">
            <Link
              href="/services"
              className="bg-[#66bb6a] hover:bg-[#4caf50] text-white px-6 py-3 rounded-lg font-medium"
            >
              Lihat Layanan
            </Link>
            <Link
              href="/contact"
              className="border border-[#66bb6a] text-[#66bb6a] hover:bg-[#e8f5e9] px-6 py-3 rounded-lg font-medium"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/ilustration.png"
            alt="Digital Solutions"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[#66bb6a]">
              Website Modern
            </h3>
            <p className="text-sm text-gray-600">
              Desain responsif, cepat, dan SEO-friendly yang memberikan
              pengalaman terbaik kepada pengguna.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[#66bb6a]">
              Integrasi Sistem
            </h3>
            <p className="text-sm text-gray-600">
              Kami bantu integrasikan API, database, dan sistem bisnis Anda
              untuk efisiensi maksimal.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-[#66bb6a]">
              Konsultasi Teknologi
            </h3>
            <p className="text-sm text-gray-600">
              Strategi digital berbasis data untuk mendukung pengambilan
              keputusan yang lebih cerdas.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#e8f5e9] text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Siap Mengubah Ide Anda Menjadi Solusi Nyata?
        </h2>
        <p className="text-gray-700 mb-6">
          Jadwalkan sesi konsultasi gratis dengan tim kami dan mulai perjalanan
          transformasi digital Anda.
        </p>
        <a
          href="https://wa.me/6285172268408" // Ganti dengan nomor WA kamu
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#66bb6a] hover:bg-[#4caf50] text-white px-8 py-3 rounded-lg font-medium inline-block"
        >
          Hubungi Kami via WhatsApp
        </a>
      </section>
    </main>
  );
}

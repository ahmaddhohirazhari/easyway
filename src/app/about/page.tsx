'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#66bb6a] mb-4">Tentang Kami</h1>
        <p className="text-gray-700 text-lg">
          Easy Way Digital adalah partner transformasi digital untuk UMKM dan
          bisnis lokal yang ingin berkembang di era teknologi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/about.png"
            alt="Tim Easy Way Digital"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Misi Kami
          </h2>
          <p className="text-gray-600 mb-4">
            Kami hadir untuk menyederhanakan proses digitalisasi. Dari pembuatan
            website, integrasi sistem, hingga strategi pemasaran digital — semua
            kami lakukan dengan pendekatan yang humanis dan efisien.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Nilai Kami
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Kolaboratif dan transparan dalam setiap proses</li>
            <li>Berorientasi pada solusi dan hasil</li>
            <li>Memberdayakan bisnis lokal dengan teknologi</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Kami Siap Jadi Mitra Digital Anda
        </h2>
        <p className="text-gray-600 mb-6">
          Dengan pendekatan yang fleksibel dan berorientasi solusi, kami percaya
          setiap bisnis punya potensi untuk bertumbuh melalui teknologi.
        </p>
        <a
          href="https://wa.me/6285172268408"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#66bb6a] hover:bg-[#4caf50] text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Hubungi Kami via WhatsApp
        </a>
      </div>
    </section>
  );
}

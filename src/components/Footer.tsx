import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#66bb6a] text-white ">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Easy Way Digital</h3>
          <p className="text-sm">
            Solusi digital modern untuk pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-md font-semibold mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold mb-3">Hubungi Kami</h4>
          <ul className="text-sm space-y-1">
            <li>
              Email:{' '}
              <a href="mailto:info@easywaydigital.id" className="underline">
                info@easywaydigital.id
              </a>
            </li>
            <li>
              WhatsApp:{' '}
              <a href="https://wa.me/6285172268408" className="underline">
                +62 851 7226 8408
              </a>
            </li>
            <li>Alamat: Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bg-[#4caf50] text-center text-sm text-white py-4">
        © {new Date().getFullYear()} Easy Way Digital. All rights reserved.
      </div>
    </footer>
  );
}

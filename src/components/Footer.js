import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 rounded-t-[50px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Subscribe Box (Commented Out) */}
        {/* <div className="bg-[#0069B3] p-6 rounded-br-[50px] rounded-tl-[50px] md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold">Sign up for Ayushmann Biomass</h3>
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 text-black text-sm rounded-md mb-3"
          />
          <button className="bg-[#0085DE] w-full py-2 rounded text-sm font-semibold">
            SUBSCRIBE
          </button>
        </div> */}

        {/* About */}
        <div className="text-sm leading-6 md:col-span-1">
          <h4 className="text-white text-lg font-semibold mb-2">About Ayushmann Biomass</h4>
          <p className="text-gray-400">
            We “Ayushmann Biomass” are a Sole Proprietorship firm, engaged as the foremost Manufactured of biomass burner biomass stove and bio mass dryier and hotair etc.
          </p>
          {/* <a href="#" className="text-blue-500 text-sm font-semibold mt-2 inline-block">Get a Quote →</a> */}
        </div>

        {/* Company Info */}
        <div className="text-sm leading-6 md:col-span-1">
          <h4 className="text-white text-lg font-semibold mb-2">Company Info</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-500 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div className="text-sm leading-6 md:col-span-2">
          <h4 className="text-white text-lg font-semibold mb-2">Quick Contact</h4>
          <p className="text-gray-400">
            Gali No.3 Surat Nagar Bahadurgarh-124507, <br />
            Distt. Jhajjar<br />
          </p>
          <p className="text-blue-500 font-bold mt-3">
            Call 8708822925
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="md:col-span-2">
          <h4 className="text-white text-lg font-semibold mb-2">Our Location</h4>
          <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.057048682973!2d76.92287937549073!3d28.69220407563257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjiNDInMTkuOSJOIDc2wrA1NSczMi40IkU!5e0!3m2!1sen!2sin!4v1698248056287!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-6 text-sm text-gray-500 px-4 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p>
          Copyright © Ayushmann Biomass | Design by{' '}
          <a href="https://shaacoder.com" className="text-white hover:text-blue-500 transition-colors">
            Shaacoder
          </a>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="border border-gray-600 rounded p-2 hover:bg-amber-100">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="border border-gray-600 rounded p-2 hover:bg-pink-100">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.404c-.058 1.281-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.155 3.434 1.842 5.177 5.226 5.332 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.434-.155 5.177-1.842 5.332-5.226.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.155-3.434-1.842-5.177-5.332-5.332C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
          <a href="https://youtube.com" className="border border-gray-600 rounded p-2 hover:bg-red-100">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

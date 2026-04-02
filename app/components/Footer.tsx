import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 pb-6 px-4 border-t border-gray-800 mt-auto">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Grid - Reduced to 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">
                Fazet Edu
              </span>
              <span className="text-gray-500 text-sm ml-1">.ng</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional websites and smart tools for Nigerian schools.
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <span className="bg-gray-800 rounded-lg px-2 py-1 text-xs text-gray-400">CAC Registered</span>
              <span className="bg-gray-800 rounded-lg px-2 py-1 text-xs text-gray-400">🇳🇬 Nigerian Made</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white text-sm transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-base">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>📧</span>
                <span>mail@fazetedu.ng</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>📞</span>
                <span>0708 292 1105</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block w-full text-center bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
              >
                Free Demo Setup
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Simpler */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} Fazet Edutech. All rights reserved.
            <span className="mx-2">•</span>
            <Link href="/privacy" className="hover:text-gray-400">Privacy</Link>
            <span className="mx-2">•</span>
            <Link href="/terms" className="hover:text-gray-400">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
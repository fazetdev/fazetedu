import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Column - Wider */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <div className="text-white font-bold text-3xl bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">
                Fazet Edu
              </div>
              <span className="text-gray-500 text-sm ml-2 font-medium">.ng</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming Nigerian education through innovative technology. 
              We provide schools, teachers, and parents with the tools they need to succeed.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 rounded-lg px-3 py-2">
                <span className="text-xs text-gray-400">CAC Registered</span>
              </div>
              <div className="bg-gray-800 rounded-lg px-3 py-2">
                <span className="text-xs text-gray-400">🇳🇬 Nigerian Made</span>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-lg">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/smart-school" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 group-hover:mr-2 h-0.5 bg-[#F59E0B] transition-all"></span>
                  Smart School
                </Link>
              </li>
              <li>
                <Link href="/edumarket" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 group-hover:mr-2 h-0.5 bg-[#F59E0B] transition-all"></span>
                  EduMarket
                </Link>
              </li>
              <li>
                <Link href="/teacherearn" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 group-hover:mr-2 h-0.5 bg-[#F59E0B] transition-all"></span>
                  TeacherEarn
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 group-hover:mr-2 h-0.5 bg-[#F59E0B] transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 group-hover:mr-2 h-0.5 bg-[#F59E0B] transition-all"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 group-hover:mr-2 h-0.5 bg-[#F59E0B] transition-all"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 group-hover:mr-2 h-0.5 bg-[#F59E0B] transition-all"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-white mb-4 text-lg">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-[#F59E0B] mt-1">📧</span>
                <span>mail@fazetedu.ng</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-[#F59E0B] mt-1">📞</span>
                <span>0708 292 1105</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-[#F59E0B] mt-1">📍</span>
                <span>Kano, Nigeria</span>
              </li>
            </ul>
            
            {/* Schedule Call Button */}
            <div className="mt-6">
              <Link href="/contact">
                <button className="w-full bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-[1.02]">
                  Schedule a Call
                </button>
              </Link>
            </div>

            {/* Social Proof */}
            <p className="text-xs text-gray-500 mt-4">
              ⚡ Usually replies within 1 hour
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Fazet Edutech. All rights reserved. 
              <span className="mx-2">•</span>
              <Link href="/privacy" className="hover:text-gray-400">Privacy</Link>
              <span className="mx-2">•</span>
              <Link href="/terms" className="hover:text-gray-400">Terms</Link>
            </p>
            <p className="text-sm text-gray-600 mt-4 md:mt-0 flex items-center">
              Built with ❤️ for Nigerian schools 
              <span className="ml-2 text-2xl">🇳🇬</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

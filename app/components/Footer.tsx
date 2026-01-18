export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Brand Column */}
            <div>
              <div className="flex items-center mb-4">
                <div className="text-white font-bold text-2xl">Fazet Edu</div>
                <span className="text-gray-400 text-sm ml-1">.ng</span>
              </div>
              <p className="text-gray-400">
                Modern educational solutions for Nigerian schools
              </p>
            </div>
            
            {/* Products Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">EduMarket</a></li>
                <li><a href="#" className="hover:text-white">TeacherEarn</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 mail@fazetedu.ng</li>
                <li>📞 07082921105</li>
                <li className="mt-4">
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    Schedule Call
                  </button>
                </li>
              </ul>
            </div>
            
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2026 Fazet Edutech. All rights reserved.</p>
            <p className="text-sm mt-2">Built for Nigerian schools 🇳🇬</p>
          </div>
        </div>
      </footer>
    );
  }
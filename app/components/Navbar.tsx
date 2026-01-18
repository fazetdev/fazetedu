export default function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-blue-600 font-bold text-xl">Fazet Edu</div>
              <span className="text-gray-500 text-sm ml-1">.ng</span>
            </div>
  
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">EduMarket</a>
              <a href="#" className="text-green-600 font-bold hover:text-green-700">
                ✨ TeacherEarn
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
  
            {/* CTA Button */}
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700">
              Join pilot
            </button>
          </div>
        </div>
      </nav>
    );
  }
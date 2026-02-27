import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Nigerian Flag Strip */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-white to-green-600"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#DC2626] bg-clip-text text-transparent">
                Fazet Edu
              </span>
              <span className="text-gray-400 text-sm ml-1 font-medium">.ng</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1 ml-4">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-xs text-gray-500">Nigeria's Education Platform</span>
            </div>
          </Link>

          {/* Tagline - Hidden on mobile */}
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-gray-900">
              Smart Solutions for Nigerian Schools
            </p>
            <p className="text-xs text-gray-500">
              Built by teachers, for Nigerian education
            </p>
          </div>

          {/* Mobile Menu Button (you can expand later) */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Bottom tagline for mobile */}
        <div className="md:hidden pb-3 text-center border-t border-gray-100 pt-2">
          <p className="text-xs text-gray-600">
            Smart Solutions for Nigerian Schools
          </p>
        </div>
      </div>
    </header>
  );
}

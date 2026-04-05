import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      
      {/* Simple CTA Section - No pricing */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#F59E0B]/10 to-[#DC2626]/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            See our packages and pricing. Free demo setup available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#DC2626] text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              View Pricing →
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-[#F59E0B] text-[#F59E0B] rounded-lg font-semibold hover:bg-[#F59E0B] hover:text-white transition"
            >
              Free Demo Setup
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
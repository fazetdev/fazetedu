import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <Hero />
      <Features />

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Why Nigerian Schools Choose Fazet Edu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Built specifically for Nigeria's educational challenges.
            Complete solution for administration, teaching, and teacher income generation.
          </p>

          <section className="py-12 px-4">
            <div className="container mx-auto text-center">
              <h3 className="text-2xl font-bold mb-6">Our Pilot Approach</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're starting with a focused pilot to test core workflows with 10-20 Nigerian schools.
                This allows us to refine based on real feedback before wider rollout.
              </p>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

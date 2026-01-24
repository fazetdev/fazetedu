export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-blue-600 font-medium text-sm">Get in Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let's Build the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Education Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're a school administrator, teacher, or education enthusiast, 
            we'd love to hear from you. Join us in transforming education in Northern Nigeria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-xl mr-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">For general inquiries and support</p>
                    <a 
                      href="mailto:mail@fazetedu.ng" 
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      mail@fazetedu.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-green-50 rounded-xl mr-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call/WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Speak directly with our team</p>
                    <a 
                      href="tel:07082921105" 
                      className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      0708 292 1105
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-purple-50 rounded-xl mr-4">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Pilot Program</h3>
                    <p className="text-gray-600">Priority access for schools in Kano and North-West Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white rounded-lg mr-3">
                  <span className="text-blue-500">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900">Response Time</h3>
              </div>
              <p className="text-gray-600">
                We typically respond within <strong>24 hours</strong> on weekdays. 
                For urgent pilot program inquiries, please mention "PILOT" in your message.
              </p>
            </div>

            {/* FAQ Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Common Questions</h3>
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-medium text-gray-900">Is Fazet Edu free?</p>
                  <p className="text-sm text-gray-600">We offer a pay-as-you-go model with a free trial for new schools.</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <p className="font-medium text-gray-900">Do you provide training?</p>
                  <p className="text-sm text-gray-600">Yes! We offer free onboarding and support for all pilot schools.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Which regions do you serve?</p>
                  <p className="text-sm text-gray-600">Currently focused on Kano and North-West Nigeria, with plans to expand.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Apply for Pilot Access
              </h2>
              <p className="text-gray-600">
                Join our exclusive pilot program and get early access to all features.
                Limited slots available for schools in Kano and North-West Nigeria.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="0700 000 0000"
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="school">
                  School Name *
                </label>
                <input
                  id="school"
                  type="text"
                  placeholder="e.g., Government Secondary School, Kano"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
                  School Location *
                </label>
                <select
                  id="location"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                >
                  <option value="">Select your location</option>
                  <option value="kano">Kano State</option>
                  <option value="kaduna">Kaduna State</option>
                  <option value="katsina">Katsina State</option>
                  <option value="jigawa">Jigawa State</option>
                  <option value="sokoto">Sokoto State</option>
                  <option value="zamfara">Zamfara State</option>
                  <option value="kebbi">Kebbi State</option>
                  <option value="other">Other (North-West)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Tell us about your school *
                </label>
                <textarea
                  id="message"
                  placeholder="e.g., We have 500 students, 20 teachers, currently using paper registers..."
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  rows={4}
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-5 w-5 text-blue-600 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-3 text-gray-600 text-sm">
                  I agree to receive updates about Fazet Edu's pilot program and services
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit Application
              </button>

              <p className="text-center text-sm text-gray-500">
                We'll contact you within 48 hours to discuss next steps
              </p>
            </form>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Already Transforming Schools
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { quote: "Saved us 10+ hours weekly on admin work", school: "Private School, Kano" },
              { quote: "Parents now get instant updates", school: "Public School, Kaduna" },
              { quote: "Teacher engagement increased by 40%", school: "Islamic School, Katsina" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-500 text-sm">{testimonial.school}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
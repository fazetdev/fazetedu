export default function ContactPage() {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
  
        <p className="mb-6">
          Interested in using Fazet Edu or joining our pilot program?  
          Reach out to us using the details below.
        </p>
  
        <div className="mb-8">
          <p className="mb-2">
            📧 <strong>Email:</strong> mail@fazetedu.ng
          </p>
          <p>
            📞 <strong>Phone:</strong> 07082921105
          </p>
        </div>
  
        <h2 className="text-xl font-semibold mb-4">Request Pilot Access</h2>
  
        {/* Placeholder form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
  
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded"
          />
  
          <input
            type="text"
            placeholder="School Name"
            className="w-full border p-3 rounded"
          />
  
          <textarea
            placeholder="Tell us a bit about your school or interest"
            className="w-full border p-3 rounded"
            rows={4}
          />
  
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold"
          >
            Submit Interest
          </button>
        </form>
  
        <p className="mt-4 text-sm text-gray-600">
          * This form is for pilot interest only. We will contact you manually.
        </p>
      </main>
    );
  }
  
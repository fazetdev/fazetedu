'use client';

import { useState } from 'react';

export default function TestimonialsPage() {
  const [showForm, setShowForm] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Hassan Ibrahim',
      school: 'Government Secondary School, Kano',
      role: 'School Administrator',
      message: 'The digital register has saved us hours of paperwork each week.',
      rating: 5,
      date: '2024-02-15'
    },
    {
      id: 2,
      name: 'Amina Suleiman',
      school: 'Private Islamic School, Kaduna',
      role: 'Teacher',
      message: 'Easy to use even with limited tech experience. Great for our school.',
      rating: 4,
      date: '2024-02-10'
    }
  ]);
  
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    school: '',
    role: '',
    message: '',
    rating: 5
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTestimonialObj = {
      id: testimonials.length + 1,
      ...newTestimonial,
      date: new Date().toISOString().split('T')[0]
    };
    
    setTestimonials([newTestimonialObj, ...testimonials]);
    
    setNewTestimonial({
      name: '',
      school: '',
      role: '',
      message: '',
      rating: 5
    });
    
    setShowForm(false);
    
    alert('Thank you for your testimonial! It has been added.');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header - CHANGED: orange to green */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#10B981] bg-opacity-10 border border-[#10B981] border-opacity-20 mb-6">
            <span className="text-[#10B981] font-medium text-sm">Real Stories</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What Schools Say About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669]">
              Fazet Edu
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear directly from school administrators and teachers using our platform 
            to transform education in Northern Nigeria.
          </p>
        </div>

        {/* Existing Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Testimonials ({testimonials.length})
          </h2>
          
          {testimonials.length === 0 ? (
            <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-200">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Testimonials Yet
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Be the first to share your experience with Fazet Edu!
              </p>
              <button
                onClick={() => setShowForm(true)}
                // CHANGED: orange gradient to green gradient
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
              >
                <span>Share Your Story</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-xl">
                          {i < testimonial.rating ? '⭐' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="ml-3 text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 italic text-lg mb-6">
                    "{testimonial.message}"
                  </p>
                  
                  {/* Author Info - CHANGED: orange gradient to green gradient */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#059669] bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl text-[#10B981] font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role} at {testimonial.school}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Testimonial Button (Fixed at bottom) - CHANGED: orange to green */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 active:scale-95"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Your Story</span>
          </button>
        </div>

        {/* Add Testimonial Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      // CHANGED: focus ring orange → green
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all"
                      value={newTestimonial.name}
                      onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="school">
                        School Name *
                      </label>
                      <input
                        id="school"
                        type="text"
                        placeholder="Your school"
                        // CHANGED: focus ring orange → green
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all"
                        value={newTestimonial.school}
                        onChange={(e) => setNewTestimonial({...newTestimonial, school: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="role">
                        Your Role *
                      </label>
                      <select
                        id="role"
                        // CHANGED: focus ring orange → green
                        className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all"
                        value={newTestimonial.role}
                        onChange={(e) => setNewTestimonial({...newTestimonial, role: e.target.value})}
                        required
                      >
                        <option value="">Select your role</option>
                        <option value="teacher">Teacher</option>
                        <option value="principal">Principal/Head Teacher</option>
                        <option value="administrator">School Administrator</option>
                        <option value="owner">School Owner</option>
                        <option value="parent">Parent</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
                      Rating *
                    </label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewTestimonial({...newTestimonial, rating: star})}
                          className="text-3xl focus:outline-none hover:scale-110 transition-transform"
                        >
                          {star <= newTestimonial.rating ? '⭐' : '☆'}
                        </button>
                      ))}
                      <span className="ml-3 text-gray-600">
                        {newTestimonial.rating} out of 5
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                      Your Experience *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your experience with Fazet Edu. What worked well? What could be improved?"
                      // CHANGED: focus ring orange → green
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] outline-none transition-all"
                      rows={4}
                      value={newTestimonial.message}
                      onChange={(e) => setNewTestimonial({...newTestimonial, message: e.target.value})}
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      // CHANGED: orange-600 → green
                      className="h-5 w-5 text-[#10B981] rounded"
                      required
                    />
                    <label htmlFor="consent" className="ml-3 text-gray-600 text-sm">
                      I give permission to publish this testimonial on the Fazet Edu website
                    </label>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      // CHANGED: orange gradient to green gradient
                      className="flex-1 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold py-3 rounded-xl hover:shadow-xl transition-all hover:scale-[1.02]"
                    >
                      Submit Your Story
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
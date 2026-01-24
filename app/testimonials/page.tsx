'use client';

import { useState } from 'react';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    school: '',
    role: '',
    message: '',
    rating: 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('New testimonial:', newTestimonial);
    
    // For now, just show a success message
    alert('Thank you for your testimonial! It will be reviewed before publishing.');
    
    // Reset form
    setNewTestimonial({
      name: '',
      school: '',
      role: '',
      message: '',
      rating: 5
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-6">
            <span className="text-orange-600 font-medium text-sm">Real Stories</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Voices from
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
              Northern Nigeria's Schools
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear directly from school administrators, teachers, and staff 
            who are using Fazet Edu to transform their schools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leave a Testimonial Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Share Your Experience
            </h2>
            
            <p className="text-gray-600 mb-8">
              We value honest feedback from our users. Share your story to help other 
              schools understand how Fazet Edu can work for them.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
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
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
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
                    className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
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
                      className="text-2xl focus:outline-none"
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
                  className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  rows={5}
                  value={newTestimonial.message}
                  onChange={(e) => setNewTestimonial({...newTestimonial, message: e.target.value})}
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-5 w-5 text-orange-600 rounded"
                  required
                />
                <label htmlFor="consent" className="ml-3 text-gray-600 text-sm">
                  I give permission to publish this testimonial on the Fazet Edu website
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit Your Story
              </button>
            </form>
          </div>

          {/* Testimonials Display */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What Schools Are Saying
            </h2>
            
            {testimonials.length === 0 ? (
              <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-200">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Be the First to Share
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  As we launch our pilot program, we're collecting real stories 
                  from schools using Fazet Edu. Your testimonial could be here!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Testimonials would be displayed here */}
              </div>
            )}

            {/* Features that enable testimonials */}
            <div className="mt-12 space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-3">Why Share Your Story?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Help other schools make informed decisions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Contribute to improving education in Nigeria
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Get featured as an early adopter
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <h3 className="font-bold text-gray-900 mb-3">How Testimonials Work</h3>
                <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                  <li>Submit your honest review</li>
                  <li>Our team verifies and approves it</li>
                  <li>Your story gets published (with your consent)</li>
                  <li>You help inspire other schools to join</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">📋 Privacy & Guidelines</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• We only publish testimonials from verified users</li>
            <li>• You can request removal of your testimonial at any time</li>
            <li>• We never share your contact information publicly</li>
            <li>• Testimonials are reviewed for authenticity before publishing</li>
          </ul>
        </div>

      </div>
    </main>
  );
}
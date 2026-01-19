export default function TestimonialsPage() {
    const testimonials = [
      {
        name: 'Mallam Sadiq Musa',
        role: 'School Administrator, Kano',
        quote:
          'Before Fazet Edu, we relied heavily on paper records and WhatsApp messages. Now our student records and reports are properly organized.',
      },
      {
        name: 'Aisha Abdullahi',
        role: 'Primary School Teacher, Katsina',
        quote:
          'TeacherEarn has opened a new opportunity for teachers like me to earn extra income through tutoring without affecting our school work.',
      },
      {
        name: 'Alhaji Umar Bello',
        role: 'Proprietor, Private School, Zaria',
        quote:
          'Fazet Edu understands how schools in the North operate. The system is simple, affordable, and practical for our environment.',
      },
    ]
  
    return (
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-center mb-4">
          Trusted by Schools & Teachers in Northern Nigeria
        </h1>
  
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Feedback from educators and school owners across Kano and the
          North-West using Fazet Edu during early adoption.
        </p>
  
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-700 mb-4">“{item.quote}”</p>
  
              <div className="mt-4 border-t pt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    )
  }
  
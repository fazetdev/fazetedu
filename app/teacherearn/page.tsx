export default function TeacherEarnPage() {
    const benefits = [
      {
        title: 'Tutoring Opportunities',
        description:
          'Teachers can offer private or group tutoring sessions to students in their community, earning extra income without leaving the classroom.',
      },
      {
        title: 'Sell Educational Resources',
        description:
          'Upload lesson plans, worksheets, and guides to EduMarket and earn from downloads and usage by other schools.',
      },
      {
        title: 'Flexible & Mobile-Friendly',
        description:
          'Manage your teaching and earnings using mobile devices. Designed for low-tech environments in Kano and the North-West.',
      },
      {
        title: 'Pilot-Friendly & Risk-Free',
        description:
          'Join the pilot program to test TeacherEarn with no upfront fees, and get support from Fazet Edu to start earning quickly.',
      },
    ]
  
    return (
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">TeacherEarn</h1>
  
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Fazet Edu helps teachers in Kano and the North-West earn extra income while continuing their regular school work.  
          Our tools are simple, mobile-friendly, and built around the realities of Northern schools.
        </p>
  
        <div className="grid gap-12 md:grid-cols-2">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
  
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700">
            Join Pilot Program
          </button>
        </div>
  
        <p className="text-gray-500 text-sm text-center mt-4">
          * Pilot program available for select schools in Kano and the North-West.
        </p>
      </main>
    )
  }
  
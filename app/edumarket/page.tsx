export default function EduMarketPage() {
    const resources = [
      {
        title: 'Curriculum-Aligned Lesson Plans',
        description:
          'Ready-to-use lesson plans that follow the Nigerian curriculum, designed for primary and secondary schools in Kano and the North-West.',
      },
      {
        title: 'Digital Worksheets & Exercises',
        description:
          'Interactive exercises for students, helping teachers track progress and reinforce learning in low-tech classrooms.',
      },
      {
        title: 'Exam & Test Materials',
        description:
          'Customizable exams and quizzes for different grade levels, making it easier to evaluate student performance.',
      },
      {
        title: 'Teaching Aids & Guides',
        description:
          'Guides for teachers to improve classroom engagement and deliver effective lessons even with limited resources.',
      },
    ]
  
    return (
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">EduMarket</h1>
  
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Access curriculum-aligned resources and teaching materials designed for schools in Kano and the North-West.  
          EduMarket helps teachers save time and deliver better lessons.
        </p>
  
        <div className="grid gap-12 md:grid-cols-2">
          {resources.map((res, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold mb-2">{res.title}</h2>
              <p className="text-gray-700">{res.description}</p>
  
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </main>
    )
  }
  
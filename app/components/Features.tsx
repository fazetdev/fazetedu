export default function Features() {
    const features = [
      {
        title: "Smart School System (Core Product)",
        description: "Complete administrative control for Nigerian schools",
        icon: "🏫",
        color: "bg-blue-100"
      },
      {
        title: "EduMarket Resources",
        description: "Curriculum-aligned materials for Nigerian syllabus",
        icon: "📚",
        color: "bg-green-100"
      },
      {
        title: "TeacherEarn Platform",
        description: "Teachers earn extra income through tutoring & resources",
        icon: "💰",
        color: "bg-yellow-100"
      },
      {
        title: "Pay-as-you-use",
        description: "Only pay for what you need, no large upfront costs",
        icon: "💳",
        color: "bg-purple-100"
      },
      {
        title: "Mobile First",
        description: "Works perfectly on all devices, optimized for Nigeria",
        icon: "📱",
        color: "bg-red-100"
      },
      {
        title: "Nigerian Curriculum",
        description: "All resources aligned with Nigerian educational system",
        icon: "🎯",
        color: "bg-indigo-100"
      }
    ];
  
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything Nigerian Schools Need
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`${feature.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
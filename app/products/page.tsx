export default function ProductsPage() {
    const smartSchoolModules = [
      {
        title: 'Digital Register',
        description:
          'Track student attendance, manage grades, and get analytics for better student performance.',
        features: [
          'Attendance Tracking',
          'Grade Management',
          'Analytics & Reports',
        ],
      },
      {
        title: 'Report Generator',
        description:
          'Create professional report cards and transcripts with customizable templates and automated calculations.',
        features: [
          'Customizable Templates',
          'Automatic Calculations',
          'Multiple Report Formats',
        ],
      },
      {
        title: 'Fee Manager',
        description:
          'Manage student payments, track transactions, and send reminders with ease.',
        features: [
          'Transaction Tracking',
          'Automatic Reminders',
          'Flexible Payment Options',
        ],
      },
      {
        title: 'Lesson Planner',
        description:
          'Plan lessons, organize teaching schedules, and manage resources efficiently.',
        features: [
          'Daily/Weekly Planner',
          'Resource Organization',
          'Easy Scheduling',
        ],
      },
      {
        title: 'Parent Hub',
        description:
          'Communicate with parents, send SMS updates, and provide key information about their children.',
        features: [
          'SMS Notifications',
          'Parent Communication',
          'Student Progress Updates',
        ],
      },
    ];
  
    return (
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Smart School System</h1>
  
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Complete school management modules designed for Northern Nigerian schools.  
          Streamline administration, improve teaching, and enhance student tracking.
        </p>
  
        <div className="grid gap-12 md:grid-cols-2">
          {smartSchoolModules.map((module, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold mb-2">{module.title}</h2>
              <p className="text-gray-700 mb-4">{module.description}</p>
  
              <ul className="list-disc list-inside text-gray-600">
                {module.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
  
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  }
  
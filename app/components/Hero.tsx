export default function Hero() {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-green-50 py-16 px-4">
        <div className="container mx-auto text-center">
          {/* PROBLEM STATEMENT */}
          <p className="text-red-600 font-semibold mb-4">
            ⚠️ Most Nigerian schools still manage records on paper, WhatsApp, and Excel.
          </p>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Transform Nigerian Education with Smart Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Fazet Edutech streamlines school operations, provides curriculum-aligned resources from EduMarket,
            and enables teachers to earn extra income through TeacherEarn — all on a pay-as-you-use basis.
          </p>
          
          {/* TEACHEREARN HIGHLIGHT */}
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 max-w-2xl mx-auto">
            <p className="font-bold text-gray-800">
              💰 <span className="text-green-600">TeacherEarn</span>: Nigerian teachers now earn extra income by tutoring or selling educational resources.
            </p>
          </div>
          
          <div className="space-x-4">
            {/* PILOT CTA */}
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700">
              Join Our Pilot
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-700">
              Explore Pilot Features
            </button>
          </div>
        </div>
      </div>
    );
  }
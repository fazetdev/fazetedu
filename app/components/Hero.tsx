export default function Hero() {
  return (
    // ONLY CHANGE: from blue/green gradient TO green gradient
    <div className="bg-gradient-to-r from-[#10B981] to-[#059669] py-16 px-4">
      <div className="container mx-auto text-center">
        {/* PROBLEM STATEMENT - KEPT RED (warning color is fine) */}
        <p className="text-red-600 font-semibold mb-4">
          ⚠️ Most Nigerian schools still manage records on paper, WhatsApp, and Excel.
        </p>
        
        {/* Text color changed to white for contrast on green background */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transform Nigerian Education with Smart Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
          Fazet Edutech streamlines school operations, provides curriculum-aligned resources from EduMarket,
        </p>
        
        {/* TEACHEREARN HIGHLIGHT - Updated to use brand green */}
        <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-4 mb-8 max-w-2xl mx-auto">
          <p className="font-bold text-white">
            💰 <span className="text-white font-extrabold">TeacherEarn</span>: Nigerian teachers now earn extra income by tutoring or selling educational resources.
          </p>
          and enables teachers to earn extra income through TeacherEarn — all on a pay-as-you-use basis.
        </div>
        
        <div className="space-x-4">
          {/* FIRST BUTTON - Brand green (darker shade) */}
          <button className="bg-[#059669] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#047857]">
            Join Our Pilot
          </button>
          
          {/* SECOND BUTTON - White with green text */}
          <button className="bg-white text-[#10B981] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 border-2 border-transparent">
            Explore Pilot Features
          </button>
        </div>
      </div>
    </div>
  );
}
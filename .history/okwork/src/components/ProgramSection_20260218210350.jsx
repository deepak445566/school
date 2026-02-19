import React from 'react';
import program1 from '/public/images/book.png';
import program2 from '/public/images/phone.png';
import program3 from '/public/images/boy.png';
import program4 from '/public/images/camical-book.png';


const ProgramSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-[#F15F25] text-lg font-semibold uppercase tracking-wider mb-2">Our Programs</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Learning Paths for Every Age</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">Discover the perfect program for your child's developmental stage</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-10">
        
        {[ 
          {
            img: program1,
            title: "Toddler Program",
            age: "(Play Way Stage)",
            bg: "bg-[#E7E4C7]",
            desc: "Play-based learning, sensory development, social interaction and early communication skills.",
            icon: "🧸",
            color: "from-[#E7E4C7] to-[#d6d3b5]"
          },
          {
            img: program2,
            title: "Preschool",
            age: "(Nursery Level)",
            bg: "bg-[#F1D2D7]",
            desc: "Hands-on learning, activity-based teaching, language and motor skill development.",
            icon: "🎨",
            color: "from-[#F1D2D7] to-[#e0c0c5]"
          },
          {
            img: program3,
            title: "Kindergarten",
            age: "(KG Level)",
            bg: "bg-[#D7DBF3]",
            desc: "Montessori & Waldorf methods focused on creativity, discipline and foundational education.",
            icon: "📚",
            color: "from-[#D7DBF3] to-[#c5c9e1]"
          },
          {
            img: program4,
            title: "Primary Program",
            age: "(Class 1–5)",
            bg: "bg-[#CFE7E5]",
            desc: "Inquiry-based learning, project work, demonstrations and classroom readiness.",
            icon: "🔬",
            color: "from-[#CFE7E5] to-[#bdd5d3]"
          }
        ].map((card, i) => (
          
          <div
            key={i}
            className={`${card.bg} rounded-3xl p-6 md:p-8 text-center shadow-lg relative overflow-hidden group transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-2xl cursor-pointer`}
          >
            {/* Background Patterns */}
           
            
            {/* Gradient Overlay on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            
            {/* Decorative Circle */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            {/* Icon Badge */}
            <div className="absolute top-3 left-3 text-2xl opacity-30 group-hover:opacity-60 transition-opacity">
              {card.icon}
            </div>
            
            {/* Image with Animation */}
            <div className="relative z-10 mb-4 transform group-hover:scale-110 transition-transform duration-500">
              <div className="w-20 h-20 mx-auto bg-white/30 rounded-full p-3 backdrop-blur-sm">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 relative z-10 group-hover:text-gray-900 transition-colors">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-3 relative z-10 font-medium">
              {card.age}
            </p>
            
            {/* Description with Animation */}
            <p className="text-gray-600 text-sm md:text-base relative z-10 leading-relaxed group-hover:text-gray-700 transition-colors">
              {card.desc}
            </p>
            
            {/* Button with Animation */}
            <button className="mt-6 text-[#F15F25] font-semibold relative z-10 inline-flex items-center gap-2 group/btn hover:gap-3 transition-all duration-300">
              <span>Learn More</span>
              <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
            
            {/* Bottom Highlight on Hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F15F25] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-[#F15F25] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 group">
          <span>View All Programs</span>
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

export default ProgramSection;
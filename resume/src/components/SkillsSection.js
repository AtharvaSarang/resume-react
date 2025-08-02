import React from 'react';

function SkillsSection() {
  const skills = {
    "Programming Languages": ["Python", "MATLAB"],
    "Software/Tools": ["Fusion360", "Tableau", "Excel", "Numpy", "Pandas"],
    "Technical Concepts": [
      "Embedded Systems", "Data Acquisition", "Real-time Applications",
      "Data Analytics", "Generative AI", "VLSI Design", "Automation",
      "GUI Development", "Graphic Designing", "React (Basic)", "OOP Concepts (Proficient)",
      "Database Systems", "HTML5", "Node.js"
    ],
    "Soft Skills": ["Leadership", "Management", "Problem Solving", "Communication", "Teamwork"]
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2 inline-block">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">
              {category}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

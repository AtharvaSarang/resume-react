import React from 'react';

function ExperienceSection() {
  const experiences = [
    {
      title: "Editing Coordinator",
      company: "ISA-VESIT",
      duration: "2023-2025",
      description: [
        "Coordinated content creation for technical publications and social media.",
        "Served as a key designer for 'ENVISAGE'25' magazine, overseeing its visual layout and content presentation."
      ]
    },
    {
      title: "Aesthetic Head",
      company: "Cultural Council, VESIT",
      duration: "2023-2025",
      description: [
        "As Aesthetic Head, managed the decoration, stage setup, and budget for college events attended by over 3000 students."
      ]
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2 inline-block">Work Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-400 transition-transform duration-200 hover:scale-[1.01]">
            <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-blue-600 text-lg font-medium mb-2">{exp.company} <span className="text-gray-500 text-base font-normal">({exp.duration})</span></p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

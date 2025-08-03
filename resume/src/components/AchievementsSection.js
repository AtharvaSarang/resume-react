import React from 'react';

function AchievementsSection() {
  const achievements = [
    {
      category: "Professional Development",
      items: [
        {
          title: "Deloitte Australia Data Analytics Virtual Experience",
          details: "Completed a data analytics simulation focused on forensic technology and business insights. Built a data dashboard in Tableau and used Excel to classify datasets and derive actionable conclusions.",
          date: "Forage - July 2025"
        },
        {
          title: "Tata Group Data Analytics Virtual Experience",
          details: "Applied GenAI tools for EDA, risk identification, and structured predictive modeling in a financial services context. Proposed an AI-driven strategy for customer delinquency prediction, integrating ethical and regulatory AI principles.",
          date: "Forage - July 2025"
        },
        {
          title: "Internship at VESIT, Research and Development",
          details: "May 2024 - July 2024" // Assuming this is the detail for the internship
        },
        {
          title: "VLSI Workshop",
          details: "Designed an OTA - Operational Transconductance Amplifier"
        }
      ]
    },
    {
      category: "Awards & Recognition",
      items: [
        {
          title: "Secured 3rd Rank in AEES National Art Competition."
        },
        {
          title: "Represented school at DSO Level in Badminton."
        }
      ]
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2 inline-block">Achievements & Professional Development</h2>

      <div className="space-y-8">
        {achievements.map((category, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.01]">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">{category.category}</h3>
            <ul className="space-y-4">
              {category.items.map((item, i) => (
                <li key={i} className="border-l-4 border-blue-300 pl-4">
                  <p className="text-xl font-medium text-gray-800">{item.title}</p>
                  {item.details && <p className="text-gray-700 mt-1">{item.details}</p>}
                  {item.date && <p className="text-gray-500 text-sm mt-1">{item.date}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;

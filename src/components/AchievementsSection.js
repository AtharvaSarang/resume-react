import React from "react";

function AchievementsSection() {
  const achievements = [
    {
      category: "Professional Development",
      items: [
        {
          title: "Deloitte Australia Data Analytics Virtual Experience",
          details:
            "Completed a data analytics simulation focused on forensic technology and business insights. Built a data dashboard in Tableau and used Excel to classify datasets and derive actionable conclusions.",
          date: "Forage - July 2025",
          // PASTE THE ACTUAL DIRECT LINK FOR DELOITTE PDF HERE
          link: "https://raw.githubusercontent.com/AtharvaSarang/resume-react/main/public/certificates/Deloit%20certificate.pdf", // <--- REPLACE THIS WITH YOUR COPIED LINK
        },
        {
          title: "Tata Group Data Analytics Virtual Experience",
          details:
            "Applied GenAI tools for EDA, risk identification, and structured predictive modeling in a financial services context. Proposed an AI-driven strategy for customer delinquency prediction, integrating ethical and regulatory AI principles.",
          date: "Forage - July 2025",
          // PASTE THE ACTUAL DIRECT LINK FOR TATA PDF HERE
          link: "https://raw.githubusercontent.com/AtharvaSarang/resume-react/main/public/certificates/TATA%20certificate%20forage.pdf", // <--- REPLACE THIS WITH YOUR COPIED LINK
        },
        {
          title: "Internship at VESIT, Research and Development",
          details: "May 2024 - July 2024",
          // No link for internship, so 'link' property is omitted
        },
        {
          title: "VLSI Workshop",
          details: "Designed an OTA - Operational Transconductance Amplifier",
          // If you have a PDF for VLSI, get its raw link and paste here. Otherwise, omit 'link'.
          // link: "https://raw.githubusercontent.com/AtharvaSarang/resume-react/main/public/certificates/vlsi_workshop.pdf" // Example: Replace with your actual copied link
        },
      ],
    },
    {
      category: "Awards & Recognition",
      items: [
        {
          title: "Secured 3rd Rank in AEES National Art Competition.",
          // No link for award, so 'link' property is omitted
        },
        {
          title: "Represented school at DSO Level in Badminton.",
          // No link for recognition, so 'link' property is omitted
        },
      ],
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        Achievements & Professional Development
      </h2>

      <div className="space-y-8">
        {achievements.map((category, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.01]"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2">
              {category.category}
            </h3>
            <ul className="space-y-4">
              {category.items.map((item, i) => (
                <li key={i} className="border-l-4 border-blue-300 pl-4">
                  {/* Conditionally render as a link if 'item.link' exists */}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-medium text-blue-700 hover:underline"
                    >
                      {item.title}
                      <svg
                        className="inline-block w-4 h-4 ml-2 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                  ) : (
                    <p className="text-xl font-medium text-gray-800">
                      {item.title}
                    </p>
                  )}
                  {item.details && (
                    <p className="text-gray-700 mt-1">{item.details}</p>
                  )}
                  {item.date && (
                    <p className="text-gray-500 text-sm mt-1">{item.date}</p>
                  )}
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

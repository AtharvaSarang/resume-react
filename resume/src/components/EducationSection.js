import React from "react";

function EducationSection() {
  const education = [
    {
      degree: "B.E. in Electronics and Telecommunication",
      institution:
        "Vivekanand Education Society's Institute of Technology (VESIT), Mumbai",
      duration: "2022 - Expected May 2026",
      details: ["Avg. CGPA: 8.77 (Up to VI Semester)"],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board", // Assuming a board, clarify if needed
      duration: "2021-2022",
      details: ["78.8%"],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board", // Assuming a board, clarify if needed
      duration: "2019-2020",
      details: ["93.60%"],
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2 inline-block">
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md border-r-4 border-blue-400 transition-transform duration-200 hover:scale-[1.01]"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {edu.degree}
            </h3>
            <p className="text-blue-600 text-lg font-medium mb-2">
              {edu.institution}{" "}
              <span className="text-gray-500 text-base font-normal">
                ({edu.duration})
              </span>
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;

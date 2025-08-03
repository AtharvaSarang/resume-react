import React from 'react';

function ProjectsSection() {
  const projects = [
    {
      title: "Digital Oscilloscope",
      duration: "July 2023 - March 2024",
      description: [
        "Developed a cost-effective oscilloscope for real-time signal visualization and measurement.",
        "Implemented Python code for data acquisition, processing, and waveform display."
      ],
      technologies: ["Python", "Data Acquisition", "Signal Processing"]
    },
    {
      title: "Piper - Pipe Inspection and Profile Evaluation Robot",
      duration: "May 2024 - April 2025",
      description: [
        "Designed and developed PIPER, an autonomous pipe inspection rover featuring adjustable diameter and Kalman-filtered navigation for enhanced precision in confined spaces.",
        "Utilized Fusion 360 for the mechanical design and prototyping of the rover's components.",
        "Implemented image processing techniques for corrosion detection inside pipes and generated heatmaps for visual anomaly identification."
      ],
      technologies: ["Fusion 360", "Image Processing", "Kalman Filter", "Robotics"]
    },
    {
      title: "Skin Cancer Detection using ML",
      duration: "May 2025 - Present",
      description: [
        "Developing a machine learning-based system for early and accurate classification of skin lesions as benign or malignant, addressing low awareness and diagnostic delays.",
        "Implementing a CNN model (e.g., ResNet50/Efficient NetB0) with Grad-CAM for explainable predictions and integrating patient metadata for lesion tracking.",
        "Designing for low-cost edge deployment on Raspberry Pi/ESP32, enabling real-time alerts (buzzer/LED) and offline operation for clinical and rural applications."
      ],
      technologies: ["Python", "TensorFlow Lite", "OpenCV", "NumPy", "Pandas", "Streamlit", "Fast API", "ESP32", "Raspberry Pi", "CNN", "Grad-CAM", "Image Processing", "Machine Learning"]
    }
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2 inline-block">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md border-t-4 border-blue-400 transition-transform duration-200 hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-blue-600 text-lg font-medium mb-4">{project.duration}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

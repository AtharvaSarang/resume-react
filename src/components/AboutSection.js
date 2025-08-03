import React from 'react';

function AboutSection() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2 inline-block">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Disruptor in the making: Fourth-year Electronics & Telecommunication Engineer with a proven track record of engineering innovative
        solutions and leading high-impact initiatives. Master of embedded systems, image processing (corrosion detection, heatmaps), and
        mechanical design (Fusion 360), coupled with a knack for managing large-scale events and driving engagement. Seeking to leverage a
        unique blend of technical expertise and strategic leadership to accelerate technological advancements and operational excellence.
      </p>
    </section>
  );
}

export default AboutSection;
import React from 'react';

function HeroSection() {
  // Replace with your actual image URL or import it if stored locally
  const profileImageUrl = "https://placehold.co/150x150/ADD8E6/000000?text=AS"; // Placeholder for Atharva Sarang's image

  return (
    <section className="text-center py-12 px-4 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="flex flex-col items-center justify-center">
        {/* Profile Image */}
        <img
          src={profileImageUrl}
          alt="Atharva Sarang"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-400 shadow-xl mb-6 transition-transform duration-300 hover:rotate-3"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/ADD8E6/000000?text=AS"; }} // Fallback for image
        />

        {/* Name and Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-2 leading-tight">
          ATHARVA SARANG
        </h1>
        <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
          B.E. Electronics and Telecommunication
        </p>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg text-gray-700">
          <a href="tel:7208621294" className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>7208621294</span>
          </a>
          <a href="mailto:atharvasarang1821@gmail.com" className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>atharvasarang1821@gmail.com</span>
          </a>
          {/* LinkedIn Icon - Using a simple 'in' for now, replace with a proper SVG if desired */}
          <a href="https://www.linkedin.com/in/atharva-sarang" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>Atharva Sarang (LinkedIn)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

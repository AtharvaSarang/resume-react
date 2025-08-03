import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full max-w-6xl text-center py-8 mt-16 text-gray-600 border-t border-gray-200">
      <p>&copy; {currentYear} Atharva Sarang. All rights reserved.</p>
      <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
    </footer>
  );
}

export default Footer;

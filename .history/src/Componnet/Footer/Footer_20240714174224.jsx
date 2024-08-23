import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-4">
          <img className="h-8 mx-auto" src="/path/to/logo.png" alt="Logo" />
        </div>
        
        {/* Menu */}
        <nav className=" space-y-2">
          <a href="/" className="block text-white hover:text-gray-300">Home</a>
          <a href="/our-story" className="block text-white hover:text-gray-300">Our Story</a>
          <a href="/projects" className="block text-white hover:text-gray-300">Projects</a>
          <a href="/pricing" className="block text-white hover:text-gray-300">Pricing</a>
          <a href="/contact" className="block text-white hover:text-gray-300">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

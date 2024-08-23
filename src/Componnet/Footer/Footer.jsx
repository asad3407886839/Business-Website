import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <hr className="border-black border-1 my-4" />
      <footer className="bg-white text-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          
          {/* Navigation and Social Media Icons */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full">
            {/* Navigation */}
            <nav className="flex space-x-6 my-4 ml-12 flex-1 justify-center sm:justify-start">
              <a href="/" className="text-black hover:text-yellow-500 text-lg">Home</a>
              <a href="/projects" className="text-black hover:text-yellow-500 text-lg">Projects</a>
              <a href="/pricing" className="text-black hover:text-yellow-500 text-lg">Pricing</a>
              <a href="/our-story" className="text-black hover:text-yellow-500 text-lg">Our Story</a>
              <a href="/contact" className="text-black hover:text-yellow-500 text-lg">Contact Us</a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="https://facebook.com" className="text-black text-lg hover:text-yellow-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-black text-lg hover:text-yellow-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-black text-lg hover:text-yellow-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-black py-4 text-whitey-900 mr-8 m-2 text-lg hover:text-yellow-500">
            <a href="/">© 2024 DK Group. All rights reserved.</a>
          </div>
        </div>
        {/* Join Section */} {/*  <div className="text-center text-black bg-bg-inherit m-2 rounded-xl pr-12 border-2 bg-white p-4 border-gray-900 flex-1"> <h1 className="text-black text-1xl font-bold">JOIN OUR INVESTOR TODAY</h1> <p>DK Group's insightful strategies and commitment<br/> to client success have transformed my portfolio <br/> earning both trust and impressive returns.</p> <button className="bg-yellow-500 px-4 py-2 rounded-md mt-4 text-black hover:bg-white"> <a href="/">Join Now</a> </button> </div> */}
      </footer>
    </>
  );
}

export default Footer;

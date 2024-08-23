import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="text-black-600 body-font">
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-5 md:px-32 py-4 flex flex-wrap items-center justify-between">
                    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img
                            src="https://dkgroup.pk/wp-content/uploads/2024/03/dk-group-2-1.png" // Replace with your logo path
                            alt="Logo"
                            className="w-16 h-16"
                        />
                    </a>

                    <div className="md:hidden ml-4">
                        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                )}
                            </svg>
                        </button>
                    </div>

                    <nav className={`md:flex md:flex-col md:w-full md:items-start md:mt-4 md:border-t md:border-gray-200 md:pt-4 md:${isOpen ? 'block' : 'hidden'}`}>
                        <a href="/" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Home</a>
                        <a href="/second" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Our Story</a>
                        <a href="/third" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Pricing</a>
                        <a href="/fourth" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Project</a>
                        <a href="/fifth" className="hover:text-gray-900 font-bold block md:inline-block mt-4 md:mt-0">Contact Us</a>
                        <div className="mt-4 md:hidden">
                            <a href="/Login" className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none bg-yellow-500 hover:text-gray-900 rounded-xl text-base font-bold">
                                Login
                            </a>
                            <a href="/SignUp" className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none bg-yellow-500 hover:text-gray-900 rounded-xl text-base font-bold mt-2">
                                Sign Up
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    < >
           <nav className="bg-white z-10 fixed top-0 w-full shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={`/`}>
        <div className="text-2xl font-bold text-red-600 flex items-center">
            <img
              src="https://benefitzintl.com/wp-content/uploads/2024/01/benifitslogo.png"
              alt="Logo"
              className="w-full h-16 mr-4"
            />
          </div>
        </Link>

          <div className="hidden md:flex text-sm  items-center space-x-3">
            <div className="flex items-center gap-2 border-r pr-2">
              <FaPhoneAlt className="text-lg mr-2" />
              <div className="flex flex-col">
              <a href="tel:+6235846558" className="text-blue-500"> 6235846558</a>
              <a href="tel:+8089319608" className="text-blue-700">8089319608</a>
              </div>
       

            </div>
            <div className="flex border-r pr-2 items-center">
              <FaWhatsapp className="text-green-500 text-lg mr-2" />
              <a href="https://wa.me/6235846558" target="_blank" rel="noopener noreferrer" className="text-green-500">WhatsApp</a>
            </div>
            <div className="flex border-r pr-2 items-center">
              <Link to={'/contact'}>
              Contact Us
              </Link>
            </div>
            <div className="flex  items-center">
            <Link to={'/about'}>
              About Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50`}
      >
             <button
          type="button"
          className="absolute top-4 right-4 text-gray-800"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center">
              <div className="mb-4">
            <img
              src="https://benefitzintl.com/wp-content/uploads/2024/01/benifitslogo.png"
              alt="Logo"
              className="w-full h-16"
            />
          </div>

          <Link to={`/study`} className="w-full">
          <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-emerald-400 hover:border-emerald-500 mb-2">
              Study Visa
          </div>
          </Link>
     <Link to={`/visiting-visa`} className="w-full">
     <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-violet-400 hover:border-violet-500 mb-2">
               Visa
          </div>
     </Link>
         <Link to={`/job`} className="w-full">
         <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-pink-400 hover:border-pink-500 mb-2">
              Job Consaltancy
          </div>
         </Link>
          <div className="group text-center w-full flex items-center justify-center h-12 border hover:bg-yellow-400 hover:border-yellow-500 mb-2">
            <Link to={'/immigration'}>
            Immigration

            </Link>
          </div>
         
          <div className="flex items-center pr-4">
            <FaPhoneAlt className="text-lg mr-2" />
            <a href="tel:+6235846558" className="text-red-500">Call: 6235846558</a>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="text-green-500 text-lg mr-2" />
            <a href="https://wa.me/6235846558" target="_blank" rel="noopener noreferrer" className="text-green-500">WhatsApp</a>
          </div>
        </div>
      </div>
           <nav className="bg-white fixed top-24 z-10 right-0 w-full border-t hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-end">
          <Link to={`/`}>
          <div className="group text-center hover:text-white w-32 flex items-center justify-center h-12 border hover:bg-green-400 hover:border-emerald-500">
              Home
          </div>
          </Link>
       <Link to={`/study`}>
       <div className="group text-center w-32 flex items-center justify-center h-12 border hover:bg-emerald-400 hover:text-white hover:border-emerald-500">
              Study Visa
          </div>
       </Link>
         <Link to={`/visiting-visa`}>
         <div className="group text-center hover:text-white w-32 flex items-center justify-center h-12 border hover:bg-violet-400 hover:border-violet-500">
             Visa
          </div>
         </Link>
        <Link to={`/job`}>
        <div className="group text-center w-32 hover:text-white flex items-center justify-center h-12 border hover:bg-pink-400 hover:border-pink-500">
              Job Consaltancy
          </div>
        </Link>
          <div className="group text-center hover:text-white w-32 flex items-center justify-center h-12 border hover:bg-yellow-400 hover:border-yellow-500">
          <Link to={'/immigration'}>
            Immigration

            </Link>        
              </div>
         
        </div>
      </nav>
    </>
  );
};

export default Header;


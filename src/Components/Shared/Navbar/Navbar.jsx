import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';
import ActiveLink from '../../../Routes/ActiveLink/ActiveLink';
import logo from '../../../assets/logo/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src={logo} alt="Logo" />
          </div>
          <div className="-mr-2 flex md:hidden">
            <span
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {
                isMenuOpen ? <FaTimes></FaTimes>:<FaBars></FaBars>
              }
            </span>
          </div>
          <div className="hidden md:block ">
            <div className="ml-auto flex items-center gap-3 font-bold">
              <ActiveLink to='/' className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </ActiveLink>
              <ActiveLink to='/alltoys'  className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                All Toys
              </ActiveLink>
              <ActiveLink to='/mytoys' className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                My Toys
              </ActiveLink>
              <ActiveLink to='/addtoy' className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Add a Toy
              </ActiveLink>
              <ActiveLink to='/blog' className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
               blog
              </ActiveLink>
              <ActiveLink to='/register' className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
               Register
              </ActiveLink>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive menu */}
      {isMenuOpen && (
        <div className="md:hidden transition duration-300 ease-in-out">
          <div className="flex gap-3 font-bold items-center flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 text-left">
            <ActiveLink to='/' className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </ActiveLink>
            <ActiveLink to='/alltoys' className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              All Toys
            </ActiveLink>
            <ActiveLink to='/mytoys' href="#" className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              My Toys
            </ActiveLink>
            <ActiveLink to='/addtoy' href="#" className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Add a toy
            </ActiveLink>
            <ActiveLink to='/blog' href="#" className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              blog
            </ActiveLink>
            <ActiveLink to='/register' href="#" className=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              register
            </ActiveLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

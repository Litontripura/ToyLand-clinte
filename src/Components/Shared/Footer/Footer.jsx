import React from 'react';
import logo from '../../../assets/logo/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mb-8">
        <div className="w-full md:w-1/4">
          <img className="w-12 h-12 mb-4" src={logo} alt="Logo" />
          <p className="text-white mb-4 font-bold">with us you are never stranger</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-white font-bold mb-2">Contact</h3>
          <p className="text-white">Email: toyland@example.com</p>
          <p className="text-white">Phone: 01885357056</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-white font-bold mb-2">Social Media</h3>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-white hover:text-white">Facebook</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-white">Twitter</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-white">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-white font-bold mb-2">Address</h3>
          <p className="text-white">Bandarban, chittagong Bangladess</p>
          <p className="text-white">Country: <span className='text-white'>Bangladesh</span></p>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-4">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} <span className='text-white'>Toy Land</span> All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;

'use client';

import { useState } from 'react';
import logo from '@/app/assets/MKAutoLogoWhite.png';

import Image from 'next/image';
import NjuskaloButton from '@/components/navigation/njuskalo_button';

function Navbar() {
  // State for the mobile menu toggle
  const [isActive, setIsActive] = useState(false);

  // Toggle the mobile menu
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="bg-black bg-opacity-20 backdrop-blur-sm p-3 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Hamburger Menu for mobile */}
        <div className="md:hidden" onClick={toggleActiveClass}>
          <div
            className={`space-y-1 cursor-pointer ${
              isActive ? 'transform transition-transform rotate-45' : ''
            }`}
          >
            <span
              className={`block w-6 h-1 bg-white transition-transform duration-300 ${
                isActive ? 'transform rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-white transition-opacity duration-300 ${
                isActive ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-white transition-transform duration-300 ${
                isActive ? 'transform -rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </div>

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image src={logo} alt="MKAutomobili Logo" width={180} height={35} />
        </a>

        {/* Desktop Menu */}
        <ul>
          {/* <li>
            {' '}
            <a href="/" className="text-gray-100 text-lg font-bold">
              Ponuda Vozila
            </a>
          </li> */}
          {/* Add more links as needed */}
        </ul>

        {/* Button */}
        <NjuskaloButton />

        {/* Mobile Menu */}
        <ul
          className={`${
            isActive ? 'left-0 block' : '-left-full hidden'
          } fixed top-16 left-0 w-full h-screen bg-opacity-80 bg-[rgba(23,26,33,0.8)] backdrop-blur-xl flex flex-col items-center justify-center space-y-6 transition-all duration-500 md:hidden`}
        >
          <li className="w-full flex px-5">
            <a
              href="/"
              className="text-gray-100 text-lg bg-gray-800 font-bold border border-gray-300/25 rounded-xl px-4 py-2 w-full hover:bg-black/10"
            >
              Početna
            </a>
          </li>
          <li className="w-full flex px-5">
            <a
              href="/vozila"
              className="text-gray-100 text-lg bg-gray-800 font-bold border border-gray-300/25 rounded-xl px-4 py-2 w-full hover:bg-black/10"
            >
              Ponuda Vozila
            </a>
          </li>
          {/* Add more links as needed */}
          <div className="font-bold text-gray-100 text-lg px-5 py-2 items-start w-full">
            <h1 className="border-b">Lokacija: </h1>
            <h2 className="text-sm mb-5 p-5">Osijek, Industrijska Zona</h2>
            <h1 className="border-b">Kontakt: </h1>
            <h2 className="text-sm p-5 pb-2">099/594-8180</h2>
            <h2 className="text-sm mb-5 p-5 pt-2">091/625-4631</h2>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

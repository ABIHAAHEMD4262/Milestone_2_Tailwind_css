"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='bg-black text-white py-5 flex justify-between items-center px-6 md:px-8 relative z-10'>
      <h1 className='font-bold text-2xl'>Watch World</h1>
      <nav className='hidden md:flex gap-10 text-white font-bold'>
        <Link href='/' onClick={closeMenu}>Home</Link>
        <Link href='/about' onClick={closeMenu}>About</Link>
        <Link href='/watches' onClick={closeMenu}>Watches</Link>
        <Link href='/contact' onClick={closeMenu}>Contact</Link>
        <FaShoppingCart className='text-white text-xl' />
      </nav>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div className='md:hidden flex items-center'>
        <HiMenuAlt3 
          className='text-white text-3xl cursor-pointer '
          onClick={toggleMenu} // toggle menu onClick
        />

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} 
          absolute top-0 left-0 w-full h-full bg-black p-5 z-20 transition-all duration-300 ease-in-out
        `}>
          {/* Close Button */}
          <div className='flex justify-end'>
            <HiX
              className='text-white text-3xl cursor-pointer'
              onClick={toggleMenu} // Close menu when clicked
            />
          </div>
          <nav className='flex flex-col items-start gap-3 text-white font-bold'>
            <Link href='/' onClick={closeMenu}>Home</Link>
            <Link href='/about' onClick={closeMenu}>About</Link>
            <Link href='/watches' onClick={closeMenu}>Watches</Link>
            <Link href='/contact' onClick={closeMenu}>Contact</Link>
            <FaShoppingCart className='text-white text-xl' />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
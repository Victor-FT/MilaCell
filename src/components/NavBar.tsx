"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Fecha o menu mobile após clicar
      setIsMenuOpen(false);
    }
  };

  const navLinkClasses = `
    inline-flex items-center justify-start
    py-5 px-8 text-2xl leading-none
    bg-[#ffffff] text-black
    italic -skew-x-12
    h-16
    transition-all duration-300
    hover:bg-[#fe090a] hover:text-white
    hover:px-10
    font-['Mona_Sans_Medium',_Tahoma,_sans-serif]
    cursor-pointer
  `;

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 bg-transparent`}>
      <div>
        <div className="flex items-center justify-between">
          <div className='flex items-center bg-[#fe090a] min-w-60 -skew-x-12 px-6 h-16'>
            <a 
              onClick={(e) => handleScroll(e, '#Hero')}
              className="flex-shrink-0 text-white cursor-pointer"
            >
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={180}
                height={80}
                className="w-auto h-auto skew-x-12"
                priority
              />
            </a>
          </div>
          <nav className={`hidden md:flex`}>
            <a 
              onClick={(e) => handleScroll(e, '#Hero')}
              className={`${navLinkClasses}`}
            >
              <span className="skew-x-12 inline-block">Home</span>
            </a>
            <a 
              onClick={(e) => handleScroll(e, '#About')}
              className={`${navLinkClasses}`}
            >
              <span className="skew-x-12 inline-block">Sobre</span>
            </a>
            <a 
              onClick={(e) => handleScroll(e, '#Service')}
              className={`${navLinkClasses}`}
            >
              <span className="skew-x-12 inline-block">Serviços</span>
            </a>
            <a 
              onClick={(e) => handleScroll(e, '#WhyMe')}
              className={`${navLinkClasses}`}
            >
              <span className="skew-x-12 inline-block">Diferenciais</span>
            </a>
            <a 
              onClick={(e) => handleScroll(e, '#Contact')}
              className={`${navLinkClasses}`}
            >
              <span className="skew-x-12 inline-block">Contato</span>
            </a>
          </nav>
          <div className="md:hidden h-16 w-16 bg-white">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center text-white focus:outline-none h-16 w-16 bg-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#000">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#000">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#fff]">
          <a 
            onClick={(e) => handleScroll(e, '#Hero')}
            className="block py-2 px-4 text-black hover:bg-[#fe090a] hover:text-white cursor-pointer"
          >
            Home
          </a>
          <a 
            onClick={(e) => handleScroll(e, '#About')}
            className="block py-2 px-4 text-black hover:bg-[#fe090a] hover:text-white cursor-pointer"
          >
            Sobre
          </a>
          <a 
            onClick={(e) => handleScroll(e, '#Service')}
            className="block py-2 px-4 text-black hover:bg-[#fe090a] hover:text-white cursor-pointer"
          >
            Serviços
          </a>
          <a 
            onClick={(e) => handleScroll(e, '#WhyMe')}
            className="block py-2 px-4 text-black hover:bg-[#fe090a] hover:text-white cursor-pointer"
          >
            Diferenciais
          </a>
          <a 
            onClick={(e) => handleScroll(e, '#Contact')}
            className="block py-2 px-4 text-black hover:bg-[#fe090a] hover:text-white cursor-pointer"
          >
            Contato
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ currentPage = 'Dashboard' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Dashboard', href: '/dashboard' }
  ];

  return (
    <header className="sticky top-0 w-full bg-[rgb(109,67,0)] px-6 py-4 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a 
            href="/" 
            className="text-3xl font-poppins font-bold transition-transform duration-300 hover:scale-105"
          >
            <span className="text-[rgb(254,215,173)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Topher
            </span>
            <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Tek
            </span>
          </a>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[rgb(254,215,173)] hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        
        <ul className={`${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 md:max-h-[400px] md:opacity-100'
        } md:flex flex-col md:flex-row items-center gap-8 font-poppins w-full md:w-auto mt-4 md:mt-0 overflow-hidden transition-all duration-300 ease-in-out`}>
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`block py-2 px-4 text-lg transition-all duration-200 relative
                  ${currentPage === link.name
                    ? 'text-white cursor-not-allowed after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white'
                    : 'text-[rgb(254,215,173)] hover:text-white hover:translate-y-[-2px] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function StoryComponent() {
  return (
    <div className="bg-white">
      <MainComponent currentPage="Dashboard" />
      <div className="h-20"></div>
      <MainComponent currentPage="Home" />
    </div>
  );
});
}
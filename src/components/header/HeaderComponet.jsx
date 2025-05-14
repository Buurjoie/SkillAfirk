import React, { useState } from 'react'

export default function HeaderComponet() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
     const currentUrl = window.location.pathname;
     
  return (
    <>
    <header>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#8B4513]">
              Skill<span className="text-[#FF6B35]">Afrik</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={ (currentUrl === '/' ? 'text-[#FF6B35]' : '')+" hover:text-[#FF6B35] transition-colors cursor-pointer whitespace-nowrap" }
            >
              Accueil
            </a>
            <a
              href="/domaines/formation"
              className={ (currentUrl === '/domaines/formation' ? 'text-[#FF6B35]' : '')+" hover:text-[#FF6B35] transition-colors cursor-pointer whitespace-nowrap" }
            >
              Formations
            </a>
            <a
              href="/domaines"
              className={ (currentUrl === '/domaines' ? 'text-[#FF6B35]' : '')+" hover:text-[#FF6B35] transition-colors cursor-pointer whitespace-nowrap" }
            >
              Domaines
            </a>
            {/* <a
              href="#"
              className="text-gray-700 hover:text-[#FF6B35] transition-colors cursor-pointer whitespace-nowrap"
            >
              Abonnements
            </a> */}
            {/* <a
              href="/aporos"
              className={ (currentUrl === '/aporos' ? 'text-[#FF6B35]' : '')+" hover:text-[#FF6B35] transition-colors cursor-pointer whitespace-nowrap" }
            >
              À propos
            </a> */}
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-[#FF6B35] border border-[#FF6B35] rounded-lg hover:bg-[#FF6B35] hover:text-white transition-colors !rounded-button cursor-pointer whitespace-nowrap">
              Connexion
            </button>
            <button className="hidden md:block px-4 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#e05a2b] transition-colors !rounded-button cursor-pointer whitespace-nowrap">
              Inscription
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors py-2 cursor-pointer"
              >
                Accueil
              </a>
              <a
                href="/formations"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors py-2 cursor-pointer"
              >
                Formations
              </a>
              <a
                href="/domaines"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors py-2 cursor-pointer"
              >
                Domaines
              </a>
              {/* <a
                href="#"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors py-2 cursor-pointer"
              >
                Abonnements
              </a> */}
              {/* <a
                href="/apropos"
                className="text-gray-700 hover:text-[#FF6B35] transition-colors py-2 cursor-pointer"
              >
                À propos
              </a> */}
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                <button className="px-4 py-2 text-[#FF6B35] border border-[#FF6B35] rounded-lg hover:bg-[#FF6B35] hover:text-white transition-colors !rounded-button cursor-pointer whitespace-nowrap">
                  Connexion
                </button>
                <button className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#e05a2b] transition-colors !rounded-button cursor-pointer whitespace-nowrap">
                  Inscription
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
            
    </header>
    </>
  )
}

import React, { useState } from 'react';
import { Link } from 'wouter';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/i18n';
import { useActiveSection } from '@/hooks/useActiveSection';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Список идентификаторов секций в том порядке, в котором они расположены на странице
  const sectionIds = ['services', 'pricing', 'process', 'testimonials', 'faq', 'contact'];
  // Используем наш хук для определения активного раздела
  const activeSection = useActiveSection(sectionIds, 150);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-primary font-bold text-2xl">Avi Reputation</Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className={`transition-all duration-300 py-1 border-b-2 ${activeSection === 'services' ? 'text-blue-700 border-blue-700 font-semibold' : 'text-gray-800 border-transparent hover:text-blue-600 font-medium'}`}>{t('nav.services')}</a>
            <a href="#pricing" className={`transition-all duration-300 py-1 border-b-2 ${activeSection === 'pricing' ? 'text-blue-700 border-blue-700 font-semibold' : 'text-gray-800 border-transparent hover:text-blue-600 font-medium'}`}>{t('nav.pricing')}</a>
            <a href="#process" className={`transition-all duration-300 py-1 border-b-2 ${activeSection === 'process' ? 'text-blue-700 border-blue-700 font-semibold' : 'text-gray-800 border-transparent hover:text-blue-600 font-medium'}`}>{t('nav.process')}</a>
            <a href="#testimonials" className={`transition-all duration-300 py-1 border-b-2 ${activeSection === 'testimonials' ? 'text-blue-700 border-blue-700 font-semibold' : 'text-gray-800 border-transparent hover:text-blue-600 font-medium'}`}>{t('nav.testimonials')}</a>
            <a href="#faq" className={`transition-all duration-300 py-1 border-b-2 ${activeSection === 'faq' ? 'text-blue-700 border-blue-700 font-semibold' : 'text-gray-800 border-transparent hover:text-blue-600 font-medium'}`}>{t('nav.faq')}</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden md:inline-block">
              <Button className={activeSection === 'contact' ? 'bg-orange-500 text-white' : ''}>{t('nav.contactUs')}</Button>
            </a>
            <button 
              className="md:hidden text-zinc-800 focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu - popup overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            
            {/* Popup Menu */}
            <div className="fixed top-[65px] left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 md:hidden px-2 pt-2 pb-4 space-y-1 max-h-[80vh] overflow-y-auto animate-fade-in">
              <a href="#services" 
                className={`block px-3 py-3 rounded-md text-base font-medium ${activeSection === 'services' ? 'bg-blue-100 text-blue-700' : 'text-gray-800 hover:bg-gray-100'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a href="#pricing" 
                className={`block px-3 py-3 rounded-md text-base font-medium ${activeSection === 'pricing' ? 'bg-blue-100 text-blue-700' : 'text-gray-800 hover:bg-gray-100'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.pricing')}
              </a>
              <a href="#process" 
                className={`block px-3 py-3 rounded-md text-base font-medium ${activeSection === 'process' ? 'bg-blue-100 text-blue-700' : 'text-gray-800 hover:bg-gray-100'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.process')}
              </a>
              <a href="#testimonials" 
                className={`block px-3 py-3 rounded-md text-base font-medium ${activeSection === 'testimonials' ? 'bg-blue-100 text-blue-700' : 'text-gray-800 hover:bg-gray-100'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.testimonials')}
              </a>
              <a href="#faq" 
                className={`block px-3 py-3 rounded-md text-base font-medium ${activeSection === 'faq' ? 'bg-blue-100 text-blue-700' : 'text-gray-800 hover:bg-gray-100'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.faq')}
              </a>
              <a href="#contact" 
                className={`block px-3 py-3 rounded-md text-base font-medium mt-4 ${activeSection === 'contact' ? 'bg-orange-500 text-white' : 'bg-blue-700 text-white hover:bg-blue-800'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contactUs')}
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

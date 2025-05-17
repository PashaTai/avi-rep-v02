import React from 'react';
import { t } from '@/lib/i18n';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Avi Reputation</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">{t('footer.description')}</p>
          </div>
          
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm sm:text-base">{t('footer.services.1')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm sm:text-base">{t('footer.services.2')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm sm:text-base">{t('footer.services.3')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm sm:text-base">{t('footer.services.4')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">{t('footer.contacts.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-primary-400 mr-3"><i className="fas fa-phone text-base sm:text-lg"></i></span>
                <span className="text-sm sm:text-base">+7 920 306 96 59</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary-400 mr-3"><i className="fas fa-envelope text-base sm:text-lg"></i></span>
                <span className="text-sm sm:text-base break-all">Ivanovladimir830@gmail.com</span>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="https://vk.com/id763257970" className="text-gray-400 hover:text-white text-lg sm:text-xl" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-vk"></i>
                </a>
                <a href="https://t.me/vladimir_lvanovv" className="text-gray-400 hover:text-white text-lg sm:text-xl" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-xs sm:text-sm">© 2025 Avi Reputation. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
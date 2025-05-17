import React from 'react';
import { CheckCircle } from 'lucide-react';
import { t } from '@/lib/i18n';

const International: React.FC = () => {
  const platforms = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin' },
    { name: 'Xing', icon: 'fab fa-xing' },
    { name: 'Behance', icon: 'fab fa-behance' },
    { name: 'Trustpilot', icon: 'fas fa-star' }
  ];

  const benefits = [
    t('international.provide.item1'),
    t('international.provide.item2'),
    t('international.provide.item3'),
    t('international.provide.item4')
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('international.title')}</h2>
              <p className="text-lg mb-6">{t('international.intro')}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {platforms.map((platform, index) => (
                  <div key={index} className="bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center shadow-md">
                    <i className={`${platform.icon} text-3xl mb-2 text-white`}></i>
                    <p className="font-bold">{platform.name}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-orange-300">{t('international.why.title')}</h3>
              <p className="mb-6 text-white font-medium">{t('international.why.description')}</p>
              
              <h3 className="text-xl font-semibold mb-4 text-orange-300">{t('international.provide.title')}</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-white mr-3 bg-orange-500 rounded-full p-1">
                      <CheckCircle className="h-5 w-5" />
                    </span>
                    <span className="text-white font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                alt="Международное продвижение репутации" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;

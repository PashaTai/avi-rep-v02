import React from 'react';
import { PenLine, Crown, User, Globe, FileCheck, Users } from 'lucide-react';
import { t } from '@/lib/i18n';

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition border border-gray-200 hover-card">
      <div className="bg-blue-100 text-blue-700 w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto border-2 border-blue-300 transition-all duration-300 transform hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800" data-seo="service-heading">{title}</h3>
      <p className="text-gray-700 text-center text-lg">{description}</p>
    </div>
  );
};

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: <PenLine className="h-10 w-10" />,
      title: t('advantages.1.title'),
      description: t('advantages.1.description')
    },
    {
      icon: <Crown className="h-10 w-10" />,
      title: t('advantages.2.title'),
      description: t('advantages.2.description')
    },
    {
      icon: <User className="h-10 w-10" />,
      title: t('advantages.3.title'),
      description: t('advantages.3.description')
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: t('advantages.4.title'),
      description: t('advantages.4.description')
    },
    {
      icon: <FileCheck className="h-10 w-10" />,
      title: t('advantages.5.title'),
      description: t('advantages.5.description')
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: t('advantages.6.title'),
      description: t('advantages.6.description')
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 tracking-tight" id="services-heading">{t('advantages.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            {t('advantages.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <Advantage 
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

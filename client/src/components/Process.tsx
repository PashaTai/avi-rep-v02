import React from 'react';
import { t } from '@/lib/i18n';
import { 
  MessageSquareText,
  BarChart3,
  FileEdit,
  Rocket,
  LineChart
} from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-4 sm:mb-6 shadow-lg transition-transform hover:scale-105">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center text-blue-700 font-bold border-2 border-blue-200">
            {icon}
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md">
            {number}
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-gray-800 text-center text-lg">{description}</p>
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      icon: <MessageSquareText className="h-8 w-8 text-primary-600 stroke-[1.5]" />
    },
    {
      number: 2,
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      icon: <BarChart3 className="h-8 w-8 text-primary-600 stroke-[1.5]" />
    },
    {
      number: 3,
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      icon: <FileEdit className="h-8 w-8 text-primary-600 stroke-[1.5]" />
    },
    {
      number: 4,
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      icon: <Rocket className="h-8 w-8 text-primary-600 stroke-[1.5]" />
    },
    {
      number: 5,
      title: t('process.step5.title'),
      description: t('process.step5.description'),
      icon: <LineChart className="h-8 w-8 text-primary-600 stroke-[1.5]" />
    }
  ];

  return (
    <section className="py-16 bg-gray-100" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 tracking-tight" id="process-heading">{t('process.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            {t('process.subtitle')}
          </p>
        </div>
        
        <div className="mt-20">
          {/* Соединительная линия для десктопа */}
          <div className="hidden lg:block h-1 bg-blue-300 w-4/5 mx-auto my-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex justify-center">
                <Step 
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center justify-center py-3 px-8 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-bold"
            >
              Начать сотрудничество
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

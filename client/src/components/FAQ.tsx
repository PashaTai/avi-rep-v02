import React, { useState } from 'react';
import { ChevronDown, PlusCircle, MinusCircle } from 'lucide-react';
import { t } from '@/lib/i18n';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${isOpen ? 'border-blue-600' : 'border-transparent'} transition-all duration-300 transform ${isOpen ? 'scale-102' : ''} hover-card`}>
      <button 
        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left font-medium flex justify-between items-center focus:outline-none group"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <span className="bg-blue-100 text-blue-700 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-3 sm:mr-4 font-semibold border border-blue-200 text-sm sm:text-base">
            {index + 1}
          </span>
          <span className={`text-base sm:text-lg ${isOpen ? 'text-blue-800 font-semibold' : 'text-gray-800'}`}>{question}</span>
        </div>
        {isOpen ? (
          <MinusCircle className="text-blue-600 h-6 w-6 transition-transform group-hover:scale-110" />
        ) : (
          <PlusCircle className="text-blue-600 h-6 w-6 transition-transform group-hover:scale-110" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 pb-6 pt-2 pl-18">
          <div className="border-l-2 border-blue-300 pl-6 ml-4">
            <p className="text-gray-700">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: t('faq.1.question'),
      answer: t('faq.1.answer')
    },
    {
      question: t('faq.2.question'),
      answer: t('faq.2.answer')
    },
    {
      question: t('faq.3.question'),
      answer: t('faq.3.answer')
    },
    {
      question: t('faq.4.question'),
      answer: t('faq.4.answer')
    },
    {
      question: t('faq.5.question'),
      answer: t('faq.5.answer')
    }
  ];

  return (
    <section className="py-16 bg-gray-100" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 tracking-tight" id="faq-heading">{t('faq.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            {t('faq.subtitle')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem 
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

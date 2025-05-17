import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Gavel, MessageSquare, Cog } from 'lucide-react';
import { t } from '@/lib/i18n';

interface PricingItemProps {
  name: string;
  price: string;
}

const PricingItem: React.FC<PricingItemProps> = ({ name, price }) => {
  return (
    <li className="flex justify-between items-center">
      <span>{name}</span>
      <span className="font-semibold">{price}</span>
    </li>
  );
};

interface PricingCategoryProps {
  title: string;
  subtitle: string;
  items: PricingItemProps[];
  note?: string;
}

const PricingCategory: React.FC<PricingCategoryProps> = ({ title, subtitle, items, note }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col border border-gray-200 hover-card">
      <div className="bg-blue-700 p-6 text-white h-32 flex flex-col justify-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-white mt-2 text-lg">{subtitle}</p>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <ul className="space-y-4 flex-1">
          {items.map((item, index) => (
            <PricingItem key={index} name={item.name} price={item.price} />
          ))}
          {note && <li className="text-sm text-gray-700 mt-2 font-bold">{note}</li>}
        </ul>
        <a className="mt-auto pt-6">
          <button 
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            {t('pricing.order')}
          </button>
        </a>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const category1Items = [
    { name: 'Яндекс Карты', price: '600 ₽' },
    { name: 'Яндекс Услуги', price: '600 ₽' },
    { name: 'Google Карты', price: '600 ₽' },
    { name: '2ГИС', price: '350 ₽' },
    { name: 'Flamp.ru', price: '350 ₽' },
    { name: 'Авито', price: '650 ₽' },
    { name: 'Яндекс Маркет (о товаре)', price: '600 ₽' }
  ];

  const category2Items = [
    { name: 'Otzovik.com', price: '1100 ₽' },
    { name: 'Irecommend.ru', price: '1100 ₽' },
    { name: 'Prodoctorov.ru', price: '1100 ₽' },
    { name: 'Отзывы с выкупом товара', price: '1100 ₽' },
    { name: 'Иностранные площадки', price: 'от 400 ₽' },
    { name: 'Обжалование', price: '400 ₽' }
  ];

  const category3Items = [
    { name: 'Создание соцсетей (LinkedIn и др.)', price: 'от 6000 ₽' },
    { name: 'Создание иностранных соцсетей', price: 'от 1100 ₽' },
    { name: 'Trustpilot / Sitejabber', price: 'от 1100 ₽' },
    { name: 'Behance / Dribbble', price: 'от 1500 ₽' },
    { name: 'Удаление негатива из поиска', price: 'от 35 000 ₽*' }
  ];

  return (
    <section className="py-16 bg-gray-100" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 tracking-tight" id="pricing-heading">{t('pricing.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            {t('pricing.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <PricingCategory 
            title={t('pricing.category1.title')} 
            subtitle={t('pricing.category1.subtitle')} 
            items={category1Items} 
          />
          
          <PricingCategory 
            title={t('pricing.category2.title')} 
            subtitle={t('pricing.category2.subtitle')} 
            items={category2Items} 
          />
          
          <PricingCategory 
            title={t('pricing.category3.title')} 
            subtitle={t('pricing.category3.subtitle')} 
            items={category3Items} 
            note="* Оплата по результату"
          />
        </div>
        
        {/* Guarantees */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-800">{t('pricing.guarantees.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-orange-300">
              <div className="flex flex-col h-full">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-orange-700">Гарантия результата</h4>
                <p className="mb-4 text-gray-800">{t('pricing.guarantees.intro')}</p>
                <p className="text-gray-800 font-medium">Если в течение 30 дней после публикации отзыв будет удален, мы:</p>
                <ul className="space-y-4 mt-4 pl-0 list-none">
                  <li className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-blue-700 mr-3 font-bold text-xl">1</span>
                    <span className="text-gray-800">{t('pricing.guarantees.item1')}</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-blue-700 mr-3 font-bold text-xl">2</span>
                    <span className="text-gray-800">{t('pricing.guarantees.item2')}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-300">
              <div className="flex flex-col h-full">
                <div className="bg-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <Gavel className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-blue-700">{t('pricing.appeal.title')}</h4>
                <p className="mb-4 text-gray-800">{t('pricing.appeal.intro')}</p>
                <ul className="space-y-4 mt-auto">
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-blue-700 mr-3 mt-1"><Gavel className="h-5 w-5" /></span>
                    <span className="text-gray-800">{t('pricing.appeal.item1')}</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-blue-700 mr-3 mt-1"><MessageSquare className="h-5 w-5" /></span>
                    <span className="text-gray-800">{t('pricing.appeal.item2')}</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-blue-700 mr-3 mt-1"><Cog className="h-5 w-5" /></span>
                    <span className="text-gray-800">{t('pricing.appeal.item3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

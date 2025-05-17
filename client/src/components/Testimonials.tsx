import React, { useState } from 'react';
import { Star, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { t } from '@/lib/i18n';

interface TestimonialProps {
  text: string;
  author: string;
  position: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, position }) => {
  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-200 hover-card">
      <div className="flex items-center mb-4">
        <div className="text-orange-500 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-gray-800 italic flex-grow">{text}</p>
      <div className="pt-6 mt-auto border-t border-gray-200">
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-700">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activePage, setActivePage] = useState(0);
  
  const testimonials = [
    {
      text: "Заказывал здесь улучшение репутации — помогли быстро и грамотно. Ребята сами сделали аудит, подсказали, где лучше разместиться. Через месяц увидел реальные изменения: в поиске стало больше положительных отзывов, звонки участились. Работают честно и прозрачно.",
      author: "Александр М.",
      position: "Владелец автосервиса"
    },
    {
      text: "Спасибо за качественную работу. Проблема была с отзывами на irecommend и otzovik, помогли красиво закрыть негатив и вытянуть позиции вверх. Чувствуется, что работают не на потоке, а с подходом.",
      author: "Максим К.",
      position: "Владелец интернет-магазина"
    },
    {
      text: "Заказала продвижение на 2ГИС, Flamp и Google. Сначала скептически относилась, но потом увидела, как изменилась картина — репутация реально стала лучше. И главное, не просто на словах, а в поиске.",
      author: "Наталья Г.",
      position: "Сфера недвижимости"
    },
    {
      text: "Обратилась за восстановлением репутации после негативной статьи в интернете. Всё сделали аккуратно, негатив ушёл. Спасибо!",
      author: "Елена К.",
      position: "Репетитор"
    }
  ];

  // Calculate how many items to show per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    }
    return 3; // Default for SSR
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const goToNextPage = () => {
    setActivePage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPrevPage = () => {
    setActivePage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Get current page testimonials
  const getCurrentTestimonials = () => {
    const start = activePage * itemsPerPage;
    const end = start + itemsPerPage;
    return testimonials.slice(start, end);
  };

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 tracking-tight" id="testimonials-heading">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="min-h-[430px]"> {/* Фиксированная высота для контейнера отзывов */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <Testimonial
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                position={testimonial.position}
              />
            ))}
          </div>
        </div>
        
        {/* Testimonial Navigation Arrows */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-all duration-300 focus:outline-none shadow-md"
              onClick={goToPrevPage}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center px-4 font-medium">
              {activePage + 1} / {totalPages}
            </div>
            <button
              className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-all duration-300 focus:outline-none shadow-md"
              onClick={goToNextPage}
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

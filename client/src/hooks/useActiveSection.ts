import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Находим все секции на странице
      const sections = sectionIds.map(id => {
        const element = document.getElementById(id);
        if (!element) return { id, top: 0, bottom: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY
        };
      });
      
      // Находим первую видимую секцию на экране
      for (const section of sections) {
        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          setActiveSection(section.id);
          return;
        }
      }
      
      // Если пользователь прокрутил выше всех секций - устанавливаем первую секцию
      if (scrollPosition < sections[0]?.top) {
        setActiveSection(null);
        return;
      }
      
      // Если пользователь прокрутил ниже всех секций - устанавливаем последнюю секцию
      if (scrollPosition >= sections[sections.length - 1]?.bottom) {
        setActiveSection(sections[sections.length - 1]?.id);
        return;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Запускаем один раз при монтировании, чтобы установить начальное состояние
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
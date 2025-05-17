// Simple i18n implementation for the website
// We're using a simple object mapping for translations

export type Language = 'ru' | 'en';

// Translation keys
type TranslationKey = 
  | 'nav.services'
  | 'nav.pricing'
  | 'nav.process'
  | 'nav.testimonials'
  | 'nav.faq'
  | 'nav.contactUs'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'hero.howItWorks'
  | 'advantages.title'
  | 'advantages.subtitle'
  | 'advantages.1.title'
  | 'advantages.1.description'
  | 'advantages.2.title'
  | 'advantages.2.description'
  | 'advantages.3.title'
  | 'advantages.3.description'
  | 'advantages.4.title'
  | 'advantages.4.description'
  | 'advantages.5.title'
  | 'advantages.5.description'
  | 'advantages.6.title'
  | 'advantages.6.description'
  | 'pricing.title'
  | 'pricing.subtitle'
  | 'pricing.category1.title'
  | 'pricing.category1.subtitle'
  | 'pricing.category2.title'
  | 'pricing.category2.subtitle'
  | 'pricing.category3.title'
  | 'pricing.category3.subtitle'
  | 'pricing.order'
  | 'pricing.guarantees.title'
  | 'pricing.guarantees.intro'
  | 'pricing.guarantees.item1'
  | 'pricing.guarantees.item2'
  | 'pricing.appeal.title'
  | 'pricing.appeal.intro'
  | 'pricing.appeal.item1'
  | 'pricing.appeal.item2'
  | 'pricing.appeal.item3'
  | 'process.title'
  | 'process.subtitle'
  | 'process.step1.title'
  | 'process.step1.description'
  | 'process.step2.title'
  | 'process.step2.description'
  | 'process.step3.title'
  | 'process.step3.description'
  | 'process.step4.title'
  | 'process.step4.description'
  | 'process.step5.title'
  | 'process.step5.description'
  | 'international.title'
  | 'international.intro'
  | 'international.why.title'
  | 'international.why.description'
  | 'international.provide.title'
  | 'international.provide.item1'
  | 'international.provide.item2'
  | 'international.provide.item3'
  | 'international.provide.item4'
  | 'testimonials.title'
  | 'testimonials.subtitle'
  | 'faq.title'
  | 'faq.subtitle'
  | 'faq.1.question'
  | 'faq.1.answer'
  | 'faq.2.question'
  | 'faq.2.answer'
  | 'faq.3.question'
  | 'faq.3.answer'
  | 'faq.4.question'
  | 'faq.4.answer'
  | 'faq.5.question'
  | 'faq.5.answer'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.form.name'
  | 'contact.form.phone'
  | 'contact.form.email'
  | 'contact.form.company'
  | 'contact.form.platforms'
  | 'contact.form.link'
  | 'contact.form.rating'
  | 'contact.form.rating.5stars'
  | 'contact.form.rating.4stars'
  | 'contact.form.rating.mixed'
  | 'contact.form.positives'
  | 'contact.form.negatives'
  | 'contact.form.avoid'
  | 'contact.form.additional'
  | 'contact.form.privacy'
  | 'contact.form.submit'
  | 'contact.phone'
  | 'contact.email'
  | 'contact.social'
  | 'footer.description'
  | 'footer.services.title'
  | 'footer.services.1'
  | 'footer.services.2'
  | 'footer.services.3'
  | 'footer.services.4'
  | 'footer.info.title'
  | 'footer.info.1'
  | 'footer.info.2'
  | 'footer.info.3'
  | 'footer.info.4'
  | 'footer.contacts.title'
  | 'footer.copyright'
  | 'footer.privacy'
  | 'footer.terms';

// Translations
const translations: Record<Language, Record<TranslationKey, string>> = {
  ru: {
    'nav.services': 'Услуги',
    'nav.pricing': 'Цены',
    'nav.process': 'Процесс',
    'nav.testimonials': 'Отзывы',
    'nav.faq': 'FAQ',
    'nav.contactUs': 'Оставить заявку',
    
    'hero.title': 'Улучшаем вашу репутацию в интернете — честно, эффективно и с гарантией',
    'hero.subtitle': 'Мы специализируемся на управлении онлайн-репутацией (ORM) для бизнеса и частных лиц. Пишем качественные, реалистичные отзывы, выводим негатив из поисковой выдачи, помогаем бренду сформировать положительное информационное поле в интернете.',
    'hero.cta': 'Оставить заявку',
    'hero.howItWorks': 'Как мы работаем',
    
    'advantages.title': 'ПРЕИМУЩЕСТВА СОТРУДНИЧЕСТВА',
    'advantages.subtitle': 'Наш подход к управлению репутацией основан на многолетнем опыте и глубоком понимании алгоритмов работы поисковых систем и отзовиков.',
    'advantages.1.title': 'Авторский подход',
    'advantages.1.description': 'Каждый отзыв создается профессиональными копирайтерами с соблюдением естественной лексики целевой аудитории.',
    'advantages.2.title': 'Индивидуальная стратегия',
    'advantages.2.description': 'Разрабатываем комплексное решение под конкретные задачи вашего бизнеса.',
    'advantages.3.title': 'Человеческий фактор',
    'advantages.3.description': 'Работаем без применения искусственного интеллекта, создавая органичные тексты, вызывающие доверие.',
    'advantages.4.title': 'Мультиплатформенность',
    'advantages.4.description': 'Владеем методиками работы с отечественными и зарубежными площадками.',
    'advantages.5.title': 'Прозрачные условия',
    'advantages.5.description': 'Четкая смета и оплата строго по достигнутым результатам.',
    'advantages.6.title': 'Универсальность',
    'advantages.6.description': 'Предоставляем услуги как для частных лиц, так и для компаний любого масштаба.',
    
    'pricing.title': 'ПРАЙС-ЛИСТ',
    'pricing.subtitle': 'Прозрачное ценообразование без скрытых платежей. Стоимость указана за один размещенный отзыв.',
    'pricing.category1.title': 'Популярные платформы',
    'pricing.category1.subtitle': 'Основные площадки для отзывов',
    'pricing.category2.title': 'Специализированные отзовики',
    'pricing.category2.subtitle': 'Площадки с повышенным доверием',
    'pricing.category3.title': 'Международное продвижение',
    'pricing.category3.subtitle': 'Работа на зарубежных платформах',
    'pricing.order': 'Заказать',
    'pricing.guarantees.title': 'НАШИ ГАРАНТИИ',
    'pricing.guarantees.intro': 'Если в течение 30 дней после публикации отзыв будет удален, мы:',
    'pricing.guarantees.item1': 'Бесплатно опубликуем новый материал',
    'pricing.guarantees.item2': 'Или полностью возместим стоимость удаленного контента',
    'pricing.appeal.title': 'ПРОЦЕДУРА ОБЖАЛОВАНИЯ',
    'pricing.appeal.intro': 'При обнаружении нарушений в негативных отзывах мы инициируем процесс обжалования с использованием:',
    'pricing.appeal.item1': 'Юридически выверенных формулировок',
    'pricing.appeal.item2': 'Аргументированного изложения нарушенных правил',
    'pricing.appeal.item3': 'Технических методов коммуникации с модераторами',
    
    'process.title': 'ЭТАПЫ СОТРУДНИЧЕСТВА',
    'process.subtitle': 'Мы разработали оптимальный процесс для эффективного управления репутацией. Это позволяет достигать максимальных результатов в кратчайшие сроки.',
    'process.step1.title': 'Консультация',
    'process.step1.description': 'Анализируем вашу ситуацию и определяем цели работы. Проводим аудит текущего положения дел с репутацией.',
    'process.step2.title': 'Стратегия',
    'process.step2.description': 'Разрабатываем индивидуальный план действий с учетом специфики вашего бизнеса и целевой аудитории.',
    'process.step3.title': 'Создание',
    'process.step3.description': 'Пишем уникальные тексты и согласовываем с вами. Каждый материал проходит проверку на соответствие требованиям площадки.',
    'process.step4.title': 'Реализация',
    'process.step4.description': 'Размещаем материалы по оптимальному графику для создания естественного информационного поля.',
    'process.step5.title': 'Мониторинг',
    'process.step5.description': 'Отслеживаем эффективность и предоставляем детальную отчетность о проделанной работе и достигнутых результатах.',
    
    'international.title': 'МЕЖДУНАРОДНОЕ ПРОДВИЖЕНИЕ',
    'international.intro': 'Наша команда специализируется на создании профессионального имиджа на международных платформах:',
    'international.why.title': 'Почему это важно?',
    'international.why.description': 'Для бизнеса, связанного с международным рынком, HR-сферой или удаленной работой, профессиональный профиль в LinkedIn становится обязательным элементом деловой репутации. Это первое, что анализируют потенциальные партнеры, заказчики и рекрутеры по всему миру.',
    'international.provide.title': 'Мы обеспечиваем:',
    'international.provide.item1': 'Создание аутентичного профиля с нуля или восстановление заблокированного аккаунта',
    'international.provide.item2': 'Профессиональное оформление личной страницы или бизнес-аккаунта',
    'international.provide.item3': 'Формирование экспертного позиционирования и положительного имиджа',
    'international.provide.item4': 'Получение рекомендаций от реальных профессионалов отрасли',
    
    'testimonials.title': 'ОТЗЫВЫ НАШИХ КЛИЕНТОВ',
    'testimonials.subtitle': 'Что говорят о нас те, кто уже воспользовался нашими услугами.',
    
    'faq.title': 'ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ',
    'faq.subtitle': 'Ответы на популярные вопросы о наших услугах.',
    'faq.1.question': 'Как долго ждать результатов?',
    'faq.1.answer': 'Первые результаты видны уже через 1-2 недели после начала работы. Полноценное формирование положительного информационного поля занимает 2-3 месяца в зависимости от исходной ситуации и объема работ.',
    'faq.2.question': 'Гарантируете ли вы, что отзывы не удалят?',
    'faq.2.answer': 'Мы используем методики, минимизирующие риск удаления контента. Если в течение 30 дней отзыв всё же будет удален, мы бесплатно разместим новый или вернем деньги. Наш процент сохранности размещений составляет более 95%.',
    'faq.3.question': 'Как происходит процесс работы?',
    'faq.3.answer': 'После согласования задачи и оплаты мы разрабатываем стратегию, создаем тексты, согласовываем их с вами и публикуем согласно установленному графику. Вы получаете регулярные отчеты о проделанной работе и ее результатах.',
    'faq.4.question': 'Возможно ли удалить негативные отзывы?',
    'faq.4.answer': 'Прямое удаление отзывов возможно только при наличии в них нарушений правил площадки. Мы проводим анализ и, если находим основания, инициируем процедуру обжалования. Если удаление невозможно, мы применяем стратегию вытеснения негатива из поисковой выдачи.',
    'faq.5.question': 'Какие гарантии вы предоставляете?',
    'faq.5.answer': 'Мы заключаем договор с четкими сроками и результатами. Оплата производится поэтапно, по мере выполнения работ. Для проектов по удалению негатива действует принцип "оплата по результату" - вы платите только за фактически достигнутые изменения.',
    
    'contact.title': 'ОСТАВИТЬ ЗАЯВКУ',
    'contact.subtitle': 'С нами ваша репутация — в надежных руках. Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения деталей.',
    'contact.form.name': 'Ваше имя',
    'contact.form.phone': 'Телефон',
    'contact.form.email': 'Email',
    'contact.form.company': 'Название компании (если есть)',
    'contact.form.platforms': 'На каких площадках требуется работа',
    'contact.form.link': 'Ссылка на вашу карточку (если есть)',
    'contact.form.rating': 'Желаемая оценка',
    'contact.form.rating.5stars': '5 звезд',
    'contact.form.rating.4stars': '4 звезды',
    'contact.form.rating.mixed': 'Смешанные (более естественно)',
    'contact.form.positives': 'Что можно хвалить?',
    'contact.form.negatives': 'За что можно ругать? (для естественности)',
    'contact.form.avoid': 'Чего избегать в отзывах?',
    'contact.form.additional': 'Дополнительная информация',
    'contact.form.privacy': 'Я согласен с политикой конфиденциальности',
    'contact.form.submit': 'Отправить заявку',
    'contact.phone': 'Телефон',
    'contact.email': 'Email',
    'contact.social': 'Социальные сети',
    
    'footer.description': 'Улучшаем вашу репутацию в интернете — честно, эффективно и с гарантией',
    'footer.services.title': 'Услуги',
    'footer.services.1': 'Управление репутацией',
    'footer.services.2': 'Размещение отзывов',
    'footer.services.3': 'Удаление негатива',
    'footer.services.4': 'Международное продвижение',
    'footer.info.title': 'Информация',
    'footer.info.1': 'Как мы работаем',
    'footer.info.2': 'Цены',
    'footer.info.3': 'FAQ',
    'footer.info.4': 'Отзывы',
    'footer.contacts.title': 'Контакты',
    'footer.copyright': '© 2023 ORMER. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования'
  },
  
  en: {
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.process': 'Process',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contactUs': 'Contact Us',
    
    'hero.title': 'Improving your online reputation — honestly, efficiently, and with guarantees',
    'hero.subtitle': 'We specialize in online reputation management (ORM) for businesses and individuals. We write quality, realistic reviews, eliminate negative content from search results, and help brands create a positive online presence.',
    'hero.cta': 'Submit Request',
    'hero.howItWorks': 'How We Work',
    
    'advantages.title': 'ADVANTAGES OF WORKING WITH US',
    'advantages.subtitle': 'Our approach to reputation management is based on years of experience and a deep understanding of search engines and review platforms algorithms.',
    'advantages.1.title': 'Unique Approach',
    'advantages.1.description': 'Each review is created by professional copywriters with natural language patterns tailored to the target audience.',
    'advantages.2.title': 'Individual Strategy',
    'advantages.2.description': 'We develop comprehensive solutions for your specific business needs.',
    'advantages.3.title': 'Human Factor',
    'advantages.3.description': 'We work without artificial intelligence, creating organic texts that inspire trust.',
    'advantages.4.title': 'Multi-platform',
    'advantages.4.description': 'We have expertise with both domestic and international platforms.',
    'advantages.5.title': 'Transparent Terms',
    'advantages.5.description': 'Clear pricing and payment only for achieved results.',
    'advantages.6.title': 'Universal Service',
    'advantages.6.description': 'We provide services for both individuals and companies of any size.',
    
    'pricing.title': 'PRICE LIST',
    'pricing.subtitle': 'Transparent pricing without hidden costs. Price is indicated per one published review.',
    'pricing.category1.title': 'Popular Platforms',
    'pricing.category1.subtitle': 'Main review platforms',
    'pricing.category2.title': 'Specialized Review Sites',
    'pricing.category2.subtitle': 'Platforms with higher credibility',
    'pricing.category3.title': 'International Promotion',
    'pricing.category3.subtitle': 'Work on foreign platforms',
    'pricing.order': 'Order',
    'pricing.guarantees.title': 'OUR GUARANTEES',
    'pricing.guarantees.intro': 'If a review is removed within 30 days after publication, we will:',
    'pricing.guarantees.item1': 'Publish a new review for free',
    'pricing.guarantees.item2': 'Or fully refund the cost of the removed content',
    'pricing.appeal.title': 'APPEAL PROCEDURE',
    'pricing.appeal.intro': 'When we detect violations in negative reviews, we initiate an appeal process using:',
    'pricing.appeal.item1': 'Legally accurate wording',
    'pricing.appeal.item2': 'Reasoned explanation of violated rules',
    'pricing.appeal.item3': 'Technical methods of communicating with moderators',
    
    'process.title': 'COOPERATION STAGES',
    'process.subtitle': 'We have developed an optimal process for effective reputation management. This allows us to achieve maximum results in the shortest time.',
    'process.step1.title': 'Consultation',
    'process.step1.description': 'We analyze your situation and determine goals. We audit the current state of your reputation.',
    'process.step2.title': 'Strategy',
    'process.step2.description': 'We develop an individual action plan taking into account the specifics of your business and target audience.',
    'process.step3.title': 'Creation',
    'process.step3.description': 'We write unique texts and coordinate them with you. Each material is checked for compliance with platform requirements.',
    'process.step4.title': 'Implementation',
    'process.step4.description': 'We publish materials according to an optimal schedule to create a natural information field.',
    'process.step5.title': 'Monitoring',
    'process.step5.description': 'We track effectiveness and provide detailed reporting on the work done and results achieved.',
    
    'international.title': 'INTERNATIONAL PROMOTION',
    'international.intro': 'Our team specializes in creating a professional image on international platforms:',
    'international.why.title': 'Why is this important?',
    'international.why.description': 'For businesses associated with the international market, HR sphere, or remote work, a professional LinkedIn profile becomes a mandatory element of business reputation. This is the first thing that potential partners, customers, and recruiters around the world analyze.',
    'international.provide.title': 'We provide:',
    'international.provide.item1': 'Creating an authentic profile from scratch or restoring a blocked account',
    'international.provide.item2': 'Professional design of a personal page or business account',
    'international.provide.item3': 'Formation of expert positioning and positive image',
    'international.provide.item4': 'Getting recommendations from real industry professionals',
    
    'testimonials.title': 'CUSTOMER TESTIMONIALS',
    'testimonials.subtitle': 'What people who have already used our services say about us.',
    
    'faq.title': 'FREQUENTLY ASKED QUESTIONS',
    'faq.subtitle': 'Answers to popular questions about our services.',
    'faq.1.question': 'How long do we have to wait for results?',
    'faq.1.answer': 'First results are visible within 1-2 weeks after starting work. Full formation of a positive information field takes 2-3 months depending on the initial situation and scope of work.',
    'faq.2.question': 'Do you guarantee that reviews will not be deleted?',
    'faq.2.answer': 'We use techniques that minimize the risk of content removal. If a review is deleted within 30 days, we will post a new one for free or refund your money. Our retention rate exceeds 95%.',
    'faq.3.question': 'How does the work process happen?',
    'faq.3.answer': 'After agreeing on the task and payment, we develop a strategy, create texts, coordinate them with you and publish according to an established schedule. You receive regular reports on the work done and its results.',
    'faq.4.question': 'Is it possible to delete negative reviews?',
    'faq.4.answer': 'Direct removal of reviews is only possible if they contain violations of platform rules. We analyze and, if we find grounds, initiate an appeal procedure. If removal is not possible, we apply a strategy to displace negative content from search results.',
    'faq.5.question': 'What guarantees do you provide?',
    'faq.5.answer': 'We sign a contract with clear deadlines and results. Payment is made in stages, as work progresses. For negative content removal projects, we apply the "payment for results" principle - you only pay for actually achieved changes.',
    
    'contact.title': 'SUBMIT REQUEST',
    'contact.subtitle': 'With us, your reputation is in safe hands. Fill out the form, and we will contact you shortly to discuss the details.',
    'contact.form.name': 'Your name',
    'contact.form.phone': 'Phone',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company name (if any)',
    'contact.form.platforms': 'Which platforms require work',
    'contact.form.link': 'Link to your card (if any)',
    'contact.form.rating': 'Desired rating',
    'contact.form.rating.5stars': '5 stars',
    'contact.form.rating.4stars': '4 stars',
    'contact.form.rating.mixed': 'Mixed (more natural)',
    'contact.form.positives': 'What can be praised?',
    'contact.form.negatives': 'What can be criticized? (for naturalness)',
    'contact.form.avoid': 'What to avoid in reviews?',
    'contact.form.additional': 'Additional information',
    'contact.form.privacy': 'I agree with the privacy policy',
    'contact.form.submit': 'Submit request',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.social': 'Social networks',
    
    'footer.description': 'Improving your online reputation — honestly, efficiently, and with guarantees',
    'footer.services.title': 'Services',
    'footer.services.1': 'Reputation Management',
    'footer.services.2': 'Review Placement',
    'footer.services.3': 'Negative Content Removal',
    'footer.services.4': 'International Promotion',
    'footer.info.title': 'Information',
    'footer.info.1': 'How We Work',
    'footer.info.2': 'Pricing',
    'footer.info.3': 'FAQ',
    'footer.info.4': 'Testimonials',
    'footer.contacts.title': 'Contacts',
    'footer.copyright': '© 2023 ORMER. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use'
  }
};

// Default language
let currentLanguage: Language = 'ru';

// Simple i18n function
export function t(key: TranslationKey): string {
  return translations[currentLanguage][key] || key;
}

// Set language
export function setLanguage(lang: Language): void {
  if (translations[lang]) {
    currentLanguage = lang;
  }
}

// Get current language
export function getLanguage(): Language {
  return currentLanguage;
}

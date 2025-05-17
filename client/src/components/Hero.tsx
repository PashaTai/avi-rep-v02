import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { t } from '@/lib/i18n';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  phone: z.string().optional(),
  email: z.string().email({ message: "Введите корректный email" }).optional(),
}).refine(data => data.phone || data.email, {
  message: "Укажите телефон или email для связи",
  path: ["phone"]
});

type FormValues = z.infer<typeof formSchema>;

const Hero: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    try {
      await apiRequest('POST', '/api/contact', {
        ...data,
        company: "",
        platforms: "",
        platformLink: "",
        rating: "5",
        positives: "",
        negatives: "",
        avoid: "",
        additional: ""
      });
      
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="bg-blue-800 text-white min-h-[500px] sm:min-h-[650px] py-10 sm:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
        {/* Левая колонка - контент */}
        <div className="pt-4 sm:pt-8 pb-10 sm:pb-16 lg:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 fade-in tracking-tight leading-tight" itemScope itemType="http://schema.org/WebSite">
            Управление репутацией в интернете - <span itemProp="name">Avi Reputation</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 text-zinc-100 fade-in-delay-1 max-w-2xl font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-2">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {t('hero.cta')}
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                const processSection = document.getElementById('process');
                if (processSection) {
                  processSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="w-full sm:w-auto bg-white text-blue-800 hover:bg-blue-100 font-bold border-0 px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {t('hero.howItWorks')}
            </button>
          </div>
        </div>
        
        {/* Правая колонка - форма */}
        <div className="lg:py-12 fade-in-delay-3">
          <div className="bg-white rounded-lg shadow-xl p-6 text-black mx-auto max-w-md border-2 border-blue-300 hover-card">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Бесплатная консультация</h3>
            <p className="text-gray-800 mb-6">Оставьте заявку и получите анализ вашей текущей репутации бесплатно</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Ваше имя" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Телефон" {...field} type="tel" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold">
                  Отправить
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

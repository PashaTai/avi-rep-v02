import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { t } from '@/lib/i18n';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Удалено упоминание чекбокса, так как не используется
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  contacts: z.string().min(5, { message: "Укажите ваши контакты для связи" }),
  company: z.string().optional(),
  platforms: z.string(),
  additional: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contacts: "",
      company: "",
      platforms: "",
      additional: ""
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    try {
      // Адаптируем данные к существующей схеме API
      const apiData = {
        name: data.name,
        phone: data.contacts.includes('@') ? '' : data.contacts,
        email: data.contacts.includes('@') ? data.contacts : '',
        company: data.company || '',
        platforms: data.platforms,
        platformLink: '',
        rating: '5',
        positives: '',
        negatives: '',
        avoid: '',
        additional: data.additional || ''
      };
      
      await apiRequest('POST', '/api/contact', apiData);
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
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 tracking-tight" id="contact-heading">{t('contact.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-2 border-blue-200">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-gray-800">Ваше имя</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contacts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-gray-800">Контакты (телефон/e-mail, мессенджер)</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-gray-800">Название компании</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="platforms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-gray-800">На каких площадках требуется работа</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="additional"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-gray-800">Дополнительная информация</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={4} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                

                
                <Button type="submit" className="w-full py-6 text-lg font-medium bg-orange-500 hover:bg-orange-600 text-white">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

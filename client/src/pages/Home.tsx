import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import International from '@/components/International';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Pricing />
        <Process />
        <International />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

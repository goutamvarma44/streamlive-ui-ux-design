
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedSection from '@/components/FeaturedSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-dark-blue to-dark-purple">
      <Header />
      <main className="flex-1 pt-16">
        <HeroSection />
        <FeaturedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

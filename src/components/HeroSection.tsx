
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Here you would integrate with your recommendation engine
  };

  return (
    <section className="relative py-20 px-4 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/80 to-dark-purple/90 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent-purple/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-accent-gold/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 tracking-tight">
          Tell us a movie or series you love, <br/>
          and we'll recommend your next binge
        </h2>
        
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-2 max-w-2xl mx-auto glass p-2">
          <div className="relative flex-1 w-full">
            <Input
              type="text"
              placeholder="Enter a movie or TV show you enjoyed..."
              className="pl-10 py-6 bg-transparent border-0 shadow-none focus-visible:ring-0 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/60" />
          </div>
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-accent-purple hover:bg-accent-purple/80 text-white font-medium py-6"
          >
            Find Recommendations
          </Button>
        </form>
        
        <p className="mt-4 text-sm text-foreground/70">
          Powered by intelligent matching and user preferences
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

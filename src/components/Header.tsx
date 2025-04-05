
import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full py-4 px-4 md:px-6 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-lg bg-black/40 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
          <h1 className={`text-2xl lg:text-4xl logo-gradient md:text-2xl font-semibold transition-all duration-500 ${
            scrolled ? 'scale-90' : ''
          }`}>
            StreamLive
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors relative group">
            Movies
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors relative group">
            TV Shows
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors relative group">
            My List
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold group-hover:w-full transition-all duration-300"></span>
          </a>
          <Button variant="ghost" size="icon" className="hover:bg-accent-purple/20 transition-colors duration-300">
            <Search className="h-5 w-5 text-foreground/70 hover:text-accent-gold transition-colors duration-300" />
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent-purple/20">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-dark-purple/95 backdrop-blur-xl border-accent-purple/20">
              <div className="flex flex-col space-y-8 mt-8">
                <a href="#" className="text-foreground text-xl py-2 border-b border-accent-purple/20 hover:text-accent-gold transition-colors">
                  Home
                </a>
                <a href="#" className="text-foreground text-xl py-2 border-b border-accent-purple/20 hover:text-accent-gold transition-colors">
                  Movies
                </a>
                <a href="#" className="text-foreground text-xl py-2 border-b border-accent-purple/20 hover:text-accent-gold transition-colors">
                  TV Shows
                </a>
                <a href="#" className="text-foreground text-xl py-2 border-b border-accent-purple/20 hover:text-accent-gold transition-colors">
                  My List
                </a>
                <div className="relative mt-4">
                  <Input type="text" placeholder="Search..." className="bg-dark-blue/50 border-accent-purple/20 pl-10" />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/60" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

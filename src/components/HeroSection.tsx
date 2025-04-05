
import React, { useState, useEffect } from 'react';
import { Search, Film, Sparkles, Star, PlayCircle, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 15;
      const y = (e.clientY / window.innerHeight) * 15;
      setBackgroundPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      toast({
        title: "Finding your next binge!",
        description: `Searching recommendations based on "${searchQuery}"`,
      });
      // Here you would integrate with your recommendation engine
    } else {
      toast({
        variant: "destructive",
        title: "Search field empty",
        description: "Please enter a movie or TV show you enjoyed",
      });
    }
  };
  
  const handleInputFocus = () => setIsTyping(true);
  const handleInputBlur = () => setIsTyping(false);
  
  // Popular suggestions for animation
  const suggestions = ["Stranger Things", "Game of Thrones", "Breaking Bad", "The Mandalorian", "Squid Game"];
  
  return (
    <section className="relative py-20 px-4 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/80 to-dark-purple/90 -z-10"></div>
      
      {/* Animated floating elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 -z-10"
        style={{ 
          transform: `translate(${-backgroundPosition.x}px, ${-backgroundPosition.y}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent-purple/20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-accent-gold/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent-purple/30 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-accent-gold/20 blur-2xl animate-pulse"></div>
      </div>
      
      {/* Floating media icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-5">
        <div className="absolute top-[15%] left-[10%] animate-float opacity-20">
          <Star className="text-accent-gold w-8 h-8" />
        </div>
        <div className="absolute top-[25%] right-[15%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <PlayCircle className="text-accent-purple w-10 h-10" />
        </div>
        <div className="absolute bottom-[20%] left-[20%] animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
          <Film className="text-accent-gold w-12 h-12" />
        </div>
        <div className="absolute bottom-[30%] right-[25%] animate-float opacity-20" style={{ animationDelay: '0.7s' }}>
          <TrendingUp className="text-accent-purple w-8 h-8" />
        </div>
      </div>
      
      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <div className="mb-8 flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-accent-gold mr-2 animate-pulse" />
          <span className="text-accent-gold font-medium text-sm md:text-base">Personalized Recommendations</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
          <span className="text-gradient">Find Your Next Favorite Watch</span>
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Tell us what you love, and we'll unlock a world of entertainment tailored just for you
        </p>
        
        <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row items-center gap-2 max-w-2xl mx-auto glass p-2 shadow-lg shadow-accent-purple/10 hover:shadow-accent-purple/20 transition-all duration-300">
          <div className="relative flex-1 w-full group">
            <Input 
              type="text" 
              placeholder="Enter a movie or TV show you enjoyed..." 
              className="pl-10 py-6 bg-transparent border-0 shadow-none focus-visible:ring-0 text-base" 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/60 group-hover:text-accent-gold transition-colors duration-300" />
            
            {/* Suggested terms animation */}
            {!searchQuery && (
              <div className="absolute -bottom-8 left-0 w-full text-xs text-foreground/50 overflow-hidden h-6 pointer-events-none">
                <div className="flex flex-col animate-marquee">
                  {suggestions.map((suggestion, index) => (
                    <span key={index} className="my-1 text-start pl-10">Try: {suggestion}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full sm:w-auto bg-accent-purple hover:bg-accent-purple/80 text-white font-medium py-6 group transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Recommendations
              <Film className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 w-0 bg-accent-gold group-hover:w-full transition-all duration-300 -z-0 transform skew-x-12"></span>
          </Button>
        </form>
        
        <div className="mt-12 flex items-center justify-center gap-4 text-xs md:text-sm text-foreground/50">
          <div className="flex items-center glass px-3 py-2 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-accent-purple mr-2"></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center glass px-3 py-2 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-accent-gold mr-2"></div>
            <span>Personalized Results</span>
          </div>
          <div className="flex items-center glass px-3 py-2 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer">
            <div className="w-2 h-2 rounded-full bg-accent-purple mr-2"></div>
            <span>Instant Matches</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

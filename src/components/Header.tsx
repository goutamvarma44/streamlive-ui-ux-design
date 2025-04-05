import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const Header = () => {
  return <header className="w-full py-4 px-4 md:px-6 z-10 text-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
          <h1 className="text-2xl lg:text-4xl logo-gradient md:text-2xl font-semibold">
            StreamLive
          </h1>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
            Movies
          </a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
            TV Shows
          </a>
          <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
            My List
          </a>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>;
};
export default Header;
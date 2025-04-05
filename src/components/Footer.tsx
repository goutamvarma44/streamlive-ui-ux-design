
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold logo-gradient mb-4">StreamLive</h2>
            <p className="text-sm text-foreground/70">
              Your personal guide to finding your next favorite movie or series.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground">Movies</a></li>
              <li><a href="#" className="hover:text-foreground">TV Shows</a></li>
              <li><a href="#" className="hover:text-foreground">Documentaries</a></li>
              <li><a href="#" className="hover:text-foreground">Kids</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">© 2025 StreamLive. All rights reserved.</p>
          <p className="text-sm text-foreground/60 mt-2 md:mt-0">
            <a href="https://stream.varma.live" className="hover:text-foreground">stream.varma.live</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

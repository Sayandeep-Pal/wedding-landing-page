import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        paddingTop: '64px', // Account for header height
      }}
    >
      {/* Parallax background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://media.istockphoto.com/id/1688098382/photo/closeup-of-indian-wedding-couple-holding-hands.jpg?s=612x612&w=0&k=20&c=ROKeVN0SqN4XvFDrriqYFJDOGxwYubyLNglimwRaPlY=')`,
          transform: `translateY(${offset}px)`,
          height: `calc(100% + 200px)`,
          top: '0px'
        }}
      >
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div 
          className="max-w-3xl mx-auto p-8 rounded-lg bg-white/10 dark:bg-slate-900/30 border border-white/20 dark:border-slate-700/30"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Creating Unforgettable Wedding Moments
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Let us help you celebrate the most beautiful day of your life with elegance and style.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
              Plan Your Wedding
            </Button>
            <Button variant="outline" size="lg">
              View Our Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
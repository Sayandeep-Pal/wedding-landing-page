import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { Calendar, Users, Camera, Music, UtensilsCrossed, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-rose-500 dark:text-rose-400" />,
      title: 'Wedding Planning',
      description: 'Full-service wedding planning tailored to your vision and budget.',
    },
    {
      icon: <Users className="h-10 w-10 text-rose-500 dark:text-rose-400" />,
      title: 'Day-of Coordination',
      description: 'Professional coordination to ensure your wedding day runs smoothly.',
    },
    {
      icon: <Camera className="h-10 w-10 text-rose-500 dark:text-rose-400" />,
      title: 'Photography & Video',
      description: 'Capture every moment with our professional photography and videography.',
    },
    {
      icon: <Music className="h-10 w-10 text-rose-500 dark:text-rose-400" />,
      title: 'Entertainment',
      description: 'Live music, DJs, and entertainment options for your celebration.',
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10 text-rose-500 dark:text-rose-400" />,
      title: 'Catering',
      description: 'Exquisite menus and beverage packages tailored to your preferences.',
    },
    {
      icon: <Palette className="h-10 w-10 text-rose-500 dark:text-rose-400" />,
      title: 'Decor & Styling',
      description: 'Transform your venue with our beautiful decor and styling services.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 dark:text-white mb-4">
            Our Wedding Services
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            We offer a comprehensive range of wedding services to make your special day perfect.
            From planning to execution, we take care of every detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
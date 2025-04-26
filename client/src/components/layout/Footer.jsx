import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { HeartIcon } from 'lucide-react';
import { HeartPulseIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-rose-400" />
              <span className="ml-2 text-xl font-serif font-bold">
                Forever<span className="text-rose-400">Wed</span>
              </span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Creating unforgettable wedding experiences tailored to your unique style and vision.
              Let us help you celebrate the most beautiful day of your life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-rose-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-rose-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-rose-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-rose-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-rose-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-300 hover:text-rose-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-rose-400 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-rose-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-rose-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-rose-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">123 Wedding Lane, Suite 101<br />Celebration City, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-rose-400 mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-slate-300 hover:text-rose-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-rose-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@foreverwed.com" className="text-slate-300 hover:text-rose-400 transition-colors">
                  info@foreverwed.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} ForeverWed. All rights reserved. Designed with <Heart className="h-4 w-4 text-rose-400 inline" /> for happy couples.
          </p>
          <br />
          <p className='text-slate-500 text-sm'>Made with <HeartPulseIcon className="h-4 w-4 text-rose-400 inline" /> by Sayandeep</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
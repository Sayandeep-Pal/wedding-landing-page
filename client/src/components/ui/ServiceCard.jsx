import React from 'react';
import Button from './Button';


const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-100 dark:border-slate-700 group">
      <div className="p-6">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-white mb-2 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {description}
        </p>
        <div className="mb-6">
          <span className="text-lg font-semibold text-rose-500 dark:text-rose-400">
            {price}
          </span>
        </div>
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
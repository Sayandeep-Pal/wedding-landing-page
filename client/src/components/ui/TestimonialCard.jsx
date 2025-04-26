import React from 'react';


const TestimonialCard = ({ name, date, image, text, rating }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-md mx-auto max-w-3xl">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md" 
          />
        </div>
        
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-serif font-semibold text-slate-800 dark:text-white">
                {name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{date}</p>
            </div>
            
            <div className="flex mt-2 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          <blockquote>
            <p className="text-slate-600 dark:text-slate-300 italic">
              "{text}"
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    name: 'Sourav & Snigdha',
    date: 'June 2024',
    image: 'https://www.redveds.com/wp-content/uploads/2023/09/DSC05563-scaled-6-1.jpeg',
    text: 'Our wedding day was absolutely perfect thanks to the incredible team. Every detail was taken care of, allowing us to simply enjoy our special day without any stress.',
    rating: 5,
  },
  {
    name: 'Anil & Aparna',
    date: 'April 2024',
    image: 'https://d397bfy4gvgcdm.cloudfront.net/87971-PriMik_Wedding_Portraits-27.jpeg',
    text: 'We cannot thank the team enough for making our wedding dreams come true. The venue looked stunning, and the coordination was flawless. Our guests are still talking about it!',
    rating: 5,
  },
  {
    name: 'Tapas & Suparna',
    date: 'September 2023',
    image: 'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'From our first meeting to the big day, the attention to detail was impeccable. They listened to our vision and executed it perfectly, even with our tight budget.',
    rating: 4,
  },
  {
    name: 'Nirmal & Prajakta',
    date: 'July 2023',
    image: 'https://images.pexels.com/photos/1707446/pexels-photo-1707446.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'Our destination wedding seemed like an impossible task, but they made it happen seamlessly. The planning process was smooth, and they handled all the logistics beautifully.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null); // Ref for the container

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(goToNext, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current); // Clear interval on hover
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    autoPlayRef.current = setInterval(goToNext, 5000); // Restart interval on leave
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }

    if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 dark:text-white mb-4">
            Love Stories from Our Couples
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Read what our happy couples have to say about their wedding experience with us.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out" // Modified transition
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
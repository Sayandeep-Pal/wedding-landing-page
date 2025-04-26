import React, { useState } from 'react';
import Button from '../ui/Button';
import {  Users, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');

    const validate = (data) => {
        const newErrors = {};
        
        if (!data.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!data.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            newErrors.email = 'Email address is invalid';
        }
        
        if (!data.message.trim()) {
            newErrors.message = 'Message is required';
        }
        
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setValues({
            ...values,
            [name]: value,
        });
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: undefined,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validate(values);
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                setSubmitStatus('success');
                setValues({
                    name: '',
                    email: '',
                    message: '',
                });
                console.log(values)
            } catch (error) {
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
                // setTimeout(() => setSubmitStatus('idle'), 5000);
            }
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 dark:text-white mb-4">
                        Let's Plan Your Wedding
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
                        Contact us to start planning your dream wedding. We'll work with you to create a day that's uniquely yours.
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 md:p-8">
                            {submitStatus === 'success' ? (
                                <div className="text-center p-6">
                                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                                        <svg className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-slate-800 dark:text-white mb-2">Thank you!</h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        Your message has been sent successfully. We'll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Users className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-2 border ${
                                                    errors.name ? 'border-red-300 dark:border-red-700' : 'border-slate-300 dark:border-slate-600'
                                                } rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-700 dark:text-white sm:text-sm`}
                                                placeholder="John and Jane Smith"
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-2 border ${
                                                    errors.email ? 'border-red-300 dark:border-red-700' : 'border-slate-300 dark:border-slate-600'
                                                } rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-700 dark:text-white sm:text-sm`}
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                                        )}
                                    </div>
                                
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                            Your Message
                                        </label>
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 pointer-events-none">
                                                <MessageSquare className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={values.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className={`block w-full pl-10 pr-3 py-2 border ${
                                                    errors.message ? 'border-red-300 dark:border-red-700' : 'border-slate-300 dark:border-slate-600'
                                                } rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500 dark:bg-slate-700 dark:text-white sm:text-sm`}
                                                placeholder="Tell us about your wedding plans and how we can help..."
                                            />
                                        </div>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                                        )}
                                    </div>
                                    
                                    {submitStatus === 'error' && (
                                        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                                            <p className="text-sm text-red-600 dark:text-red-400">
                                                There was an error submitting your form. Please try again.
                                            </p>
                                        </div>
                                    )}
                                    
                                    <div className="flex justify-end">
                                        <Button 
                                            type="submit" 
                                            variant="primary" 
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

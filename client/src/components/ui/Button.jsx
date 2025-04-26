import React from 'react';

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
    
    const variantClasses = {
        primary: 'bg-rose-500 hover:bg-rose-600 text-white border border-transparent focus:ring-rose-500',
        secondary: 'bg-slate-700 hover:bg-slate-800 text-white border border-transparent focus:ring-slate-500 dark:bg-slate-600 dark:hover:bg-slate-700',
        outline: 'bg-transparent hover:bg-rose-50 text-rose-500 border border-rose-500 focus:ring-rose-500 dark:text-rose-400 dark:border-rose-400 dark:hover:bg-rose-950/20',
        ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 border border-transparent focus:ring-slate-500 dark:text-slate-200 dark:hover:bg-slate-800',
    };
    
    const sizeClasses = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
    };
    
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    return (
        <button className={combinedClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'gradient';
  className?: string;
  icon?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon = true,
  onClick 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-sm tracking-wide transform active:scale-95";
  
  const variants = {
    primary: "bg-tp-blue text-white hover:bg-tp-purple shadow-lg shadow-tp-blue/20",
    outline: "border border-slate-300 text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900",
    ghost: "text-tp-blue hover:text-tp-pink bg-transparent px-0",
    gradient: "bg-gradient-to-r from-tp-blue via-tp-purple to-tp-pink text-white hover:shadow-xl hover:shadow-tp-purple/20",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};
import React from 'react';
import logo from  "../src/assets/img/logo-tp2-white.png";
import "../src/assets/css/style-techprover.css"

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", lightMode = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logo} className="logo-techplover"/>
    </div>
  );
};
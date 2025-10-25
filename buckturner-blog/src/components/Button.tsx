import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  disabled = false
}) => {
  return (
    <button 
      onClick={onClick}
      className={`retro-button retro-button-${variant} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

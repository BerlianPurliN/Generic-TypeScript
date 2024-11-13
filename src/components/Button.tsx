"use client";
import React from 'react';

interface ButtonProps<T extends keyof typeof variants> {
  variant: T;
  children: React.ReactNode;
};


const variants = {
  primary: 'bg-blue-500 hover:bg-blue-600 transition-colors duration-300 ease-in-out',
  secondary: 'bg-gray-500 hover:bg-gray-600 transition-colors duration-300 ease-in-out',
  error: 'bg-red-500 hover:bg-red-600 transition-colors duration-300 ease-in-out',
  success: 'bg-green-500 hover:bg-green-600 transition-colors duration-300 ease-in-out',
};

const Button: React.FC<ButtonProps<keyof typeof variants>> = ({ variant, children }) => {
  return (
    <button className={`py-2 px-4 rounded-full text-white ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
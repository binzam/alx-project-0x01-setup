import { ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-700 px-4 py-2 rounded-full text-white"
    >
      {label}
    </button>
  );
};

export default Button;

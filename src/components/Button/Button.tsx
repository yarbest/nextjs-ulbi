import React from 'react';
import s from './Button.module.scss';

// Позволит передавать в пропсы стандартные атрибуты для кнопки (disabled, type) не прописывая их в своем интерфейсе
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  // Такой синтаксис позволяет добавить description в story book в раздел Docs
  /**Отключение кнопки */
  disabled: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

/**Крутая кнопка */
export const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <button className={variant === 'primary' ? s.btnPrimary : ''} {...props}>
      {children}
    </button>
  );
};

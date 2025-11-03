// components/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
    targetPath?: string;
    className?: string;
    showText?: boolean;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

const BackButton: React.FC<BackButtonProps> = ({
    targetPath = '/',
    className = '',
    showText = false,
    position = 'bottom-right'
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(targetPath);
    };

    // Estilos de posición
    const getPositionStyles = () => {
        switch (position) {
            case 'bottom-left':
                return 'bottom-6 left-6';
            case 'top-right':
                return 'top-6 right-6';
            case 'top-left':
                return 'top-6 left-6';
            default: // bottom-right
                return 'bottom-6 right-6';
        }
    };

    // Tamaño basado en si muestra texto o no
    const getSizeStyles = () => {
        return showText
            ? 'px-4 py-2 rounded-lg'
            : 'w-12 h-12 rounded-full';
    };

    return (
        <button
            onClick={handleClick}
            className={`
        fixed flex items-center gap-2 
        shadow-lg z-50
        transition-all duration-200 
        hover:scale-105 active:scale-95 hover:text-white hover:border-none
        ${getPositionStyles()}
        ${getSizeStyles()}
        ${className}
      `}
            aria-label="Volver atrás"
        >
            <svg
                className={`${showText ? 'w-5 h-5' : 'w-6 h-6 mx-auto'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>

            {showText && <span className="whitespace-nowrap">Atrás</span>}
        </button>
    );
};

export default BackButton;
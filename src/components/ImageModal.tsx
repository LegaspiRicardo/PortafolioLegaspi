import { useEffect } from 'react';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
    title?: string;
}

export default function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title }: ImageModalProps) {
    // Cerrar modal con ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            {/* Overlay - cierra al hacer click fuera */}
            <div
                className="absolute inset-0"
                onClick={onClose}
            />

            {/* Contenedor del modal */}
            <div className="relative z-10 max-w-6xl max-h-full">
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-green-300 transition-colors p-2"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Título (opcional) */}
                {title && (
                    <div className="absolute -top-12 left-0 text-white">
                        <h3 className="text-lg font-semibold">{title}</h3>
                    </div>
                )}

                {/* Imagen */}
                <div className="bg-white rounded-lg overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-auto max-h-[80vh] object-contain"
                    />
                </div>

                {/* Controles */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70">
                    Haz click fuera o presiona ESC para cerrar
                </div>
            </div>
        </div>
    );
}
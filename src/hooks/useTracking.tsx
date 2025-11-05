import { useEffect } from 'react';

// Declarar fbq en el objeto window para TypeScript
declare global {
    interface Window {
        fbq: any;
    }
}

export const useTracking = () => {
    // Verificar que fbq esté disponible
    useEffect(() => {
        if (typeof window.fbq === 'undefined') {
            console.warn('Meta Pixel no está cargado');
        }
    }, []);

    const trackContactForm = () => {
        // Meta Pixel
        if (typeof window.fbq !== 'undefined') {
            window.fbq('track', 'Lead', {
                value: 100.00,
                currency: 'USD',
                content_name: 'Formulario Contacto Portafolio'
            });
            console.log('Meta Pixel: Lead event tracked');
        }
    };

    const trackDownloadCV = () => {
        // Meta Pixel
        if (window.fbq) {
            window.fbq('track', 'Lead', {
                value: 50.00,
                currency: 'USD',
                content_name: 'Descarga CV Ricardo Legaspi'
            });
            console.log('Meta Pixel: CV Download tracked');
        }
    };

    const trackProjectView = (projectName: string) => {
        // Meta Pixel
        if (window.fbq) {
            window.fbq('track', 'ViewContent', {
                content_name: projectName,
                content_category: 'Proyecto Portafolio',
                value: 25.00
            });
            console.log('Meta Pixel: Project View tracked -', projectName);
        }
    };

    const trackPhoneClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact', {
                value: 80.00,
                currency: 'USD',
                content_name: 'Click Teléfono Header'
            });
            console.log('Meta Pixel: Phone Click tracked');
        }
    };

    const trackEmailClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact', {
                value: 70.00,
                currency: 'USD',
                content_name: 'Click Email Header'
            });
            console.log('Meta Pixel: Email Click tracked');
        }
    };

    const trackWhatsAppClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact', {
                value: 90.00,
                currency: 'USD',
                content_name: 'Click WhatsApp Button'
            });
            console.log('Meta Pixel: WhatsApp Click tracked');
        }
    };

    return {
        trackContactForm,
        trackDownloadCV,
        trackProjectView,
        trackPhoneClick,
        trackEmailClick,
        trackWhatsAppClick
    };
};
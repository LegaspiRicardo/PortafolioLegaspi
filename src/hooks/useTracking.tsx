import { useEffect } from 'react';
declare global {
    interface Window {
        fbq: any;
        gtag: any;
    }
}

export const useTracking = () => {
    useEffect(() => {
        if (typeof window.fbq === 'undefined') {
            console.warn('Meta Pixel no está cargado');
        }
        if (typeof window.gtag === 'undefined') {
            console.warn('Google Analytics no está cargado');
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

        // Google Analytics
        if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'generate_lead', {
                currency: 'USD',
                value: 100.00
            });
            console.log('Google Analytics: generate_lead event tracked');
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

        // Google Analytics
        if (window.gtag) {
            window.gtag('event', 'file_download', {
                file_name: 'CV_Ricardo_Legaspi.pdf',
                file_extension: 'pdf'
            });
            console.log('Google Analytics: file_download event tracked');
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

        // Google Analytics
        if (window.gtag) {
            window.gtag('event', 'view_item', {
                items: [{
                    item_name: projectName,
                    category: 'Proyecto'
                }]
            });
            console.log('Google Analytics: view_item event tracked -', projectName);
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

        if (window.gtag) {
            window.gtag('event', 'contact', {
                method: 'phone'
            });
            console.log('Google Analytics: contact event tracked - phone');
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

        if (window.gtag) {
            window.gtag('event', 'contact', {
                method: 'email'
            });
            console.log('Google Analytics: contact event tracked - email');
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

        if (window.gtag) {
            window.gtag('event', 'contact', {
                method: 'whatsapp'
            });
            console.log('Google Analytics: contact event tracked - whatsapp');
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
import { useEffect, useState } from "react";
import AnimatedContent from "../components/AnimatedContent";
import ImageModal from "../components/ImageModal";
import BackButton from "../components/BackButton";

export default function DetalleRadicalBoards() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

    // Scroll al top al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const technologies = ["PHP", "Laravel", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Eloquent ORM"];

    const features = [
        "Muestra de catálogo de tablas, accesorios y ropa urbana",
        "Sistema de filtros por categorías y precios",
        "Páginas de detalle de producto con galería de imágenes",
        "Diseño responsivo para móviles y desktop",
        "Sección de eventos y competencias de skate",
        "Foro comunitario para skaters",
        "Panel de administración para gestión de productos",
        "Sistema de gestión de inventario"
    ];

    const projectHighlights = [
        {
            icon: "📱",
            title: "Mobile First",
            description: "Diseño optimizado para dispositivos móviles"
        },
        {
            icon: "⚡",
            title: "Rendimiento",
            description: "Optimizado para carga rápida y experiencia fluida"
        }
    ];

    // Array de imágenes definido fuera del return
    const images = [
        {
            src: "/images/tiendaSkate/homedesktop.png",
            alt: "Página home tienda skate",
            title: "Home Principal",
            description: "Diseño atractivo y moderno para la página de inicio"
        },
        {
            src: "/images/tiendaSkate/store.png",
            alt: "Tienda skate",
            title: "Catálogo de Productos",
            description: "Vista completa de la tienda con todos los productos"
        },
        {
            src: "/images/tiendaSkate/events.png",
            alt: "Sección eventos",
            title: "Eventos y Competencias",
            description: "Sección dedicada a eventos del mundo del skate"
        },
        {
            src: "/images/tiendaSkate/foro.png",
            alt: "Sección foro",
            title: "Foro Comunitario",
            description: "Espacio para interacción entre skaters"
        }
    ];

    const openModal = (image: { src: string; alt: string; title: string }) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900/80 to-amber-900/40 text-white">

            {/* Botón volver */}
            <BackButton
                targetPath="/"
                showText={true}
                position="bottom-left"
                className="bg-amber-200 text-gray-800 hover:bg-sky-600 hover:text-white"
            />
            {/* Image Modal */}
            <ImageModal
                isOpen={selectedImage !== null}
                onClose={closeModal}
                imageSrc={selectedImage?.src || ""}
                imageAlt={selectedImage?.alt || ""}
                title={selectedImage?.title}
            />

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <div className="text-center mb-8">
                            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent mb-6">
                                Radical Boards
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-amber-400 mx-auto mb-8 rounded-full"></div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent distance={80} direction="horizontal" duration={1.2} delay={0.3}>
                        <div className="bg-white/5 backdrop-blur-lg border border-sky-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
                            <p className="text-xl text-sky-200 text-justify leading-relaxed">
                                Diseño de tienda online especializada en skates, tablas, accesorios y ropa urbana para skaters.
                                Catálogo extenso, diseño moderno y experiencia de usuario
                                optimizada para dispositivos móviles y escritorio.
                            </p>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Galería de imágenes */}
            <section className="py-16 px-4 bg-gray-800/30">
                <div className="max-w-6xl mx-auto">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent mb-4">
                                Galería del Sitio Web
                            </h2>
                            <p className="text-sky-200 text-lg">
                                Haz click en cualquier imagen para verla en tamaño completo
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {images.map((image: { src: string; alt: string; title: string }, index: number) => (
                            <AnimatedContent
                                key={image.src}
                                distance={60}
                                direction="vertical"
                                duration={0.8}
                                delay={index * 0.2}
                            >
                                <div
                                    className="group bg-white/5 backdrop-blur-lg border border-sky-500/20 rounded-xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                    onClick={() => openModal(image)}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-amber-600/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                            <div className="text-center text-white p-4">
                                                <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                                                <p className="text-sm opacity-90">Click para expandir</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* Características principales */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent mb-6">
                                Características Principales
                            </h2>
                        </div>
                    </AnimatedContent>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {projectHighlights.map((highlight: { icon: string; title: string; description: string }, index: number) => (
                            <AnimatedContent
                                key={highlight.title}
                                distance={60}
                                direction="up"
                                duration={0.8}
                                delay={index * 0.2}
                            >
                                <div className="bg-white/5 backdrop-blur-lg border border-sky-500/20 rounded-xl p-6 text-center hover:border-amber-400/50 hover:scale-105 transition-all duration-300 h-full">
                                    <div className="text-4xl mb-4">{highlight.icon}</div>
                                    <h3 className="text-xl font-semibold text-amber-300 mb-3">{highlight.title}</h3>
                                    <p className="text-gray-300 text-sm">{highlight.description}</p>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Funcionalidades detalladas */}
                        <AnimatedContent distance={80} direction="left" duration={1.2}>
                            <div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent mb-6">
                                    Funcionalidades del Sistema
                                </h3>
                                <div className="space-y-4">
                                    {features.map((feature: string, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-sky-500/10 hover:border-amber-400/30 transition-all duration-300 hover:scale-105"
                                        >
                                            <span className="text-amber-400 mt-1 flex-shrink-0">✓</span>
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedContent>

                        {/* Tecnologías y Stack */}
                        <AnimatedContent distance={80} direction="right" duration={1.2} delay={0.2}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent mb-6">
                                        Stack Tecnológico
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {technologies.map((tech: string, index: number) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-sky-900/30 text-sky-300 rounded-full border border-sky-700/50 text-sm font-medium hover:bg-amber-900/50 hover:scale-105 transition-all duration-300"
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Detalles Técnicos */}
                                <div className="bg-white/5 backdrop-blur-lg border border-sky-500/20 rounded-xl p-6">
                                    <h4 className="text-xl font-semibold text-amber-300 mb-4">Arquitectura del Proyecto</h4>
                                    <div className="space-y-3 text-gray-300">
                                        <div className="flex justify-between py-2 border-b border-sky-500/10">
                                            <span>Backend:</span>
                                            <span className="text-amber-300 font-medium">PHP + Laravel</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-sky-500/10">
                                            <span>Base de datos:</span>
                                            <span className="text-amber-300 font-medium">MySQL</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-sky-500/10">
                                            <span>Frontend:</span>
                                            <span className="text-amber-300 font-medium">HTML5, CSS3, JavaScript</span>
                                        </div>
                                        <div className="flex justify-between py-2">
                                            <span>Framework CSS:</span>
                                            <span className="text-amber-300 font-medium">Bootstrap</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gray-800/30">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent mb-6">
                            ¿Le gustaría tener un e-commerce?
                        </h2>
                        <p className="text-sky-200 text-lg mb-8 max-w-2xl mx-auto text-center">
                            Puedo desarrollar una tienda online personalizada para su negocio.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r hover:text-white from-sky-600 to-amber-500 hover:from-sky-700 hover:to-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <span>← Volver al portafolio</span>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=523320853721&text=¡Hola!%20ví%20tu%20portafolio%20y%20me%20interesa%20contactarte%20para%20un%20proyecto%20de%20desarrollo%20web.%20¿Podrías%20darme%20más%20información%20sobre%20tus%20servicios?"
                                className="inline-flex items-center justify-center bg-white/10 hover:text-white hover:bg-white/20 border border-amber-500/30 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105" target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Solicitar cotización</span>
                            </a>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-sky-700/30 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex flex-col items-center gap-4 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl">Ing. Ricardo Legaspi</span>
                        </div>
                        <p className="text-amber-200">
                            Especialista en desarrollo de e-commerce y aplicaciones web
                        </p>
                    </div>

                    <div className="border-t border-sky-700/30 pt-8">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Portafolio - RL. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
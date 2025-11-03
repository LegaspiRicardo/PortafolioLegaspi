import { useEffect, useState } from "react";
import AnimatedContent from "../components/AnimatedContent";
import ImageModal from "../components/ImageModal";
import BackButton from "../components/BackButton";

export default function DetalleDDS() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

    // Scroll al top al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const technologies = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design", "UX/UI Design", "SEO Optimization"];

    const features = [
        "Diseño moderno y profesional para empresa de servicio diesel",
        "Sección de servicios con carrusel interactivo",
        "Catálogo de marcas de refacciones",
        "Sistema de contacto integrado con formulario funcional",
        "Diseño responsivo para todos los dispositivos",
        "Integración de Google Maps para ubicación del negocio",
        "Botón de WhatsApp flotante para comunicación inmediata",
        "Optimización para motores de búsqueda (SEO)"
    ];

    const projectHighlights = [
        {
            icon: "🚛",
            title: "Especializado Diesel",
            description: "Diseño enfocado en el sector de servicio pesado"
        },
        {
            icon: "⚡",
            title: "Alto Rendimiento",
            description: "Optimizado para carga rápida y experiencia fluida"
        },
        {
            icon: "📱",
            title: "Mobile First",
            description: "Diseño perfecto en dispositivos móviles"
        }
    ];

    const technicalDetails = [
        { label: "Tipo de Proyecto", value: "Sitio Web Corporativo" },
        { label: "Industria", value: "Servicio Automotriz Diesel" },
        { label: "Tecnologías", value: "HTML5, CSS3, JavaScript" },
        { label: "Framework", value: "React + Tailwind CSS" },
        { label: "Característica", value: "Diseño Responsivo" },
        { label: "Enfoque", value: "Experiencia de Usuario" }
    ];

    // Array de imágenes definido fuera del return
    const images = [
        {
            src: "/images/dds/homedds.png",
            alt: "Página principal DDS",
            title: "Página Principal",
            description: "Diseño moderno y atractivo para la página de inicio"
        },
        {
            src: "/images/dds/servicedds.png",
            alt: "Sección de servicios DDS",
            title: "Servicios Especializados",
            description: "Catálogo completo de servicios diesel y gasolina"
        },
        {
            src: "/images/dds/rescatedds.png",
            alt: "Sección de rescate urgente DDS",
            title: "Rescate Urgente",
            description: "Sección destacada para emergencias y contacto inmediato"
        },
        {
            src: "/images/dds/contactdds.png",
            alt: "Sección de contacto DDS",
            title: "Contacto y Ubicación",
            description: "Formulario de contacto e información de ubicación"
        },
        {
            src: "/images/dds/galeriadds.png",
            alt: "Sección de galería DDS",
            title: "Galería de fotos",
            description: "Sección de galería del sitio."
        },
        {
            src: "/images/dds/detalleserviciodds.PNG",
            alt: "Vista de sección detalle servicio",
            title: "Detalle de servicio",
            description: "Detalle de servicio."
        }
    ];

    const openModal = (image: { src: string; alt: string; title: string }) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/60 text-white">

            {/* Botón volver */}
            <BackButton
                targetPath="/"
                showText={true}
                position="bottom-left"
                className="bg-zinc-300 text-black hover:bg-green-700"
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
                            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                                Diesel Dynamics Service
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 rounded-full"></div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent distance={80} direction="horizontal" duration={1.2} delay={0.3}>
                        <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
                            <p className="text-xl text-green-200 text-justify leading-relaxed">
                                Sitio web para empresa especializada en servicio y mantenimiento de motores diesel.
                                Diseño moderno y funcional que refleja la profesionalidad y experiencia de más de 9 años en el sector.
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
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-4">
                                Diseño del Sitio Web
                            </h2>
                            <p className="text-green-200 text-lg">
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
                                    className="group bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                    onClick={() => openModal(image)}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
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
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                                Caracteristicas del negocio
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
                                <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/50 hover:scale-105 transition-all duration-300 h-full">
                                    <div className="text-4xl mb-4">{highlight.icon}</div>
                                    <h3 className="text-xl font-semibold text-green-300 mb-3">{highlight.title}</h3>
                                    <p className="text-gray-300 text-sm">{highlight.description}</p>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Funcionalidades */}
                        <AnimatedContent distance={80} direction="left" duration={1.2}>
                            <div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                                    Funcionalidades Implementadas
                                </h3>
                                <div className="space-y-4">
                                    {features.map((feature: string, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105"
                                        >
                                            <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedContent>

                        {/* Tecnologías y Detalles Técnicos */}
                        <AnimatedContent distance={80} direction="right" duration={1.2} delay={0.2}>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                                        Stack Tecnológico
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {technologies.map((tech: string, index: number) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-green-900/30 text-green-300 rounded-full border border-green-700/50 text-sm font-medium hover:bg-green-900/50 hover:scale-105 transition-all duration-300"
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Detalles Técnicos */}
                                <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6">
                                    <h4 className="text-xl font-semibold text-green-300 mb-4">Especificaciones del Proyecto</h4>
                                    <div className="space-y-3 text-gray-300">
                                        {technicalDetails.map((detail: { label: string; value: string }, index: number) => (
                                            <div key={index} className="flex justify-between items-center py-2 border-b border-green-500/10 last:border-b-0">
                                                <span className="text-green-200">{detail.label}:</span>
                                                <span className="text-green-300 font-medium">{detail.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Beneficios del diseño */}
            <section className="py-16 px-4 bg-gray-800/30">
                <div className="max-w-4xl mx-auto">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                                Impacto del Proyecto
                            </h2>
                        </div>
                    </AnimatedContent>

                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedContent distance={60} direction="left" duration={1} delay={0.2}>
                            <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-green-300 mb-4">Para el Cliente</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span>
                                        Presencia profesional en internet
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span>
                                        Mayor captación de clientes
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span>
                                        Comunicación 24/7 vía WhatsApp
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span>
                                        Catálogo de servicios siempre disponible
                                    </li>
                                </ul>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent distance={60} direction="right" duration={1} delay={0.4}>
                            <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-green-300 mb-4">Para el Negocio</h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span>
                                        Diferenciación competitiva
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span>
                                        Automatización de consultas
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span>
                                        Credibilidad y confianza
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-400">•</span>
                                        Base para crecimiento digital
                                    </li>
                                </ul>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                            ¿Necesita un sitio web similar?
                        </h2>
                        <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
                            Puedo crear una presencia web profesional para su negocio con todas las funcionalidades que necesite.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:text-white text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <span>← Volver al portafolio</span>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=523320853721&text=¡Hola!%20ví%20tu%20portafolio%20y%20me%20interesa%20contactarte%20para%20un%20proyecto%20de%20desarrollo%20web.%20¿Podrías%20darme%20más%20información%20sobre%20tus%20servicios?"
                                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-green-500/30 hover:text-white text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105" target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Solicitar cotización</span>
                            </a>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-green-700/30 py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex flex-col items-center gap-4 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl">Ing. Ricardo Legaspi</span>
                        </div>
                        <p className="text-green-200">
                            Especialista en desarrollo web y diseño de interfaces modernas
                        </p>
                    </div>

                    <div className="border-t border-green-700/30 pt-8">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Portafolio - RL. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
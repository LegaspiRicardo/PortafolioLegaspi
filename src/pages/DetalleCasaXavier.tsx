import { useEffect } from "react";
import AnimatedContent from "../components/AnimatedContent";

export default function DetalleCasaXavier() {
    // Scroll al top al cargar la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const technologies = ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"];

    const features = [
        "Sistema de gestión de inventario",
        "Panel de administración",
        "Gestión de empleados y usuarios",
        "Formularios de contacto ",
        "Diseño responsivo y adaptable",
        "Base de datos relacional "
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/60 text-white">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <div className="text-center mb-8">
                            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                                Casa Xavier
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 rounded-full"></div>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent distance={80} direction="horizontal" duration={1.2} delay={0.3}>
                        <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
                            <p className="text-xl text-green-200  leading-relaxed text-justify">
                                Tienda online especializada en plumas fuente y accesorios de escritura de alta calidad. 
                                Sistema completo con gestión de empleados y diseño moderno optimizado para la mejor experiencia de usuario.
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
                                Galería del Proyecto
                            </h2>
                            <p className="text-green-200 text-lg">
                                Capturas del sistema en funcionamiento
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                src: "/images/casaxavier/dashboard.PNG",
                                alt: "Dashboard principal Casa Xavier",
                                title: "Dashboard Principal"
                            },
                            {
                                src: "/images/casaxavier/employeermanager.PNG",
                                alt: "Gestión de empleados",
                                title: "Gestión de Empleados"
                            },
                            {
                                src: "/images/casaxavier/inventarioview.PNG",
                                alt: "Vista de inventario",
                                title: "Control de Inventario"
                            },
                            {
                                src: "/images/casaxavier/registermodal.PNG",
                                alt: "Formulario de registro",
                                title: "Formularios del Sistema"
                            }
                        ].map((image, index) => (
                            <AnimatedContent
                                key={image.src}
                                distance={60}
                                direction="vertical"
                                duration={0.8}
                                delay={index * 0.2}
                            >
                                <div className="group bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src={image.src} 
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                            <span className="text-white font-semibold text-lg">
                                                {image.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detalles y características */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Características */}
                        <AnimatedContent distance={80} direction="left" duration={1.2}>
                            <div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-8">
                                    Características
                                </h2>
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105"
                                        >
                                            <span className="text-green-400 mt-1">✓</span>
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedContent>

                        {/* Tecnologías y Stack */}
                        <AnimatedContent distance={80} direction="right" duration={1.2} delay={0.2}>
                            <div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                                    Tecnologías Utilizadas
                                </h3>
                                <div className="flex flex-wrap gap-3 mb-8">
                                    {technologies.map((tech, index) => (
                                        <span 
                                            key={tech}
                                            className="px-4 py-2 bg-green-900/30 text-green-300 rounded-full border border-green-700/50 text-sm font-medium hover:bg-green-900/50 hover:scale-105 transition-all duration-300"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Información del proyecto */}
                                <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6">
                                    <h4 className="text-xl font-semibold text-green-300 mb-4">Detalles Técnicos</h4>
                                    <div className="space-y-3 text-gray-300">
                                        <div className="flex justify-between">
                                            <span>Backend:</span>
                                            <span className="text-green-300">PHP + Laravel</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Base de datos:</span>
                                            <span className="text-green-300">MySQL</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Frontend:</span>
                                            <span className="text-green-300">HTML, CSS, JavaScript</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Framework CSS:</span>
                                            <span className="text-green-300">Bootstrap</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Arquitectura:</span>
                                            <span className="text-green-300">MVC</span>
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
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                            ¿Te gustó este proyecto?
                        </h2>
                        <p className="text-green-200 text-lg mb-8 max-w-2xl mx-auto">
                            Si necesita un sistema similar para su negocio o tiene un proyecto en mente, no dude en contactarme.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                                <span>← Volver al portafolio</span>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-green-500/30 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                <span>Contactar</span>
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
                            Desarrollo soluciones digitales innovadoras
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
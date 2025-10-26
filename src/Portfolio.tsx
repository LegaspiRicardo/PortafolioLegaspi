import { useState, useEffect } from "react";
import TextType from "./components/TextType";
import AnimatedContent from "./components/AnimatedContent";
import CircularGallery from "./components/CircularGallery";

// Componente WhatsAppButton con Tailwind - CORREGIDO
const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href="https://api.whatsapp.com/send?phone=523320853721&text=¡Hola!%20ví%20tu%20portafolio%20y%20me%20interesa%20contactarte%20para%20un%20proyecto%20de%20desarrollo%20web.%20¿Podrías%20darme%20más%20información%20sobre%20tus%20servicios?"
            target="_blank"
            rel="noopener noreferrer"
            className={`
                fixed top-24 right-6 z-50 flex items-center gap-2 
                bg-zinc-700 hover:bg-zinc-700 text-white 
                font-semibold rounded-full py-3 px-4
                transition-all duration-500 shadow-lg
                ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }
            `}
        >
            <img src="/images/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
            <span className="hidden sm:inline">WhatsApp</span>
        </a>
    );
};

// Componente de partículas con Tailwind
const BackgroundParticles = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 20}s`,
                        animationDuration: `${15 + Math.random() * 20}s`
                    }}
                />
            ))}
        </div>
    );
};

export default function Portfolio() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showMaskAnimation, setShowMaskAnimation] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const links = [
        { name: "Sobre mí", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ];

    const projects = [
        {
            title: "Casa Xavier",
            description: "Sistema gestor informativo con galería y detalles de productos. Desarrollado con PHP y Laravel.",
            image: "/images/casaxavier/dashboard.PNG",
            link: "/detalle-casa-xavier",
            tags: ["PHP", "Laravel", "MySQL"]
        },
        {
            title: "Radical Boards",
            description: "Diseño de E-commerce con gestión de productos, panel admin. Desarrollado con PHP y Laravel.",
            image: "/images/tiendaSkate/store.png",
            link: "/detalle-radical-boards",
            tags: ["PHP", "Laravel", "E-commerce"]
        },
        {
            title: "Dental Art",
            description: "Aplicación PWA para clínicas dentales con horarios, pacientes y servicios. Desarrollado con React y Tailwind.",
            image: "/images/clinicaDental/appointments.png",
            link: "/detalle-clinica-dental",
            tags: ["React", "PWA", "Tailwind"]
        },
        {
            title: "Epos Comercializadora",
            description: "Diseño de interfaz para un E-commerce con giro de birlos y tornillos automotrices.",
            image: "/images/tiendaepos/store.png",
            link: "/detalle-tienda-epos",
            tags: ["UI/UX", "E-commerce", "Design"]
        }
    ];

    // Detectar scroll y sección activa
    useEffect(() => {
        const handleScroll = () => {

            // Detectar sección activa
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animación de máscara
    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited");
        if (!hasVisited) {
            setShowMaskAnimation(true);
            sessionStorage.setItem("hasVisited", "true");
        }
    }, []);

    const handleMaskAnimationEnd = () => setShowMaskAnimation(false);

    return (
        <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/60 text-white overflow-x-hidden ${showMaskAnimation ? "animate-mask" : ""}`} onAnimationEnd={handleMaskAnimationEnd}>

            {/* Partículas de fondo */}
            <BackgroundParticles />

            {/* Navbar moderno */}
            <header className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-xl border-b border-green-700/30 z-50 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <a href="" className="text-white hover:text-green-500">
                                <span className="font-bold text-xl">Portafolio RL</span>
                            </a>
                        </div>

                        {/* Navigation - Desktop */}
                        <nav className="hidden md:flex items-center gap-8">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === link.href.substring(1)
                                        ? "text-green-400 bg-green-900/30"
                                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center gap-1">
                                <span className="w-full h-0.5 bg-current"></span>
                                <span className="w-full h-0.5 bg-current"></span>
                                <span className="w-full h-0.5 bg-current"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setSidebarOpen(false)}
                />

                {/* Sidebar */}
                <div className="relative w-80 h-full bg-gray-900 border-r border-green-700/30">
                    <div className="flex justify-between items-center p-6 border-b border-green-700/30">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl">Portafolio RL</span>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <nav className="p-6 space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === link.href.substring(1)
                                    ? "text-green-400 bg-green-900/30"
                                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                                    }`}
                                onClick={() => setSidebarOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-16">
                <div className="max-w-4xl mx-auto text-center">


                    {/* Typing animations */}
                    <TextType
                        text="¡Hola mundo!"
                        as="h1"
                        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-4"
                        typingSpeed={80}
                    />

                    <TextType
                        text="Bienvenidos a mi portafolio"
                        as="h2"
                        className="text-xl md:text-2xl text-green-200 mb-12"
                        typingSpeed={70}
                        initialDelay={1200}
                    />

                    {/* Hero Card */}
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0}
                        scale={0.8}
                        threshold={0.1}
                        delay={1.8}
                    >
                        <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-2xl p-8 md:p-12 max-w-md mx-auto">
                            <div className="space-y-6">
                                {/* Avatar 
                                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-1">
                                    <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">👨‍💻</span>
                                    </div>
                                </div>*/}

                                <div>
                                    <h2>Soy</h2>
                                    <h2 className="text-3xl font-bold text-white mb-2">Ricardo Legaspi</h2>
                                    <p className="text-green-200 text-lg">Ingeniero en Tecnologías de la Información</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="#projects"
                                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                                    >
                                        <span>Ver proyectos</span>
                                    </a>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=523320853721&text=¡Hola!%20ví%20tu%20portafolio%20y%20me%20interesa%20contactarte%20para%20un%20proyecto%20de%20desarrollo%20web.%20¿Podrías%20darme%20más%20información%20sobre%20tus%20servicios?"
                                        className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-green-500/30 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105" target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Contactar</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>

                {/* Scroll Indicator 
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>*/}
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-4">
                                Sobre mí
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                        </div>
                    </AnimatedContent>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Text Content */}
                        <AnimatedContent distance={80} direction="horizontal" duration={1.2} delay={0.2}>
                            <div className="space-y-6">
                                <p className="text-xl text-green-200 leading-relaxed text-justify">
                                    Me apasiona el desarrollo web, las interfaces de usuario, las bases de datos
                                    y el manejo de la información.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-justify">
                                    Mi objetivo en cada proyecto es diseñar y desarrollar soluciones innovadoras
                                    que aporten valor a empresas y usuarios. Combinando creatividad y tecnología
                                    para crear experiencias digitales excepcionales.
                                </p>
                            </div>
                        </AnimatedContent>

                        {/* Stats */}
                        <AnimatedContent distance={80} direction="horizontal" duration={1.2} delay={0.4}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6 text-center">
                                    <div className="text-3xl font-bold text-green-400 mb-2">2+</div>
                                    <div className="text-green-200 text-sm">Años de experiencia</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6 text-center">
                                    <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                                    <div className="text-green-200 text-sm">Proyectos completados</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6 text-center">
                                    <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                                    <div className="text-green-200 text-sm">Tecnologías dominadas</div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl p-6 text-center">
                                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                                    <div className="text-green-200 text-sm">Comprometido</div>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="pt-20 px-4 bg-gray-800/30">
                <div className="max-w-6xl mx-auto">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <div className="text-center ">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-4">
                                Habilidades y Tecnologías
                            </h3>
                            <p className="text-green-200 text-lg">
                                Tecnologías que uso para crear soluciones digitales
                            </p>
                        </div>
                    </AnimatedContent>

                    <AnimatedContent distance={80} direction="vertical" duration={1.2} delay={0.2}>
                        <div className="h-[500px]">
                            <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.2} />
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatedContent distance={80} direction="vertical" duration={1.2}>
                        <div className="text-center mb-16">
                            <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-4">
                                Proyectos Destacados
                            </h3>
                            <p className="text-green-200 text-lg">
                                Algunos de mis trabajos más recientes
                            </p>
                        </div>
                    </AnimatedContent>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <AnimatedContent
                                key={project.title}
                                distance={60}
                                direction="vertical"
                                duration={0.8}
                                delay={index * 0.1}
                            >
                                <a
                                    href={project.link}
                                    className="group block bg-white/5 backdrop-blur-lg border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/90 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                                            <div className="text-white font-semibold px-6 py-2 border-2 border-white rounded-lg group-hover:bg-white group-hover:text-green-600 transition-colors">
                                                Ver detalles →
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h4 className="font-bold text-xl mb-3 text-white group-hover:text-green-300 transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/50 group-hover:bg-green-800/50 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-gray-800/30">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <AnimatedContent distance={80} direction="horizontal" duration={1.2}>
                            <div>
                                <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-6">
                                    Trabajemos juntos
                                </h3>
                                <div className="space-y-4 text-gray-300">
                                    <p className="text-lg">
                                        ¿Necesita un sitio web para su negocio? ¿Busca atraer clientes con su página?
                                    </p>
                                    <p>
                                        Escríbame para conocer sus necesidades y potenciar su presencia en internet.
                                    </p>
                                </div>

                                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-green-500/20">
                                    <div className="flex items-center gap-3 text-green-200 text-center">
                                        <span>ricardolegaspi483@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>

                        {/* Contact Form */}
                        <AnimatedContent distance={80} direction="horizontal" duration={1.2} delay={0.2}>
                            <form
                                action="https://formsubmit.co/ricardolegaspi483@gmail.com"
                                method="POST"
                                className="space-y-6"
                            >
                                <div>
                                    <input
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-green-500/30 rounded-lg text-white placeholder-green-200 focus:outline-none focus:border-green-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="correo"
                                        placeholder="Correo electrónico"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-green-500/30 rounded-lg text-white placeholder-green-200 focus:outline-none focus:border-green-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="mensaje"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-green-500/30 rounded-lg text-white placeholder-green-200 focus:outline-none focus:border-green-500 transition-colors resize-none"
                                    />
                                </div>

                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value="https://tu-dominio.com/gracias" />

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    <span>Enviar mensaje</span>
                                </button>
                            </form>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            {/* WhatsApp Button */}
            <WhatsAppButton />

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

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-green-300 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="border-t border-green-700/30 pt-8">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} Portafolio - RL.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
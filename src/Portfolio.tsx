import { useState, useEffect } from "react";
import TextType from "./components/TextType";
import AnimatedContent from "./components/AnimatedContent";
import CircularGallery from "./components/CircularGallery";

import './components/TextType.css';
import './components/CircularGallery.css';

// Componente WhatsAppButton
const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar el botón después de 300px de scroll
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <a
            href="https://api.whatsapp.com/send?phone=523320853721&text=¡Hola!%20ví%20tu%20portafolio%20y%20me%20interesa%20contactarte%20para%20un%20proyecto%20de%20desarrollo%20web.%20¿Podrías%20darme%20más%20información%20sobre%20tus%20servicios?"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-500 fixed top-20 right-8 z-50 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
        >
            WhatsApp
        </a>
    );
};

export default function Portfolio() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const [showMaskAnimation, setShowMaskAnimation] = useState(false);

    const links = [
        { name: "Sobre mí", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ];

    // Detectar scroll para navbar móvil
    useEffect(() => {
        const handleScroll = () => setShowMobileNavbar(window.scrollY > 800);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animación de máscara solo la primera vez en la sesión
    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited");
        if (!hasVisited) {
            setShowMaskAnimation(true);
            sessionStorage.setItem("hasVisited", "true");
        }
    }, []);

    const handleMaskAnimationEnd = () => setShowMaskAnimation(false);

    return (
        <div
            id="background-mask"
            className={`font-sans text-gray-800 bg-gray-800 ${showMaskAnimation ? "animate-mask" : ""}`}
            onAnimationEnd={handleMaskAnimationEnd}
        >
            {/* NAVBAR desktop */}
            <header className="hidden lg:flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-50">
                <h1 className="text-xl font-bold">Portafolio Ricardo Legaspi</h1>
                <nav className="space-x-4">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-blue-600">
                            {link.name}
                        </a>
                    ))}
                </nav>
            </header>

            {/* NAVBAR móvil */}
            <header
                className={`fixed lg:hidden top-0 left-0 w-full flex justify-between items-center p-4 shadow-md bg-indigo-700 z-50 transition-transform duration-500 ${showMobileNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <a href="/" className="text-white"><h1 className="text-lg ">Portafolio RL</h1></a>
                <button className="text-white focus:outline-none bg-transparent" onClick={() => setSidebarOpen(true)}>
                    ☰
                </button>
            </header>

            {/* SIDEBAR móvil */}
            <div
                className={`fixed text-white top-0 left-0 w-64 h-full bg-gray-600 shadow-md z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="font-bold text-lg">Menú</h2>
                    <button onClick={() => setSidebarOpen(false)} className="text-gray-800 focus:outline-none bg-transparent">
                        ✖
                    </button>
                </div>
                <nav className="flex flex-col mt-4 space-y-2 px-4">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-blue-600 text-white" onClick={() => setSidebarOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* BIENVENIDA */}
            <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-800 to-indigo-600 text-white pb-24">
                <TextType
                    text="¡Hola mundo!"
                    as="h2"
                    className="text-4xl pt-72 mx-auto text-center"
                    typingSpeed={80}
                />

                <TextType
                    text="Bienvenidos a mi portafolio web"
                    as="h2"
                    className="text-2xl pt-4 pb-32 mx-auto text-center"
                    typingSpeed={70}
                    initialDelay={2000}
                />

                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.5}
                    ease="power3.out"
                    initialOpacity={0}
                    scale={0.1}
                    threshold={0.1}
                    delay={0.5}
                >
                    <div className="text-center mx-auto border w-10/12 border-gray-200 rounded-lg">
                        <div className="w-11/12 mx-auto">
                            <h2 className=" text-3xl font-bold mb-12 pt-4 text-center">Soy Ricardo Legaspi</h2>
                            <p className="text-2xl font-semibold text-center w-full mb-12 mx-auto">Ingeniero en Tecnologías de la Información</p>
                            <a href="#projects" className="bg-white text-md text-blue-600 px-6 py-2 mb-16 rounded-full font-semibold shadow hover:bg-gray-100">
                                Ver proyectos
                            </a>
                        </div>
                    </div>
                </AnimatedContent>
            </section>

            {/* SOBRE MI */}
            <section id="about" className="max-w-4xl mx-auto pt-36 pb-44 px-6 text-white">
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.8}
                    ease="power3.out"
                    initialOpacity={0}
                    scale={0.1}
                    threshold={0.1}
                    delay={0.05}
                >
                    <h3 className="text-2xl font-bold mb-12">Sobre mí</h3>
                </AnimatedContent>

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.8}
                    ease="power3.out"
                    initialOpacity={0}
                    scale={0.1}
                    threshold={0.1}
                    delay={1}
                >
                    <p className="text-justify text-lg">
                        Me apasiona el desarrollo web, las interfaces de usuario, las bases de datos y el manejo de la información.
                        <br />
                        <br />
                        <br />
                    </p>
                </AnimatedContent>

                <AnimatedContent
                    distance={150}
                    direction="horizontal"
                    reverse={false}
                    duration={1.8}
                    ease="power3.out"
                    initialOpacity={0}
                    scale={0.1}
                    threshold={0.1}
                    delay={2}
                >
                    <p className="text-justify text-lg">
                        Mi objetivo en cada proyecto es diseñar y desarrollar soluciones innovadoras que aporten valor a empresas y usuarios, combinando creatividad y tecnología.
                    </p>
                </AnimatedContent>
            </section>

            {/* HABILIDADES */}
            <section id="skills" className="bg-gray-100 pt-24 px-6">
                <div className="w-full mx-auto ">
                    <h3 className="text-2xl font-bold mb-2">Habilidades y tecnologías</h3>
                    <div style={{ height: '400px', position: 'relative', bottom: '50px' }}>
                        <CircularGallery bend={1} textColor="#aaaaa" borderRadius={0.05} scrollEase={0.2} />
                    </div>
                </div>
            </section>

            {/* PROYECTOS */}
            <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Proyectos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Casa Xavier */}
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.5}
                        ease="power3.out"
                        initialOpacity={0}
                        scale={0.1}
                        threshold={0.1}
                        delay={0.05}
                    >
                        <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                            <div className="bg-gray-200 h-40 flex items-center justify-center">
                                <img
                                    src="/images/casaxavier/dashboard.PNG"
                                    alt="Casa Xavier"
                                    className="h-40 w-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-2">Casa Xavier</h4>
                                <p className="text-sm text-gray-600 mb-4 text-justify w-11/12">
                                    Sistema gestor informativo con galería y detalles de productos. Desarrollado con PHP y Laravel.
                                </p>
                                <div className="text-end w-10/12 mx-auto">
                                    <a
                                        href="/detalle-casa-xavier"
                                        className="text-sm px-3 py-1 rounded bg-indigo-600 text-white hover:bg-blue-700"
                                    >
                                        Ver más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>

                    {/* Radical Boards */}
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.5}
                        ease="power3.out"
                        initialOpacity={0}
                        scale={0.1}
                        threshold={0.1}
                        delay={0.05}
                    >
                        <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                            <div className="bg-gray-200 h-40 flex items-center justify-center">
                                <img
                                    src="/images/tiendaSkate/store.png"
                                    alt="Tienda Online"
                                    className="h-40 w-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-2">Radical Boards</h4>
                                <p className="text-sm text-gray-600 mb-4 text-justify w-11/12">
                                    Diseño de E-commerce con gestión de productos, panel admin. Desarrollado con PHP y Laravel.
                                </p>
                                <div className="text-end w-10/12 mx-auto">
                                    <a
                                        href="/detalle-radical-boards"
                                        className="text-sm px-3 py-1 rounded bg-indigo-600 text-white hover:bg-blue-700"
                                    >
                                        Ver más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>

                    {/* Dental Art */}
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.5}
                        ease="power3.out"
                        initialOpacity={0}
                        scale={0.1}
                        threshold={0.1}
                        delay={0.05}
                    >
                        <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                            <div className="bg-gray-200 h-40 flex items-center justify-center">
                                <img
                                    src="/images/clinicaDental/appointments.png"
                                    alt="Gestor de Citas"
                                    className="h-40 w-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-2">Dental Art</h4>
                                <p className="text-sm text-gray-600 mb-4 text-justify w-11/12">
                                    Aplicación PWA para clínicas dentales con horarios, pacientes y servicios. Desarrollado con React y Tailwind.
                                </p>
                                <div className="text-end w-10/12 mx-auto">
                                    <a
                                        href="/detalle-clinica-dental"
                                        className="text-sm px-3 py-1 rounded bg-indigo-600 text-white hover:bg-blue-700"
                                    >
                                        Ver más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>

                    {/* Epos Comercializadora */}
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.5}
                        ease="power3.out"
                        initialOpacity={0}
                        scale={0.1}
                        threshold={0.1}
                        delay={0.05}
                    >
                        <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                            <div className="bg-gray-200 h-40 flex items-center justify-center">
                                <img
                                    src="/images/tiendaepos/store.png"
                                    alt="Proyecto tornillos"
                                    className="h-40 w-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-2">Epos comercializadora</h4>
                                <p className="text-sm text-gray-600 mb-4 text-justify w-11/12">
                                    Diseño de interfaz para un E-commerce con giro de birlos y tornillos automotrices.
                                </p>
                                <div className="text-end w-10/12 mx-auto">
                                    <a
                                        href="/detalle-tienda-epos"
                                        className="text-sm px-3 py-1 rounded bg-indigo-600 text-white hover:bg-blue-700"
                                    >
                                        Ver más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>

            {/* CONTACTO */}
            <section id="contact" className="bg-gray-50 py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">Contacto</h3>
                    <p>¿Quiere un sitio web para su negocio?</p>
                    <br />
                    <p>¿Busca atraer clientes con su página?</p>
                    <br />
                    <p>Escríbame para conocer sus necesidades y potenciar su presencia en internet.</p>
                    <br />

                    {/* FORMULARIO */}
                    <form
                        action="https://formsubmit.co/ricardolegaspi483@gmail.com"
                        method="POST"
                        className="grid gap-4"
                    >
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            required
                            className="p-3 border border-indigo-500 rounded bg-white placeholder-indigo-500"
                        />
                        <input
                            type="email"
                            name="correo"
                            placeholder="Correo"
                            required
                            className="p-3 border border-indigo-500 rounded bg-white placeholder-indigo-500"
                        />
                        <textarea
                            name="mensaje"
                            placeholder="Mensaje"
                            rows={4}
                            required
                            className="p-3 border border-indigo-500 rounded bg-white placeholder-indigo-500"
                        />

                        {/* Configuración opcional */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://tu-dominio.com/gracias" />

                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </section>


            {/* BOTÓN DE WHATSAPP (aparece después del scroll) */}
            <WhatsAppButton />

            {/* FOOTER */}
            <footer className="text-center py-6 text-sm text-gray-500 border-t">
                © {new Date().getFullYear()} Portafolio - Ricardo Legaspi
            </footer>
        </div>
    );
}
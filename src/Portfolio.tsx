import { useState, useEffect } from "react";

export default function Portfolio() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const links = [
        { name: "Sobre mí", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ];

    // Detectar scroll para navbar móvil
    useEffect(() => {
        const handleScroll = () => {
            setShowMobileNavbar(window.scrollY > 800);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="font-sans text-gray-800">
            {/* NAVBAR desktop */}
            <header className="hidden lg:flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-50">
                <h1 className="text-xl font-bold">Mi Portafolio</h1>
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
                className={`fixed lg:hidden top-0 left-0 w-full flex justify-between items-center p-4 shadow-md bg-white z-50 transition-transform duration-500 ${showMobileNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <h1 className="text-xl font-bold">Mi Portafolio</h1>
                <button className="text-white focus:outline-none" onClick={() => setSidebarOpen(true)}>
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>

            {/* SIDEBAR móvil */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="font-bold text-lg">Menú</h2>
                    <button onClick={() => setSidebarOpen(false)} className="text-gray-800 focus:outline-none">
                        ✖
                    </button>
                </div>
                <nav className="flex flex-col mt-4 space-y-2 px-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-blue-600"
                            onClick={() => setSidebarOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-600 text-white">
                <h2 className="text-3xl py-64">¡Hola mundo!</h2>
                <h2 className="text-2xl font-semibold mb-12 mt-16 text-center">Soy Ricardo Legaspi</h2>
                <p className="text-xl font-bold text-center w-4/5 mb-32">
                    Ingeniero en Tecnologías de la Información
                </p>
                <a
                    href="#projects"
                    className="bg-white text-blue-600 px-6 py-2 mb-16 rounded-full font-semibold shadow hover:bg-gray-100"
                >
                    Ver proyectos
                </a>
            </section>

            {/* SOBRE MI */}
            <section id="about" className="max-w-4xl mx-auto py-32 px-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Sobre mí</h3>
                <p className="text-justify text-lg">
                    Me apasiona el desarrollo web, las interfaces de usuario, las bases de datos y el manejo de la información.
                    <br />
                    <br />
                    Mi objetivo en cada proyecto es diseñar y desarrollar soluciones innovadoras que aporten valor a empresas y usuarios, combinando creatividad y tecnología.
                </p>
            </section>

            {/* HABILIDADES */}
            <section id="skills" className="bg-gray-50 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">Habilidades y tecnologías</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
                        {[
                            "HTML", "CSS", "Bootstrap", "PHP", "Laravel", "Tailwind", "React", "MySQL", "WordPress", "Git/GitHub",
                        ].map((tech) => (
                            <div key={tech} className="p-4 bg-white rounded-xl shadow hover:shadow-lg">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROYECTOS */}
            <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Proyectos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Casa Xavier */}
                    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                        <div className="bg-gray-200 h-40 flex items-center justify-center">
                            <img
                                src="/images/casaxavier/dashboard.png"
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
                                    className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Radical Boards */}
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
                                    className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Dental Art */}
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
                                    className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Epos Comercializadora */}
                    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                        <div className="bg-gray-200 h-40 flex items-center justify-center">
                            <img
                                src="/images/portafolio/preview.png"
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
                                    href="/"
                                    className="text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACTO */}
            <section id="contact" className="bg-gray-50 py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6">Contacto</h3>
                    <form className="grid gap-4">
                        <input type="text" placeholder="Nombre" className="p-3 border rounded" />
                        <input type="email" placeholder="Correo" className="p-3 border rounded" />
                        <textarea placeholder="Mensaje" rows={4} className="p-3 border rounded" />
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="text-center py-6 text-sm text-gray-500 border-t">
                © {new Date().getFullYear()} Portafolio - Ricardo Legaspi
            </footer>
        </div>
    );
}

export default function DetalleCasaXavier() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-gradient-to-b from-blue-900 to-blue-500 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">Casa Xavier</h1>
                    <p className="text-lg text-justify">
                        Tienda online especializada en plumas fuente y accesorios de escritura de alta calidad.
                        Diseño moderno y experiencia de usuario optimizada.
                    </p>
                </div>
            </div>

            {/* Sección de imágenes */}
            <section className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Imagenes del proyecto</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <img
                        src="/images/casaXavier/dashboard.png"
                        alt="Dashboard principal Casa Xavier"
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="/images/casaXavier/employeermanager.png"
                        alt="Detalle producto"
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="/images/casaXavier/inventarioview.png"
                        alt="Seccion inventario"
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="/images/casaXavier/registermodal.png"
                        alt="Formulario de contacto"
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </section>

            {/* Descripción y detalles */}
            <section className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-6 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Detalles del proyecto</h2>
                    <p className="text-gray-700">
                        Casa Xavier es una tienda pensada para los amantes de la escritura fina.
                        El proyecto incluye:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Catálogo de productos.</li>
                        <li>Formulario de contacto.</li>
                        <li>Registro de personal.</li>
                        <li>Diseño responsivo.</li>
                    </ul>

                    {/* Tecnologías */}
                    <div >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Tecnologías usadas</h3>
                        <div className="flex flex-wrap gap-2 mb-24">
                            {["PHP", "Laravel", "MySQL", "HTML", "CSS"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Boton inicio */}
                    <div className="text-center">
                        <a
                            href="/"
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:text-white transition-colors"
                        >
                            Volver al inicio
                        </a>

                    </div>
                </div>
            </section>

            {/* Footer simple */}
            <footer className="text-center py-6 text-gray-500 border-t mt-12">
                © {new Date().getFullYear()} Portafolio - Ricardo Legaspi
            </footer>
        </div>
    );
}

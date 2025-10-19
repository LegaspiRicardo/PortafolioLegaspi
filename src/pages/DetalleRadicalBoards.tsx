export default function DetalleRadicalBoards() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-gradient-to-b from-sky-600 to-rose-200 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">Radical Boards</h1>
                    <p className="text-lg text-justify">
                        Radical Boards es una tienda online especializada en skates, tablas, accesorios y ropa urbana para skaters.
                        Ofrece un catálogo completo, con diseño moderno, experiencia de usuario optimizada y responsive para móviles y escritorio.
                    </p>
                </div>
            </div>

            {/* Sección de imágenes */}
            <section className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Imagenes del proyecto</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <img
                        src="./public/images/tiendaSkate/Home desktop.png"
                        alt="Pagina home tienda skate"
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="./public/images/tiendaSkate/Store.png"
                        alt="Tienda skate"
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="./public/images/tiendaSkate/Events.png"
                        alt="Seccion eventos"
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src="./public/images/tiendaSkate/foro.png"
                        alt="Sección foro"
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </section>

            {/* Descripción y detalles */}
            <section className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-6 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Detalles del proyecto</h2>
                    <p className="text-gray-700">
                        Radical Boards es un e-commerce pensado para skaters, con las siguientes funcionalidades:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Catálogo completo de tablas, accesorios y ropa urbana.</li>
                        <li>Filtros por categoría.</li>
                        <li>Página de detalle de producto con imágenes, descripción y precio.</li>
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

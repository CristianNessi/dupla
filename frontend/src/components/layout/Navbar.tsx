export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="text-2xl font-bold">
                    Dupla
                </div>

                <nav className="hidden gap-6 md:flex">
                    <a href="#" className="hover:text-gray-600">
                        Buscar profesionales
                    </a>

                    <a href="#" className="hover:text-gray-600">
                        Publicar aviso
                    </a>

                    <a href="#" className="hover:text-gray-600">
                        Cómo funciona
                    </a>
                </nav>

                <button className="rounded-xl bg-black px-4 py-2 text-white">
                    Ingresar
                </button>
            </div>
        </header>
    );
}
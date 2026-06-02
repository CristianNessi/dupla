import SearchBar from "./SearchBar";

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-white">
            <div className="mx-auto max-w-7xl px-6 py-24">
                <div className="max-w-3xl">

                    <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                        Profesionales verificados
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                        Encontrá el profesional ideal para tu trabajo
                    </h1>

                    <p className="mt-6 text-lg text-slate-600">
                        Compará perfiles, reseñas y experiencias reales.
                        Conectate con plomeros, electricistas, gasistas,
                        pintores y más profesionales de confianza en tu zona.
                    </p>

                    <div className="mt-10">
                        <SearchBar />
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="rounded-full border px-4 py-2 text-sm">
                            Plomeros
                        </span>

                        <span className="rounded-full border px-4 py-2 text-sm">
                            Electricistas
                        </span>

                        <span className="rounded-full border px-4 py-2 text-sm">
                            Gasistas
                        </span>

                        <span className="rounded-full border px-4 py-2 text-sm">
                            Pintores
                        </span>

                        <span className="rounded-full border px-4 py-2 text-sm">
                            Jardineros
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
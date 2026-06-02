export default function SearchBar() {
    return (
        <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-xl md:flex-row">

            <input
                type="text"
                placeholder="¿Qué profesional necesitás?"
                className="flex-1 rounded-xl border border-slate-300 p-3"
            />

            <input
                type="text"
                placeholder="Zona Norte"
                className="rounded-xl border border-slate-300 p-3"
            />

            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                Buscar
            </button>

        </div>
    );
}
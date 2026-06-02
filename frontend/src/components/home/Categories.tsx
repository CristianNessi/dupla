const categories = [
    "Plomeros",
    "Electricistas",
    "Gasistas",
    "Pintores",
    "Albañiles",
    "Jardineros",
];

export default function Categories() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="mb-8 text-3xl font-bold">
                Oficios más buscados
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
                {categories.map((category) => (
                    <div
                        key={category}
                        className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
                    >
                        <h3 className="font-semibold">{category}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
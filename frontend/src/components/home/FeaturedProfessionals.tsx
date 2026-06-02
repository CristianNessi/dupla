const professionals = [
    {
        name: "Juan Pérez",
        profession: "Plomero",
        rating: 4.9,
    },
    {
        name: "Carlos Gómez",
        profession: "Electricista",
        rating: 4.8,
    },
    {
        name: "Martín López",
        profession: "Gasista",
        rating: 5.0,
    },
];

export default function FeaturedProfessionals() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-8 text-3xl font-bold">
                    Profesionales destacados
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {professionals.map((professional) => (
                        <div
                            key={professional.name}
                            className="rounded-2xl bg-white p-6 shadow-sm"
                        >
                            <div className="mb-4 h-20 w-20 rounded-full bg-gray-200" />

                            <h3 className="font-semibold">
                                {professional.name}
                            </h3>

                            <p className="text-gray-600">
                                {professional.profession}
                            </p>

                            <p className="mt-2">
                                ⭐ {professional.rating}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
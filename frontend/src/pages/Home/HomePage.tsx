import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProfessionals from "../../components/home/FeaturedProfessionals";

export default function HomePage() {
    return (
        <>
            <Navbar />

            <Hero />

            <Categories />

            <FeaturedProfessionals />
        </>
    );
}
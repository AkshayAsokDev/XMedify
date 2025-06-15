import Navbar from "../../Components/Navbar/Navbar"
import Hero from "../../Components/Hero/Hero"
import Specialization from "../../Components/Specialization/Specialization"
import LatestNews from "../../Components/LatestNews/LatestNews"
import Faq from "../../Components/FAQ/Faq"

export default function Home() {


    return (
        <div>
            {/* <Navbar home /> */}
            <Hero />
            <Specialization />
            <LatestNews />
            <Faq />
        </div>
    )
}
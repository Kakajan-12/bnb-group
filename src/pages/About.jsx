import Hero from "./Hero.jsx";
import Counter from "../components/About/Counter.jsx";
import AboutSection from "../components/About/AboutSection.jsx";
import Partners from "../components/Partners.jsx";
import Contacts from "../components/Contacts.jsx";

const About = () => {
    return (
        <>
            <Hero/>
            <Counter/>
            <AboutSection/>
            <Partners/>
            <Contacts/>
        </>
    )
}
export default About
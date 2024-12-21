import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Partners from "./components/Partners.jsx";
import Products from "./components/Products.jsx";
import Implementers from "./components/Implementers.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'

const App = () => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <ScrollEffect offset={200} duration={1} animateOut={true}>
            <About/>
            </ScrollEffect>
            <ScrollEffect offset={200} duration={1} animateOut={true}>
            <Partners/>
            </ScrollEffect>
            <ScrollEffect offset={200} duration={1} animateOut={true}>
                <Products/>
            </ScrollEffect>
            <ScrollEffect offset={200} duration={1} animateOut={true}>
            <Implementers/>
            </ScrollEffect>
            <ScrollEffect offset={200} duration={1} animateOut={true}>
            <Contacts/>
            </ScrollEffect>
            <Footer/>
        </>)
}

export default App
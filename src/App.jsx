import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Partners from "./components/Partners.jsx";
import Products from "./components/Products/Products.jsx";
import Implementers from "./pages/Implementers.jsx";
import Contacts from "./components/Contacts.jsx";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/partners" element={<Partners/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="/implementers" element={<Implementers/>} />
                <Route path="/contacts" element={<Contacts/>} />
            </Routes>
            <Footer/>
        </Router>)
}

export default App
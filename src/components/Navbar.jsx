import {Menu, X} from 'lucide-react'
import {useState} from 'react'
import logo from '../assets/bot_logo.png';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

import enFlag from '../assets/english.webp';
import ruFlag from '../assets/russian.webp';
import tkFlag from '../assets/turkmen.png';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(!isOpen);
    };

    const {t, i18n} = useTranslation();

    const [menu, setMenu] = useState("menu")
    return (
        <nav className="sticky top-0 z-10 bg-white border-b border-neutral-700/80 py-4 bg-color text-white">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <Link to={"/"} onClick={() => setMenu("home")} className="flex items-center flex-shrink-0">
                        <img src={logo} alt="logo" className="w-16 h-16 mr-2"/>
                        <span className="text-xl tracking-tight">{t("slogan")}</span>
                    </Link>
                    <ul className="hidden xl:flex ml-14 space-x-12">
                        <li className="text-lg cursor-pointer">
                            <Link to={"/about"} onClick={() => setMenu("about")}
                                  className={menu === "about" ? "active" : ""}>{t("about")}</Link>
                        </li>
                        {/*<li className="text-lg cursor-pointer">*/}
                        {/*    <Link to={"/partners"} onClick={()=>setMenu("partners")} className={menu === "partners"?"active":""}>{t('partners')}</Link>*/}
                        {/*</li>*/}
                        <li className="text-lg cursor-pointer">
                            <Link to={"products"} onClick={() => setMenu("products")}
                                  className={menu === "products" ? "active" : ""}>{t('products')}</Link>
                        </li>
                        <li className="text-lg cursor-pointer">
                            <Link to={"/implementers"} onClick={() => setMenu("implementers")}
                                  className={menu === "implementers" ? "active" : ""}>{t('implementers')}</Link>
                        </li>
                        <li className="text-lg cursor-pointer">
                            <Link to={"/contacts"} onClick={() => setMenu("contacts")}
                                  className={menu === "contacts" ? "active" : ""}>{t('contacts')}</Link>
                        </li>
                    </ul>
                    <div className="hidden xl:flex justify-center space-x-2 items-center">
                        <button onClick={() => changeLanguage('en')}>
                            <img src={enFlag} alt="English" style={{width: '30px', height: '20px'}}/>
                        </button>
                        <button onClick={() => changeLanguage('ru')}>
                            <img src={ruFlag} alt="Русский" style={{width: '30px', height: '20px'}}/>
                        </button>
                        <button onClick={() => changeLanguage('tk')}>
                            <img src={tkFlag} alt="Türkmen" style={{width: '30px', height: '20px'}}/>
                        </button>
                    </div>
                    <div className="xl:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {isOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div
                        className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center xl:hidden bg-color">
                        <ul className="mb-5 text-center">
                            <li className="text-lg mb-2">
                                <a onClick={() => setMenu("about")}
                                   className={menu === "about" ? "active" : ""}>{t("about")}</a>
                            </li>
                            <li className="text-lg mb-2">
                                <a onClick={() => setMenu("partners")}
                                   className={menu === "partners" ? "active" : ""}>{t('partners')}</a>
                            </li>
                            <li className="text-lg mb-2">
                                <a onClick={() => setMenu("products")}
                                   className={menu === "products" ? "active" : ""}>{t('products')}</a>
                            </li>
                            <li className="text-lg mb-2">
                                <a onClick={() => setMenu("implementers")}
                                   className={menu === "implementers" ? "active" : ""}>{t('implementers')}</a>
                            </li>
                            <li className="text-lg mb-2">
                                <a onClick={() => setMenu("contacts")}
                                   className={menu === "contacts" ? "active" : ""}>{t('contacts')}</a>
                            </li>
                        </ul>
                        <div className="flex space-x-6">
                            <button onClick={() => changeLanguage('en')}>
                                <img src={enFlag} alt="English" style={{width: '30px', height: '20px'}}/>
                            </button>
                            <button onClick={() => changeLanguage('ru')}>
                                <img src={ruFlag} alt="Русский" style={{width: '30px', height: '20px'}}/>
                            </button>
                            <button onClick={() => changeLanguage('tk')}>
                                <img src={tkFlag} alt="Türkmen" style={{width: '30px', height: '20px'}}/>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
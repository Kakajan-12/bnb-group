import {Menu, X} from 'lucide-react'
import {useState} from 'react'
import logo from '../assets/logo.png';
import {useTranslation} from 'react-i18next';

import enFlag from '../assets/english.webp';
import ruFlag from '../assets/russian.webp';
import tkFlag from '../assets/turkmen.png';

// const lngs = {
//     en: {nativeName: 'EN'},
//     ru: {nativeName: 'RU'},
//     tk: {nativeName: 'TM'}
// };

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

    return (
        <nav className="sticky top-0 z-10 bg-white border-b border-neutral-700/80 py-4">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <a href="#main" className="flex items-center flex-shrink-0">
                        <img src={logo} alt="logo" className="w-16 h-16 mr-2"/>
                        <span className="text-xl tracking-tight">{t("slogan")}</span>
                    </a>
                    <ul className="hidden xl:flex ml-14 space-x-12">
                        <li className="text-lg">
                            <a href="#about">{t("about")}</a>
                        </li>
                        <li className="text-lg">
                            <a href='#partners'>{t('partners')}</a>
                        </li>
                        <li className="text-lg">
                            <a href='#products'>{t('products')}</a>
                        </li>
                        <li className="text-lg">
                            <a href='#implementers'>{t('implementers')}</a>
                        </li>
                        <li className="text-lg">
                            <a href='#contacts'>{t('contacts')}</a>
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
                        className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center xl:hidden">
                        <ul className="mb-5 text-center">
                            <li className="text-lg mb-2">
                                <a href="#about">{t("about")}</a>
                            </li>
                            <li className="text-lg mb-2">
                                <a href='#partners'>{t('partners')}</a>
                            </li>
                            <li className="text-lg mb-2">
                                <a href='#products'>{t('products')}</a>
                            </li>
                            <li className="text-lg mb-2">
                                <a href='#implementers'>{t('implementers')}</a>
                            </li>
                            <li className="text-lg mb-2">
                                <a href='#contacts'>{t('contacts')}</a>
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
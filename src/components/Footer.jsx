import Logo from "../assets/bot_logo.png"
import {SocialIcon} from "react-social-icons";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="max-w-96 md:max-w-32 flex items-center mb-8 md:mb-0">
                        <img src={Logo} alt={Logo} className="w-24 md:w-full"/>
                        <h4 className="text-3xl ml-4">{t("slogan")}</h4>
                    </div>
                    <div className="grid gap-4 grid-cols-5">
                        <SocialIcon network="telegram" url="#" bgColor="rgb(31 41 55)"
                                    className="border-2 border-white rounded-full"/>
                        <SocialIcon network="instagram" url="www.vimeo.com" bgColor="rgb(31 41 55)"
                                    className="border-2 border-white rounded-full"/>
                        <SocialIcon network="tiktok" url="www.vimeo.com" bgColor="rgb(31 41 55)"
                                    className="border-2 border-white rounded-full"/>
                        <SocialIcon network="x" url="www.vimeo.com" bgColor="rgb(31 41 55)"
                                    className="border-2 border-white rounded-full"/>
                        <SocialIcon network="line.me" url="www.vimeo.com" bgColor="rgb(31 41 55)"
                                    className="border-2 border-white rounded-full"/>
                    </div>

                </div>
                <div className="text-center mt-6">
                    <p className="text-sm">&copy; {new Date().getFullYear()} BNB Group. {t("footer_copyright")}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import Logo from "../assets/bot_logo.png"
import {SocialIcon} from "react-social-icons";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Footer = () => {
    const {t, i18n} = useTranslation();
    return (
        <footer className="bg-color text-white py-6">
            <div className="container mx-auto px-4">
                <div className="max-w-96 md:max-w-32 flex items-center mb-8 md:mb-0">
                    <img src={Logo} alt={Logo} className="w-24 md:w-full"/>
                    <h4 className="text-3xl ml-4">{t("slogan")}</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="pt-10">
                        <div className="font-semibold text-lg"><a href="tel:+99312226602">+99312226602</a></div>
                        <div className="font-semibold text-lg"><a href="tel:+99362697306">+99362697306</a></div>
                        {i18n.language === "tk" ?
                            <div
                                className="py-5 text-advantages text-sm">{t("footer_monday")} - {t("footer_friday")} 09:00{t("footer_from")} 18:00 {t("footer_to")}</div> :
                            <div
                                className="py-5 text-advantages text-sm">{t("footer_monday")} - {t("footer_friday")} {t("footer_from")} 09:00 {t("footer_to")} 18:00</div>}
                        <div className="font-semibold text-lg"><a
                            href="mailto:info@bnbgroup.biz">info@bnbgroup.biz</a></div>
                        <div
                            className="py-5 text-advantages text-sm">{t("contact_address")}</div>
                    </div>
                    <div className="">
                        <h4 className="text-2xl font-semibold mb-6">{t("footer_links")}</h4>
                        <ul>
                            <li className="text-lg cursor-pointer mb-2">
                                <Link to={"/about"}>{t("about")}</Link>
                            </li>
                            <li className="text-lg cursor-pointer mb-2">
                                <Link to={"products"}>{t('products')}</Link>
                            </li>
                            <li className="text-lg cursor-pointer mb-2">
                                <Link to={"/implementers"}>{t('implementers')}</Link>
                            </li>
                            <li className="text-lg cursor-pointer mb-2">
                                <Link to={"/contacts"}>{t('contacts')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h4 className="text-2xl font-semibold mb-6">{t("footer_social")}</h4>
                        <div className="flex space-x-3 justify-center">
                            <SocialIcon network="telegram" url="#" bgColor="#f04c4c"
                                        className="rounded-full"/>
                            <SocialIcon network="instagram" url="www.vimeo.com" bgColor="#f04c4c"
                                        className="rounded-full"/>
                            <SocialIcon network="tiktok" url="www.vimeo.com" bgColor="#f04c4c"
                                        className="rounded-full"/>
                            <SocialIcon network="x" url="www.vimeo.com" bgColor="#f04c4c"
                                        className="rounded-full"/>
                            <SocialIcon network="line.me" url="www.vimeo.com" bgColor="#f04c4c"
                                        className="rounded-full"/>
                        </div>
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
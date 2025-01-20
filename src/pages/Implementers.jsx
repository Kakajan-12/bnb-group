import {useTranslation} from 'react-i18next';
import card1 from "../assets/cards/slide-1.jpg"
import card2 from "../assets/cards/slide-2.jpg"
import card3 from "../assets/cards/slide-3.jpg"
import card4 from "../assets/cards/slide-4.jpg"
import card5 from "../assets/cards/slide-5.jpg"

const Implementers=() => {
    const {t} = useTranslation();

    return(
        <div className="py-12 section">
            <div className="container mx-auto px-4">
                <h4 className="text-4xl lg:text-7xl mb-6 lg:mb-24 font-bold text-title">{t("implementers")}</h4>
                <div className="text-md lg:text-lg">{t("implementers_text")}</div>
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 py-10">
                    <div className="w-full h-96 rounded-xl relative group"
                         style={{backgroundImage: `url(${card1})`, backgroundSize: "cover"}}>
                        <div className="absolute inset-0 rounded-xl" style={{background: "rgba(0,0,0,0.5)"}}></div>
                        <div
                            className="absolute bottom-10 md:-bottom-32 left-10 right-10 text-white text-3xl md:text-4xl group-hover:bottom-10 transition-all ease-in-out delay-200">{t("card1")}
                        </div>
                    </div>
                    <div className="w-full h-96 rounded-xl relative group"
                         style={{backgroundImage: `url(${card2})`, backgroundSize: "cover"}}>
                        <div className="absolute inset-0 rounded-xl" style={{background: "rgba(0,0,0,0.5)"}}></div>
                        <div
                            className="absolute bottom-10 md:-bottom-32 left-10 right-10 text-white text-3xl md:text-4xl group-hover:bottom-10 transition-all ease-in-out delay-200">{t("card2")}
                        </div>
                    </div>
                    <div className="w-full h-96 rounded-xl relative group"
                         style={{backgroundImage: `url(${card3})`, backgroundSize: "cover"}}>
                        <div className="absolute inset-0 rounded-xl" style={{background: "rgba(0,0,0,0.5)"}}></div>
                        <div
                            className="absolute bottom-10 md:-bottom-32 left-10 right-10 text-white text-3xl md:text-4xl group-hover:bottom-10 transition-all ease-in-out delay-200">{t("card3")}
                        </div>
                    </div>
                    <div className="w-full h-96 rounded-xl relative group"
                         style={{backgroundImage: `url(${card4})`, backgroundSize: "cover"}}>
                        <div className="absolute inset-0 rounded-xl" style={{background: "rgba(0,0,0,0.5)"}}></div>
                        <div
                            className="absolute bottom-10 md:-bottom-32 left-10 right-10 text-white text-3xl md:text-4xl group-hover:bottom-10 transition-all ease-in-out delay-200">{t("card4")}
                        </div>
                    </div>
                    <div className="w-full h-96 rounded-xl relative group col-span-1 lg:col-span-2"
                         style={{backgroundImage: `url(${card5})`, backgroundSize: "cover"}}>
                        <div className="absolute inset-0 rounded-xl" style={{background: "rgba(0,0,0,0.5)"}}></div>
                        <div
                            className="absolute bottom-10 md:-bottom-32 left-10 right-10 text-white text-3xl md:text-4xl group-hover:bottom-10 transition-all ease-in-out delay-200">{t("card5")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Implementers;
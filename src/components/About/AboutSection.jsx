import about from "../../assets/about_img.jpg";
import { useTranslation} from 'react-i18next';

const AboutSection = () => {
    const { t} = useTranslation();
    return (
        <div className="py-12 section">
            <div className="container mx-auto h-full px-4">
                <div className="flex justify-center items-start flex-col h-full mb-4">
                    <div className="text-3xl lg:text-6xl mb-6 lg:mb-12 font-bold">{t("about_company")}</div>
                    <div className="flex justify-center items-center w-full flex-col-reverse xl:flex-row">
                        <div className="mr-2 w-full xl:w-3/5">
                            <div className="text-md lg:text-lg mb-4">
                                {t("about_text")}
                            </div>
                        </div>
                        <div className="w-full xl:w-2/5 mb-5 xl:mb-0">
                            <img src={about} alt={about}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/cards/slide-1.jpg';
import { Link } from "react-router-dom";

const Hero = () => {
    const { t} = useTranslation();

    return (
        <div className="h-screen bg-amber-500">
            <div className="flex items-end h-screen max-h-screen max-w-screen overflow-hidden relative">
                <div className="h-full overflow-hidden absolute w-screen left-0 top-0" style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "center"
                }}>
                    <div className="absolute inset-0" style={{backgroundColor: "rgba(0,0,0,0.6)"}}>
                        <div
                            className="max-w-7xl absolute inset-2/4 text-4xl sm:text-6xl md:text-7xl lg:text-9xl w-full -mt-14 sm:-mt-24 lg:-mt-48 text-white"
                            style={{transform: "translate(-25%)"}}>
                            BNB Group
                        </div>

                        <div className="absolute inset-2/4 text-xl sm:text-2xl lg:text-4xl w-full text-white">
                            {t("slogan")}
                        </div>
                        <Link to={'/products'} className="absolute text-xl sm:text-2xl lg:text-3xl text-white bottom-44 w-fit btn-color rounded-md px-16 py-3 uppercase" style={{transform: "translateX(-50%)", left:"50%"}}>
                            {t('products')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
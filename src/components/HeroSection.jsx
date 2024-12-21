import video from '../assets/back_2k_30.mp4';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t} = useTranslation();
    return (
        <div id="main" className="relative">
            <div className="flex items-end h-screen max-h-screen max-w-screen overflow-hidden relative">
                <div className="h-full overflow-hidden absolute w-screen left-0 top-0">
                    <video src={video} className="h-full left-0 object-cover absolute top-0 w-full video" autoPlay loop muted></video>
                </div>
                <div className="max-w-7xl absolute inset-2/4 text-4xl sm:text-6xl md:text-7xl lg:text-9xl w-full -mt-14 sm:-mt-24 lg:-mt-48 text-white" style={{transform: "translate(-25%)"}}>
                    BNB Group
                </div>

                <div className="absolute inset-2/4 text-xl sm:text-2xl lg:text-4xl w-full text-white">
                    {t("slogan")}
                </div>
            </div>
        </div>
    )
}

export default HeroSection
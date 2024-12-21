import about from '../assets/about_img.jpg';
import { useTranslation} from 'react-i18next';
import {useEffect, useState} from "react";
import icon1 from'../assets/counter/slide-ico1.png'
import icon2 from'../assets/counter/slide-ico2-300x211.png'
import icon3 from'../assets/counter/slide-ico3.png'
import icon4 from'../assets/counter/slide-ico4-300x211.png'

const About = () => {
    const { t} = useTranslation();
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(0);

    useEffect(()=>{
        if(counter1<2100){
            const timer = setInterval(() => {
                setCounter1(prevCount => prevCount + 1);
            }, 5); // Count every second

            return () => clearInterval(timer);
        }
    },[counter1])

    useEffect(()=>{
        if(counter2<5500){
            const timer = setInterval(() => {
                setCounter2(prevCount => prevCount + 1);
            }, 1); // Count every second

            return () => clearInterval(timer);
        }
    },[counter2])

    useEffect(()=>{
        if(counter3<3500){
            const timer = setInterval(() => {
                setCounter3(prevCount => prevCount + 1);
            }, 3); // Count every second

            return () => clearInterval(timer);
        }
    },[counter3])

    useEffect(()=>{
        if(counter4<100){
            const timer = setInterval(() => {
                setCounter4(prevCount => prevCount + 1);
            }, 100); // Count every second

            return () => clearInterval(timer);
        }
    },[counter4])

    return (
        <div id="about" className="py-12 section">
            <div className="container mx-auto h-full px-4">
                <div className="flex justify-center items-start flex-col h-full mb-4">
                    <div className="text-4xl lg:text-7xl mb-6 lg:mb-12 font-bold text-title">{t("about_company")}</div>
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
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-8">
                    <div className="flex flex-col items-center">
                        <img src={icon1} alt={icon1}/>
                        <div className="text-8xl font-bold text-orange-500 mt-4">{counter1}</div>
                        <div className="text-xl text-center max-w-56">{t("counter1")}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={icon2} alt={icon2}/>
                        <div className="text-8xl font-bold text-orange-500 mt-4">{counter2}</div>
                        <div className="text-xl text-center max-w-56">{t("counter2")}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={icon3} alt={icon3}/>
                        <div className="text-8xl font-bold text-orange-500 mt-4">{counter3} <span className="text-3xl">{t('kw')}</span></div>
                        <div className="text-xl text-center max-w-56">{t("counter3")}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={icon4} alt={icon4}/>
                        <div className="text-8xl font-bold text-orange-500 mt-4">{counter4} %</div>
                        <div className="text-xl text-center max-w-56">{t("counter4")}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About